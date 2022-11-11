import React from 'react'

import InfiniteScrollAnimation, { Tag } from './InfiniteScrollAnimation'

import * as styles from './ISAEX.module.css'

const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const ISAExample = () => (
  <div className={styles.app}>

    <div className={styles.tagList}>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteScrollAnimation key={i} duration={random(14000, 20000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteScrollAnimation>
      ))}
      <div className={styles.fade} />
    </div>
    
  </div>
);

export default ISAExample