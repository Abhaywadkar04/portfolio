import { useEffect, useRef } from "react"

export default function BackgroundAnimation() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        let animationFrameId

        // Set canvas dimensions
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener("resize", handleResize)
        handleResize()

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 5 + 1
                this.speedX = Math.random() * 3 - 1.5
                this.speedY = Math.random() * 3 - 1.5
                this.color = `hsla(${Math.random() * 60 + 210}, 70%, 60%, 0.3)`
                this.angle = Math.random() * Math.PI * 2
                this.angleSpeed = Math.random() * 0.1 - 0.05
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.x > canvas.width) this.x = 0
                else if (this.x < 0) this.x = canvas.width

                if (this.y > canvas.height) this.y = 0
                else if (this.y < 0) this.y = canvas.height

                this.angle += this.angleSpeed
            }

            draw() {
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()

                // Draw a line from the particle to its previous position
                ctx.strokeStyle = this.color
                ctx.lineWidth = 1
                ctx.beginPath()
                ctx.moveTo(this.x, this.y)
                ctx.lineTo(
                    this.x + Math.cos(this.angle) * this.size,
                    this.y + Math.sin(this.angle) * this.size
                )
                ctx.stroke()
            }
        }

        // Create particles
        const particlesArray = []
        const numberOfParticles = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle())
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update()
                particlesArray[i].draw()
            }

            // Connect particles with lines
            connectParticles()

            animationFrameId = requestAnimationFrame(animate)
        }

        // Connect particles with lines if they are close enough
        function connectParticles() {
            const maxDistance = 150

            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x
                    const dy = particlesArray[a].y - particlesArray[b].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance) {
                        const opacity = 1 - distance / maxDistance
                        ctx.strokeStyle = `hsla(230, 70%, 60%, ${opacity * 0.2})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
                        ctx.stroke()
                    }
                }
            }
        }

        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-50 dark:opacity-30" />
}

