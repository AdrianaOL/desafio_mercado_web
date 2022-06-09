const compras = []
const agregarCarrito = document.querySelectorAll('.agregar-carrito')

agregarCarrito.forEach(function (boton) {
  boton.addEventListener('click', function (e) {
    e.preventDefault()
    const nombre = e.target.dataset.nombre
    compras.push(nombre)
    console.log(compras)
    AgregarCompra()
  })
})
const ModalContent = document.querySelector('.modal-body')
const AgregarCompra = () => {
ModalContent.innerHTML = ''
compras.forEach(function (compra) {
  ModalContent.innerHTML += ` <li> <img src='/img/${compra}.png' alt='' class='img-fluid imagen-carrito' />
 ${compra}</li>`
})}
