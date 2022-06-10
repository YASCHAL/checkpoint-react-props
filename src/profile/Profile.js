import React, { Component } from 'react';


class Profile extends Component {
   
    render() {
        return (
            <div>
              
                <h1>{this.props.fullName}</h1>
               
                 {this.props.bio}
                 {this.props.profession}
                 

            </div>
        );
    }




}
export default Profile;