import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar'
import UserInfo from './components/UserInfo'

class App extends Component {
    constructor(props) {
        super();

        this.state = {
            result: null,
            queryValue: '',
            requestStatus: false,
            reposData: [],
        }

        this.getInputValue = this.getInputValue.bind(this)
        this.isRequestCompleted = this.isRequestCompleted.bind(this)
        this.getRepos = this.getRepos.bind(this)
    }

    isRequestCompleted(requestStatus) {
      this.setState({
        requestStatus: requestStatus
      })
    }

  getInputValue(inputValue) {
    this.setState({
      queryValue: inputValue,
    })
  }

  getRepos(reposData) {
    this.setState({
      reposData: reposData,
    })
  }

  render() {
    return (
      <div>
        <SearchBar getRepos={this.getRepos} getInputValue={this.getInputValue} requestStatus={this.isRequestCompleted}/>
        {this.state.requestStatus &&
          <UserInfo
            imageUrl={this.state.queryValue.avatar_url}
            profile={this.state.queryValue.html_url}
            name={this.state.queryValue.login}
            bio={this.state.queryValue.bio}
            reposData={this.state.reposData}
          />}
      </div>
    );
  }
}

export default App;
