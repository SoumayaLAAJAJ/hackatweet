import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';
import Tweet from './Tweet';

function Home() {
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
      <Tweet/>
      <div>
      </div>
    </div>
    <div className={styles.trends}>Trends</div>
  </div>

    
  );
}

export default Home;
