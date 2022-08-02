const FotoCard = ({ judul, foto, alt, tglHub }) => {
  return (
    <>
      <div>
        <h1 className="mb-5">{tglHub}</h1>
        <div className="mb-10 max-w-[400px] rounded-md bg-secondary p-4 font-bold" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="500">
          <h2 className="mb-5 text-primary">{judul}</h2>
          <img src={foto} alt={alt} className="m-auto"></img>
        </div>
      </div>
    </>
  );
};

export default FotoCard;
