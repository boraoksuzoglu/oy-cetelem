import React, { useContext, useState } from 'react'

import HistoryContext from './contexts/HistoryContext'

import Footer from './components/Footer'
import Header from './components/Header'
import Tally from './components/Tally'
import History from './components/History'

function App() {
	const localData = localStorage.getItem('data')

	const [history, setHistory] = useState(JSON.parse(localData) || [])

	return (
		<div className="App">
			<HistoryContext.Provider value={{ history, setHistory }}>
				<Header />
				<Tally />
				<History />
				<Footer />
			</HistoryContext.Provider>
		</div>
	)
}

export default App
