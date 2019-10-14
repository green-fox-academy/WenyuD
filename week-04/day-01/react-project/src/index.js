import React from 'react';
import ReactDOM from 'react-dom';

import Container from './container';
import data from './data';


let container = <Container data = {data}/>
ReactDOM.render(container, document.getElementById('react-container'));