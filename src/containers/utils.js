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

export const setStyle = (className, property, value, unit, initValueAttr = undefined) => {
    let elements = document.getElementsByClassName(className)
    for (let i = 0; i < elements.length; i++) {
        if (initValueAttr !== undefined) {
            elements[i].style[property] = `${parseInt(elements[i].getAttribute(initValueAttr)) + value}${unit}`
        } else {
            elements[i].style[property] = `${value}${unit}`
        }
    }
}

export const chooseFrom = (variants) => {
    return variants[random(0, variants.length - 1)]
}

export const arr = (initValue, count, term = 1) => {
    let array = []
    let initTerm = term
    for (let i = 0; i < count; i++) {
        array.push(initValue + initTerm)
        initTerm += term
    }
    return array
}