import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className='customerMain-footer'>
        <div className='customerMain-footer-left'>
          <div className='customerMain-footer-title'>
                              MaeSamCo
          </div>
          <div className='customerMain-footer-contact'>
            <span><i className='far fa-envelope' /> firstunderbar@gmail.com</span>
            <span><i className='fas fa-phone' />010-1234-5678</span>

          </div>
        </div>
        <div className='customerMain-footer-right'>
          <img src='' />
        </div>
      </div>
    )
  }
}

export default Footer
