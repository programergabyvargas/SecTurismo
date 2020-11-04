import React, { Component } from "react";

/*
    Ej de uso: <GoogleMap lat="-33.6576955" lng="-65.4579169" zoom="10" gwidth="100%" gheight="400px" />
*/

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            id: "",
            lat: 0,
            lng: 0,
            zoom: 13,
            gwidth: "100%",
            gheight: "100%",
            marker: null,
            maptype: "roadmap"
        }
        this.setMap = this.setMap.bind(this);
    }

    setMap(id) {
        this.setState({
            id: id,
            lat: parseFloat(this.props.lat, 10),
            lng: parseFloat(this.props.lng, 10),
            zoom: parseInt(this.props.zoom, 10),
            gwidth: this.props.gwidth,
            gheight: this.props.gheight
        }, () => {
            let {lat, lng, zoom} = this.state;

            let map = new window.google.maps.Map(document.getElementById(this.state.id), {
                center: {lat: lat, lng: lng},
                zoom: zoom,
                mapTypeId: "roadmap",
            });

            map.addListener("zoom_changed", () => {
                this.setState({
                    zoom: map.getZoom(),
                });
            });

            map.addListener("maptypeid_changed", () => {
                this.setState({
                    maptype: map.getMapTypeId(),
                });
            });

            let marker = new window.google.maps.Marker({
                map: map,
                position: {lat: lat, lng: lng},
            });

            this.setState({
                marker: marker
            });

        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {
            this.setMap();
        }
    }

    componentDidMount() {
        this.setState({
            id: "map-" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
        }, () => {
            this.setMap(this.state.id);
        })
    }

    render() {
        return(
            <React.Fragment>
                <div id={`${this.state.id}`} className="gmapa" />
                <style jsx="true">{`
                    .gmapa {
                        width: ${this.state.gwidth};
                        height: ${this.state.gheight};
                    }
                `}</style>
            </React.Fragment>
        );
    }
}

export default GoogleMap;