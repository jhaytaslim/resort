import React from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';

export default function Error() {
    return (
        <Hero >
                <Banner title="404">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
            </Hero>
    )
}
