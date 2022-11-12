import { useEffect } from 'react';
import { Normal } from '../../layouts';
import { Products, Cta, Categories, Hero } from '../../components';
import { Headit } from '../../../data/meta';

export default function Home() {
  return (
    <Normal>
      <Headit test='test' />
      <Hero />
      <Categories />
      <Products/>
      <Cta />
    </Normal>
  );
}
