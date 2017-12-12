'use strict';

const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let ejs = require('ejs');
let pg = require('pg');

let client = new pg.Client('postgres://postgres@172.17.0.1:9999/postgres');
let votes = {
    sandwiches: 0,
    tacos: 0
};
client.connect((err) => {
   if(err) throw err;

   client.query('SELECT number_of_votes FROM votes', (err, result) => {
       if (err) throw err;
       votes.sandwiches = result.rows[0].number_of_votes;
       votes.tacos = result.rows[1].number_of_votes;
   });
});


let urlEncoderParser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('pages/index', {
		votes: votes
  });
});

app.post('/vote', urlEncoderParser, (req, res) => {
    let vote = req.body.myVote;
    if(vote === 'sandwiches'){
        votes.sandwiches += 1;
        client.query('UPDATE votes SET number_of_votes = '+votes.sandwiches+' WHERE option_name = \'sandwiches\'');
    }
    else if(vote === 'tacos'){
        votes.tacos += 1;
        client.query('UPDATE votes SET number_of_votes = '+votes.tacos+' WHERE option_name = \'tacos\'');
    }
    else{
        console.log('Vote option ' +vote +' not supported');
    }
    res.redirect('/');
})

const PORT = 8888;
app.listen(PORT);
console.log('Server up on port '+PORT);