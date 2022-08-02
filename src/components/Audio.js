const Audio = ({ musik }) => {
  return (
    <div className="mt-20 flex items-center justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
      <audio src={musik} controls autoPlay={true} />
    </div>
  );
};

export default Audio;
