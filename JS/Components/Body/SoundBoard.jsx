import React from 'react'

export class SoundBoard extends React.Component{
    render(){
        return(
            <div>
                <audio src="../../../assets/sounds/accent.wav" ref={el => this.audio = el}></audio>
                <audio src="../../../assets/sounds/beat.wav" ref={el => this.audio = el}></audio>

            </div>
        )
    }
}