import React from 'react';
import {RoomConsumer} from '../context';
import Loading from "./Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value=>{
                const {Loading,sortedRooms,rooms}=value;
                if(Loading){
                    return <Loading/>;
                }
                return (
                    <div>
                        <RoomFilter rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>
                    </div>
                ); 
            }}
        </RoomConsumer>
        
    )
}
