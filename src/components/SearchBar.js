import React, { Component } from 'react';

class searchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryValue: '',
      repos:[],
    }

    this.fetchCall = this.fetchCall.bind(this);
    this.inputChange = this.inputChange.bind(this)
    this.fetchRepos = this.fetchRepos.bind(this)
    this.pressEnter = this.pressEnter.bind(this)
  }


  inputChange(event) {
    this.setState({ queryValue: event.target.value})
  }

  pressEnter = (event) => {
    if(event.key === 'Enter') this.fetchCall();
  }

  fetchCall(event) {
      fetch(`https://api.github.com/users/${this.state.queryValue}` , {
          method: 'get'
      })
      .then( (response) => {
          if(response.status === 404) ;
          this.fetchRepos()
          return response.json()
      })
      .then( (json) => {
          let gitInfo = json;
          this.props.getInputValue(gitInfo)

      })
  }

  fetchRepos() {
    fetch(`https://api.github.com/users/${this.state.queryValue}/repos` , {
        method: 'get'
    }).then((data) => {
      this.props.requestStatus(data.ok)
      return data.json()
    }).then( (json) => {
      let repos = json;
      this.props.getRepos(repos);
    })
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l12 xl8 offset-xl12">
            <div className="card horizontal z-depth-4">
              <div className="card-stacked">
                <div className="card-content">
                  <h5 className="header">
                    Search for a User in github and see his info
                  </h5>
                </div>
                <div className="card-action">
                  <div className="input-field">
                    <input onChange={this.inputChange} onKeyPress={this.pressEnter} type="text" id="user" className="validate"/>
                    <label htmlFor="user">Search User</label>
                    <button onClick={this.fetchCall} className="waves-effect waves-light btn cyan lighten-1">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default searchBar;
