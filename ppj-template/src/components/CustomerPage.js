import React, { Component } from 'react'
import './CustomerPage.css'
import { Z_FILTERED } from 'zlib'
// import CustomerPagejs from './CustomerPagejs'

const CustomerPage = () => {
  const array = ['sea', 'pal', 3, 4, 5, 6, 7, 8, 9, 0]
  const id = ['김정빈']
  const searchRes = ['호빈', '정빈', '우재', '성민', '종현', '제윤', '철완', '평진', '종민', '서진']
  const forFilter = ['평점순', '신규순', '가까운순']
  const text = '연애하고 싶다 연애하고 싶다 연애하고 싶다 연애하고 싶다 연애하고 싶다 연애하고 싶다'
  const isReserved = {
    '호빈': true,
    '정빈': false,
    '우재': true,
    '성민': true,
    '종현': true,
    '동환': false,
    '철완': true,
    '호영': false,
    '종민': true,
    '서진': true
  }
  const score = {
    '호빈': 9.9,
    '정빈': 9.7,
    '우재': 9.9,
    '성민': 1.5,
    '종현': 10,
    '동환': 5.5,
    '철완': 8.5,
    '호영': 7.3,
    '종민': 6.8,
    '서진': 1
  }
  return (
    <div className='customerMain'>
      <div className='customerMain-header'>
        <span className='logoTitle'>MaeSamCo</span>
        <span className='customerMain-header-space' />
        <span><i className='far fa-heart' /></span>
        <span><i className='far fa-star' /></span>
        <span>{id}</span>
        <span><i className='fas fa-caret-down' onclick={() => {this.isHideList = !(this.isHideList)}} id='HideandShow'/></span>
				<ul style={{display: (this.isHideList) ? "inline-block" : "none"}} id='hideMenu'>
					<li><a href='#'></a></li>
					<li><a href='#'></a></li>
					<li><a href='#'></a></li>
					<li><a href='#'></a></li>
					<li><a href='#'></a></li>
				</ul>
      </div>
      <div className='customerMain-wrapper'>

        <div className='customerMain-content-area'>

          <div className='customerMain-navbar'>
            <ul>
              {array.map(item => <li><a href='#'><i className='fas fa-code' />{item}</a></li>)}
            </ul>
          </div>
          <div className='customerMain-content'>
            <div className='customerMain-title'>Customer</div>
            <form>
              <i className='fas fa-search' /><input type='text' name='place-search' placeholder='search' />
            </form>
            <div className='customerMain-content-searchRes'>
              <form className='customerMain-content-searchFilter'>
                <select>
                  {forFilter.map(item =>
                    <option>{item}</option>
                  )}
                </select>
              </form>
              <ul>
                {
                  searchRes.map(item =>
                    <li className='customerMain-content-list'>
                      <a>
                        <div className='customerMain-content-placeCard'>
                          <img src='' />
                          <div className='customerMain-content-placeCard-detail'>
                            <div className='customerMain-content-placeCard-title'>{item}</div>
                            <div className='customerMain-content-placeCard-exp'>{text}</div>
                            <div className='customerMain-content-placeCard-sum'>
                              <i className='fas fa-user' /><span>10/10</span>
                              {
                                isReserved[item] ? <span>reserved</span> : <span>vacancy</span>
                              }
                              <span>평점 : {score[item]}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='customerMain-footer'>
			  <div className='customerMain-footer-left'>
					<div className='customerMain-footer-title'>
						MaeSamCo
					</div>
					<div className='customerMain-footer-contact'>
						<span><i className="far fa-envelope"></i> firstunderbar@gmail.com</span>
						<span><i className="fas fa-phone"></i>010-1234-5678</span>
						
					</div>
				</div>
				<div className='customerMain-footer-right'>
				<img src='' />
				</div>
      </div>
			{/* <script>
				{
					let hideMenu = document.getElementById('hideMenu')
    			const hideButton = document.getElementById('HideandShow')
    			hideButton.addEventListener('click', ()=>{
        	if(hideMenu.style.display === 'none'){
            hideMenu.style.display = 'inline-block'
        	} else{
            hideMenu.style.display = 'none'
        	}}
			</script> */}
    </div>
  )
}

export default CustomerPage
