import React, { Component } from 'react'
import { ContextHOC } from '../context/ContextMain'
import PrettyButton from '../components/PrettyButton'
import { fire, putFireDB } from '../components/FirebaseInit'


class TestPage extends Component {
    constructor (props) {
    super(props)
  }

  save(){
    
    userId=document.getElementById("ID").value
    name=document.getElementById("name").value
    email=document.getElementById("email").value
    putFireDB(userId, name, email)
    console.log('save')
  }
    render() {
        return (
            <div id="test-page">
                <h1>
                    {this.props.state.wow}
                </h1>
                    ID:<input id='ID' type="text"/><br/>
                    name:<input id='name' type="text"/><br/>
                    email:<input id='email' type="text"/><br/>
                    <div className='submit' onClick={this.save}>submit</div>
                    {writeUserData(userId,name,email)}
            </div>
        )
    }
}

export default ContextHOC(TestPage)
