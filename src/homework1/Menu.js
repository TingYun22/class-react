import './menu.css'
function Menu(props) {
  const { defaultData, menuItem, setMenuItem } = props

  return (
    <ul>
      {menuItem.map((v, i, ar) => {
        return (
          <li
            key={i}
            onClick={() => {
              const newMenuItems = [...defaultData]
              newMenuItems[i].active = true
              setMenuItem(newMenuItems)
            }}
          >
            <a href="#/" className={v.active ? 'active' : ''}>
              {v.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
