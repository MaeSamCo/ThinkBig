import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'
import './jongminpage.css'

class JongMinPage extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div id='jong-min-page' className='background'>
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans+KR' rel='stylesheet' />

        <div className='navbar'>
          <div className='profile'>
            <div className='profilepic' />
            <div className='profilecir' />
            <div className='name'>{this.props.state.wow}</div>
            <div className='living_place'>안산 디미고</div>
          </div>
          <div className='catalog'>
            <ul>
              <li>cat1</li>
              <li>cat2</li>
              <li>cat3</li>
              <li>cat4</li>
              <li>cat5</li>
              <li>cat6</li>
            </ul>
          </div>
        </div>

        <div className='topsearchbar'>
          <input className='search' placeholder=' Search?' type='text' />
          <div className='newpost'>+ Create New Post</div>
        </div>

        <div className='contents'>
          <h2 className='placeinfotitle'>장소정보</h2>
          <div className='placeinfocontents' className='placeinfocontents_1'>
                        장소분류<br />
            <div className='placecat'>
              <img className='basketball'src={require('../components/basketball.png')} />
            </div><br />
            {this.props.state.classify}
          </div>
          <div className='placeinfocontents' className='placeinfocontents_2'>
                        장소평가<br /> <h1 className='stars'>
                          {this.props.state.star > 0 && '★'}
                          {this.props.state.star > 1 && '★'}
                          {this.props.state.star > 2 && '★'}
                          {this.props.state.star > 3 && '★'}
                          {this.props.state.star > 4 && '★'}
                          {this.props.state.star < 5 && '☆'}
                          {this.props.state.star < 4 && '☆'}
                          {this.props.state.star < 3 && '☆'}
                          {this.props.state.star < 2 && '☆'}
                        </h1><br />{this.props.state.star}/5
          </div>
          <div className='placeinfocontents' className='placeinfocontents_3'>
                        권장인원<br />
            {[...Array(this.props.state.max_people)].map(v => <img className='person'src={require('../components/person.png')} />)}
            <br /> {this.props.state.max_people}명
          </div>
          <h2 className='nowinfotitle'>현재정보</h2>
          <div className='placeinfocontents' className='placeinfocontents_4' />
        </div>

      </div>
    )
  }
}

export default ContextHOC(JongMinPage)
