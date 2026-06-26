import { unstable_setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import ComboSets from '@/components/ComboSets';
import SignatureDishes from '@/components/SignatureDishes';
import HowToOrder from '@/components/HowToOrder';
import Gallery from '@/components/Gallery';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ComboSets />
        <Menu />
        <SignatureDishes />
        <HowToOrder />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
