import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'
import HeaderBar from './header'
import './viewing.css'
import Footer from './Footer'

class Viewing extends Component {
	constructor (props) {
			super(props)
	}
	render(){
		return(
			<div className='viewing'>
				<HeaderBar></HeaderBar>
				<div className='viewing-wrapper'>
					<div className='viewing-navbar'>
						<div className='profilePic'></div>
						<div className='profileCir'></div>
						<div className='placeName'>{ this.props.state.wow }</div>
						<div className='placeSubName'>경기도 의왕시</div>
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
								<i class="fas fa-basketball-ball"></i>
								<div className='viewing-card-sum'>{this.props.state.classify}</div>
							</div>
							<div className='viewing-content-card'>
								<div className='viewing-card-sum'>장소 평가</div>
								<h1>
                          {this.props.state.star > 0 && <i class="fas fa-star"></i>}
                          {this.props.state.star > 1 && <i class="fas fa-star"></i>}
                          {this.props.state.star > 2 && <i class="fas fa-star"></i>}
                          {this.props.state.star > 3 && <i class="fas fa-star"></i>}
                          {this.props.state.star > 4 && <i class="fas fa-star"></i>}
                          {this.props.state.star < 5 && <i class="far fa-star"></i>}
                          {this.props.state.star < 4 && <i class="far fa-star"></i>}
                          {this.props.state.star < 3 && <i class="far fa-star"></i>}
                          {this.props.state.star < 2 && <i class="far fa-star"></i>}
                        </h1><br />
								<div className='viewing-card-sum'>{this.props.state.star}/5</div>
							</div>
							<div className='viewing-content-card'>
								<div className='viewing-card-sum'>권장 사용 시간</div>
								<i class="fas fa-clock"></i>
								<div className='viewing-card-sum'>{this.props.state.recommanded_time}</div>
							</div>
							<div className='viewing-content-card'>
								<div className='viewing-card-sum'>현재 예약 가능</div>
								{ this.props.state.additional_condition ? <i class="far fa-circle"></i> : <i className='far fa-times'></i>}
								{ this.props.state.additional_condition ? <div className='viewing-card-sum'>Able to Reserve</div> : <div className='viewing-card-sum'>Disable to Reserve</div>}
							</div>
							<div className='viewing-content-card'>
								<div className='viewing-card-sum'>현재 인원</div>
								<i class="fas fa-user-friends"></i>
								<div className='viewing-card-sum'>{ this.props.state.playing_member }</div>
							</div>
							<div className='viewing-content-card'>
								<div className='viewing-card-sum'>최대 사용 인원</div>
								<i class="fas fa-users"></i>
								<div className='viewing-card-sum'>{this.props.state.max_people}명</div>
							</div>
							<div className='viewing-content-card'>
								<div className='viewing-card-sum'>더 필요한 인원</div>
								<i class="fas fa-user-plus"></i>
								<div className='viewing-card-sum'>{ this.props.state.additional_people }</div>
							</div>
							<div className='viewing-content-card'>
								<div className='viewing-card-sum'>걸리는 시간</div>
								<i class="fas fa-map-marked-alt"></i>
								<div className='viewing-card-sum'>Using Naver Map API</div>
							</div>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		)
	}
}
export default ContextHOC(Viewing)