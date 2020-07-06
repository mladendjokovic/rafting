import React, { useState, useEffect } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/Hero.css';

export default function Hero(props) {
	const [ position, setPosition ] = useState(false);
	window.addEventListener('scroll', () => setPosition(window.pageYOffset > 300));
	return (
		<div
			className="Hero"
			style={{ backgroundSize: 'cover', backgroundRepeat: 'noRepeat', backgroundImage: `url(${props.img})` }}
		>
			<div className="Hero_top">
				<div className="Hero_top_content">
					<div className="Hero_top_contact">
						<PhoneIcon />
						<a href="/">+38765665665</a>
					</div>
					<div className="Hero_top_social-media">
						<div>
							<FacebookIcon />
							<YouTubeIcon />
							<InstagramIcon />
						</div>
						<div>
							<a href="/">Uloguj se</a>
							<a href="/">Registruj se</a>
						</div>
					</div>
				</div>
			</div>
			<nav className={position ? 'active' : ''}>
				<ul>
					<li>
						<a href="/">Aktuelno</a>
					</li>
					<li>
						<a href="/">Avanture</a>
					</li>
					<li>
						<img src="/rajska-logo.png" alt="logo" />
					</li>
					<li>
						<a href="/">O Nama</a>
					</li>
					<li>
						<a href="/">Kontakt</a>
					</li>
				</ul>
			</nav>
			<div className="Hero_text">
				<h1>Dozivite nezaboravno iskustvo</h1>
				<h3>Rafting Tarom</h3>
				<div>
					<button>Ponuda</button>
					<button>Pogledajte jos</button>
				</div>
			</div>
		</div>
	);
}
