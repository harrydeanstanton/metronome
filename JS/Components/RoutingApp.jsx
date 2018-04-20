import React from 'react'
import {Header} from "./Header/Header.jsx";
import {Metronome} from "./Body/Metronome.jsx";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export class RoutingApp extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Header/>
                    <Metronome />
                </div>
            </HashRouter>
        )

    }
}