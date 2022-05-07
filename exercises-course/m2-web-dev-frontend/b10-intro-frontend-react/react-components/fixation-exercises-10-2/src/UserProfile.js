import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar, id } = this.props.user;
    return (
      <div>
        <p> Id: {id} </p>
        <p> Nome: {name} </p>
        <p> Email: {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;