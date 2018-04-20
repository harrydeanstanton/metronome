import React from 'react';
import {DancingMan} from "./DancingMan.jsx";




export class Metronome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempo: 100,
            on: false,
            class: 'dance_1',
            active: false,
            animation: {
                animationDuration: '0.6s',
                    },
            bpm: 4,
            count: 0
        };
    }





    SetTheTempo = (event) => {



        if (this.state.on ===true ) {

            clearInterval(this.IntervalId);
            this.IntervalId = setInterval(this.player, (60 / this.state.tempo) * 1000);

            this.setState({
                count: 0,
                tempo: event.target.value,
                animation:{animationDuration: 60/event.target.value + 's'}
            });
        } else {
            this.setState({
                tempo: event.target.value
            });
        }
    };




    /*changeColor =()=>{
        this.intervalId = setInterval(()=> {

            if (this.state.active === false) {
                this.setState({

                    classOne: 'dance_2',
                    active: true
                })

            } else {

                this.setState({
                    classOne: 'dance_1',
                    active: false

            })}
            },this.state.tempo)};*/



    ClickToChange = () => {

        if (this.state.on === true) {
            clearInterval(this.IntervalId);
            this.setState({
                on: false,
                class: 'dance_1'

            });
        } else {

            this.IntervalId = setInterval(this.player, (60 / this.state.tempo) * 1000);
            this.setState({
                count: 0,
                on: true,
                class: "dance_2"
            }, this.player);
        }};

        player = () => {
            let counter= this.state.count;
            let accent = this.state.bpm;


            if (counter % accent === 0) {
                    this.audio1.play();

             }else {

                    this.audio2.play();
            }

            this.setState ({
                count: (++counter ) % accent
            });
        };

        /*handleChange= (event) => {
            this.setState({
                bpm: event.target.value
            })
        };*/

    render() {

        return (
            <div className={'container'}>
                <section className={'dancing_ground'}>
                        <div className={'dancing_position'}>
                            <DancingMan class={this.state.class} style={this.state.animation}/>
                            <div className={'tempo_meter'}>{this.state.tempo}</div>
                            <input className={'tempo_bar'} type="range" min='0' max="300" onChange= {this.SetTheTempo} />
                            <input className={'start_button'} type="button" onClick={this.ClickToChange} value={this.state.on===true ? 'Stop' : 'Start'}></input>
                            <audio src="./../../../assets/sounds/accent.wav" ref={el => this.audio1 = el}/>
                            <audio src="./../../../assets/sounds/beat.wav" ref={el => this.audio2 = el}/>
                        </div>
                </section>

                <div className={'footer'}></div>

            </div>
        )
    }
}