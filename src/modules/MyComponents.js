import React, { PureComponent } from "react";
import { Link } from 'react-router-dom'

export class PortfolioItem extends PureComponent {
  render() {
    return (
      <div className={"col-" + this.props.col}>
        <Link to={this.props.link} className="card">
          <img src={this.props.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.desc}</p>
          </div>
        </Link>
      </div >
    )
  }
}