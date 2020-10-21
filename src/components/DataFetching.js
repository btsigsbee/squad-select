import React, {useState, useEffect, setState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

import {DateTime} from 'luxon';


 

export default function DataFetching(){
    const [gameData, setGameData] = useState([]);
    useEffect( ()=> {
           
        fetch("https://v2.api-football.com/fixtures/team/165/next/1", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": process.env.REACT_APP_HOST,
              "x-rapidapi-key": process.env.REACT_APP_KEY
          }

      })
      .then((response)=> response.json())
      .then((data)=> {setGameData(data.api.fixtures)})
        
        
        
    }, [])
    console.log(gameData);
    return(
    <div>
         
        <Row className='mt-2'>
        <Col>
        <h3>Home</h3>
        
        </Col>
        <Col>
            <h3>Away</h3>
        </Col>
        </Row>
        <Row>
        {gameData.length >0?(
            gameData.map((game) =>(<Col className="col-lg-5" ><Row className="offset-md-4"key={game.homeTeam.team_id} >
            
            <h1 className="text-nowrap">{game.homeTeam.team_name}</h1>
            <img className="img-fluid rounded float-right offset-md-1" width='50px' src={game.homeTeam.logo}></img>
            </Row>
            </Col>)))
            
            :(<h1>Loading</h1>)}
            <Col><h1>V</h1></Col>
            
            {gameData.length >0?(
            gameData.map((game) =>(<Col className="col-lg-5"><Row key={game.awayTeam.team_id}>
            <img className="img-fluid rounded float-left" width='50px' src={game.awayTeam.logo}></img>
            <h1 className="text-nowrap offset-md-1">{game.awayTeam.team_name}</h1>
            
            </Row></Col>)))
            
            :(<h1>Loading</h1>)}
        </Row>
            <Row>{gameData.map((game) => (<Col>{DateTime.fromISO(game.event_date).toFormat('FFF')}</Col>))}</Row>
            <Row>{gameData.map((game) => (<Col>{game.round}</Col>))}</Row>
            
    </div>
)
}
