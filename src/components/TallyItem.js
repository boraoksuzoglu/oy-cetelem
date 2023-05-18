import React from 'react'

function TallyItem({ aday, photo, count, add, subtract }) {
	return (
		<div className="tally_item">
			<img src={photo} alt="Kemal Kılıçdaroğlu" />
			<h3>{aday == 'kemal' ? 'Kılıçdaroğlu' : 'Erdoğan'}</h3>
			<p className="oy">{count}</p>
			<div className="button-group">
				<button className="btn btn-danger" onClick={() => subtract(aday)}>
					-
				</button>
				<button className="btn btn-success" onClick={() => add(aday)}>
					+
				</button>
			</div>
		</div>
	)
}

export default TallyItem
