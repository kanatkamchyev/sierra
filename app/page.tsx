"use client"


import { useEffect, useState } from 'react'
import { Home } from './components/home/Home'
import './globals.css'
import axios from 'axios'

export default function HomePage() {
  const [category, setCategory] = useState([])


  useEffect(() => {
      axios.get('https://menu-back.prolabagency.com/api/v1/category/')
        .then((res) => setCategory(res.data))
        .catch((error) => {
          console.error('Произошла ошибка при получении данных:', error);
        });
  }, [])

  return (
      <Home category={category}/>
  )
}
