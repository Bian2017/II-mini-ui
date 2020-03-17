import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class PageHeader extends Component {
  render() {
    return (
      <header>
        <div className="nav-left">
          <Link to="/">
            <span>实在前端组</span>
          </Link>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <NavLink to="/docs/introduction">组件</NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default withRouter(PageHeader);
