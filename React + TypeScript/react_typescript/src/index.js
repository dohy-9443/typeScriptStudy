"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
require("./index.css");
const App_1 = require("./App");
const reportWebVitals_1 = require("./reportWebVitals");
react_dom_1.default.render(<react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
