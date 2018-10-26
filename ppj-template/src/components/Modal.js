import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');



class Modal extends React.Component {

    render() {
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
            paddingTop: 200
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

        return ReactDOM.createPortal(
            (
                <div className="backdrop" style={backdropStyle}>
                    <div className="modal" style={modalStyle}>
                        {this.props.children}
                    </div>
                </div>
            ),
            document.getElementById('modal-root')
        )
    }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;