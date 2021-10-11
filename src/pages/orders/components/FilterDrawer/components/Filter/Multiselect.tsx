import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'
import { filter, setCheckedObject } from '../../../../redux/orderSlicer'
import { isInArray } from '@helpers/isInArray'

const useStyles = makeStyles({
  valueInputWrapper: {
    position: 'relative',
    borderRadius: '8px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
    background: '#ffffff',
    border: '2px solid #e2e5eb',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  opened: {
    boxShadow: '0px 2px 8px #e7eafa',
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
    border: 'none',
  },
  valueInputValue: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#bbc1c7',
    display: 'flex',
  },
  chip: {
    display: 'flex',
    alignItems: 'center',
    background: '#f2f3f7',
    borderRadius: '4px',
    padding: '4px 8px',
    marginRight: '4px',
    maxWidth: '100px',
  },
  chipValue: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#1d2023',
    marginRight: '8px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  chipCounter: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#1d2023',
  },
  chipDeleteIcon: {
    width: '8px',
    height: '8px',
    display: 'flex',
    alignItems: 'center',
  },
  valueInputArrow: {
    position: 'absolute',
    top: '50%',
    right: '12px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    width: '16px',
    height: '16px',
  },
  valueList: {
    padding: '12px 0 0',
    boxShadow: '0px 2px 8px #e7eafa',
    borderBottomRightRadius: '8px',
    borderBottomLeftRadius: '8px',
    borderTop: '1px solid #bcc3d0',
    zIndex: 1,
  },
  list: {
    maxHeight: '200px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '8px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 2px lightgray',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'lightgray',
      borderRadius: '10px',
      '&:hover': {
        background: '#bfbfbf',
      },
    },
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: '0 16px',
    margin: '0 8px',
    height: '44px',
    borderRadius: '8px',
    marginBottom: '8px',
    border: '2px solid rgba(188, 195, 208, 0.5)',
  },
  inputIconContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '12px',
  },
  searchInput: {
    backgroundColor: '#fff',
    width: '100%',
    border: 'none',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#000',
    fontFamily: "'Raleway', sans-serif",
    outline: 'none',
  },
  valueListOption: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    minHeight: '44px',
    padding: '0 12px',
    '& label': {
      fontSize: '16px',
      lineHeight: '24px',
      cursor: 'pointer',
    },
    '&:hover': {
      background: '#f2f3f7',
    },
  },
  valueOptionsNoResults: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '44px',
    marginBottom: '8px',
  },
  noResultsIcon: {
    width: '16px',
    height: '16px',
    marginRight: '8px',
  },
  noResultsText: {
    fontSize: '16px',
    lineHeight: '24px',
    color: '#9198a0',
  },
  checkBox: {
    appearance: 'none',
    width: '16px',
    height: '16px',
    marginRight: '8px',
    backgroundColor: '#fff',
    border: '1px solid #969fa8',
    outline: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundSize: '50% 50%',
    '&:checked': {
      backgroundColor: '#e30611',
      border: '1px solid transparent',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.071 0.664859C12.9786 -0.230307 14.44 -0.220263 15.3352 0.687292C16.2303 1.59485 16.2203 3.05624 15.3127 3.95141L7.8268 11.3351C6.92334 12.2263 5.46996 12.2209 4.57308 11.3232L1.10782 7.85462C0.206864 6.95281 0.207558 5.49138 1.10937 4.59043C2.01118 3.68948 3.47261 3.69017 4.37356 4.59198L6.21791 6.43809L12.071 0.664859Z' fill='white'/%3E%3C/svg%3E%0A")`,
      backgroundSize: '70% 70%',
      backgroundRepeat: 'no-repeat',
    },
  },
  divider: {
    height: '1px',
    background: 'rgba(188, 195, 208, 0.5)',
    margin: '0 12px',
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
  },
  buttonAccept: {
    background: '#e30611',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 32px',
    lineHeight: '24px',
    fontSize: '17px',
    fontWeight: 600,
    borderRadius: '8px',
    cursor: 'pointer',
  },
  spanChecked: {
    color: '#1D2023',
  },
  label: {
    fontSize: '14px',
    lineHeight: '20px',
    color: '#626C77',
    margin: '14px 0 4px 0',
  },
  buttonReset: {
    background: '#fff',
    color: '#1d2023',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 32px',
    lineHeight: '24px',
    fontSize: '17px',
    fontWeight: 600,
    borderRadius: '8px',
    cursor: 'pointer',
  },
})

interface Props {
  items: string[] | null
  label: string
  filterName: string
}

export const Multiselect: React.FC<Props> = ({ items, label, filterName }) => {
  const classes = useStyles()
  const [openList, setOpenList] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState([])
  const [checkedList, setCheckedList] = useState([])
  const [checkedItems, setCheckedItems] = useState([])
  const [value, setValue] = useState([])
  const newList = items.map((item, index) => ({ itemValue: item, index, checked: false }))
  const filterState = useAppSelector((state) => state.orders.chekedObject)
  const filterArray = useAppSelector((state) => state.orders.filtered)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (Object.keys(filterState).length === 0) {
      setCheckedList(newList)
      setValue([])
      setCheckedItems([])
    } else {
      if (filterName in filterState) {
        setCheckedList(filterState[filterName])
        const checked = filterState[filterName].filter((item) => item.checked === true)
        setCheckedItems(checked)
        setValue(checked.map((item) => item.itemValue))
      } else {
        setCheckedList(newList)
      }
    }
  }, [filterState])

  const handleCheckItem = (val) => {
    const newArray = checkedList.map((item) => {
      let newValue = { itemValue: item.itemValue, checked: item.checked, index: item.index }
      if (item.itemValue === val) {
        newValue = { itemValue: item.itemValue, checked: !item.checked, index: item.index }
      }
      return newValue
    })
    const checked = newArray.filter((item) => item.checked === true)
    setValue(checked.map((item) => item.itemValue))
    setCheckedList(newArray)
    setCheckedItems(checked)
  }

  const handleClearAll = () => {
    const filterArrayCopy = filterArray.filter((item: any) => item.id !== filterName)
    const filterStateCopy = JSON.parse(JSON.stringify(filterState))
    delete filterStateCopy[filterName]
    setCheckedList(newList)
    setCheckedItems([])
    dispatch(filter(filterArrayCopy))
    dispatch(setCheckedObject(filterStateCopy))
  }

  const handleClearChip = (val) => {
    const newArray = checkedList.map((item) => {
      let newValue = { itemValue: item.itemValue, checked: item.checked, index: item.index }
      if (item.itemValue === val) {
        newValue = { itemValue: item.itemValue, checked: false, index: item.index }
      }
      return newValue
    })
    const checkedObject = checkedItems.filter((item) => item.itemValue !== val)
    const checkedValue = checkedObject.map((item) => item.itemValue)
    setValue(checkedValue)
    setCheckedList(newArray)
    setCheckedItems(checkedObject)
    dispatch(
      setCheckedObject({
        ...filterState,
        [filterName]: [...newArray],
      }),
    )
    if (isInArray(filterName, filterArray)) {
      const filterArrayCopy = filterArray.filter((item: any) => item.id !== filterName)
      dispatch(filter([...filterArrayCopy, { id: filterName, value: [...value] }]))
    } else {
      dispatch(filter([...filterArray, { id: filterName, value: [...value] }]))
    }
    setOpenList(false)
  }

  useEffect(() => {
    setFilteredItems(
      checkedList.filter((item) => String(item.itemValue.toLowerCase()).includes(String(searchValue.toLowerCase()))),
    )
  }, [searchValue, checkedList])

  const handleChangeFilter = () => {
    dispatch(
      setCheckedObject({
        ...filterState,
        [filterName]: [...checkedList],
      }),
    )
    if (isInArray(filterName, filterArray)) {
      const filterArrayCopy = filterArray.filter((item: any) => item.id !== filterName)
      dispatch(filter([...filterArrayCopy, { id: filterName, value: [...value] }]))
    } else {
      dispatch(filter([...filterArray, { id: filterName, value: [...value] }]))
    }
    setOpenList(false)
  }

  return (
    <>
      <div className={classes.label}>{label}</div>
      <div className='component__wrapper'>
        <div className={`${classes.valueInputWrapper} ${openList ? `${classes.opened}` : ''}`} tabIndex={0}>
          <div className={classes.valueInputValue}>
            {checkedItems.length > 0 && checkedItems.length < 2
              ? checkedItems.map((checked, index) => (
                  <span className={classes.spanChecked} key={index}>
                    {checked.itemValue}
                  </span>
                ))
              : checkedItems.length >= 2
              ? checkedItems.slice(0, 2).map((checked, index) => {
                  return (
                    <div className={classes.chip} key={index}>
                      <div className={classes.chipValue}>{checked.itemValue}</div>
                      <div className={classes.chipDeleteIcon} onClick={() => handleClearChip(checked.itemValue)}>
                        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M13.2987 0.708736C13.1119 0.521483 12.8583 0.41625 12.5938 0.41625C12.3292 0.41625 12.0756 0.521483 11.8888 0.708736L6.99875 5.58874L2.10875 0.698736C1.92192 0.511483 1.66827 0.40625 1.40375 0.40625C1.13923 0.40625 0.885581 0.511483 0.69875 0.698736C0.30875 1.08874 0.30875 1.71874 0.69875 2.10874L5.58875 6.99874L0.69875 11.8887C0.30875 12.2787 0.30875 12.9087 0.69875 13.2987C1.08875 13.6887 1.71875 13.6887 2.10875 13.2987L6.99875 8.40874L11.8888 13.2987C12.2788 13.6887 12.9087 13.6887 13.2987 13.2987C13.6888 12.9087 13.6888 12.2787 13.2987 11.8887L8.40875 6.99874L13.2987 2.10874C13.6788 1.72874 13.6788 1.08874 13.2987 0.708736Z'
                            fill='#969FA8'
                          />
                        </svg>
                      </div>
                    </div>
                  )
                })
              : 'Выберите из списка'}
            {checkedItems.length > 2 && <div className={classes.chipCounter}>{`+${checkedItems.length - 2}`}</div>}
          </div>

          <div className={classes.valueInputArrow} onClick={() => setOpenList(!openList)}>
            {openList ? (
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M14.5013 8.65773C15.07 9.10719 15.1666 9.93257 14.7172 10.5013C14.2677 11.07 13.4423 11.1666 12.8736 10.7172L7.99612 6.86235L3.12562 10.706C2.5566 11.155 1.73129 11.0578 1.28224 10.4887C0.833186 9.91972 0.930442 9.09441 1.49946 8.64536C1.49946 8.64536 5.74344 5.24831 6.31566 4.84459C6.88787 4.44087 7.32678 3.99776 7.99216 4.00001C8.6649 3.99775 9.03449 4.33329 9.67688 4.84489C10.3193 5.3565 14.5013 8.65773 14.5013 8.65773Z'
                  fill='#BBC1C7'
                />
              </svg>
            ) : (
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1.49872 7.34227C0.930023 6.89281 0.833359 6.06743 1.28282 5.49873C1.73228 4.93002 2.55766 4.83336 3.12636 5.28282L8.00388 9.13765L12.8744 5.29403C13.4434 4.84498 14.2687 4.94224 14.7178 5.51126C15.1668 6.08028 15.0696 6.90559 14.5005 7.35464C14.5005 7.35464 10.2566 10.7517 9.68434 11.1554C9.11213 11.5591 8.67322 12.0022 8.00784 12C7.3351 12.0022 6.96551 11.6667 6.32312 11.1551C5.68072 10.6435 1.49872 7.34227 1.49872 7.34227Z'
                  fill='#BBC1C7'
                />
              </svg>
            )}
          </div>
        </div>
        {openList && (
          <div className={classes.valueList}>
            <div className={classes.inputContainer}>
              <div className={classes.inputIconContainer}>
                <svg width='16' height='16' fill='none'>
                  <path
                    d='M6.286 0a6.286 6.286 0 015.01 10.081l4.453 4.457a.857.857 0 11-1.213 1.21l-4.452-4.455A6.286 6.286 0 116.286 0zm0 1.714a4.571 4.571 0 104.572 4.57 4.571 4.571 0 00-4.572-4.57z'
                    fill='#BBC1C7'
                  />
                </svg>
              </div>
              <input
                className={classes.searchInput}
                type='text'
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value)
                }}
              />
            </div>
            <div>
              <div className={classes.list}>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <div
                      className={classes.valueListOption}
                      key={item.itemValue}
                      onClick={() => handleCheckItem(item.itemValue)}
                    >
                      <input
                        className={classes.checkBox}
                        type='checkbox'
                        id={`check${index}`}
                        value={item.checked}
                        checked={item.checked}
                        readOnly
                      />
                      <label htmlFor={`check${index}`} onClick={() => handleCheckItem(item.itemValue)}>
                        {item.itemValue}
                      </label>
                    </div>
                  ))
                ) : (
                  <div className={classes.valueOptionsNoResults}>
                    <div className={classes.noResultsIcon}>
                      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M8 0C3.5912 0 0 3.5912 0 8C0 12.4088 3.5912 16 8 16C12.4088 16 16 12.4088 16 8C16 3.5912 12.4088 0 8 0ZM8 1.6C11.5441 1.6 14.4 4.4559 14.4 8C14.4 9.48246 13.8954 10.8404 13.0547 11.9234L4.07656 2.94531C5.15955 2.10459 6.51754 1.6 8 1.6ZM2.94531 4.07656L11.9234 13.0547C10.8404 13.8954 9.48246 14.4 8 14.4C4.4559 14.4 1.6 11.5441 1.6 8C1.6 6.51754 2.10459 5.15955 2.94531 4.07656Z'
                          fill='#BBC1C7'
                        />
                      </svg>
                    </div>
                    <div className={classes.noResultsText}>Ничего не найдено</div>
                  </div>
                )}
              </div>
              <div className={classes.divider} />
              <div className={classes.buttonsContainer}>
                {checkedItems.length === 0 ? (
                  <>
                    <div role='button' className={classes.buttonReset}>
                      Очистить
                    </div>
                    <div role='button' className={classes.buttonAccept}>
                      Выбрать
                    </div>
                  </>
                ) : (
                  <>
                    <div role='button' className={classes.buttonReset} onClick={handleClearAll}>
                      Очистить
                    </div>
                    <div role='button' className={classes.buttonAccept} onClick={handleChangeFilter}>
                      Выбрать
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
