
/**
 * The function sets the styles for every element with className={selector}
 * @param {string} selector 
 * @param {array} propsToAnimate 
 */
export const setStyles = (selector, propsToAnimate) => {
    let elements = document.getElementsByClassName(selector)
    let transformProperty
    for (let el of elements) {
        transformProperty = ''
        for (let prop of propsToAnimate) {
            if (prop.transform) {
                transformProperty += ` ${prop.property}(${prop.value}${prop.unit})`
            } else {
                el.style[prop.property] = `${prop.value}${prop.unit}`
            }
        }
        el.style.transform = transformProperty
    }
}

export function Animation(selector, properties, startComponentState, endComponentState) {
    this.selector = selector
    let newProperties = []
    let time = endComponentState - startComponentState
    for (let property of properties) {
        let newkeyframes = []
        for (let keyFrame of property.keyframes) {
            newkeyframes.push({
                ...keyFrame,
                state: Math.round(startComponentState + keyFrame.state * time / 100)
            })
        }
        newProperties.push({
            property: property.property,
            keyframes: newkeyframes,
            unit: property.unit,
            transform: property.transform,
            animStart: newkeyframes[0].state,
            animEnd: newkeyframes[newkeyframes.length - 1].state
        })
    }
    this.properties = newProperties
}