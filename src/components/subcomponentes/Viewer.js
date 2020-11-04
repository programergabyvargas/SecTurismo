import React, { Component } from "react";

class Viewer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			preset: {
				items_visibles: 1,
				total_paginas: 0,
				total_items: 0,
				pagina_actual: 1
			},
			visibility: []
		};
		this.setPagina = this.setPagina.bind(this);
		this.movePageBack = this.movePageBack.bind(this);
		this.movePageFoward = this.movePageFoward.bind(this);
		this.calcular = this.calcular.bind(this);
	}

	movePageBack() {
		let pagina = this.state.preset.pagina_actual - 1;
		if(pagina < 1) {
			pagina = 1;
		}
		this.setPagina(pagina);
	}

	movePageFoward() {
		let pagina = this.state.preset.pagina_actual + 1;
		if(pagina > this.state.preset.total_paginas) {
			pagina = this.state.preset.total_paginas;
		}
		this.setPagina(pagina);
	}

	setPagina(nro_pagina) {
		let mostrar_desde = (nro_pagina * this.state.preset.items_visibles) - (this.state.preset.items_visibles - 1);
		let mostrar_hasta = (nro_pagina * this.state.preset.items_visibles);
		if(mostrar_hasta > this.state.preset.total_items) {
			mostrar_hasta = this.state.preset.total_items;
		}
		this.setState({
			preset: {
				...this.state.preset,
				pagina_actual: nro_pagina
			}
		});
		let buffer = Object.assign([], this.state.visibility);
		for(let i=0; i < buffer.length; i++) {
			if(((i + 1) >= mostrar_desde) && ((i + 1) <= mostrar_hasta)) {
				buffer[i] = {display: "block"};
			} else {
				buffer[i] = {display: "none"};
			}
		}
		this.setState({
			visibility: buffer
		});
	}

	calcular() {
		//Calculos
		let total = parseInt(React.Children.count(this.props.children));
		let visibles = parseInt(this.props.visibles, 10);
		let paginas = parseInt((total / visibles), 10);
		if((total % visibles) > 0) {
			paginas++;
		}
		//Generar Buffer de Estado
		let buffer = [];
		for(let i=0; i < total; i++) {
			buffer.push({display: "none"});
		}
		this.setState({
			visibility: buffer
		}, () => {
			this.setState({
				loading: false,
				preset: {
					...this.state.preset,
					items_visibles: visibles,
					total_items: total,
					total_paginas: paginas
				}
			}, () => {
				if(total > 0 && visibles > 0) {
					this.setPagina(1);
				}
			});
		});
	}

	componentDidUpdate(preProps) {
		if((this.state.preset.total_items !== React.Children.count(this.props.children)) || this.props.visibles !== preProps.visibles) {
			this.calcular();
		}
	}

	componentDidMount() {
		this.calcular();
	}

	render() {
		const paginas = [];
		for(let i = 1; i < (this.state.preset.total_paginas + 1); i++) {
			if(i===this.state.preset.pagina_actual) {
				paginas.push(<li key={`btn-pag-${i}`} className="selected" onClick={(e) => this.setPagina(i)}>{i}</li>);
			} else {
				paginas.push(<li key={`btn-pag-${i}`} onClick={(e) => this.setPagina(i)}>{i}</li>);
			}
		}
		let i = -1;
		const childrens = React.Children.map(this.props.children, (children, index) => {
			i++;
			return(
				<div key={`d-${index}`} style={this.state.visibility[i]} className="animated zoomIn">
					{children}
				</div>
			);
		});
		return (
			<React.Fragment>
			{
				this.state.loading ?
				"Cargando..."
				:
				<div className="Viewer">
					<div className="btn-left" onClick={this.movePageBack}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
					</div>
					<div className="items">
						{childrens}
					</div>
					<div className="btn-right" onClick={this.movePageFoward}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
					</div>
					<div className="pages">
						<ul>
							{paginas}
						</ul>
					</div>
				</div>
			}
			</React.Fragment>
		);
	}
}

export default Viewer;
