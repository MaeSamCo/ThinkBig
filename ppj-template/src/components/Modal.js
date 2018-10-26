import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

    // The gray background
    const backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    };

    // The modal "window"
    const modalStyle = {
        
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 400,
        minHeight: 300,
        margin: '0 auto',
        padding: 30,
        justifyContent: 'space-between',
        fontFamily: '나눔고딕',
        fontSize: '16px'
    };

    /* The Close Button */
    const close = {
        color: '#aaaaaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold',
    }

    
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    

    // componentDidMount() {
    //     // The portal element is inserted in the DOM tree after
    //     // the Modal's children are mounted, meaning that children
    //     // will be mounted on a detached DOM node. If a child
    //     // component requires to be attached to the DOM tree
    //     // immediately when mounted, for example to measure a
    //     // DOM node, or uses 'autoFocus' in a descendant, add
    //     // state to Modal and only render the children when Modal
    //     // is inserted in the DOM tree.
    //     modalRoot.appendChild(this.el);
    // }
    
    // componentWillUnmount() {
    //     modalRoot.removeChild(this.el);
    // }

    render() {
        // Render nothing if the "show" prop is false
        // if(!this.props.show) {
        //     return null;
        // }
        
        return ReactDOM.createPortal(
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    <div>{this.props.children}</div>
                    <span className="close" onClick={this.props.onClose} style={close}>&times;</span>
                    {/* <div className="footer">
                    
                    <button onClick={this.props.onClose}>
                    Close
                    </button>
                </div> */}
                </div>
            </div>
            ,
            this.el
        );
    }


    // const close:hover,
    // const close:focus {
    //     color: '#000';
    //     textDecoration: 'none';
    //     cursor: 'pointer';
    // }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;