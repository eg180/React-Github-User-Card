import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';

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
         pictureurl: res.data.avatar_url
        })
    })
    .catch(err => {
      console.log(err)
    })
  };

  render() {
    return (<UserCard avatar={this.state.pictureurl} name={this.state.name}/>);
  }
}

export default App;