import React from 'react';
import MainLayout from '../layout/MainLayout';
import HomeContainer from '../components/container/HomeContainer';
import HeadDefault from '../layout/head/HeadDefault';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  static async getInitialProps(props) {
    const { store, isServer, req, res } = props.ctx;
  }

  render() {
    const { storeLayout } = this.props;

    return (
      <>
        <HeadDefault
          title="Next.Js Starter Application"
          description="NextJS with Reactstrap components with SCSS library, a NextJS example application."
        />
        <MainLayout storeLayout={storeLayout}>
          <HomeContainer storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default Index;
