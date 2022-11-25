import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';
import Tweet from './Tweet';

import { useEffect, useState } from 'react';


function Home() {
  const [tweetsList, setTweetsList] = useState([]);
  console.log("tweetList =>", tweetsList);
  useEffect(() => {
    fetch('http://localhost:3000/tweets').then(response => response.json()).then(data => { console.log(data); setTweetsList(data.data)});
    
  }, []);

  const tweets = tweetsList.map((data, i) => {
    
    return <Tweet key={i} firstname={data.firstname} username={data.username} message={data.message} />
  });




  return (
    
  <div className={styles.container}>
    <div className={logo}>
      <button></button>
      <img src="logo.png" alt="image"/>

      </div>
    <div className={styles.home}>
      <div>
      <h4>Home</h4>
      <input className="tweet" type="text" placeholder="What's up ?"/>
      <span>0/280</span>
      <button>Tweet</button>
      </div>
      {tweets}
      <div>
      </div>
    </div>
    <div className={styles.trends}>Trends</div>
  </div>

    
  );
}

export default Home;
