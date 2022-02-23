import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles.module.scss'

const links = [
  {
    href: '#',
    name: 'Telegram',
    id: 1,
  },
  {
    href: '#',
    name: 'YouTube',
    id: 2,
  },
  {
    href: '#',
    name: 'Discord',
    id: 3,
  },
  {
    href: '#',
    name: 'Twitter',
    id: 4,
  },
  {
    href: '#',
    name: 'Telegram',
    id: 5,
  },
  {
    href: '#',
    name: 'YouTube',
    id: 6,
  },
  {
    href: '#',
    name: 'Discord',
    id: 7,
  },
  {
    href: '#',
    name: 'Twitter',
    id: 8,
  },
]

const perPage = 7
const types = {
  start: 'START',
  loaded: 'LOADED',
}

const reducer = (state, action) => {
  switch (action.type) {
    case types.start:
      return { ...state, loading: true }
    case types.loaded:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === perPage,
        after: state.after + action.newData.length,
      }
    default:
      throw new Error("Don't understand action")
  }
}

const MyContext = React.createContext()

function MyProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  })
  const { loading, data, after, more } = state

  const load = () => {
    dispatch({ type: types.start })

    setTimeout(() => {
      const newData = links.slice(after, after + perPage)
      dispatch({ type: types.loaded, newData })
    }, 300)
  }

  return <MyContext.Provider value={{ loading, data, more, load }}>{children}</MyContext.Provider>
}

const Scroll = () => {
  let count = 0
  const { data, loading, more, load } = React.useContext(MyContext)
  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (first.isIntersecting) {
          load()
        }
      },
      { threshold: 1 },
    ),
  )
  const [element, setElement] = useState(null)
  useEffect(() => {
    const currentElement = element
    const currentObserver = observer.current

    if (currentElement) {
      currentObserver.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement)
      }
    }
  }, [element])

  return (
    <div className={styles.mobile__scroll}>
      {data.map((item) => {
        return (
          <a key={count++} href={item.href} className={styles.mobile__scroll_item}>
            {item.name} &#129125;
          </a>
        )
      })}

      {!loading && more && (
        <a ref={setElement} className={styles.mobile__scroll_item}>
          Telegram &#129125;
        </a>
      )}
    </div>
  )
}

const Scrolls = () => {
  return (
    <MyProvider>
      <Scroll />
    </MyProvider>
  )
}

export default Scrolls
