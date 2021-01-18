import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';
import Header from './Header';
import Search from './Search';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userdata: [],
      currentUser: "eg180"
    }
   
  }

  componentDidMount() {
    console.log('inside componentDidMount');
    axios.get('https://api.github.com/users/eg180')
    .then(res => {
      console.log(res.data);
      this.setState({
         userdata: res.data
        })
    })
    .catch(err => {
      console.log(err)
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser !== this.state.currentUser) {
      axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
           userdata: res.data
          })
    })
    .catch(err => {
      console.log(err)
    })
    }
  }

  updateStateForSearch = (newUser) => {
    this.setState({
      currentUser: newUser
    });
  }

  render() {
    return (
      <>
      <Header />
      <Search newSearch ={this.updateStateForSearch} />
      <UserCard public_repos={this.state.userdata.public_repos} location={this.state.userdata.location} login={this.state.userdata.login} followers={this.state.userdata.followers} avatar={this.state.userdata.avatar_url} name={this.state.userdata.name}/>
      </>
      )
  }
}

export default App;