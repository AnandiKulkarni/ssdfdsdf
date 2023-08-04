export default {
	dog: async () => {
		setInterval(() => {
			storeValue('imagesApi','https://dog.ceo/api/breeds/image/random')
			storeValue('factsApi', 'https://dog-api.kinduff.com/api/facts') 
				.then(() => {
				console.log('running doggo API', appsmith.store.imagesApi, appsmith.store.factsApi)
				petImages.run()
				petFacts.run()
			})}, 8000, 'doggo') 
	},
	cat: () => {
		setInterval(() => {
			storeValue('imagesApi','https://api.thecatapi.com/v1/images/search')
			storeValue('factsApi', 'https://catfact.ninja/fact')
				.then(() => {
				petImages.run()
				petFacts.run()
			})}, 8000, 'kitty ')	
	}
}