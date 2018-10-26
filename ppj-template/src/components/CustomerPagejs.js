import React from 'react';
import PropTypes from 'prop-types';

class Customerpage extends React.Component {
    let hideMenu = document.getElementById('hideMenu')
    const hideButton = document.getElementById('HideandShow')
    hideButton.addEventListener('click', ()=>{
        if(hideMenu.style.display === 'none'){
            hideMenu.style.display = 'inline-block'
        } else{
            hideMenu.style.display = 'none'
        }
    })
}

export default Customerpage
