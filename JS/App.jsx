import React from 'react';
import ReactDOM from 'react-dom';
import {RoutingApp} from "./Components/RoutingApp.jsx";


document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <RoutingApp />,
        document.getElementById('app')
    );
});

