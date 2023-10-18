import React, { useState, useEffect } from "react";
import Post from "../Post/Post";

function Home(){


    const [error, setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("/posts")
        .then(res => res.json(
            (result) => {
                setIsLoaded(true);
                setPostList(result);
            },
            (error) => {
                isLoaded(true);
                setError(error);
            }
        ))
    },[])

    if(error){
        return <div> error </div>
    }else if(!isLoaded){
        return <div> Loading... </div>
    }else{
        return(
            <div className="container">
                Home!!!
                {postList.map(post =>(
                    <Post title={post.title} text={post.text}></Post>
                ))}
            </div>
            );
    }
}
export default Home;