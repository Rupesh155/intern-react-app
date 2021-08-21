import history from './History';
import './Home.css';

const Home = () => {
    // const Click = () => {
    //     let path = '{CheckDetails}';
    //     history.push(path);
    // }
    return (
        <>
            <div className="body">
                <div className="container">
                    <div className="card">
                        <button className="card__button" onClick={() => history.push('/CheckScore')}> CheckScore</button>
                    </div>



                    <div className="card">
                        <button className="card__button" onClick={() => history.push('/AddPlayer')}> AddPlayer</button>
                    </div>


                    <div className="card">
                        <button className="card__button" onClick={() => history.push('/UpdateScore')}> UpdateScore</button>
                    </div>
                </div>
            </div>


        </>

    );
}

export default Home;