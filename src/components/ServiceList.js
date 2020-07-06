import React from 'react';
import Service from './Service';
import Data from '../service-data';
import '../styles/ServiceList.css';

export default function ServiceList() {
	const services = Data.map((item) => (
		<Service img={item.img} key={item.title} title={item.title} text={item.text} />
	));
	return (
		<div className="ServiceList">
			<div className="ServiceList__container">{services}</div>
		</div>
	);
}
