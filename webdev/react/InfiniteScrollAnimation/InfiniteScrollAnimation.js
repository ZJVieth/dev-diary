import React from 'react'

import * as styles from './ISA.module.css'

const InfiniteScrollAnimation = ({children, duration, reverse = false}) => {
  return (
    <div className={styles.loopSlider} style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className={styles.inner}>
        {children}
        {children}
      </div>
    </div>
  )
}

const Tag = ({text, color}) => (
  <div className={styles.tag} style={{ '--color': color}}><span>#</span> {text}</div>
)

export default InfiniteScrollAnimation
export { Tag }