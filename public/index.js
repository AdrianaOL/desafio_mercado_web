const agregarCarritoBtn = document.querySelectorAll('.agregar-carrito')
const alertaCompra = document.querySelector('#alert')
const compras = []
agregarCarritoBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault()
		const nombre = e.target.dataset.nombre
		compras.push(nombre)
		console.log(compras)
		alertaCompra.innerHTML = `Agregaste ${nombre} al carrito`
		alertaCompra.classList.remove('d-none')
		setTimeout(() => {
			alertaCompra.classList.add('d-none')
		}, 3000)
		agregarCompra()
	})
})

const modalContent = document.querySelector('.modal-body')
if(modalContent.textContent){
	modalContent.innerHTML = 'Carro Vacio'
}
// modalContent.innerHTML = `<p>hola</p>`
const agregarCompra = () => {
	modalContent.innerHTML = ''
	compras.forEach((compra) => {
		modalContent.innerHTML += `<p>${compra}</p>`
	})
}
