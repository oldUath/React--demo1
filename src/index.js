import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App(){
    return(
        <div className="App">         
            爸爸
            <Son messageForSon={55*2} />
        </div>
    )
};

// 类组件中都以方法
class Son extends React.Component{
    constructor(){
        super()
        this.state={
            n:0
        };
    };
    add(){
        // this.state.n+=1
        this.setState({ n: this.state.n + 1 });

    };
    render(){
        return(
            <div className="Son">
               儿子 n:{this.state.n}
               <button onClick={()=>this.add()}>+1</button>
               {this.props.messageForSon}

               <Grandson message="孙子"/>
            </div>
        )
    }

};

const Grandson = (props)=>{
    const [n,setN] = React.useState(0)
    return(
        <div className="Grandson">
            孙子 n:{n}
            <button onClick={()=>setN(n+1)}>+1</button>
            {props.message}
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

