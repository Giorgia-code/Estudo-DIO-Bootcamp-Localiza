import { useState } from 'react'
import Button from '../Button'

const Card = () => {
  const [valor, setValor] = useState(0) // o useState recebe um parametro que no caso é o valor e uma funcao que no caso é setValor, e o parametro inicia com 0

  function Adicionar() {
    setValor(valor + 1) // a funcao adicionar chama a funcao setValor do useState e pega o parametro dela e adiciona +1
  }

  function Remover() {
    setValor(valor - 1) // a funcao remover chama a funcao setValor do useState e pega o parametro dela e remove -1
  }

  return (
    <div className="card">
      <div className="card-header">Meu primeiro card</div>
      <div className="card-body">
        <Button className="btn btn-success" onclick={Adicionar}>
          Adicionar
        </Button>
        <Button className="btn btn-danger" onclick={Remover}>
          Remover
        </Button>
        <p>{valor}</p>
      </div>
    </div>
  )
}

export default Card
