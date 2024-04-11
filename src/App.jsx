import { useState } from 'react'
const tg = window.Telegram.WebApp
import './App.css'

function App() {
	const onClose = () => {
		tg.close()
	}
	return (
		<>
			<button onClick={onClose}>Закрыть</button>
		</>
	)
}

export default App
