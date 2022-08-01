const Penutup = ({ pria, wanita }) => {
  return (
    <>
      <div className="text-center">
        <h1 className="py-10 font-GreatVibes text-3xl">Akhir Kata</h1>
        <p className="mb-10">Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Sahabat berkenan hadir untuk memberikan doa restu kepada kedua mempelai. Atas kehadiran serta doa restunya, kami ucapkan terima kasih.</p>
        <p className="mb-5 font-bold italic">“Semoga Allah menghimpun yang terserak dari keduanya, memberkati mereka berdua dan kiranya Allah meningkatkan kualitas keturunan mereka, menjadikannya pembuka pintu rahmat, sumber ilmu dan hikmah serta pemberi rasa aman bagi umat.”</p>
        <p className="italic">(Doa Nabi Muhammad SAW, pada pernikahan putrinya Fatimah Azzahra dengan Ali Bin Abi Thalib)</p>
        <p className="my-20 font-GreatVibes text-4xl">
          {pria} &amp; {wanita}
        </p>
      </div>
    </>
  );
};

export default Penutup;
