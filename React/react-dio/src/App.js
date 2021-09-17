import Item from './components/Item'

const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item texto="Item 1" />
        <Item texto="Item 2" />
        <Item texto="Item 3" />
      </ul>
    </>
  )
}

export default App

/* Observacoes importantes
Tag vazia: <> Usamos essa tag vazia para trabalhar com componentes irmaos e nao ter que criar varias divs, pois só dessa forma o React aceita trabalharmos com componentes irmaos

Class: no React todo class chama-se className

*/
