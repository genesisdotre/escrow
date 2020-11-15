import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { Router, navigate } from '@reach/router'

import Initializer from './initializer'
import Home from '../containers/home'
import ArbitrableTx from '../containers/arbitrable-tx'
import New from '../containers/arbitrable-tx/new'
import Resume from '../containers/arbitrable-tx/resume'
import Footer from '../components/footer'
import Notifications from '../containers/settings'
import GlobalMap from '../containers/global-map'
import { ReactComponent as Kleros } from '../assets/kleros.svg'
import { ReactComponent as Logo } from '../assets/logo-updated.png'
import { ReactComponent as Transaction } from '../assets/transaction.svg'
import { ReactComponent as Envelope } from '../assets/envelope.svg'
import { ReactComponent as Invoice } from '../assets/invoice.svg'
import { ReactComponent as World } from '../assets/worldwide.svg'


import logoUpdated from '../assets/logo-updated.png'

import './app.css'

const NotFound = () => <div>Sorry, nothing here.</div>

const Main = ({ children }) => (
  <div className="App">
    <header className="header">
      {/* <Kleros
        className="logo"
        onClick={() => navigate('/')}
        style={{
          position: 'relative',
          top: '8px',
          left: '20px',
          width: 'auto',
          height: '46px'
        }}
      /> */}

      <img
        className="logo"
        alt="Logo updated"
        src={logoUpdated}
        onClick={() => navigate('/')}
        style={{
          position: 'relative',
          top: '8px',
          left: '20px',
          width: 'auto',
          height: '46px'
        }}
      />


      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
      <li
          className="menu-transaction"
          onClick={() => navigate('/global-map')}
        >
          <span className="btn-new" style={{
              background: "#1E075F",
              border: "1px solid white"
            }}>
            <World
              style={{
                position: 'relative',
                top: '7px',
                height: '24px',
                marginRight: '10px'
              }}
            />
            Global Map
          </span>
        </li>
        <li
          className="menu-transaction"
          onClick={() => navigate('/new/invoice')}
        >
          <span className="btn-new" style={{
              background: "#1E075F",
              border: "1px solid white"
            }}>
            <Invoice
              style={{
                position: 'relative',
                top: '7px',
                height: '24px',
                marginRight: '10px'
              }}
            />
            New Invoice
          </span>
        </li>
        <li
          className="menu-transaction"
          onClick={() => navigate('/new/payment')}
        >
          <span className="btn-new">
            <Transaction
              style={{
                position: 'relative',
                top: '7px',
                height: '24px',
                marginRight: '10px'
              }}
            />
            New Payment
          </span>
        </li>
      </ul>
    </header>
    <main>{children}</main>
    <Footer />
  </div>
)

const App = ({ store }) => (
  <Provider store={store}>
    <Initializer>
      <>
        <Helmet>
          <title>Global Trade Kleros Hackathon</title>
        </Helmet>
        <Router>
          <Main path="/">
            <Home path="/" />
            <New path="/new/:type" />
            <ArbitrableTx path="/contract/:contract/payment/:arbitrableTxId" />
            <Notifications path="/notifications" />
            <Resume path="/:type/:metaEvidenceIPFSHash" />
            <GlobalMap path="/global-map" />
            <NotFound default />
          </Main>
        </Router>
      </>
    </Initializer>
  </Provider>
)

App.propTypes = {
  // State
  store: PropTypes.shape({}).isRequired,

  // Testing
  testElement: PropTypes.element
}

App.defaultProps = {
  testElement: null
}

export default App
