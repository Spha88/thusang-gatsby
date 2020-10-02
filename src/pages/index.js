import React from "react";
import Layout from '../components/UI/Layout';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Mission from '../components/Mission/Mission';
import Help from '../components/Help/Help';
import HowToHelp from '../components/HowToHelp/HowToHelp';
import ContactUs from '../components/ContactUs/ContactUs';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Mission />
      <Help />
      <HowToHelp />
      <ContactUs />
    </Layout>
  )
}
