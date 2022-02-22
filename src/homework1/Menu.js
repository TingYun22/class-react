import './menu.css'
function Menu(props) {
  const { arr, activeMenu, setActiveMenu } = props

  return (
    <ul>
      {arr.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setActiveMenu(v)
            }}
          >
            <a href="#/" className={activeMenu === v ? 'active' : ''}>
              {v}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
