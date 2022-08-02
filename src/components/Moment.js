import DynamicGallery from './DynamicGallery';
const Moment = () => {
  return (
    <>
      <div id="moment" className="mb-20 text-center">
        <h1 className="pt-8 text-center font-GreatVibes text-3xl" data-aos="zoom-in" data-aos-duration="1000">
          Moment Kami
        </h1>
        <p className="mt-5" data-aos="flip-left" data-aos-duration="1000">
          "Jalan masih teramat jauh, mustahil berlabuh bila dayung tak terkayuh. Maaf cintaku, Aku nasehati kamu."
        </p>
        <p className="mt-5" data-aos="fade-up" data-aos-duration="1000">
          "Iwan Fals - Maaf Cintaku"
        </p>
      </div>
      <div className="mb-20">
        <DynamicGallery />
      </div>
    </>
  );
};

export default Moment;
