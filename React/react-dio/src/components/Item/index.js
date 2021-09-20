const Item = ({ children }) => {
  return (
    <a
      href="/"
      className="list-group-item list-group-item-action list-group-item-dark"
    >
      {children}
    </a>
  )
}
export default Item

// Outra forma de colocar propriedades é no lugar de children, usar props.texto  isso fará com que a tag vire uma tag html, ou seja, voce abre e fecha ela e pode colocar qualquer propriedade dentro. Exemplo: <Item texto="Item 1" />
