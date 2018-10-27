import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'
import HeaderBar from './header'
import './viewing.css'
import Footer from './Footer'

class Viewing extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='viewing'>
        <HeaderBar />
        <div className='viewing-wrapper'>
          <div className='viewing-navbar'>
            <div className='profilePic' />
            <div className='profileCir' />
            <div className='placeName'>{ this.props.state.placename }</div>
            <div className='placeSubName'>{ this.props.state.description }</div>
            <ul>
              <li><a href='#'>foo1</a></li>
              <li><a href='#'>foo2</a></li>
              <li><a href='#'>foo3</a></li>
              <li><a href='#'>foo4</a></li>
              <li><a href='#'>foo5</a></li>
              <li><a href='#'>foo6</a></li>
              <li><a href='#'>foo7</a></li>
              <li><a href='#'>foo8</a></li>
              <li><a href='#'>foo9</a></li>
            </ul>
          </div>
          <div className='viewing-content'>
            <div className='viewing-content-title'>
              <span>PlaceInfo</span>
            </div>
            <div className='viewing-content-cardZone'>
              <div className='viewing-content-card'>
                <div className='viewing-card-sum'>장소 분류</div>
                <i class='fas fa-basketball-ball' />
                <div className='viewing-card-sum'>{this.props.state.classify}</div>
              </div>
              <div className='viewing-content-card'>
                <div className='viewing-card-sum'>장소 평가</div>
                <h1>
                  {this.props.state.star > 0 && <i class='fas fa-star' />}
                  {this.props.state.star > 1 && <i class='fas fa-star' />}
                  {this.props.state.star > 2 && <i class='fas fa-star' />}
                  {this.props.state.star > 3 && <i class='fas fa-star' />}
                  {this.props.state.star > 4 && <i class='fas fa-star' />}
                  {this.props.state.star < 5 && <i class='far fa-star' />}
                  {this.props.state.star < 4 && <i class='far fa-star' />}
                  {this.props.state.star < 3 && <i class='far fa-star' />}
                  {this.props.state.star < 2 && <i class='far fa-star' />}
                </h1><br />
                <div className='viewing-card-sum'>{this.props.state.star}/5</div>
              </div>
              <div className='viewing-content-card'>
                <div className='viewing-card-sum'>위치</div>
                <i class='fas fa-map-marker-alt' />
                <div className='viewing-card-sum'>{ this.props.state.location }</div>
              </div>
              <div className='viewing-content-card'>
                <div className='viewing-card-sum'>권장 사용 시간</div>
                <i class='fas fa-clock' />
                <div className='viewing-card-sum'>{this.props.state.recommendtime}</div>
              </div>
              <div className='viewing-content-card'>
                <div className='viewing-card-sum'>현재 예약 가능</div>
                { this.props.state.additional_condition ? <i class='far fa-circle' /> : <i className='far fa-times' />}
                { this.props.state.additional_condition ? <div className='viewing-card-sum'>Able to Reserve</div> : <div className='viewing-card-sum'>Disable to Reserve</div>}
              </div>
              <div className='viewing-content-card'>
                <div className='viewing-card-sum'>현재 인원</div>
                <i class='fas fa-user-friends' />
                <div className='viewing-card-sum'>{ this.props.state.playingmember }</div>
              </div>
              <div className='viewing-content-card'>
                <div className='viewing-card-sum'>최대 사용 인원</div>
                <i class='fas fa-users' />
                <div className='viewing-card-sum'>{this.props.state.maxpeople}명</div>
              </div>
              <div className='viewing-content-card'>
                <div className='viewing-card-sum'>더 필요한 인원</div>
                <i class='fas fa-user-plus' />
                <div className='viewing-card-sum'>{ this.props.state.additional_people }</div>
              </div>
            </div>
            <div className='viewing-content-title'>
              <span>Reservation</span>
            </div>
            <div className='viewing-reservation'>
              <div className='viewing-reservation-tab'>
                <div className='viewing-reserve-detail'>
                  <div className='viewing-who-reserve'>장건희</div>
                  <div className='viewing-reserve-info'>
                    <div className='viewing-howMuch-reserve'>
                      1:30 - 2:30
                    </div>
                    <div className='viewing-howMany-reserve'>
                      <i class='fas fa-user' /> 10
                    </div>
                  </div>
                  <div className='viewing-reserve-contact'><span><i className='fas fa-phone' />010-1234-5678</span></div>
                </div>
                <i class='far fa-circle' />
              </div>
              <div className='viewing-reservation-tab'>
                <div className='viewing-reserve-detail'>
                  <div className='viewing-who-reserve'>장건희</div>
                  <div className='viewing-reserve-info'>
                    <div className='viewing-howMuch-reserve'>
                      1:30 - 2:30
                    </div>
                    <div className='viewing-howMany-reserve'>
                      <i class='fas fa-user' /> 10
                    </div>
                  </div>
                  <div className='viewing-reserve-contact'><span><i className='fas fa-phone' />010-1234-5678</span></div>
                </div>
                <i class='far fa-circle' />
              </div>
              <div className='viewing-reservation-tab'>
                <div className='viewing-reserve-detail'>
                  <div className='viewing-who-reserve'>장건희</div>
                  <div className='viewing-reserve-info'>
                    <div className='viewing-howMuch-reserve'>
                      1:30 - 2:30
                    </div>
                    <div className='viewing-howMany-reserve'>
                      <i class='fas fa-user' /> 10
                    </div>
                  </div>
                  <div className='viewing-reserve-contact'><span><i className='fas fa-phone' />010-1234-5678</span></div>
                </div>
                <i class='far fa-circle' />
              </div>
              <div className='viewing-reservation-tab'>
                <div className='viewing-reserve-detail'>
                  <div className='viewing-who-reserve'>장건희</div>
                  <div className='viewing-reserve-info'>
                    <div className='viewing-howMuch-reserve'>
                      1:30 - 2:30
                    </div>
                    <div className='viewing-howMany-reserve'>
                      <i class='fas fa-user' /> 10
                    </div>
                  </div>
                  <div className='viewing-reserve-contact'><span><i className='fas fa-phone' />010-1234-5678</span></div>
                </div>
                <i class='far fa-circle' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default ContextHOC(Viewing)
