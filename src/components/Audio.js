const Audio = ({ musik }) => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <audio src={musik} controls autoPlay={true} />
    </div>
  );
};

export default Audio;
