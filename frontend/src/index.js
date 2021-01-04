import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const injectGA = () => {
    if (typeof window == 'undefined') {
        return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-150128199-1');
};

ReactDOM.render(

  <React.StrictMode>
      <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-150128199-1"
      />
      <script>{injectGA()}</script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
