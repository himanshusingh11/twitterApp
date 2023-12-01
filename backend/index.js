// const Twitter = require('twitter');

// const client = new Twitter({

//   consumer_key: '',
//   consumer_secret: '',
//   access_token: '',
//   access_token_secret: ''
// });


// client.stream('statuses/filter', { track: 'twitter' }, function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
    
//   });

//   stream.on('error', function(error) {
//     console.error('Error occurred:', error);
    
//   });
// });




const express = require('express');
const fs = require('fs');

const app = express();

const titles = [
  'India',
  'Cricket',
  'Technology',
  'Elon Musk',
  'Narendra Modi',
  'Sachin',
  'Virat',
  'US'
  
];

// Function to generate random author
const generateAuthor = () => {
  const authors = ['JohnDoe', 'JaneSmith', 'TwitterUser', 'SocialMediaFan', 'TechEnthusiast'];
  return authors[Math.floor(Math.random() * authors.length)];
};

// Generate 1000 mock tweets
const tweets = [];
for (let i = 1; i <= 1000; i++) {
  const titleIndex = i % titles.length;
  const tweet = {
    id: i,
    name: `Tweet ${i}`,
    author: generateAuthor(),
    title: titles[titleIndex],
    description: `Description for tweet ${i}` 
  };
  tweets.push(tweet);
}


const data = JSON.stringify({ tweets }, null, 2);

fs.writeFileSync('tweets.json', data);

console.log('JSON file with 1000 tweets created: tweets.json');



const readTweetsFromFile = () => {
  const rawData = fs.readFileSync('tweets.json');
  const tweets = JSON.parse(rawData).tweets;
  return tweets;
};

// Route to fetch all tweets
app.get('/tweets', (req, res) => {
  const tweets = readTweetsFromFile();
  res.json(tweets);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});