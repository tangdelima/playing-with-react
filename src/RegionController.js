import React from 'react';

class RegionController extends React.Component {

    constructor(props){
        super(props);

        this.availableRegions = this.loadAvailableRegions();

        this.state = {
            regions: this.loadRegions(),
            creating: false,

            formName: "",
            formUf: ""
        };
    }

    cancel = () => {
        this.setState({creating: false});
    }

    initAddForm = () => {
        this.setState({creating: true});
    }

    loadRegions() {
        return [
            {
                uf: "SP",
                name: "Sao Paulo"
            },
            {
                uf: "RJ",
                name: "Rio de Janeiro"
            },
            {
                uf: "PR",
                name: "Parana"
            }
        ];
    }

    loadAvailableRegions() {
        return [
            {
                uf: "CE",
                name: "Ceara"
            },
            {
                uf: "MG",
                name: "Minas Gerais"
            },
            {
                uf: "SC",
                name: "Santa Catarina"
            }
        ];
    }

    nameChangeListener = (input) => {
        if (input && input.value !== this.state.formName) {
            this.setState({
                formName: input.value
            });
        }
    }

    ufChangeListener = (event) => {
        this.setState({
            formUf: event.target.value
        });
    }

    submitHandler = (event) => {
        console.log("submitting...");
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {
                    this.state.creating 
                    ?
                        <div>
                            <form noValidate onSubmit={this.submitHandler}>
                                <label htmlFor="name">Nome:</label> <input id="name" ref={(input) => this.nameChangeListener(input)} /> 
                                <br/>
                                <label htmlFor="uf">Estado:</label>
                                <select id="uf" value={this.state.formUf} onChange={this.ufChangeListener}>
                                    <option value={null}>Selecione</option>
                                    {this.availableRegions.map(
                                        (region) => {
                                            return (
                                                <option key={region.uf} value={region.uf}>{region.name}</option>
                                            );
                                        }
                                    )}
                                </select>
                            </form>
                            <div>
                                Nome: {this.state.formName}
                                <br/>
                                Uf:   {this.state.formUf}
                            </div>
                            <button onClick={this.submitHandler}>Salvar</button>
                            <button onClick={this.cancel}>Cancelar</button> 
                        </div>
                    :
                    (
                        <div>
                            <button onClick={this.initAddForm}>Adicionar Regiao</button>
                            <p>Regioes nesse fuso horario:</p>
                            <ul>
                                { this.state.regions.map(
                                    (region) => <li key={region.uf}>{region.name}</li>
                                ) }
                            </ul>
                        </div>
                    )
                }
            </div>
        );
    }

}

export default RegionController;