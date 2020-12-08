import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './css/base.css';
import Layout from 'antd/lib/layout/layout';
import CommonHeader from './components/common/CommonHeader';
import ShowCaseVideo from './components/showCase/ShowCaseVideo';
import VideoPlayer from './pages/VideoPlayer';

const App = () => {
  return (
    <div className="App">
      <Layout className="layout" style={{height: '100%'}}>
        <VideoPlayer />
      </Layout>
    </div>
  );
}

export default App;
