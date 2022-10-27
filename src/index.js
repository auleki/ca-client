import React from 'react';
import ReactDOM from 'react-dom';
// import GlobalStyle from './theme/globalStyles';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from "./App"
import store from "./app/store"
const root = document.getElementById("root");

ReactDOM.render(
  <>
    <React.StrictMode>
      {/* <Router onUpdate={() => window.scrollTo(0, 0)}> */}
      <Router>
        <Provider store={store}>
          {/* <GlobalStyle /> */}
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
  </>, root

);

