import React from 'react';
import '../styles/Service.css';

export default function Services({ img, title, text }) {
	return (
		<div className="Service">
			<div>
				<img src={img} alt={text} />
			</div>
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
}
