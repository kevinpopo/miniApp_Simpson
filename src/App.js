import React, { Component } from "react";
import Header from "./components/header";
import CardCollection from "./components/cardCollection";
import Cards from "./components/cards";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <CardCollection />
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default App;
