import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HeaderFooter from './HeaderFooter';
import ContactUs from './ContactUS';
import Seo from './Seo';
import DownFooter from './DownFooter';

export default function Footer() {
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
      <HeaderFooter />

      <ContactUs />
      <Seo />
      <DownFooter />
    </>
  );
}
