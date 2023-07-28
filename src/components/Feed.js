import React, { useEffect, useState } from 'react'
import "./Feed.css";
import Post from './Post';
import TweetBox from './TweetBox';
import firebase from "firebase/app"

const Feed = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   //code..
  //   firebase.collection('posts').onSnapshot(snapshot => {
  //     setPosts(snapshot.docs.map(doc => doc.data()))
       
  //   })
  // },[])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweetbox */}
      <TweetBox />
      {/* post */}
      <Post 
      text="id = (param, param)"
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cMuYItBmMt6A6n8h9Zl5blCKINeOV2dBcQ&usqp=CAU"/>
      <Post 
      text="Awsome twiter clone...."
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iwvTqMQh2pR9TJ5jGcQ-0t_5kPpsASyCag&usqp=CAU"/>
      <Post 
      text="Awsome twiter clone...."
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoJfj_I545bjYfGDKt9MUQXZaRAdolVYbBg&usqp=CAU"/>
      <Post 
      text="Awsome twiter clone...."
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv331uX7oim1tkzDAqMcKH_nG9hNys6WV3eQ&usqp=CAU"/>
      <Post 
      text="In a land of Myth at a TIME OF MAGIC....."
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU"/>
      <Post 
      text="Good mornig to you all..."
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ItzbDI0AhbD0tWSJ36z3Ih1Eg4sH_p9YAw&usqp=CAU"/>
      
    
    </div>
  )
}

export default Feed