import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

class Sidebar extends Component {
  toggleMenu(idx) {}

  render() {
    const { data: items } = this.props;
    return (
      <nav className="at-nav">
        {items.map(item => {
          return (
            <div key={item.title}>
              <h2 className="at-nav__title">{item.title}</h2>
              <ul className="at-nav__items">
                {item.items &&
                  item.items.map(navItem => {
                    return (
                      <li className="at-nav__item" key={navItem.name}>
                        <NavLink
                          exact
                          className="at-nav__page"
                          activeClassName="router-link-exact-active router-link-active"
                          to={{
                            pathname: `/${item.name.toLowerCase()}/${navItem.name.toLowerCase()}}`
                          }}
                          replace
                        >
                          {navItem.title}
                        </NavLink>
                      </li>
                    );
                  })}
                {item.groups &&
                  item.groups.map((group, idx) => {
                    return (
                      <li className="at-nav__item active" key={group.title}>
                        <a className="at-nav__group" onClick={this.toggleMenu.bind(this, idx)}>
                          {group.title}
                        </a>
                        <ul>
                          {group.items.map(navItem => {
                            return (
                              <li className="at-nav__child-item" key={navItem.name}>
                                <NavLink
                                  exact
                                  className="at-nav__component"
                                  activeClassName="router-link-exact-active router-link-active"
                                  to={`/docs/${navItem.name.toLowerCase}`}
                                  replace
                                >
                                  {navItem.name}
                                  <span>{navItem.title}</span>
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  })}
              </ul>
            </div>
          );
        })}
      </nav>
    );
  }
}

export default Sidebar;
