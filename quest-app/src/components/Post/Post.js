import React, {useState,useEffect} from "react";
import ReactDom from "react-dom";


function Post(){
    const [error, setError] = useState(null);
    const [isLoaded,setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("https://localhost:8080/posts")
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
            <ul>
                {postList.map(post =>(
                    <li>
                        {post.title} {post.text}
                    </li>
                ))}
            </ul>
        );
    }
}


export default Post;