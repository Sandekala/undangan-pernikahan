import './App.css';
import Container from './components/Container';
import Home from './components/Home';
import Hero from './components/Hero';
import Mempelai from './components/Mempelai';
import SectionPembuka from './components/SectionPembuka';
import Batas from './components/Batas';
import MempelaiCard from './components/MempelaiCard';
import pria from './assets/image/pengantin/pria.jpg';
import wanita from './assets/image/pengantin/wanita.jpg';
import ContainerPrimary from './components/ContainerPrimary';
import SectionDoa from './components/SectionDoa';
import LoveStory from './components/LoveStory';
import foto from './assets/image/pengantin/pengantin.jpg';
import Batas2 from './components/Batas2';
import ContainerSecondary from './components/ContainerSecondary';
import Event from './components/Event';
import Moment from './components/Moment';
import Penutup from './components/Penutup';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Audio from './components/Audio';
import backsound from './assets/Aku Ingin.mp3';
import Cover from './components/Cover';
import Aos from 'aos';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({
      once: false,
    });
  }, []);
  return (
    <>
      <Cover pria={'Pria'} wanita={'Wanita'} />
      <Container>
        <Home>
          {/* foto mempelai */}
          <Hero src={foto} alt="Foto Pengantin" />
          {/* tanggal resepsi */}
          {/* { pria, wanita, tahun, bulan harus -1, tanggal, jam, menit } */}
          <Mempelai pria={'Mempelai Pria'} wanita={'Mempelai Wanita'} tahun={2022} bulan={10} tanggal={16} jam={8} menit={0} />

          <Audio musik={backsound} />
        </Home>
      </Container>
      <Batas />
      <Container>
        <SectionPembuka />
        {/* { panggilan, nama, anak, bapak, ibu, foto, alt, ig } */}
        <div className="flex flex-row flex-wrap justify-evenly">
          <MempelaiCard ig={'http://www.instagram.com'} foto={pria} panggilan={'Pria'} nama={'Mempelai Pria'} anak={'Putra pertama'} bapak={'Adam'} ibu={'Hawa'} alt={'Foto Pria'} />
          <MempelaiCard ig={'http://www.instagram.com'} foto={wanita} panggilan={'Wanita'} nama={'Mempelai Wanita'} anak={'Putri pertama'} bapak={'Adam'} ibu={'Hawa'} alt={'Foto Wanita'} />
        </div>
      </Container>
      <Batas />
      <ContainerPrimary>
        <SectionDoa />
        {/* { judul1, judul2, judul3, foto1, foto2, foto3, alt1, alt2, alt3 } */}
        <LoveStory tglHub1={'Agustus 2021'} tglHub2={'September 2021'} tglHub3={'November 2021'} judul1={'Pertama Bertemu'} judul2={'Menjalin Hubungan'} judul3={'Tunangan'} foto1={foto} foto2={foto} foto3={foto} alt1={'tes1'} alt2={'tes2'} alt3={'tes3'} />
      </ContainerPrimary>
      <Batas2 />
      <ContainerSecondary>
        {/* { lokakad, tglakad, hariakad, jamakad, lokresepsi, tglresepsi, hariresepsi, jamresepsi, map, btnmap } */}
        <Event
          btnmap={'https://goo.gl/maps/VaGfsgRry7iHPr5Z8'}
          map={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1879.8550253483004!2d108.72846159263833!3d-7.616526043866121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e659c1a5e335303%3A0x49bafcc9e6c64ec4!2zN8KwMzYnNTkuOSJTIDEwOMKwNDMnMzkuNCJF!5e0!3m2!1sid!2sid!4v1658989884741!5m2!1sid!2sid'}
          lokakad={'Jl. Gorda RT 01/01 Desa Banjarharja Kec. Kalipucang Kab. Pangandaran Prov. Jawa Barat'}
          tglakad={'16 November 2022'}
          jamakad={'08:00 WIB'}
          hariakad={'Sabtu'}
          hariresepsi={'Sabtu'}
          lokresepsi={'Jl. Gorda RT 01/01'}
          tglresepsi={'16 November 2022'}
          jamresepsi={'10:00 WIB s/d 14:00 WIB'}
        />
      </ContainerSecondary>
      <Batas />
      <ContainerPrimary>
        <Moment />
      </ContainerPrimary>
      <Batas2 />
      <ContainerSecondary>
        {/* { pria, wanita } */}
        <Penutup pria={'Mempelai Pria'} wanita={'Mempelai Wanita'} />
      </ContainerSecondary>
      <Batas />
      <ContainerPrimary>
        <Footer />
      </ContainerPrimary>
      <Navbar />
    </>
  );
}

export default App;
