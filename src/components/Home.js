const Home = ({ children }) => {
  return (
    <>
      <div id="home" className="pb-32 text-center">
        <h1 className="mb-10 pt-20 font-Cormorant text-2xl font-bold">Pernikahan kami</h1>
        {children}
      </div>
    </>
  );
};

export default Home;
