/**
 * @param {px} startX
 * @param {px} startY
 * @param {px} radius 
 * @param {px/sec} speed 
 * @param {angle: 0,360} direction 
 */
export function Circle(startX, startY, radius, speed, direction, ctx, canvas) {
    this.radius = radius
    this.speed = speed / 60
    this.direction = direction * 2 * Math.PI / 360
    this.positionX = startX
    this.positionY = startY
    this.ctx = ctx
    this.canvas = canvas

    this.move = (timePassed) => {
        this.positionX = this.positionX + this.speed * Math.cos(this.direction)
        this.positionY = this.positionY + this.speed * Math.sin(this.direction)
        if (this.positionX - this.radius < 0 || this.positionX + this.radius > this.canvas.width) {
            this.direction = Math.PI - this.direction
            return
        }
        if (this.positionY - this.radius < 0 || this.positionY + this.radius > this.canvas.height) {
            this.direction = -this.direction
            return
        }
    }

    this.draw = () => {
        this.ctx.beginPath();
        this.ctx.arc(Math.round(this.positionX), Math.round(this.positionY), this.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

}