import foto1 from '../assets/image/pengantin/logo.jpg';
import foto2 from '../assets/image/pengantin/pengantin.jpg';
import foto3 from '../assets/image/pengantin/pengantin2.jpg';
import foto4 from '../assets/image/pengantin/pria.jpg';
import foto5 from '../assets/image/pengantin/wanita.jpg';
import ResponsiveGallery from 'react-responsive-gallery';

const images = [{ src: foto1 }, { src: foto2 }, { src: foto3 }, { src: foto4 }, { src: foto5 }];
function DynamicGallery() {
  return <ResponsiveGallery images={images} useLightBox="true" numOfImagesPerRow={{ xs: 2, s: 2, m: 3, l: 3, xl: 4, xxl: 5 }} />;
}
export default DynamicGallery;
