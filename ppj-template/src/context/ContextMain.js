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
        getFireDB('/Users/name')
        .on('value', (snapshot) => {
            this.setState({wow: snapshot.val()})
            // console.log(snapshot.val())
        })
        getFireDB('/place/dimigobasketball/')
        .on('value', (snapshot) => {
            this.setState(snapshot.val())
            this.setState({reservationlist: (Object.values((snapshot.val()).reservationlist))[0]})
            console.log(snapshot.val())
        })
        //     while(getFireDB('/place/dimigobasketball/reservationlist_'+num)=!''){
        //         .on(getFireDB('/place/dimigobasketball/reservationlist_'+num)=!''&&'value', (snapshot) => {
        //             this.setState({recommanded_time+num: snapshot.val()})
        //             // console.log(snapshot.val())
        //             num++
        //     }
        // }
        
    }

    state = {

    }

    actions = {

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