import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        
            <Hero >
                <Banner title="Home">
                    <Link to="/rooms" className="btn-primary">
                        GO TO ROOMs
                    </Link>
                </Banner>
            </Hero>
    )
}
