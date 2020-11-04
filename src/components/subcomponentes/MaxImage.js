import React, { Component } from "react";


/*
    <MaxImage src={} visible={} onClose={this.closeImg} />
*/

class MaxImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 0,
            visible: "hidden",
            src: ""
        };
        this.setData = this.setData.bind(this);
    }

    setData() {
        let visibilidad = "hidden";
        let top = 0; 
        if(this.props.visible === true) {
            visibilidad = "visible";
        }
        //if(document.body.scrollTop > this.state.showAt || document.documentElement.scrollTop > this.state.showAt) {
        if(document.body.scrollTop) {
            top = document.body.scrollTop;
        } else {
            top = document.documentElement.scrollTop;
        }
        this.setState({
            top: top,
            visible: visibilidad,
            src: this.props.src
        })
    }

    componentDidUpdate(prevProps) {
        if(this.props.src !== prevProps.src || this.props.visible !== prevProps.visible) {
            this.setData();
        }
    }

    componentDidMount() {
        this.setData();
    }

    render() {
        return(
            <React.Fragment>
                <div className="visor animated bounceIn delay-2s" style={{visibility: this.state.visible, top: this.state.top}}>
                    <div className="visor-content">
                        <div className="visor-close" onClick={this.props.onClose}><i className="fas fa-times"></i></div>
                        <img className="" src={this.state.src} alt="Full-View" />
                    </div>
                </div>
                <style jsx="true">{`
                    .visor {
                        visibility: hidden;
                        position: absolute;
                        top: 0;
                        width: 0;
                        width: 100%;
                        height: 100vh;
                        background-color: rgba(0, 0, 0, 0.9);
                        z-index: 999;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .visor .visor-content {
                        width: 90%;
                        height: 90%;
                        position: relative;
                    }
                    .visor .visor-content .visor-close {
                        position: absolute;
                        right: -25px;
                        top: -25px;
                        z-index: 1000;
                    }
                    .visor .visor-content .visor-close i {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: white;
                        color: black;
                    }
                    .visor .visor-content img {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: scale-down;
                        border: 1px solid #fff;
                    }
                `}</style>
            </React.Fragment>
        );
    }
}

export default MaxImage;