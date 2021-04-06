import { registerImage } from './lazy.js'
//Crear imagen
//`<div class="p-4"><img class="mx-auto" src="https://randomfox.ca/images/2.jpg" width="320" alt="fox"></div>`
//agregar #imagen
const minimum = 1
const maximum = 122
const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum)

const createImageNode = () => {
	const container = document.createElement('div')
	container.className = 'p-4'

	const imagen = document.createElement('img')
	imagen.className = 'mx-auto'
	imagen.width = '320'
	imagen.src = `https://randomfox.ca/images/${random()}.jpg`

	container.appendChild(imagen)

	return container
}

const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button')

const addImages = () => {
	const newImage = createImageNode()
	mountNode.append(newImage)
	registerImage(newImage)
}

addButton.addEventListener('click', addImages)
