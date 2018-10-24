import React, { Component, createContext } from 'react';
import { fire, getFireDB } from '../components/FirebaseInit'

const Context = createContext();
const { Provider, Consumer: ContextConsumer } = Context; 

class ContextProvider extends Component {
    constructor(props) {
        super(props)

        fire()
    }

    componentDidMount() {
        getFireDB('Users/')
        .on('value', (snapshot) => {
            console.log(snapshot.val())
        })
    }

    state = {
        wow: false
    }

    actions = {
        showValue: () => {
            getFireDB('Users/')
                .once('value')
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val())
                    } else {

                    }
                })
        }
    }

    render() {
        const { state, actions } = this;
        
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

let ContextHOC = (WrappedComponent) => (props) => {
    return (
        <ContextConsumer>
            {
                ({ state, actions }) => (
                    <WrappedComponent
                        state={state}
                        actions={actions}
                        {...props}
                    />
                )
            }
        </ContextConsumer>
        )
}

export {
    ContextProvider,
    ContextConsumer,
    ContextHOC
};