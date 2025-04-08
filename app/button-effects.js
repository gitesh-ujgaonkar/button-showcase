"use client"

import { useEffect } from "react"

export default function ButtonEffects() {
  useEffect(() => {
    // Magnetic button effect
    const magneticButtons = document.querySelectorAll(".btn-animated-5")

    magneticButtons.forEach((button) => {
      button.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const deltaX = (x - centerX) / 10
        const deltaY = (y - centerY) / 10

        this.style.transform = `translate(${deltaX}px, ${deltaY}px)`
      })

      button.addEventListener("mouseleave", function () {
        this.style.transform = "translate(0, 0)"
      })
    })

    // Add ripple effect to ripple buttons
    const rippleButtons = document.querySelectorAll(".btn-animated-1")

    rippleButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const rect = this.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const ripple = document.createElement("span")
        ripple.className = "ripple"
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`

        this.appendChild(ripple)

        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })

    // Add styles for ripple effect
    const style = document.createElement("style")
    style.textContent = `
      .btn-animated-1 {
        position: relative;
        overflow: hidden;
      }
      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        animation: ripple-effect 0.6s linear;
        transform: scale(0);
        opacity: 1;
      }
      @keyframes ripple-effect {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(2.5);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
  }, [])

  return null
}

