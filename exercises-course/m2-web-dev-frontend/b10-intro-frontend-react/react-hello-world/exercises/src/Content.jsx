import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Component extends React.Component {
  render() {
    return conteudos.map(({ conteudo, bloco, status } ) => <li>O conteudo e {conteudo} <br />Status: {status} <br /> Bloco: {bloco}</li>)
  }
}

export default Component;