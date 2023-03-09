import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api.sampleapis.com/baseball/hitsSingleSeason');
      const sortedPlayers = response.data.sort((a, b) => {
        if (a.Id < b.Id) return -1;
        if (a.Id > b.Id) return 1;
        if (a.Rank < b.Rank) return -1;
        if (a.Rank > b.Rank) return 1;
        if (a.Player < b.Player) return -1;
        if (a.Player > b.Player) return 1;
        if (a.AgeThatYear < b.AgeThatYear) return -1;
        if (a.AgeThatYear > b.AgeThatYear) return 1;
        if (a.Hits < b.Hits) return -1;
        if (a.Hits > b.Hits) return 1;
        return 0;
      });
      setPlayers(sortedPlayers);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Player List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Rank</th>
            <th>Player</th>
            <th>AgeThatYear</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.Id}>
              <td>{player.Id}</td>
              <td>{player.Rank}</td>
              <td>{player.Player}</td>
              <td>{player.AgeThatYear}</td>
              <td>{player.Hits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerList;
