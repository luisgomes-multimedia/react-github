import React, { Component } from 'react';

class Repositories extends Component {

  render() {
    return (
      <div className="card-action hoverable justify-content-between">
        <li className="collection-item">
          <a href={this.props.repoUrl}>{this.props.repoName}</a>
        </li>
        <div className="flex">
          <span className="align-number-icon">
            <img src="./Images/star.svg" alt="Github Fork"/>
          </span>
          <span className="margin-right">
            {this.props.starCount}
          </span>
          <span className="align-number-icon">
            <img src="Images/fork.svg" alt="GitHub Star"/>
          </span>
          <span>
            {this.props.forkCount}
          </span>
        </div>
      </div>
    );
  }

}

export default Repositories;
