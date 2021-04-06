const isIntersecting = entry => {
	//200px lejos de la pantalla -- X, Y
	return entry.isIntersecting // true dentro de la pantalla o falso
}

const loadImage = entry => {
	const container = entry.target // container (DIV)
	const image = container.firstChild
	const url = image.dataset.src
	//LOad image
	image.src = url
	//des registra la imagen (unlisten)
	observer.unobserve(container)
}

const observer = new IntersectionObserver(entries => {
	entries.filter(isIntersecting).forEach(loadImage)
})
//
export const registerImage = imagen => {
	//Intersection Observer -> observer(imagen)
	observer.observe(imagen)
}
