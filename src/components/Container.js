import '../App.css';
import bg from '../assets/image/background.jpg';

const Container = ({ children }) => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }} className="pb-20 text-primary">
        {children}
      </div>
    </>
  );
};
export default Container;
