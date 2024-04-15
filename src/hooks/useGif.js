import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {

    const [gif , setGif] = useState('');
    const [loading , setLoading] = useState('false');

    
    async function fetchData(tag) {
        setLoading(true);

        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url); // call api , return promiss
        // console.log(data);
        const imagesource = data.data.images.downsized_large.url;
        // console.log(imagesource);
        setGif(imagesource);
        setLoading(false);

    }

    useEffect( () => {
       fetchData('car');
    },[] )

    return{gif , loading , fetchData}

}

export default useGif