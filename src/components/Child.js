import PropTypes from 'prop-types'
// 屬性類型檢查

function Child(props) {
  console.log(props)
  return (
    <>
      {props.name},{props.text}
    </>
  )
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
// 下方已有預設值，那必填就無作用
Child.defaultProps = {
  name: 'Rose',
  text: '很棒!',
}

export default Child
