import axios from 'axios';
import {useEffect, useState} from 'react';
import "./ImageDisplaySection.scss";

    
export default function ImageDisplaySection({query}){
    const API_KEY='QyWFtO1Wtd52odix0akRPtAJFVFT5l6uKpAkGjS6o5ohxaG0mXYkuU2F';
    const API_URL='https://api.pexels.com/v1/search';
    const [images,setImages]=useState([]);
    
}