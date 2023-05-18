import React from 'react'

import logo from '../assets/images/logo.png'

function Footer() {
	return (
		<footer className="footer">
			<img src={logo} alt="Türkiye Gönüllüleri" />

			<p>
				Oy sayımı esnasında müşahitlerin ve sandık görevlilerinin işini kolaylaştırmak amacıyla geliştirilmiştir.
				Veriler yalnızca kullanıcının cihazında saklanır.
			</p>

			<p className="link">
				Projeye katkıda bulunmak veya kodlarını incelemek için{' '}
				<a href="https://github.com/boraoksuzoglu/oy-cetelem">tıkla</a>.
			</p>
		</footer>
	)
}

export default Footer
