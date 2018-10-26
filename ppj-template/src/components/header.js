import React, { Component } from 'react'
import './headerStyle.css'

class HeaderBar extends Component {
  constructor () {
    super()
    this.state = {
      isHideList: false
    }
  }
  render () {
    const id = ['김정빈']
    return (
      <div className='customerMain-header'>
        <span className='logoTitle'>MaeSamCo</span>
        <span className='customerMain-header-space' />
        <span><i className='far fa-heart' /></span>
        <span><i className='far fa-star' /></span>
        <span>{id}</span>
        <span><i className='fas fa-caret-down' onClick={() => { this.setState({ isHideList: !this.state.isHideList }) }} id='HideandShow' /></span>
        <ul style={{ display: (this.state.isHideList) ? 'inline-block' : 'none' }} id='hideMenu'>
          <li><a href='#'>송민재</a></li>
          <li><a href='#'>박평진</a></li>
          <li><a href='#'>송제윤</a></li>
          <li><a href='#'>박종민</a></li>
          <li><a href='#'>박성민</a></li>
          <li><a href='#'>정서진</a></li>
          <li><a href='#'>전동환</a></li>
        </ul>
      </div>
    )
  }
}
export default HeaderBar
