import { Component } from 'inferno'
import './style.css'
import { random, px } from '../../utils';
import Image from './assets/detroit.png'

export default class Detroit extends Component {

    createAnimation = (number) => {
        return `
        @keyframes anim${number}{
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }
        `
    }

    fragmenter = (root, image, options = {
        time: 1000, // time for animation
        countOfFragments: 10, // count of rectangles
        shadows: true, // show shadows
        hideContainer: false, // hide main image
        randomSize: true, // generate random width and height for rectangles
        width: 10, // in px
        height: 17, // in px
        unit: '%'
    }) => {
        const createPieceWrapper = () => {
            let fragmentPieceWrapper = document.createElement('div')
            fragmentPieceWrapper.classList.add('fragment-piece-wrap')
            fragmentPieceWrapper.style.transitionDuration = `${options.time}ms`
            return fragmentPieceWrapper
        }

        const createPiece = () => {
            let piece = [], part1, part2
            part1 = document.createElement('div')
            let top = random(0, 60), left = random(0, 80), width = options.width, height = options.height
            if (options.randomSize) {
                width = random(10, 20)
                height = random(20, 40)
            }
            part1.classList.add('fragment-piece')
            part1.style.clipPath = `polygon(${left}${options.unit} ${top}${options.unit}, ${left}${options.unit} ${top + height}${options.unit}, ${left + width}${options.unit} ${top + height}${options.unit}, ${left + width}${options.unit} ${top}${options.unit})`
            part1.style.backgroundImage = `url(${image})`
            piece.push(part1)
            if (options.shadows) {
                part2 = document.createElement('div')
                part2.classList.add('fragment-shadow')
                part2.style.top = `${top}${options.unit}`
                part2.style.left = `${left}${options.unit}`
                part2.style.width = `${width}${options.unit}`
                part2.style.height = `${height}${options.unit}`
                part2.style.transitionDuration = `${options.time}ms`
                piece.push(part2)
            }
            return piece
        }
        let container = document.createElement('div')
        container.classList.add('fragment-container')
        container.style.transitionDuration = `${options.time}ms`
        container.style.backgroundImage = `url(${image})`
        container.onclick = () => {
            container.classList.toggle('active')
            if (options.hideContainer) {
                container.classList.toggle('hidden')
            }
            let children = container.children
            if (container.classList.contains('active')) {
                for (let i = 0; i < children.length; i++) {
                    children[i].style.transform = `translateZ(${random(50, 100)}px)`
                    children[i].children[0].style.backgroundColor = 'white'
                }
            } else {
                for (let i = 0; i < children.length; i++) {
                    children[i].style.transform = `translateZ(0.0001px)`
                    children[i].children[0].style.backgroundColor = 'initial'
                }
            }
        }
        root.appendChild(container)
        for (let i = 0; i < options.countOfFragments; i++) {
            let wrapper = createPieceWrapper()
            container.appendChild(wrapper)
            for (let el of createPiece(image, options.shadows)) {
                wrapper.appendChild(el)
            }
        }
    }
    drawTriangles = () => {
        let triangles = []
        let count = random(10, 20)
        let triangle
        let animations = ''
        for (let i = 0; i < count; i++) {
            triangle = document.createElement('div')
            triangle.style.borderWidth = px(random(100, 500))
            triangle.style.borderStyle = 'solid'
            triangle.style.position = 'absolute'
            triangle.style.borderBottomColor = 'transparent'
            triangle.style.borderLeftColor = 'transparent'
            triangle.style.borderRightColor = 'transparent'
            triangle.style.borderTopColor = `rgba(0, 0, 0,${random(3, 10) / 100})`
            triangle.style.animationDuration = `${random(1000, 4000)}ms`
            triangle.style.animationName = `anim${i}`
            triangle.style.animationDirection = 'alternate'
            triangle.style.animationIterationCount = 'infinite'
            triangle.style.top = px(random(0, window.innerHeight) - 250)
            triangle.style.left = px(random(0, window.innerWidth) - 250)
            this.triagngleContainer.appendChild(triangle)
            animations += this.createAnimation(i)
        }
        let style = document.createElement('style')
        style.innerHTML = animations
        this.triagngleContainer.appendChild(style)
    }

    componentDidMount() {
        this.drawTriangles()
        this.fragmenter(this.imageContainer, Image)
        setTimeout(() => { this.imageContainer.classList.toggle('active') }, 1000)
    }
    render() {
        return (
            <div className='detroit-container'>
                <div className='triangle-container' ref={triagngleContainer => this.triagngleContainer = triagngleContainer}>
                </div>
                <div className='image-container' ref={imageContainer => this.imageContainer = imageContainer}>
                    <div className='image-caption'>DETR<span className='o'>O</span>IT</div>
                </div>
            </div>
        )
    }
}