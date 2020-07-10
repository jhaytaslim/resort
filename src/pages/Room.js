import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import FeaturedRoom from '../components/FeaturedRoom';
import RoomContainer from '../components/RoomContainer';
import Services from '../components/Services';
import {Link} from 'react-router-dom';

export default function Room() {
    return (
        <>
            <Hero hero="roomsHero">
            <Banner title="our rooms">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
                </Hero>
              <Services/> 
              <FeaturedRoom/> 
              <RoomContainer/>
        </>
    )
}
