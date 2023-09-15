import React from "react";

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={props.item.imageUrl} />
                <div className="card--info">
                    <div>
                        <img src="/image/location.png" />
                        <span className="location">{props.item.location}</span>
                        <a href={props.item.googleMapsUrl} target="_blank"><span className="view-map">View on Google Maps</span></a>
                    </div>
                    <div>
                        <h2 className="title">{props.item.title}</h2>
                    </div>
                    <div className="date">
                        {props.item.startDate}-{props.item.endDate}
                    </div>
                    <div className="desc">
                        {props.item.description}
                    </div>
                </div>
            </div>
        </div>
    )
}