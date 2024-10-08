import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselCaption } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import artSculpture from './Images/artSculpture.jpg';
import moonLanding from './Images/moonLanding.jpg';
import musicNotes from './Images/musicNotes.jpg';







import './index.css';
import './Quiz.css'

export default function Homepage() {
const navigateTopic = useNavigate();

    const navigateToQuiz = () => {
        navigateTopic('/Quiz');
};
const navigateToQuizMusic = () => {
    navigateTopic('/QuizMusic');
};

const navigateToQuizHistory = () => {
    navigateTopic('/QuizHistory')
};

    return (
        <div>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-lg-10'>
                <Carousel slide={false} indicators={true} className='w-100'>
                    <Carousel.Item>
                            <img className='carouselImage rounded '  src={artSculpture} alt='art sculpture' />
                            <CarouselCaption>
                            <h3>Let's Get Quizzical</h3>
                            <p>Pick a topic</p>
                        <Button variant="warning" size="lg"  onClick={navigateToQuiz}>  Art  </Button>
                        </CarouselCaption>
                    </Carousel.Item>

                    <Carousel.Item>
                            <img className='carouselImage rounded'   src={musicNotes} alt='music notes pic' />
                            <CarouselCaption>
                            <h3>Let's Get Quizzical</h3>
                            <p>Pick a topic</p>
                        <Button variant="warning" size="lg"  onClick={navigateToQuizMusic}>Music</Button>
                        </CarouselCaption>
                    </Carousel.Item>

                    <Carousel.Item>
                            <img className='carouselImage rounded' src={moonLanding} alt='moon landing pic' />
                            <CarouselCaption>
                            <h3>Let's Get Quizzical</h3>
                            <p>Pick a topic</p>
                        <Button variant="warning" size="lg"  onClick={navigateToQuizHistory}>History</Button>
                        </CarouselCaption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        </div>
        </div>
        </div>
    );
}

 
     /*  <Card>
            <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://source.unsplash.com/-ug_Xn8Thf38" />
            <Card.Body>
                <Button variant="warning" onClick={navigateToQuiz}>Art</Button>{' '}
                </Card.Body>
                </Card>

                <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://source.unsplash.com/-l8cvrt3Hpec" />
            <Card.Body>
                <Button variant="warning" onClick={navigateToQuiz}>Music</Button>{' '}
                </Card.Body>
                </Card>

                <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src="https://source.unsplash.com/-GXIr_uawluA" />
            <Card.Body>
                <Button variant="warning" onClick={navigateToQuiz}>History</Button>{' '}
                </Card.Body>
                </Card> 
    */
        