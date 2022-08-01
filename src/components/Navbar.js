import { ReactComponent as Home } from '../assets/image/svg/home.svg';
import { ReactComponent as MempelaiSVG } from '../assets/image/svg/mempelai.svg';
import { ReactComponent as Clock } from '../assets/image/svg/clock.svg';
import { ReactComponent as Camera } from '../assets/image/svg/camera.svg';

const Navbar = () => {
  return (
    <>
      <div className="fixed bottom-0 z-10 flex h-20 w-full items-center rounded-t-3xl bg-[#251f19] text-secondary">
        <nav className="w-full">
          <ul className="flex flex-row justify-evenly">
            <li>
              <a href="#home">
                <Home className="m-auto" />
                Home
              </a>
            </li>
            <li>
              <a href="#pembuka">
                <MempelaiSVG className="m-auto" />
                Mempelai
              </a>
            </li>
            <li>
              <a href="#event">
                <Clock className="m-auto" />
                Acara
              </a>
            </li>
            <li>
              <a href="#moment">
                <Camera className="m-auto" />
                Moment
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
