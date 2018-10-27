import React from 'react'
import ReactDOM from 'react-dom'
import './PpjModal.css'

class PPJModal extends React.Component {
    render() {
       return ReactDOM.createPortal(
           (
               <div className="modal-background">
                    <div className="modal-body">
                        {this.props.children}
                    </div>
               </div>
           ),
           document.getElementById('modal-root')
       )
    }
}

export default PPJModal