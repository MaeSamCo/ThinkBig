import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'
import PrettyButton from '../components/PrettyButton'
import { fire, putFireDB } from '../components/FirebaseInit'


class TestPage extends Component {
    constructor (props) {
    super(props)
  }

  save(){
    
    const name=document.getElementById("name").value
    const _class=document.getElementById("_class").value
    const maxpeople=document.getElementById("maxpeople").value
    const description=document.getElementById("description").value
    const recommendtime=document.getElementById("recommendtime").value
    const location=document.getElementById("location").value
    putFireDB('place/'+name, name, _class, maxpeople, description, recommendtime, location)
    console.log('save')
  }
    render() {
        return (
            <div id="test-page">
                <h1>
                    {this.props.state.wow}
                </h1>
                    장소명:<input id='name' type="text"/><br/>
                    분류:<input id='_class' type="text"/><br/>
                    최대인원:<input id='maxpeople' type="text"/><br/>
                    설명:<input id='description' type="text"/><br/>
                    권장시간:<input id='recommendtime' type="text"/><br/>
                    위치:<input id='location' type="text"/><br/>
                    <div className='submit' onClick={this.save}>submit</div>
                    {/* {writeUserData(userId,name,email)} */}
            </div>
        )
    }
}

export default ContextHOC(TestPage)
