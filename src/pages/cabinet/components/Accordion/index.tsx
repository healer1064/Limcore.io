import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'

import styles from './styles.module.scss'
import blueArrow from '@icons/blueArrow.svg'

interface AccordionProps {
  text: string
}

export const AccordionUI: React.FC<AccordionProps> = ({ children, text }) => {
  return (
    <div>
      {/* Я не смог задать эти стили классами так как те имели меньший приоритет */}
      <Accordion
        aria-controls='panel2a-content'
        style={{ color: 'white', background: 'rgba(25, 42, 44, 1)', borderRadius: '20px' }}
      >
        <AccordionSummary expandIcon={<img src={blueArrow} />}>{text}</AccordionSummary>
        <AccordionDetails>
          <div className={styles.cabinet__AccordionConent}>
            <hr />
            <div>{children}</div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
