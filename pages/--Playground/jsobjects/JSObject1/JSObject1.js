export default {
	myFun: ()=>{
		const byteArray = new Uint8Array(1);
		const randomValue = crypto.getRandomValues(byteArray);
		console.log(randomValue)
		return randomValue;
	},
		progressBar: () => {
		return Math.floor(Math.random() * 100) + 1
	}
}