import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import MultiEmail from './components/multiEmail';
import UploadImage from './components/uploadImage';
import ChartArea from './components/chart/area';
import ChartBar from './components/chart/bar';
import ChartDonut from './components/chart/donut';
import ChartBarList from './components/chart/barList';
import ChartDataBar from './components/chart/dataBar';
import ChartTracker from './components/chart/tracker';
import Header from './components/header'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header />
    <div className='dashboard'>
      <div className='chart'>
        <div className="box">
          <div className="inner">
            <MultiEmail />
            <UploadImage />
            <ChartDataBar />
            <ChartTracker />
          </div>
          <ChartDonut />
          <ChartBarList />
        </div>
        <div className="box">
          <ChartArea />
          <ChartBar />
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
