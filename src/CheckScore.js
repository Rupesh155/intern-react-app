import React from "react";

import history from './History';
import { getData } from "./services";
import './CheckScore.css';
const CheckScore = (props) => {

    var dataList = getData();


    return (
        <>

            <div className="home__navbar">

                <button className="card__button" onClick={() => history.push('/')}> Home</button>
                <button className="card__button" onClick={() => history.push('/UpdateScore')}> UpdateScore</button>

            </div>
                <div className="check__body">
            <h2 className="list__body1">This is check score page, okay?</h2>

            <div className="container1">
                <div className="card1">

                    {dataList.map((itemval) => {
                        return (
                            <div key={itemval.id}>
                                <li> {itemval.player}</li>
                                <li> {itemval.score}</li>
                            </div>
                        );
                    })}
                </div>
            </div>

            </div>



        </>
    );
}
export default CheckScore;