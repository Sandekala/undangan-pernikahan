const Penutup = ({ pria, wanita }) => {
  return (
    <>
      <div className="text-center">
        <h1 className="py-10 font-GreatVibes text-3xl" data-aos="zoom-in-up" data-aos-duration="1000">
          Akhir Kata
        </h1>
        <p className="mb-10" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="200">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Sahabat berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restunya, kami ucapkan terima kasih.
        </p>
        <p className="mb-5 font-bold italic" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="400">
          “Semoga Allah menghimpun yang terserak dari keduanya, memberkati mereka berdua dan kiranya Allah meningkatkan kualitas keturunan mereka, menjadikannya pembuka pintu rahmat, sumber ilmu dan hikmah serta pemberi rasa aman bagi umat.”
        </p>
        <p className="italic" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="600">
          (Doa Nabi Muhammad SAW, pada pernikahan putrinya Fatimah Azzahra dengan Ali Bin Abi Thalib)
        </p>
        <p className="my-20 font-GreatVibes text-4xl" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="800">
          {pria} &amp; {wanita}
        </p>
      </div>
    </>
  );
};

export default Penutup;
