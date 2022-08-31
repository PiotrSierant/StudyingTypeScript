import React from "react";

interface GreetingProps {
    name?: string
}
interface GreetingState {
    message: string
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {
    constructor(props: GreetingProps) {
        super(props);

        this.state = {
            message: Greeting.getNewMessage(props.name)
        }
    }    

    state: GreetingState; 

    static getDerivedStateFromProps(props: GreetingProps, state:GreetingState) {
        console.log(props, state);
        if(props.name && props.name !== state.message) {
            const newState = {...state};
            newState.message = Greeting.getNewMessage(props.name);
            return newState;
        }
        return state;
    }

    static getNewMessage(name: string = "") {
        return `Witaj z Greeting, ${name}`;
    }

    render() {
        console.log("Renderuję komponent Greeting")
        if(!this.props.name) {
            return <div>Nie podano imienia.</div>;
        }
        return <div>
            {this.state.message}
        </div>;
    }
}
