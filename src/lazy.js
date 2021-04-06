const isIntersecting = entry => {
	//200px lejos de la pantalla -- X, Y
	return entry.isIntersecting // true dentro de la pantalla o falso
}

const accion = entry => {
	const nodo = entry.target
	console.log('Holis')

	//des registra la imagen (unlisten)
	observer.unobserve(nodo)
}

const observer = new IntersectionObserver(entries => {
	entries.filter(isIntersecting).forEach(accion)
})
//
export const registerImage = imagen => {
	//Intersection Observer -> observer(imagen)
	observer.observe(imagen)
}
