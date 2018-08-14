import React, { Component } from 'react'

class Test extends Component {

        state = {
            title: "",
            body:"",
        };
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => this.setState(
            {
                title : data.title,
                body : data.body
            }
        ))
}
// componentWillMount(){
//     console.log("component will mount")
// }

// componentDidUpdate(){
//     console.log("component did update")
// }

// componentWillUpdate(){
//     console.log("component will update")
// }

// componentWillReceiveProps(nextProps, nextState){
//     console.log("component will recieve props");
// }

// static getDerivedStateFromProps(nextProps,prevState){
//     return null;
// }

  render() {
      const {title, body} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}
export default Test;