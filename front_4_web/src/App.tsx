import { Routes, Route } from 'react-router-dom';
//import logo from './logo1.svg';
//import './App.css';
import { Component, ReactNode } from 'react';
import { MainViewer } from './modules/dashboard/components/MainViewer';

class App extends Component {
  render(): ReactNode {
    return (
      <div className="main" style={{position:'relative', background:'#edf4f8', zoom: '1'}}>
          <Routes>
            {/*<Route path={"dashboard"} element={<MainViewer/>} />*/}
            <Route path={""} element={<MainViewer/>} />       
          </Routes>   
      </div>
    );
  }
 
}
export default App;