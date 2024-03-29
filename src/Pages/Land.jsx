import React, {useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Sporty from '../assets/Sporty.png'

const CLIENT_ID  = import.meta.env.VITE_VERCEL_CLIENT_ID ;
const REDIRECT_URI  = import.meta.env.VITE_VERCEL_REDIRECT_URI ;
const authEndpoint = "https://accounts.spotify.com/authorize";
const SCOPES = [
	"user-read-currently-playing",
	"user-read-playback-state",
	"user-library-read",
  "user-follow-read",
  "user-top-read",
  "user-library-read"
];

const Land = () => {
  const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (localStorage.getItem("tkn")) {
			navigate("/home");
		}
	}, []);

	useEffect(() => {
		if (location.hash) {
			localStorage.setItem(
				"tkn",
				location.hash.substring(1).split("&")[0].split("=")[1]
			);
			navigate("/home");
		}
	}, [location.hash]);

  return (
    <div className='Land' >
        <img src={Sporty} alt="logo"  style={{height:'200px'}}/>
    {location.hash === "" ? <a href={`${authEndpoint}?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
						"%20"
					)}&show_dialog=true`}
        style={{background:"black", color:"white", width:'300px', borderRadius: '25px',
      height:'60px', textDecoration:'none', textAlign:'center', fontSize:'20px', 
    
    }}
        >Connect to spotify</a>:""}
    </div>
  )
}

export default Land