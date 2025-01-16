'use client'
import { useEffect } from 'react'
import styles from './NightSky.module.css'

export default function NightSky() {
    useEffect(() => {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        let WIDTH, HEIGHT
        let stars = []
        const initStarsPopulation = 80

        function setCanvasSize() {
            WIDTH = document.documentElement.clientWidth
            HEIGHT = document.documentElement.clientHeight
            canvas.setAttribute("width", WIDTH)
            canvas.setAttribute("height", HEIGHT)
        }

        function Star(id, x, y) {
            this.id = id
            this.x = x
            this.y = y
            this.r = Math.floor(Math.random() * 2) + 1
            const alpha = (Math.floor(Math.random() * 100) + 1) / 10 / 2
            this.color = "rgba(255,255,255," + alpha + ")"
        }

        Star.prototype.draw = function() {
            ctx.fillStyle = this.color
            ctx.shadowBlur = this.r * 2
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
            ctx.closePath()
            ctx.fill()
        }

        Star.prototype.move = function() {
            this.y -= .85
            if (this.y <= -10) this.y = HEIGHT + 10
            this.draw()
        }

        function init() {
            ctx.strokeStyle = "white"
            ctx.shadowColor = "white"
            for (let i = 0; i < initStarsPopulation; i++) {
                stars[i] = new Star(i, Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT))
            }
            ctx.shadowBlur = 0
            animate()
        }

        function animate() {
            ctx.clearRect(0, 0, WIDTH, HEIGHT)
            for (let i in stars) {
                stars[i].move()
            }
            requestAnimationFrame(animate)
        }

        setCanvasSize()
        init()

        // Handle window resize
        window.onresize = setCanvasSize
        
        // Cleanup
        return () => {
            window.onresize = null
        }
    }, [])

    return (
        <div className="fixed inset-0 -z-20">
            <canvas id="canvas" className="absolute inset-0 "></canvas>
            <div className={styles.filter}></div>
            <div className={styles.landscape}></div>
        </div>
    )
}