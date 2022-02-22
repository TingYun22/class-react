import './menu.css'
function Menu(props) {
  const { arr, activeIndex, setActiveIndex } = props

  return (
    <ul>
      {arr.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setActiveIndex(i)
            }}
          >
            <a href="#/" className={activeIndex === i ? 'active' : ''}>
              {v}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
