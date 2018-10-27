import React, { Component } from 'react'
import './CustomerPage.css'
import HeaderBar from './header'
import Footer from './Footer'
import { getFireDB, putPlacetoDB } from '../components/FirebaseInit'
// import CustomerPagejs from './CustomerPagejs'

class CustomerPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = { isLoaded: false,
        placeList: [], currentName: "", currentClass: "", currentMaxpeople: "", currentDescription: "", 
        currentLocation: ""
     }

}

componentDidMount() {
    getFireDB('place')
    .on('value',snapshot => {
        this.setState({placeList: Object.keys(snapshot.val()), placeInfo: snapshot.val()})
    })
    this.setState({isLoaded: true})
}

  render () {
    const forFilter = ['평점순', '신규순', '가까운순']

    return (
      <div className='customerMain'>
        <HeaderBar />
        <div className='customerMain-wrapper'>
          <div className='customerMain-content-area'>
            <div className='customerMain-navbar'> 
              <ul>
                {/* {array.map(item => <li><a href='#'><i className='fas fa-code' />{item}</a></li>)} */}
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
                    this.state.isLoaded && (
                    this.state.placeList.map((item,index) =>
                      <li key={index} className='customerMain-content-list'>
                        <a>
                          <div className='customerMain-content-placeCard'>
                            <img src='' />
                            <div className='customerMain-content-placeCard-detail'>
                              <div className='customerMain-content-placeCard-title'>{item}</div>
                              <div className='customerMain-content-placeCard-exp'>{this.state.placeInfo[item]['description']}</div>
                              <div className='customerMain-content-placeCard-sum'>
                                <i className='fas fa-user' /><span>10/{this.state.placeInfo[item]['maxpeople']}</span>
                                {
                                  // isReserved[item] ? <span>reserved</span> : <span>vacancy</span>
                                }
                                <span>평점 : {}</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>)
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
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
}

export default CustomerPage
