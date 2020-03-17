import React, { Component } from 'react'
import PageHeader from '../components/header'
import Sidebar from '../components/sidebar'

import navsConfig from '../nav.config.yml'

class Docs extends Component {

  render () {
    const data = navsConfig['components']

    return (
      <div id="app">
        <PageHeader collapse />
        <div>
          <div>
            <Sidebar data={data} />
          </div>
        </div>
      </div>
    )
  }
}

export default Docs