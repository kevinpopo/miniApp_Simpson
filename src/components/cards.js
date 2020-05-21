import React, { Component } from "react";
import babyIcon from "../assets/babyIcon.png";
import momIcon from "../assets/monIcon.png";
import dadIcon from "../assets/dadIcon.png";
import sisIcon from "../assets/sisIcon.png";
import sonIcon from "../assets/sonIcon.png";
import "./cards.css";

class Cards extends Component {
    render() {
        return (
            <div className="cards-container">
                <img src={babyIcon} className="card" alt="" />
                <img src={momIcon} className="card" alt="" />
                <img src={dadIcon} className="card" alt="" />
                <img src={sisIcon} className="card" alt="" />
                <img src={sonIcon} className="card" alt="" />
            </div>
        );
    }
}

export default Cards;
