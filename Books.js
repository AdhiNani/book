import React, { Component } from 'react'
import "books.css"

export default class Books extends Component {
  render() {
    return (
      <div className='heading'>
        <h1>Html</h1>
        <h2>css</h2>
        <h3>Javascript</h3>
        <div>
           <button type="button" class="btn btn-primary">Primary</button>
        </div>
      </div>
    )
  }
}
