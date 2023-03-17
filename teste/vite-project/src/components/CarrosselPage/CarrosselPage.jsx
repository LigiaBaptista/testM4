import Carousel from 'react-bootstrap/Carousel';
import Avatar from '../../assets/img/avatar.jpg';
import TudoEm from '../../assets/img/TudoEm.jfif';
import AsBranquelas from '../../assets/img/asbranquelas2.jpg'

function CarrosselPage() {
  return (
    <Carousel className='w-50 '>
      <Carousel.Item>
        <img style={{ borderRadius:10}}
          className="d-block"
          src={AsBranquelas}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>As Branquelas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{width:600, height: 300, borderRadius:10 }}
          className="d-block"
          src={TudoEm}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Tudo em Todo Lugar ao Mesmo Tempo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{width:600, height: 300, borderRadius:10}}
          className="d-block"
          src={Avatar}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Avatar 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselPage;