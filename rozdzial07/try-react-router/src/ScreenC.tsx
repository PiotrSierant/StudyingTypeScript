import React, { FC } from "react";
import { useHistory, useParams } from "react-router-dom";

interface ScreenCProps {
    message: string;
    history: any;
    match: any;
}

const ScreenC: FC<ScreenCProps> = (props) => {

    // useEffect(() => {
    //     setTimeout(() => {
    //         props.history.push("/");
    //     }, 3000);
    // });

    const history = useHistory();
    const { userid } : any = useParams();

    const onClickGoback = () => {
        //props.history.goBack();
        history.goBack();
    };

    return (
        <div>
            {/*
            <div>{"Twój identyfikator to: " + props.match.params.userid}</div>
            */}
            <div>{"Twój identyfikator to: " + userid}</div>
            <div>{props.message}</div>
            <div>
                <button onClick={onClickGoback}>Wróć na poprzednią stronę</button>
            </div>
        </div>
    );
};

export default ScreenC;