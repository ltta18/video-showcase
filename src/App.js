import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './css/base.css';
import Layout from 'antd/lib/layout/layout';
import CommonHeader from './components/common/CommonHeader';

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <CommonHeader />
      </Layout>
    </div>
  );
}

export default App;
