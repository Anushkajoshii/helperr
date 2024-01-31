import React from 'react'
import "./Home.scss";
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import {cards, projects} from "../../data"
import CatCard from "../../components/catCard/CatCard"
import ProjectCard from '../../components/projectCard/ProjectCard';



const Home=()=>{
  return(
    <div className="home">
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5}arrowsScroll={5}>
        {cards.map(card=>(<CatCard key={card.id} item={card}/>))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of helping hands at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best of every budget
            </div>
            <p>
              Find high quality services at every price point. 
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Find hard working needy dedicated helpers.
            </div>
            <p>
              Promoting local unemployed individuals to work and earn, thereby preventing them from begging.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Complete your work effortlessly.
            </div>
            <p>
              A complete one point contact to your underrated community helpers. Find variety of Helping Hands .
            </p>
          
            
          </div>
          
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>helperr business</h1>
            <h1>A business solution designed for unemployed people</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits, dedicated to workers!
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to helpers with proven business and skills experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Support unemployed poor individuals.
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Lets give a chance to enthusiastic daily wage workers.
            </div>

            <button>Explore Helperr Business</button>



          </div>
          <div className="item">
            <img src="./img/Labourr.png" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4}arrowsScroll={4}>
        {projects.map((card)=>(
        <ProjectCard key={card.id} card={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home;