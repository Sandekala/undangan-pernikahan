import FotoCard from './FotoCard';
import { ReactComponent as Heart } from '../assets/image/svg/heart.svg';

const LoveStory = ({ judul1, judul2, judul3, foto1, foto2, foto3, alt1, alt2, alt3, tglHub1, tglHub2, tglHub3 }) => {
  return (
    <>
      <div className="relative mb-16">
        <h1 className="mt-28 mb-10 text-center font-GreatVibes text-3xl" data-aos="fade-up" data-aos-duration="1000">
          Kisah Cinta Kita
        </h1>

        <div className="flex flex-row justify-between gap-5 sm:md:lg:justify-center">
          <div className="relative">
            <Heart fill="#f2e5dc" className="absolute -left-3 h-8 w-8" />
            <div className="mt-8 h-[500px] w-2 bg-secondary"></div>
          </div>
          <FotoCard tglHub={tglHub1} judul={judul1} foto={foto1} alt={alt1} />
        </div>
        <div className="flex flex-row justify-between gap-5 sm:md:lg:justify-center">
          <div className="relative">
            <Heart fill="#f2e5dc" className="absolute -left-3 h-8 w-8" />
            <div className="mt-8 h-[500px] w-2 bg-secondary"></div>
          </div>
          <FotoCard tglHub={tglHub2} judul={judul2} foto={foto2} alt={alt2} />
        </div>
        <div className="flex flex-row justify-between gap-5 sm:md:lg:justify-center">
          <div className="relative">
            <Heart fill="#f2e5dc" className="absolute -left-3 h-8 w-8" />
            <div className="mt-8 h-[500px] w-2 bg-secondary"></div>
          </div>
          <FotoCard tglHub={tglHub3} judul={judul3} foto={foto3} alt={alt3} />
        </div>
        <div className="flex flex-row justify-between gap-5 sm:md:lg:justify-center">
          <div className="relative">
            <div className="absolute -left-1 h-4 w-4 rounded-full bg-secondary sm:md:lg:-left-2"></div>
          </div>
          <div className="w-[400px]"></div>
        </div>
      </div>
    </>
  );
};

export default LoveStory;
