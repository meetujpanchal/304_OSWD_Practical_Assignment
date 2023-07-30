const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const apiKey = 'd4594015-7cc4-4cd1-9817-610c4768246e'; // Replace with your actual cricapi API key

app.get('/live-score', (req, res) => {
  const cricapiUrl = `https://api.cricapi.com/v1/currentMatches?apikey=d4594015-7cc4-4cd1-9817-610c4768246e&offset=0`;

  axios.get(cricapiUrl)
    .then(response => {
      const liveMatches = response.data.matches.filter(match => match.matchStarted);
      const liveScores = liveMatches.map(match => {
        return {
          id: match.id,
          date: match.date,          
          score: match.score,
        };
      });

      res.json(liveScores);
    })
    .catch(error => {
      console.error('Error fetching live scores:', error.message);
      res.status(500).send('Error fetching live scores.');
    });
});

app.listen(port, () => {
  console.log(`Live cricket score app is running on http://localhost:${port}`);
});
