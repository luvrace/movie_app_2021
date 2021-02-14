import React from "react";
import PropTypes from "prop-types";

// Component Life Cycle - constuctor console.log - render() - componentDidMount() - componentDidUpdate() or componentWillUnmount()
class ComponentLifeCycle extends React.Component{
 constructor(props){
   super(props);
   console.log("hello");
 }
 state = {
  count:0
 };
 add = () => {
    this.setState(current => ({count:current.count+1}));
};
minus = () => {
    this.setState(current => ({count:current.count-1}));
};

componentDidMount(){
  console.log("component render");
}
componentDidUpdate(){
  console.log("I just updated");
}
componentWillUnmount(){
  console.log("Good bye");
}
render(){
  console.log("i am rendering");
      return (
        <div>
          <h1>The number is : {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
      );
 }
}

//export default App;