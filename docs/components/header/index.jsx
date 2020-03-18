import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import './index.scss';

class PageHeader extends Component {
  render() {
    const { collapse } = this.props;

    return (
      <header className={classnames('page-header', { collapse })}>
        <div className="nav-container">
          <div className="nav-left">
            <div className="logo">
              <Link to="/">
                <span>实在前端组</span>
              </Link>
            </div>
          </div>
          <div className="nav-right">
            <ul className="navbar">
              <li>
                <NavLink activeClassName="router-link-active" to="/docs/introduction">
                  组件
                </NavLink>
              </li>
              <li>
                <a href="javascript:;" target="__blank">
                  关于我们
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(PageHeader);
