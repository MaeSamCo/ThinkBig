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
        getFireDB('/place/dimigobasketball/additional_condition')
        .on('value', (snapshot) => {
            this.setState({additional_condition: snapshot.val()})
            // console.log(snapshot.val())
        })
        getFireDB('/place/dimigobasketball/additional_people')
        .on('value', (snapshot) => {
            this.setState({additional_people: snapshot.val()})
            // console.log(snapshot.val())
        })
        getFireDB('/place/dimigobasketball/max_people')
        .on('value', (snapshot) => {
            this.setState({max_people: snapshot.val()})
            // console.log(snapshot.val())
        })
        getFireDB('/place/dimigobasketball/playing_number')
        .on('value', (snapshot) => {
            this.setState({playing_number: snapshot.val()})
            // console.log(snapshot.val())
        })
        getFireDB('/place/dimigobasketball/recommanded_time')
        .on('value', (snapshot) => {
            this.setState({recommanded_time: snapshot.val()})
            // console.log(snapshot.val())
        })
        getFireDB('/place/dimigobasketball/star')
        .on('value', (snapshot) => {
            this.setState({star: snapshot.val()})
            // console.log(snapshot.val())
        })
        getFireDB('/place/dimigobasketball/classify')
        .on('value', (snapshot) => {
            this.setState({classify: snapshot.val()})
            // console.log(snapshot.val())
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
        wow: '',
        additional_condition:'',
        additional_people:'',
        max_people:'',
        playing_number:'',
        recommanded_time:'',
        reservationlist_1:'',
        star:'',
        classify:''
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