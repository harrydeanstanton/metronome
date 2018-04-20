import React from 'react'
import {Title} from "./Title.jsx";


export class Header extends React.Component{
    render(){
        return(
            <header>
                <div className={'container'}>
                    <Title/>
                </div>
            </header>
        )
    }
}