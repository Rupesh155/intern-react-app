import history from './History';
import React, { useState } from 'react';
import { addPlayer } from './services';
import './AddPlayer.css';
const AddPlayer = () => {
    const [setData, setSetData] = useState('');
    const [item, setItem] = useState();
    const ChangeData = (e) => {
        // console.log(setData);
        setSetData(e.target.value);
    }
    const SubmitData = () => {
        setSetData('');
        // setItem((olditem)=>{
        //     return [...olditem,setData];
        // });

        addPlayer(setData, 0);
        alert('Player added, redirecting to the Home Page...');
        setTimeout(function () { history.push('/') }, 500);
    }
    return (
        <>
  
        <div className="home__navbar">
    <button   className="card__button" onClick={() => history.push('/')}> Home</button>
    <button className="card__button" onClick={() => history.push('/CheckScore')}> CheckScore</button>

    
    </div>
    
        <div className="addPlayer-container">
           
            <br />
            <input className="textfiled" type="text" placeholder="Enter Player Name" value={setData} onChange={ChangeData} />
            <button className="submit-button" type="submit" value={item} onClick={SubmitData}>Submit</button>
        </div>
        </>
    );
};
export default AddPlayer;