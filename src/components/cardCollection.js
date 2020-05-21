import React, { Component } from "react";
import PropTypes from "prop-types";
import all from "../assets/all.png";
import baby from "../assets/baby.png";
import mom from "../assets/mom.png";
import dad from "../assets/dad.png";
import sis from "../assets/sis.png";
import son from "../assets/son.png";
import "./cardCollection.css";

class CardCollection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            hasBabyCard,
            hasMomCard,
            hasSisCard,
            hasDadCard,
            hasSonCard,
        } = this.props;
        return (
            <div className="collection-container">
                <header className="App-header">
                    <img src={all} className="App-logo" alt="logo" />
                    {hasBabyCard && (
                        <img src={baby} className="App-logo" alt="logo" />
                    )}
                    {hasMomCard && (
                        <img src={mom} className="App-logo" alt="logo" />
                    )}
                    {hasSisCard && (
                        <img src={sis} className="App-logo" alt="logo" />
                    )}
                    {hasDadCard && (
                        <img src={dad} className="App-logo" alt="logo" />
                    )}
                    {hasSonCard && (
                        <img src={son} className="App-logo" alt="logo" />
                    )}
                </header>
            </div>
        );
    }
}

CardCollection.prototypes = {
    hasBabyCard: PropTypes.bool,
    hasMomCard: PropTypes.bool,
    hasSisCard: PropTypes.bool,
    hasDadCard: PropTypes.bool,
    hasSonCard: PropTypes.bool,
};

export default CardCollection;
