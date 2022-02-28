import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  // 選項按鈕(群組)
  const [radioValue, setRadioValue] = useState()
  const foodOptions = ['雞腿飯', '排骨飯', '香腸飯']

  // 下拉清單
  const [selectValue, setSelectValue] = useState('')

  return (
    <>
      <h2>文字輸入框</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <h2>文字輸入區域</h2>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value)
        }}
      />
      <h2>選項按鈕(群組)</h2>
      {foodOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'foodOption' + i}
              checked={v === radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value)
              }}
            />
            <label htmlFor={'foodOption' + i}>{v}</label>
          </div>
        )
      })}
    </>
  )
}
export default App
