
import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

function JsonCards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then(({ data }) => {
            console.log(data);
            setCards(data);
        })
    }, [])
    return (
        <div class="container">
            <h2 class="my-5">display users</h2>

            <div class="row  "  >
                {cards.map((card) => {
                    return (
                        <>
                            <div class="card col-sm-4 mb-3 mb-sm-3 my-3 ">
                                <div class="row g-0">
                                    <div class="col-md-4 ">
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="img-fluid rounded-start" width="150" alt="image" />
                                    </div>
                                    <div class="col-md-8  ">
                                        <div class="card-body  ">
                                            <h5 class="card-title">{card.id}</h5>
                                            <p class="card-text">{card.name}</p>
                                            <p class="card-text">{card.username}</p>
                                            <p lass="card-text">{card.email}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>

                    )
                })}
            </div>
        </div>
    )
}

export default JsonCards;

