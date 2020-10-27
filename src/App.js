import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';
import Header from './Header';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      user: ""
    }
   
  }


  componentDidMount() {
    console.log('inside componentDidMount');
    axios.get('https://api.github.com/users/eg180')
    .then(res => {
      this.setState({
         name: res.data.name,
         user: res.data.user,
         pictureurl: res.data.avatar_url,
         followers: res.data.followers
        })
    })
    .catch(err => {
      console.log(err)
    })
  };

  render() {
    return (
      <>
      <Header />
      <UserCard followers={this.state.followers} avatar={this.state.pictureurl} name={this.state.name}/>
      </>
      )
  }
}

export default App;