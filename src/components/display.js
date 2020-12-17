//Importa do React a classe Components
import React, { Component } from 'react';

//Cria uma classe Display que é uma extensão de Components
class Display extends Component {
  //render() é a função no React.js responsável por renderizar alguma informação para o usuário
  render() {
    //no caso irá renderizar uma div com tais classes e tais valores
    const classes = this.props.value === `Erro: não dá para dividir por zero`
    ? "display borderBlack redFlag"
    : "display borderBlack";
    return (
    <div className={classes}>
      {this.props.value}
    </div>
    )
  }
}

//usando 'export default' não será necessário usar '{}' na hora de importar
export default Display;