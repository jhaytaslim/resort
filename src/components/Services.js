import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer, FaSpaceShuttle} 
from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free CockTails",
                info:"test cocktails"
            },
            {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:"test cocktails"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:"test cocktails"
            },
            {
                icon:<FaBeer/>,
                title:"Free CockTails",
                info:"test cocktails"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
