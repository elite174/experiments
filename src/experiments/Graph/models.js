/**
 * @param {px} startX
 * @param {px} startY
 * @param {px} radius 
 * @param {px/sec} speed 
 * @param {angle: 0,360} direction 
 */
export const Circle = (startX, startY, radius, speed, direction) => {
    this.radius = radius
    this.speed = speed
    this.direction = direction * Math.PI / 360
    this.positionX = startX
    this.positionY = startY

    move = (timePassed) => {
        this.positionX = this.positionX + this.speed * Math.cos(this.direction)
        this.positionY = this.positionY + this.speed * Math.sin(this.direction)
    }
}