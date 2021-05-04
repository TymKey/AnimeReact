// const container = document.createElement('h1')
// element.innerText = 'Hello React'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'

const container = document.getElementById('root')

// ReactDOM.render(__QUE___,__DONDE___)
ReactDOM.render(<Card/>, container)