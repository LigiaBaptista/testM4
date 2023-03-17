import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Avatar from '../../assets/img/avatar.jpg';
import AsBranquelas from '../../assets/img/asbranquelas.jpg';
import TudoEm from '../../assets/img/TudoEm.jfif'
import Titanic from '../../assets/img/titanic.jfif'
import Clube from '../../assets/img/clubedaluta.jfif'
import Barbie from '../../assets/img/barbie.jpg'

const items = [
    
    <div key={1}><Card style={{ width: '18rem', backgroundColor:"#101010"}}>
          <Card.Img variant="top" src={Avatar}/>
           <Card.Body>
             <Card.Title style={{textAlign:'center', fontFamily:'Inter', fontSize:25, color:"white"}}>Avatar 2</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={2}> <Card style={{ width: '18rem', backgroundColor:"#101010"}}>
          <Card.Img variant="top" src={AsBranquelas}/>
         <Card.Body>
            <Card.Title style={{textAlign:'center', fontFamily:'Inter', fontSize:25, color:"white"}}>As Branquelas</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={3}><Card style={{ width: '18rem', backgroundColor:"#101010"}}>
         <Card.Img variant="top" src={TudoEm}/>
         <Card.Body>
           <Card.Title style={{textAlign:'center', fontFamily:'Inter', fontSize:25, color:"white"}}>Tudo em Todo ... </Card.Title>
         </Card.Body>
      </Card></div>,
    <div key={4}><Card style={{ width: '18rem', backgroundColor:"#101010"}}>
    <Card.Img variant="top" src={Titanic}/>
         <Card.Body>
            <Card.Title style={{textAlign:'center', fontFamily:'Inter', fontSize:25, color:"white"}}>Titanic</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={5}><Card style={{ width: '18rem', backgroundColor:"#101010"}}>
        <Card.Img variant="top" src={Clube}/>
          <Card.Body>
            <Card.Title style={{textAlign:'center', fontFamily:'Inter', fontSize:25, color:"white"}}>Clube da Luta</Card.Title>
         </Card.Body>
       </Card></div>,
        <div key={6}><Card style={{ width: '18rem', backgroundColor:"#101010"}}>
        <Card.Img variant="top" src={Barbie}/>
          <Card.Body>
            <Card.Title style={{textAlign:'center', fontFamily:'Inter', fontSize:25, color:"white"}}>Barbie Fairytopia</Card.Title>
         </Card.Body>
       </Card></div>,
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  
  const settings = {
    arrows: true,
    className: '',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: responsive,
  };
  const FilmesCarousel = () => {
    return (
     <>
      <h4 className="text-white">Filmes</h4>
      <Carousel {...settings}>
        {items}
      </Carousel>
      </>
    );
  };
  

  export default FilmesCarousel;