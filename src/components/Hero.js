const Hero = ({ src, alt }) => {
  return <img src={src} alt={alt} className="relative z-10 m-auto h-56 w-56 rounded-full border-2 border-solid border-white" data-aos="zoom-in"></img>;
};

export default Hero;
