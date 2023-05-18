import React, { useContext } from 'react'

import HistoryContext from '../contexts/HistoryContext'

function History() {
	const { history, setHistory } = useContext(HistoryContext)

	function resetHistory() {
		setHistory([])
		localStorage.clear()
	}

	if (!history || history.length === 0) {
		return null
	}

	return (
		<div className="history">
			<h2>Kaydedilen Veriler</h2>
			<table>
				<thead>
					<tr>
						<th>Saat</th>
						<th>Tayyip</th>
						<th>Kemal</th>
						<th>Geçersiz</th>
					</tr>
				</thead>
				<tbody>
					{history.map((item, index) => (
						<tr key={index}>
							<td>{item.time}</td>
							<td>{item.tayyip}</td>
							<td>{item.kemal}</td>
							<td>{item.invalid}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={() => resetHistory()} className="btn btn-danger">
				Temizle
			</button>
		</div>
	)
}

export default History
