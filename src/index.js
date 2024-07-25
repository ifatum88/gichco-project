import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const list_index_styles = ['uikit-rtl.css', 'uikit.css'];
const list_index_styles_min = ['uikit-rtl.min.css', 'uikit.min.css'];
const list_index_js = ['uikit-icons.js', 'uikit.js']
const list_index_js_min = ['uikit-icons.min.js', 'uikit.min.js']

// Import index styles
list_index_styles.forEach((index_style) => {
  import ("".concat('./css/', index_style));
})

// Import index styles
list_index_js.forEach((index_js) => {
  import ("".concat('./js/', index_js));
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
