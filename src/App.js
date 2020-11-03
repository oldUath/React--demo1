import React from 'react'

const App =()=>{
    return (
        <Component numbers={[1,2,3,4]} />
    )
};
const Component =(props)=>{
    return props.numbers.map((n,index)=>{
            return <div>{index}这就是第{n}个div</div>
            })
    
}
export default App
