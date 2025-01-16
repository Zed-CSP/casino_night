'use client'
import { useEffect } from 'react'
import styles from './FallingCoins.module.css'

export default function FallingCoins() {
    const chipColors = [
        { main: '#e61e25', dark: '#d11920', border: 'white' },  // Red
        { main: '#1a1a1a', dark: '#000000', border: 'white' },  // Black
        { main: '#ffffff', dark: '#e0e0e0', border: '#e0e0e0' },  // White
        { main: '#15803d', dark: '#166534', border: 'white' }   // Darker Green (using green-700 and green-800)
    ]

    useEffect(() => {
        const createCoin = () => {
            const coin = document.createElement('div')
            coin.classList.add(styles.coin)
            
            // Randomly select a color
            const colorIndex = Math.floor(Math.random() * chipColors.length)
            const chipColor = chipColors[colorIndex]
            
            coin.style.left = Math.random() * 100 + 'vw'
            coin.style.animationDuration = Math.random() * 2 + 3 + 's'
            
            const chipHTML = `
                <div class="${styles.chip}">
                <div class="${styles.chipSide} ${styles.front}" 
                    style="background: radial-gradient(circle at center, ${chipColor.main} 0%, ${chipColor.dark} 100%);
                           border-color: ${chipColor.border}">
                </div>
                <div class="${styles.chipSide} ${styles.back}"
                    style="background: radial-gradient(circle at center, ${chipColor.main} 0%, ${chipColor.dark} 100%);
                           border-color: ${chipColor.border}">
                </div>
                ${Array.from({ length: 20 }, (_, i) => {
                    const angle = (i * 18)
                    return `<div class="${styles.edge}" 
                    style="transform: rotateY(90deg) rotateX(${angle}deg) translateZ(60px);
                           background: ${chipColor.main}">
                    </div>`
                }).join('')}
                </div>
            `
            
            coin.innerHTML = chipHTML
            
            document.getElementById('coin-container').appendChild(coin)
            
            setTimeout(() => {
                coin.remove()
            }, parseFloat(coin.style.animationDuration) * 1000)
        }

        // Create coins periodically
        const interval = setInterval(createCoin, 300)
        return () => clearInterval(interval)
    }, [])

  return <div id="coin-container" className={styles.container} />
}
