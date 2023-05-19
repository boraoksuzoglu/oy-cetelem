import React, { useState, useContext } from 'react'

import TallyItem from './TallyItem'
import HistoryContext from '../contexts/HistoryContext'

import { ToastContainer, toast } from 'react-toastify'

import TayyipPhoto from '../assets/images/erdogan.png'
import KemalPhoto from '../assets/images/kemal.jpg'

function Tally() {
	const [tayyip, setTayyip] = useState(0)
	const [kemal, setKemal] = useState(0)
	const [invalid, setInvalid] = useState(0)
	const [disable, setDisable] = useState(false)

	const { history, setHistory } = useContext(HistoryContext)

	function disableAction() {
		setDisable(true)

		setTimeout(() => {
			setDisable(false)
		}, 500)
	}

	function save() {
		toast.success('Çetele kaydedildi.', {
			autoClose: 1500,
			theme: 'dark',
		})

		// set time hh:mm:ss for example: 02:07:09
		const time = new Date().toLocaleTimeString('tr-TR')

		// save localstorage as object in array by time
		const data = {
			time: time,
			tayyip: tayyip,
			kemal: kemal,
			invalid: invalid,
		}

		setHistory([...history, data])

		localStorage.setItem('data', JSON.stringify([...history, data]))
	}

	function reset() {
		setTayyip(0)
		setKemal(0)
		setInvalid(0)

		toast.success('Çetele sıfırlandı.', {
			autoClose: 1500,
			theme: 'dark',
		})
	}

	function add(aday) {
		if (disable) {
			return toast.error('Lütfen bekleyin.', {
				autoClose: 500,
				theme: 'dark',
			})
		} else {
			disableAction()
		}

		if (aday === 'tayyip') {
			setTayyip(tayyip + 1)
		} else if (aday === 'kemal') {
			setKemal(kemal + 1)
		} else if (aday === 'invalid') {
			setInvalid(invalid + 1)
		}
	}

	function subtract(aday) {
		if (disable) {
			return toast.error('Lütfen bekleyin.', {
				autoClose: 500,
				theme: 'dark',
			})
		} else {
			disableAction()
		}

		if (aday === 'tayyip' && tayyip > 0) {
			setTayyip(tayyip - 1)
		} else if (aday === 'kemal' && kemal > 0) {
			setKemal(kemal - 1)
		} else if (aday === 'invalid' && invalid > 0) {
			setInvalid(invalid - 1)
		}
	}

	return (
		<>
			<ToastContainer />
			<div className="header-container">
				<div className="button-group">
					<button onClick={() => reset()} className="btn btn-danger reset-button">
						Sıfırla
					</button>
					<button onClick={() => save()} className="btn btn-success save-button">
						Kaydet
					</button>
				</div>
			</div>

			<div className="tally">
				<div className="tally_item tally_single">
					<h2>Toplam Kullanılan Oy</h2>
					<p className="oy">{tayyip + kemal + invalid}</p>
				</div>
				<TallyItem aday="tayyip" photo={TayyipPhoto} count={tayyip} add={add} subtract={subtract} />
				<TallyItem aday="kemal" photo={KemalPhoto} count={kemal} add={add} subtract={subtract} />
				<div className="tally_item tally_single">
					<h2>Geçersiz Oy</h2>
					<p className="oy">{invalid}</p>
					<div className="button-group">
						<button className="btn btn-danger" onClick={() => subtract('invalid')}>
							-
						</button>
						<button className="btn btn-success" onClick={() => add('invalid')}>
							+
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Tally
