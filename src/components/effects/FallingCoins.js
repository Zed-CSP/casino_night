'use client'
import { useEffect } from 'react'
import styles from './FallingCoins.module.css'

export default function FallingCoins() {
    useEffect(() => {
        const createCoin = () => {
        const coin = document.createElement('div')
        coin.classList.add(styles.coin)
      
        coin.style.left = Math.random() * 100 + 'vw'
        coin.style.animationDuration = Math.random() * 2 + 3 + 's'
      
        // Create chip structure with 20 rectangular facets
        const chipHTML = `
            <div class="${styles.chip}">
            <div class="${styles.chipSide} ${styles.front}"></div>
            <div class="${styles.chipSide} ${styles.back}"></div>
            ${Array.from({ length: 20 }, (_, i) => {
                const angle = (i * 18) // 360 / 20 = 18 degrees per facet
                return `<div class="${styles.edge}" 
                style="transform: rotateY(90deg) rotateX(${angle}deg) translateZ(60px)"></div>`
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
