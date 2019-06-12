import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BarBack from "./components/BarBack"
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Router><BarBack /></Router>, document.getElementById('root'))
