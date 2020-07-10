import React, { Component } from 'react'
import {RoomContext,RoomConsumer} from '../context';
import Room from "./Room"; 
import Title from "./Title"; 
import Loading from "./Loading"; 

export default class FeaturedRoom extends Component {
    static contextType=RoomContext;
    
    componentDidMount(){
        
    }
    render() {
        let { loading,featuredRooms:rooms}=this.context;
        // let rooms=[];
        rooms=rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })

        return (
            <section className="featured-rooms">
                <Title  title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading? <Loading/>:rooms} 
                </div>
                
            </section>
        )
    }
}
