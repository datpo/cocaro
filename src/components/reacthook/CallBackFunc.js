import React from 'react'
import ChildrenFunc from './Children';

var beep = (param) =>{
    console.log("fuckyou", param);
    t = param;
    return param;
}

var t = "";

const CallBackFunc = (props) =>{

    

    return(
        <h1>
            t
            hello po
            <ChildrenFunc func={beep} />
        </h1>
    )
}



export default CallBackFunc;