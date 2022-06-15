import { useState, useEffect } from "react"

function App() {
	const [isLoaded, setIsLoaded] = useState(false)
	const [randomDog, setRandomDog] = useState("")

	useEffect(() => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((response) => response.json())
			.then((data) => {
				setRandomDog(data.message)
				setIsLoaded(!isLoaded)
			})
	}, [])
	if (!isLoaded) return <p>Loading...</p>

	return (
		<div>
			<img src={randomDog} alt="A Random Dog" />
		</div>
	)
}

export default App
