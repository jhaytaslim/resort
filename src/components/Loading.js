import React from 'react'
import LoadingArrow from "../images/gif/loading-arrow.gif";

export default function Loading() {
    return (
        <div className="loading">
            <img src={LoadingArrow}/>
        </div>
    )
}
