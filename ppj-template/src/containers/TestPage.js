import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'
import PrettyButton from '../components/PrettyButton'

class TestPage extends Component {
  constructor (props) {
    super(props)

    this.get = this.get.bind(this)
  }
  get () {
    console.log(this.props.state.name)
    // console.log(Object.values(getFireDB('place/'+document.getElementById("find").val())))
    // getFireDB('place/dimigobasketball').on('value', (snapshot) => {console.log(snapshot.val())})
  }
  render () {
    return (
      <div id='test-page'>
        <h1>
          {this.props.state.wow}
        </h1>
                    장소명:<input id='name' type='text' /><br />
                    분류:<input id='_class' type='text' /><br />
                    최대인원:<input id='maxpeople' type='text' /><br />
                    설명:<input id='description' type='text' /><br />
                    권장시간:<input id='recommendtime' type='text' /><br />
                    위치:<input id='location' type='text' /><br />
        <div className='submit' onClick={this.save}>submit</div>
        {/* {writeUserData(userId,name,email)} */}
                    찾으려는것:<input id='find' type='text' /><br />
        <div className='get' onClick={this.get}>get</div>
      </div>
    )
  }
}

export default ContextHOC(TestPage)
