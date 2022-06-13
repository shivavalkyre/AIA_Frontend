import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PhotoGrid from "react-photo-feed";
import "react-photo-feed/library/style.css";
import Link from 'next/link';
//import flicker from './flickr';

export const getStaticProps = async () => {
  const API_URL = "http://localhost:3001"
  const request = await fetch(API_URL)
  const posts = await request.json()
  return  { props : { posts } }
}


export default function Home({ posts }) {

    
  return (
    <div>
      <main>
              <PhotoGrid columns={5} photos={posts} />
      </main>
    </div> 
  )
}
