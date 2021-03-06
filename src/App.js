import {
  React,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import './css/base.css';
import Layout from 'antd/lib/layout/layout';
import CommonHeader from './components/common/CommonHeader';
import VideoPlayer from './pages/VideoPlayer';
import ShowCase from './pages/ShowCase';

const App = () => (
  <Router className="App">
    <Layout className="layout" style={{ height: '100%' }}>
      <Switch>
        <Route path="/films/:id">
          <VideoPlayer />
        </Route>
        <Route path="/">
          <CommonHeader />
          <ShowCase title="Trending Now" />
          <ShowCase title="Top 10 in US Today" />
          <ShowCase title="Popular" />
          <div style={{
            marginTop: 100, background: '#000', color: '#fff', textAlign: 'center',
          }}
          >
            Showcase Videos
          </div>
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
