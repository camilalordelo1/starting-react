import React, { Component } from 'react';
import './Calculadora.css'

export default class Calculadora extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            value: "Somar",
            value1: 0,
            value2: 0,
            resultado: 0
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.soma = this.soma.bind(this);
        this.sub = this.sub.bind(this);
        this.mult = this.mult.bind(this);
        this.div = this.div.bind(this);
        
    }

    soma(){
        let resultado = this.resultado
        this.resultado = Number(this.state.value1) + Number(this.state.value2)
        this.setState({ resultado })
        return resultado;
    }

    sub(){
        let resultado = this.resultado
        this.resultado = Number(this.state.value1) - Number(this.state.value2)
        this.setState({ resultado })
        return resultado;
    }

    mult(){
        let resultado = this.resultado
        this.resultado = Number(this.state.value1) * Number(this.state.value2)
        this.setState({ resultado })
        return resultado;
    }

    div(){
        let resultado = this.resultado
        this.resultado = parseFloat(this.state.value1) / parseFloat(this.state.value2).toFixed(2)
        this.setState({ resultado })
        return resultado;
    } 
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        switch (this.state.value) {
            case "Somar": this.soma();
            break;
            case "Subtrair": this.sub();
            break;
            case "Multiplicar": this.mult();
            break;
            case "Dividir": this.div();
            break;
        }
        event.preventDefault();
    }



    render() {
        return (
            <div className="container  shadow p-3 mb-5 bg-white rounded m-3">
                <div className="jumbotron"> 
                    <h3 className="display-6"> Exercício 2 </h3>
                </div>
                <div className="row mx-auto">
                    <label className=""> Valor 1: </label>
                    <input className="ml-3 form-control w-50 " type="number" onChange={(event)=>{this.setState({value1:event.target.value})}}></input>
                </div>

                
                <div className="row mx-auto mt-2"> 
                <label> Valor 2: </label>
                    <input className="ml-3 form-control w-50" type="number" onChange={(event)=>{this.setState({value2:event.target.value})}}></input>
                </div>


                
                <div className="d-flex flex-fill container row mx-auto mt-2 justify-content-center ">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Escolha sua operação: &nbsp; &nbsp;
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="Somar"> Somar </option>
                            <option value="Subtrair"> Subtrair </option>
                            <option value="Multiplicar"> Multiplicar </option>
                            <option value="Dividir"> Dividir </option>
                        </select>
                        </label>
                        <input className="btn btn-primary m-2" type="submit" value="Enviar"/>
                    </form>
                </div>
                

            <div className="row mt-3 mx-auto ">
                <h3 className="pb-3">Resultado: {this.resultado}</h3>
            </div>
                
            </div>
        )
    }
}


