import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome buddy</div>

  

  }
}

export default UserGreetings;

    //ELEMENT variables approach

    //   let message
    //   if (this.state.isLoggedIn){
    //       message = <div> Welcome buddy</div>
    //   } else{
    //       message = <div>Welcome peeps</div>
    //   }

    //   return <div>{message}</div>




    //IF ELSE APPROACH
    
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>Welcome buddy</div>
    //     )
    // } else{
    //     return(
    //         <div>Welcome peeps</div>
    //     )
    // }

    //Ternory operator approach

    // return this.state.isLoggedIn ? (
    //     <div>Welcome buddy</div>
    //   ) : (
    //     <div>Welcome peeps</div>
    //   );


    //SHORT CIRCUIT APPROACH
    // return this.state.isLoggedIn && <div>Welcome buddy</div>