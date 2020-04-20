import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createStore from '../store';
import Router from 'next/router';
import UserContext from '../components/hooks/userContext';

// Main SCSS
import '../assets/scss/main.scss';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, user: null };
  }

  componentDidMount = () => {
    const user = localStorage.getItem('nextjs-app-starter-user');
    if (user) {
      this.setState({
        user,
      });
    } else {
      Router.push('/page/login');
    }
  };

  signIn = (username, password) => {
    localStorage.setItem('nextjs-app-starter-user', username);

    this.setState(
      {
        user: username,
      },
      () => {
        Router.push('/');
      },
    );
  };

  signOut = () => {
    localStorage.removeItem('nextjs-app-starter-user');
    this.setState({
      user: null,
    });
    Router.push('/page/login');
  };

  static async getInitialProps({ Component, ctx }) {
    const {
      store,
      isServer,
      req,
      query: { amp },
    } = ctx;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          signIn: this.signIn,
          signOut: this.signOut,
        }}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </UserContext.Provider>
    );
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async appContext => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default withRedux(createStore)(MyApp);
