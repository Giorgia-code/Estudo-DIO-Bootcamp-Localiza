const Item = props => {
  return (
    <a
      href="/"
      className="list-group-item list-group-item-action list-group-item-dark"
    >
      {props.texto}
    </a>
  )
}
export default Item

// Outra forma de colocar propriedades é no lugar de props.texto, usar props.children isso fará com que a tag vire uma tag html, ou seja, voce abre e fecha ela e pode colocar qualquer propriedade dentro. Exemplo: <Item>Item 1</Item>
