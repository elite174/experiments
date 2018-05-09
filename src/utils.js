export const random = (a, b) => {
    return a + Math.round(Math.random() * (b - a))
}

export const randomX = (floor = 0) => {
    return random(floor, window.innerWidth)
}

export const randomY = (floor = 0) => {
    return random(floor, window.innerHeight)
}

export const px = (number) => {
    return `${number}px`
}

export const throttle = (func, limit = 17) => {
    let inThrottle
    return function () {
        if (!inThrottle) {
            const args = arguments
            const context = this
            func.apply(context, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}

export const Scene = (func, fps = 60, args = []) => {
    let timer = null
    let paused = true
    let time = Math.round(1000 / fps)
    return {
        pause: () => {
            clearInterval(timer)
            paused = true
        },
        play: () => {
            paused = false
            timer = setInterval(() => requestAnimationFrame(() => {
                func(...args)
            }), time)
        },
        isPaused: () => {
            return paused
        },
        setFPS: (fps) => {
            time = 1000 / fps
        },
        destroy: () => {
            timer = null
            paused = null
            time = null
        }
    }
}

export const setStyle = (className, property, value, unit = undefined, initValueAttr = undefined) => {
    let elements = document.getElementsByClassName(className)
    for (let i = 0; i < elements.length; i++) {
        if (initValueAttr !== undefined) {
            elements[i].style[property] = `${parseInt(elements[i].getAttribute(initValueAttr)) + value}${unit}`
        } else {
            if (unit !== undefined) {
                elements[i].style[property] = `${value}${unit}`
            } else {
                elements[i].style[property] = value
            }

        }
    }
}

export const chooseFrom = (variants) => {
    return variants[random(0, variants.length - 1)]
}

export const arr = (initValue, count, term = 1) => {
    let array = []
    let initTerm = term
    if (typeof (initValue) === 'function') {
        for (let i = 0; i < count; i++) {
            array.push(initValue())
        }
    } else {
        for (let i = 0; i < count; i++) {
            array.push(initValue + initTerm)
            initTerm += term
        }
    }
    return array
}
