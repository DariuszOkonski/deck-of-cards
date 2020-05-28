import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

const API_BASE = "https://deckofcardsapi.com/api/deck";

class Desk extends Component {
    constructor(props){
        super(props);
        this.state = {
            deck: null,
            drawn: [],
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE}/new/shuffle/`);
        this.setState({
            deck: deck.data
        });        
    }

    async getCard(){
        let id = this.state.deck.deck_id;

        try {
            let cardUrl = `${API_BASE}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);

            if(!cardRes.data.success) {
                throw new Error('No cards remaining');
            }

            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch (error) {
            alert(error);   
        }
    }

    render() { 
        const cards = this.state.drawn.map(c => <Card key={c.id} image={c.image} name={c.name}/>)

        return ( 
            <div>
                <h1 className="Deck-title">Card Dealer</h1>
                <h2 className="Deck-title subtitle">A little demo made with React</h2>
                <button className="Deck-btn" onClick={this.getCard}>Get Card!</button>
                <div className="Deck-cardarea">
                    {cards}
                </div>
            </div>
         );
    }
}
 
export default Desk;