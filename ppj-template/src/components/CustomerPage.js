import React, { Component } from 'react'
import './CustomerPage.css'
import { Z_FILTERED } from 'zlib'
import Custompage from './CustomerPagejs'

const CostumerPage = () => {
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
  return (
    <div className='customerMain'>
      <div className='customerMain-header'>
        <span className='logoTitle'>MaeSamCo</span>
        <span className='customerMain-header-space' />
        <span><i class='far fa-heart' /></span>
        <span><i class='far fa-star' /></span>
        <span>{id}</span>
        <span><i class='fas fa-caret-down' /></span>
      </div>
      <div className='customerMain-wrapper'>

        <div className='customerMain-content-area'>

          <div className='customerMain-navbar'>
            <ul>
              {array.map(item => <li><a href='#'><i class='fas fa-code' />{item}</a></li>)}
            </ul>
          </div>
          <div className='customerMain-content'>
            <div className='customerMain-title'>Customer</div>
            <form>
              <i class='fas fa-search' /><input type='text' name='place-search' placeholder='search' />
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
                    <li>
                      <a>
                        <div className='customerMain-content-placeCard'>
                          <img src='' />
                          <div className='customerMain-content-placeCard-detail'>
                            <div className='customerMain-content-placeCard-title'>{item}</div>
                            <div className='customerMain-content-placeCard-exp'>{text}</div>
                            <div className='customerMain-content-placeCard-sum'>
                              <i class='fas fa-user' /><span>10/10</span>
                              {
                                isReserved[item] ? <span>reserved</span> : <span>vacancy</span>
                              }
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
    </div>
  )
}

export default CostumerPage
