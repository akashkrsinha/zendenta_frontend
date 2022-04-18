import React from 'react'
import style from '../styles/content.module.css'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

export default function Content() {
  return (
    <div className={style.contentContainer}>
      <LeftContent />
      <RightContent />
    </div>
  )
}
