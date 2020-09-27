import React, {useState, useEffect} from 'react';


function DataFetching(props){
    const [gameData, setGameData] = useState(null) 
    useEffect(()=> {
        async function fetchData(){const response = await fetch("https://v2.api-football.com/fixtures/team/165/next/1", {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "101667642ea71b7b5066153b76cf897a"
          }
      });
      const data = await response.json();
      setGameData(data.api.fixtures[0]);
    }
      fetchData();
        
    
        
    }, []);
    return(
    <div>
    {gameData.map((game)=> {
        const hometeam=game.homeTeam;

        return(<h3>{hometeam}</h3>)
    })}
    </div>
)
}


export default DataFetching