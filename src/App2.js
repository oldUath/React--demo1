import React from 'react'

const Component=(props)=>{
    const array = [];
    for(let i = 0;i<props.number.length;i++){
    array.push(<div>这是第{props.number[i]}个DIV</div>)
    
    }
    return (<div>{array}</div>)
};

export default Component;