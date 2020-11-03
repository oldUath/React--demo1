import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App'
import Component from './App2'

const root = document.querySelector("#root");
const root1 = document.querySelector("#root1");
const root2 = document.querySelector("#root2");

let n = 0;
const App = () =>
  React.createElement("div", { className: "red" }, [
    n,
    React.createElement(
      "button",
      {
        onClick: () => {
          n += 1;
          ReactDOM.render(App(), root);
        }
      },
      "+1"
    )
  ]);

ReactDOM.render(App(), root);
ReactDOM.render(<App1 />, root1);
ReactDOM.render(<Component number={[1,2,3]} />, root2);

