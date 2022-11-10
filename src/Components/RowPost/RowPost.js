import React,{ useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlid, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.Urls).then((Response)=>{
      setmovies(Response.data.results)
    });
  
    
  }, [])
  const opts = {
    height:'390',
    width:'640',
    playerVars:{
      autoplay:0,
    },
  };
  const handleMovie= (id)=>{

  }
  
  return (
    <div className="row">
        <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          
          <img onClick={(handleMovie(obj.id))} className={props.isSmall ? 'smallPoster' : 'poster'}
            src={`${imageUrl+obj.backdrop_path}`}
            alt=""
          />
        
        )}
        
      </div>
      <YouTube opts={opts} videoId="2g811Eo7k8U"/>
    </div>
  );
}

export default RowPost
