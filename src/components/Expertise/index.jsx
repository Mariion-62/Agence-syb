import SliderExpertise from 'components/Expertise/SliderExpertise';
import BoxDownExpertise from 'components/Expertise/BoxDownExpertise';
import HeaderExpertise from 'components/Expertise/HeaderExpertise';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Expertise() {
  // animation for to do appear text
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200,
      mirror: true,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <HeaderExpertise />
      <SliderExpertise />
      <BoxDownExpertise />
    </>
  );
}
