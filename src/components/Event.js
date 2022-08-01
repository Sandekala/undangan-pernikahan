import bg from '../assets/image/background.jpg';
import { ReactComponent as Handshake } from '../assets/image/svg/handshake.svg';
import { ReactComponent as Resepsi } from '../assets/image/svg/resepsi.svg';
import { ReactComponent as Jam } from '../assets/image/svg/jam.svg';
import { ReactComponent as Tanggal } from '../assets/image/svg/tanggal.svg';
import { ReactComponent as Map } from '../assets/image/svg/map.svg';

const Event = ({ lokakad, tglakad, hariakad, jamakad, lokresepsi, tglresepsi, hariresepsi, jamresepsi, map, btnmap }) => {
  const clickMap = (e) => {
    document.getElementById('buttonMap').setAttribute('href', btnmap);
  };
  return (
    <>
      <h1 id="event" className="pt-10 text-center font-GreatVibes text-3xl">
        Rangkaian Acara
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-20">
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className="mt-10 h-[500px] w-[300px] rounded-3xl border-8 border-solid border-primary text-center">
          <div className="m-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
            <Handshake fill="#f2e5dc" width={'60px'} />
          </div>
          <h2 className="my-5 font-Cormorant text-3xl font-bold">Akad Nikah</h2>
          <h2 className="font-bold">Bertempat di</h2>
          <p className="m-auto w-[80%] text-xs">{lokakad}</p>
          <div className="m-auto my-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <Tanggal fill="#f2e5dc" width={'30px'} />
          </div>
          <p>{hariakad}</p>
          <p className="text-xl font-bold">{tglakad}</p>
          <div className="m-auto my-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary ">
            <Jam fill="#f2e5dc" width={'25px'} />
          </div>
          <p className="font-bold">{jamakad}</p>
        </div>
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className="mt-10 h-[500px] w-[300px] rounded-3xl border-8 border-solid border-primary text-center">
          <div className="m-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
            <Resepsi fill="#f2e5dc" width={'50px'} />
          </div>
          <h2 className="my-5 font-Cormorant text-3xl font-bold">Resepsi</h2>
          <h2 className="font-bold">Bertempat di</h2>
          <p className="m-auto w-[80%] text-xs">{lokresepsi}</p>
          <div className="m-auto my-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <Tanggal fill="#f2e5dc" width={'30px'} />
          </div>
          <p>{hariresepsi}</p>
          <p className="text-xl font-bold">{tglresepsi}</p>
          <div className="m-auto my-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary ">
            <Jam fill="#f2e5dc" width={'25px'} />
          </div>
          <p className="font-bold">{jamresepsi}</p>
        </div>
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className="mt-10 h-[500px] w-[300px] rounded-3xl border-8 border-solid border-primary text-center">
          <h2 className="font-Cormorant text-3xl font-bold">Lokasi Acara</h2>
          <div className="flex items-center justify-center">
            <iframe title="Maps" width={'250px'} height={'380px'} style={{ marginBottom: 20, borderRadius: 15 }} referrerPolicy={'no-referrer-when-downgrade'} loading={'lazy'} allowFullScreen={''} src={map}></iframe>
          </div>
          <a onClick={clickMap} rel={'noreferrer'} target={'_blank'} id="buttonMap" className="cursor-pointer rounded-xl bg-primary px-4 py-2 text-secondary">
            Buka Maps{' '}
            <span>
              <Map className="inline w-5 animate-bounce" />
            </span>{' '}
          </a>
        </div>
      </div>
    </>
  );
};
export default Event;
