import { IoMdMail } from 'react-icons/io';
import Hero from './Hero';
import foto from '../assets/image/pengantin/pengantin.jpg';

const Cover = ({ pria, wanita }) => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const tujuan = params.to;
  const penerimaUndangan = tujuan.toUpperCase();

  const open = () => {
    const cover1 = document.getElementById('cover1');
    const cover2 = document.getElementById('cover2');
    const elementBuka = document.querySelectorAll('.buka');
    elementBuka.forEach((element) => {
      element.classList.add('opacity-0');
    });
    cover1.classList.add('w-0');
    cover2.classList.add('w-0');
  };
  return (
    <>
      <div id="cover1" className="fixed left-0 z-20 h-[100vh] w-[50%] bg-primary transition-all duration-500"></div>

      <div id="cover2" className="fixed right-0 z-20 h-[100vh] w-[50%] bg-primary transition-all duration-500">
        <div className="buka absolute -left-28 top-[10%] transition-all duration-500">
          <Hero src={foto} alt="Foto Pengantin" />
        </div>
        <div className="buka absolute -left-[100%] top-[50%] text-center text-secondary transition-all duration-500  md:top-[40%] md:-left-[65%] lg:top-[43%] lg:-left-[35%]">
          <h1 className="pb-10 font-GreatVibes text-3xl">
            {pria} &amp; {wanita}
          </h1>
          <h2>Kepada Bapak/Ibu/Sahabat</h2>
          <p className="my-7 text-xl">{penerimaUndangan}</p>
          <p>Kami mengundang Anda untuk menghadiri acara pernikahan kami.</p>
        </div>
        <button onClick={open} className="buka absolute -left-24 top-[80%] z-30 flex flex-row items-center gap-3 rounded-xl bg-black px-4 py-1  text-secondary transition-all duration-500 md:top-[60%] lg:top-3/4">
          <IoMdMail /> Buka Undangan
        </button>
      </div>
    </>
  );
};
export default Cover;
