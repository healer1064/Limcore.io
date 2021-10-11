import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import { useDebounce } from 'use-debounce/lib'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { filter, setCheckedObject } from '../../../../redux/orderSlicer'
import { isInArray } from '@helpers/isInArray'

const AirbnbSlider = withStyles({
  root: {
    height: 4,
    padding: '16px 0',
    width: 'calc(100% - 32px)',
    margin: '0 16px',
  },
  thumb: {
    height: 32,
    width: 32,
    backgroundColor: '#fff',
    marginTop: -14,
    marginLeft: 0,
    transform: 'translateX(-50%)',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.08)',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
  },
  rail: {
    color: 'rgba(188, 195, 208, 0.5)',
    opacity: 1,
    height: 4,
    borderRadius: '2px',
  },
  track: {
    color: '#E30611',
    opacity: 1,
    height: 4,
    borderRadius: '2px',
  },
  markLabel: {
    transform: 'none',
    top: '36px',
    fontSize: '14px',
    lineHeight: '20px',
    fontFamily: "'Raleway', sans-serif",
    color: '#626C77',
    '&[data-index="0"]': {
      left: '-10px !important',
      right: 'auto',
    },
    '&[data-index="1"]': {
      left: 'auto !important',
      right: '-10px',
    },
  },
  mark: {
    display: 'none',
  },
})(Slider)

const useStyles = makeStyles({
  values__container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    marginBottom: '8px',
  },
  label: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#626C77',
    margin: '14px 0 4px 0',
  },
  value: {
    border: '2px solid rgba(188, 195, 208, 0.5)',
    boxSizing: 'border-box',
    borderRadius: '8px',
    height: '44px',
    display: 'flex',
    outline: 'none',
    alignItems: 'center',
    padding: '0 12px',
    fontSize: '17px',
    width: '148px',
    lineHeight: '24px',
    color: '#969FA8',
  },
  wrap: {
    position: 'relative',
  },
  closeIcon: {
    width: '12px',
    height: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '12px',
  },
})

const AirbnbThumbComponent = (props: any) => <span {...props} />

interface Props {
  label: string
  items: number[]
  filterName: string
}

export const PriceRange: React.FC<Props> = ({ label, items, filterName }) => {
  const classes = useStyles()
  const [value, setValue] = useState<number[]>([])
  const filterState = useAppSelector((state) => state.orders.chekedObject)
  const filterArray = useAppSelector((state) => state.orders.filtered)
  const dispatch = useAppDispatch()
  const [searchValue] = useDebounce(value, 800)
  const maxPrice = items.length === 0 ? 0 : Math.max(...items)
  const minPrice = items.length === 0 ? 0 : Math.min(...items)
  const marks = [
    {
      value: minPrice,
      label: `${minPrice}₽`,
    },
    {
      value: maxPrice,
      label: `${maxPrice}₽`,
    },
  ]
  useEffect(() => {
    if (Object.keys(filterState).length === 0) {
      setValue([])
    } else {
      if (filterName in filterState) {
        setValue([filterState[filterName][0], filterState[filterName][1]])
      } else {
        setValue([])
      }
    }
  }, [])

  useEffect(() => {
    if (searchValue.length !== 0) {
      if (isInArray(filterName, filterArray)) {
        const filterArrayCopy = filterArray.filter((item: any) => item.id !== filterName)
        dispatch(filter([...filterArrayCopy, { id: filterName, value: [...searchValue] }]))
      } else {
        dispatch(filter([...filterArray, { id: filterName, value: [...searchValue] }]))
      }
      dispatch(setCheckedObject({ ...filterState, [filterName]: [...searchValue] }))
    }
  }, [searchValue])

  const handleChange = (event: any, newValue: number[]) => {
    setValue(newValue)
  }

  const handleChangeMinPrice = (event) => {
    const regVal = event.target.value.replace(/[^0-9.]/g, '')
    if (event.key > maxPrice || event.key < minPrice) {
      event.preventDefault()
    } else {
      setValue([regVal, maxPrice])
    }
  }

  const handleChangeMaxPrice = (event) => {
    const regVal = event.target.value.replace(/[^0-9.]/g, '')
    if (event.key > maxPrice || event.key < minPrice) {
      event.preventDefault()
    } else {
      setValue([minPrice, regVal])
    }
  }

  const handleClearFilter = () => {
    const filterArrayCopy = filterArray.filter((item: any) => item.id !== filterName)
    const filterStateCopy = JSON.parse(JSON.stringify(filterState))
    delete filterStateCopy[filterName]
    setValue([])
    dispatch(filter(filterArrayCopy))
    dispatch(setCheckedObject(filterStateCopy))
  }

  return (
    <div>
      <div className={classes.label}>{label}</div>
      <div className={classes.values__container}>
        <div className={classes.wrap}>
          <input
            className={classes.value}
            type='text'
            pattern='[0-9]*'
            value={value.length === 0 ? '' : `${value[0]}`}
            placeholder='от'
            disabled={items.length === 0}
            onChange={(e) => handleChangeMinPrice(e)}
          />
          {value.length !== 0 && (
            <div className={classes.closeIcon} onClick={handleClearFilter}>
              <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M13.2987 0.708736C13.1119 0.521483 12.8583 0.41625 12.5938 0.41625C12.3292 0.41625 12.0756 0.521483 11.8888 0.708736L6.99875 5.58874L2.10875 0.698736C1.92192 0.511483 1.66827 0.40625 1.40375 0.40625C1.13923 0.40625 0.885581 0.511483 0.69875 0.698736C0.30875 1.08874 0.30875 1.71874 0.69875 2.10874L5.58875 6.99874L0.69875 11.8887C0.30875 12.2787 0.30875 12.9087 0.69875 13.2987C1.08875 13.6887 1.71875 13.6887 2.10875 13.2987L6.99875 8.40874L11.8888 13.2987C12.2788 13.6887 12.9087 13.6887 13.2987 13.2987C13.6888 12.9087 13.6888 12.2787 13.2987 11.8887L8.40875 6.99874L13.2987 2.10874C13.6788 1.72874 13.6788 1.08874 13.2987 0.708736Z'
                  fill='#969FA8'
                />
              </svg>
            </div>
          )}
        </div>
        <div className={classes.wrap}>
          <input
            className={classes.value}
            type='text'
            pattern='[0-9]*'
            value={value.length === 0 ? '' : `${value[1]}`}
            placeholder='до'
            disabled={items.length === 0}
            onChange={(e) => handleChangeMaxPrice(e)}
          />
          {value.length !== 0 && (
            <div className={classes.closeIcon} onClick={handleClearFilter}>
              <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M13.2987 0.708736C13.1119 0.521483 12.8583 0.41625 12.5938 0.41625C12.3292 0.41625 12.0756 0.521483 11.8888 0.708736L6.99875 5.58874L2.10875 0.698736C1.92192 0.511483 1.66827 0.40625 1.40375 0.40625C1.13923 0.40625 0.885581 0.511483 0.69875 0.698736C0.30875 1.08874 0.30875 1.71874 0.69875 2.10874L5.58875 6.99874L0.69875 11.8887C0.30875 12.2787 0.30875 12.9087 0.69875 13.2987C1.08875 13.6887 1.71875 13.6887 2.10875 13.2987L6.99875 8.40874L11.8888 13.2987C12.2788 13.6887 12.9087 13.6887 13.2987 13.2987C13.6888 12.9087 13.6888 12.2787 13.2987 11.8887L8.40875 6.99874L13.2987 2.10874C13.6788 1.72874 13.6788 1.08874 13.2987 0.708736Z'
                  fill='#969FA8'
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        defaultValue={[minPrice, maxPrice]}
        marks={marks}
        onChange={items.length === 0 ? null : handleChange}
        min={minPrice}
        max={maxPrice}
      />
    </div>
  )
}
