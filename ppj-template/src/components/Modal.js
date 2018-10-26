import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

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

    // const close:hover,
    // const close:focus {
    //     color: '#000';
    //     textDecoration: 'none';
    //     cursor: 'pointer';
    // }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
            <div></div>
            {this.props.children}
            <span className="close" onClick={this.props.onClose} style={close}>&times;</span>
            {/* <div className="footer">
            
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;