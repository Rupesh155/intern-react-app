
import './UpdateScore.css';
import history from './History';
import { getData, updateScore } from './services';
const UpdateScore = () => {
    
    
    var dataList = getData();
    
    const UpdateItem = (e, id) => {
        console.log(id);
        console.log(dataList[id]);
        var newScore = e.target.parentNode.childNodes[2].value;
        console.log(newScore, ' score');
        updateScore(newScore, id);
        alert('Updated');
    }
    return (
        <>
        <div className="home__navbar"> 
            <button className="card__button" onClick={() => history.push('/')}> Home</button>
            <button className="card__button" onClick={() => history.push('/CheckScore')}> 
         

            CheckScore</button>

            </div>
            <br />
            <div className="Updteitem">
                <h3 className="updateall">     {dataList.map((itemval, index) => {
                    return (

                        <div  className="update__input" key={itemval.id}>

                            <h3> {itemval.player}  </h3>
                            <p>   {itemval.score}</p>
                            <input type="number" placeholder="Enter Player Name" className="updateall" />
                            <br />
                            <button type="submit" className="updateall abs" onClick={(e) => {UpdateItem(e, itemval.id)}}> Update</button>

                        </div>
                    );
                })}</h3>


            </div>
        </>
    );
}
export default UpdateScore;