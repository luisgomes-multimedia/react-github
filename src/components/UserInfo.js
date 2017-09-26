import React, { Component } from 'react';

import Repositories from './Repositories'

class UserInfo extends Component {

  ComponentWillMount() {
    console.log(this.props.reposData);
  }

  render() {

    let bio = this.props.bio;
    if(bio == null) bio = "No Bio Available";

    const repositories = this.props.reposData;
    const repositorie = repositories.map((repo, index) => {
      return <Repositories
        key= {index}
        repoName = {repo.name}
        starCount={repo.stargazers_count}
        forkCount={repo.forks}
        repoUrl={repo.html_url}
      />
    })
    console.log(repositories);
    // console.log(this.props);

    return (
      <div className="container ">
          <div className="card">
          <div className="valign-wrapper flex-wrap row no-margin-bottom">
            <div className="col s12 m4">
              <div className="card-image">
                <img src={this.props.imageUrl} alt="" className="responsive-img"/>
              </div>
            </div>
            <div className="col s12 m8 text-align-center-small padding-when-small">
              <a className="italic yellow-text text-darken-1">@{this.props.name}</a>
              <h5 className="bold">{this.props.name}</h5>
              <p className="text-justify line-clamp">{bio}</p>
            </div>
          </div>
          <div className="ul">
            <div className="card-action">
              <h6 className="bold">Repositories</h6>
            </div>
            {repositorie}

          </div>
        </div>
      </div>
    );
  }

}

export default UserInfo;
