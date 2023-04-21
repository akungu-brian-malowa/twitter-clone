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
      text="Awsome twiter clone...."
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoJfj_I545bjYfGDKt9MUQXZaRAdolVYbBg&usqp=CAU"/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed