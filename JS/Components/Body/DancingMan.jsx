import React from 'react'


export class DancingMan extends React.Component{




    render(){
        return(
            <section className={'dancer'}>
                <div className={'torso '+ this.props.class} style={ this.props.style}></div>
                <div className={'head ' + this.props.class} style={ this.props.style} ></div>
                <div className={'right_leg ' + this.props.class} style={ this.props.style}>
                    <div className={'right_thigh'}></div>
                    <div className={'right_calf'}></div>
                </div>
                <div className={'left_leg ' + this.props.class} style={ this.props.style}>
                    <div className={'left_thigh'}></div>
                    <div className={'left_calf'}></div>
                </div>

                    <div className={'right_upper_arm'}></div>
                    <div className={'right_forearm '+ this.props.class} style={ this.props.style}></div>


                    <div className={'left_upper_arm'}></div>
                    <div className={'left_forearm '+ this.props.class} style={ this.props.style}></div>




            </section>
        )
    }
}