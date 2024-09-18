import React from 'react'
import './Home.css'
import ImgSecure from './secure.png'
import Imgbrain from './brain.png'
import Imglike from './like.png'
import FeatureCard from './../../components/featurecard/featurecard'
import {Link} from "react-router-dom"
const FEATURE=
[
  {
    featureimg:ImgSecure,
    featuredescription:"Your notes are store at browsr's localstorage"
  },
  {
         featureimg:Imgbrain,
            featuredescription:"Use your brain for thinking not for remebering things"
  },
  { 
    featureimg:Imglike,
            featuredescription:"Loved by 100k+users"

  }
]
function Home() {
  return (
    <div>
      <h1 className='text-center text-primary heading'>✍🏻  Quick  {"    "}  Note  📕 </h1>
      <p className='text-center text-black '>
        Your pocket freindly note taking app !!!
        {"  "}<del>Never forgot anything </del>{"  "}
        <span className='highlight text-black tagline-highlight'>Always keep remember  🧠</span>
      </p>
      <div>
      <h2 className='text-center text-secondary tagline'>
          Why should you use Quick Note?
        </h2>
        <div className='feature-container'>
          {FEATURE.map((feature, index) => {
            const { featureimg, featuredescription } = feature;
            return (
              <FeatureCard
                key={index} // Correct key prop for mapped elements
                featureimg={featureimg}
                featuredescription={featuredescription}
              />
            );
})
}
          
        </div>
      </div>

      <div className='btn-container'>
        <Link to="/Add">
        <button className='btn btn-primary'>✍🏻Add note</button>
        </Link>
        <Link to="/Show">
        <button className=' btn btn-secondary'>📕 View note</button>
        </Link>
      </div>
    </div>
  )
}

export default Home