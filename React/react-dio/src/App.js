import Item from './components/Item'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
      <Card />
    </>
  )
}

export default App

/* Observacoes importantes
Tag vazia: <> Usamos essa tag vazia para trabalhar com componentes irmaos e nao ter que criar varias divs, pois só dessa forma o React aceita trabalharmos com componentes irmaos

Class: no React todo class chama-se className

*/
