import React, { Component } from 'react';
import PageHeader from '../components/header';
import Sidebar from '../components/sidebar';

import navsConfig from '../nav.config.yml';
import { Switch, Redirect, Route } from 'react-router-dom';

import '../assets/style/docs.scss';

class Docs extends Component {
  render() {
    const data = navsConfig['components'];

    return (
      <div id="app">
        <PageHeader collapse />
        <div className="at-container row">
          <div className="at-sidebar col-sm-24 col-md-6 col-lg-4">
            <Sidebar data={data} />
          </div>
          <div className={`at-markdown col-sm-24 col-md-18 col-lg-20`}>
            <Switch>
              {data.map(item => {
                if (item.items) {
                  return item.items.map(item => {
                    return (
                      <Route
                        path={`/docs/${item.name.toLowerCase()}`}
                        component={require(`../view/${item.name}`).default}
                      />
                    );
                  });
                }

                // if (item.groups) {
                //   return item.groups.map(item => {
                //     return item.items.map(item => {
                //       return (
                //         <Route
                //           path={`/docs/${item.name.toLowerCase()}`}
                //           component={require(`../view/${item.name}`).default}
                //         />
                //       );
                //     });
                //   });
                // }
              })}
              <Redirect path="/docs/" to={{ pathname: '/docs/introduction' }} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Docs;
