import React, { useEffect, useRef } from 'react'
import './select.scss'
import arrowUpSorted from '@icons/arrowUpSorted.svg'
import checkIcon from '@icons/checkIcon.svg'

interface SelectProps {
  isShowOptions: boolean
  itemArray?: string[]
  onClick: (value: boolean) => void
  selectedItem?: string
  changeSortedValue: (value: string) => void
}

export const Select: React.FC<SelectProps> = (props) => {
  const sortingRef = useRef(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (sortingRef.current && e.target instanceof Node && sortingRef.current.contains(e.target)) {
      return
    }
    props.onClick(false)
  }
  useEffect(() => {
    if (props.isShowOptions) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [props.isShowOptions])

  return (
    <div ref={sortingRef} className='select'>
      <div className='select-btn' onClick={() => props.onClick(!props.isShowOptions)}>
        <div className='select-btn-content'>
          <span className='select-btn-text'>{props.selectedItem}</span>
          <img className={`${!props.isShowOptions && 'arrow-open'}`} src={arrowUpSorted} alt='icon' />
        </div>
      </div>
      {props.isShowOptions && (
        <div className='options-select'>
          <div className='options-select-content'>
            {props.itemArray.map((item, index) => {
              return (
                <div onClick={() => props.changeSortedValue(item)} className='option-select__item' key={index}>
                  <span className='option-select__text'>{item}</span>
                  {item === props.selectedItem && <img src={checkIcon} alt='icon' />}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
