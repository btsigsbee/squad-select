import React, {useState, useEffect, setState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import '../DataFetching.css';

import {DateTime} from 'luxon';


function getForm(homeTeam, awayTeam){
    
   

        fetch("https://api-football-v1.p.rapidapi.com/v2/statistics/{league_id}/{team_id}/{date}")
  

}

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
    <div className='bg-success'>
         
        
        <Row className='mt-5'>
        {gameData.length >0?(
            gameData.map((game) =>(<Col className="col-lg-5 " ><Row className="offset-lg-4 "key={game.homeTeam.team_id} >
            
            <h1 className="team text-nowrap">{game.homeTeam.team_name}</h1>
            <img className="img-fluid float-right rounded offset-lg-2 " width='65px' src={game.homeTeam.logo}></img>
            </Row>
            </Col>)))
            
            :(<h1>Loading</h1>)}
            <Col><h1>V</h1></Col>
            
            {gameData.length >0?(
            gameData.map((game) =>(<Col className="col-lg-5 "><Row key={game.awayTeam.team_id}>
            <img className="img-fluid rounded float-left" width='65px' src={game.awayTeam.logo}></img>
            <h1 className="team text-nowrap offset-md-1">{game.awayTeam.team_name}</h1>
            
            </Row></Col>)))
            
            :(<h1>Loading</h1>)}
        </Row>
            <Row>{gameData.map((game) => (<Col>{DateTime.fromISO(game.event_date).toFormat('FFF')}</Col>))}</Row>
            <Row>{gameData.map((game) => (<Col>{game.round}</Col>))}</Row>
            
    </div>
)
}
