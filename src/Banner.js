import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from 'axios';
import requests from './requests';
function Banner({fetchUrl}) {
    const [Movie,setmovie]=useState([]);
   useEffect (()=>{
    async function fetchDate(){
    const request =await axios.get(fetchUrl);
    console.log(request)
    setmovie(
			request.data.results[
				Math.floor(Math.random() * request.data.results.length)
			]
		);
   

      return  request;
   }
fetchDate();

},[]);
// console.log(Movie);
const Base_url = 'https://image.tmdb.org/t/p/original'
function truncate(str,n){
    return str?.length >n ?str.substr(0,n-1)+"...": str;
}

return (
	<header
		className="banner"
		style={{
			backgroundSize: "cover",
			backgroundImage: `url('${Base_url}${Movie?.backdrop_path}')`,
			backgroundPosition: "center center",
		}}
	>
		<div className="banner_content">
			<h1 className="banner_tittel">
				{Movie?.titel || Movie?.name || Movie?.origonal_name}
			</h1>
			<div className="banner_buttons">
				<button className="banner_button">Play</button>
				<button className="banner_button">My List</button>
			</div>
			<h1 className="banner_discription">
			{truncate(Movie?.overview,150)}				
            </h1>
		</div>
		<div className="banner_fadebuttom" />
	</header>
);
}


export default Banner;