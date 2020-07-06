import React from 'react';
import Hero from '../components/Hero';
import ServiceList from '../components/ServiceList';
import img from '../rafting-tarom-naslovna-slider.jpg';

export default function Page() {
  return (
    <>
      <Hero img={img}/>
      <ServiceList />
    </>
  );
}
