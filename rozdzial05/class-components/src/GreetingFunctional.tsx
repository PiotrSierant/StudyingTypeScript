import React from "react";

interface GreetingProps {
    message: string
}

export default function Greeting(props: GreetingProps) {
    console.log("Renderuję komponent Greeting")
    
    return (<div>
        {props.message}
    </div>);
}