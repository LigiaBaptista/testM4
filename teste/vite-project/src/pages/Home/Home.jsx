import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/CarrosselPage/CarrosselPage';
import Filmes from '../../components/CarrosselPage/FilmesCarousel';
import Series from '../../components/CarrosselPage/SeriesCarousel';
import Musicas from '../../components/CarrosselPage/MusicasCarousel';
import Container from 'react-bootstrap/Container';


export default function Home(){
  return(
    <>
    <Header/>
    < Container className="d-flex flex-column justify-content-center">
     
      <Carousel />
        <Filmes/>
        <Series/>
        <Musicas/>
    </Container>
    <Footer/>
    </>
  )
}