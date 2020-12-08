import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './css/base.css';
import Layout from 'antd/lib/layout/layout';
import CommonHeader from './components/common/CommonHeader';
import ShowCaseVideo from './components/showCase/ShowCaseVideo';
import VideoPlayer from './pages/VideoPlayer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router className="App">
      <Layout className="layout" style={{height: '100%'}}>
      <Switch>
        <Route path="/films">
          <VideoPlayer />
        </Route>
        <Route path="/">
          <CommonHeader />
          <ShowCaseVideo />
        </Route>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
