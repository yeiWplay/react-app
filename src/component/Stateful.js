import React ,  {Component}from 'react';


class Stateful extends Component{

  constructor(props) {
    super(props);

    this.state ={
      hello: 'hola',
    }
  }
  render() {
    return(
        <h1>{this.state.hello} mundo</h1>
    )
  }
}

export default Stateful;
