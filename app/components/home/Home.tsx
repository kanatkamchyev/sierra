'use client'

import React, { useEffect, useState } from 'react'
import { Header } from '../header/Header'
import { Category } from '../category/Category'
import { Main } from '../main/Main'
import axios from 'axios'


type Props = {
  category: any,
}



export const Home = ({ category}: Props) => {

  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(1)
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://menu-back.prolabagency.com/api/v1/category/' + categoryId+'/')
      .then((res) => {
        setItems(res.data)
        setTimeout(() => {
          setLoading(false);
        }, 1500); 
      })
      .catch((error) => {
        console.error('Произошла ошибка при получении данных:', error);
      });

  }, [categoryId])

  console.log(items)

  const { subcategories }: any = items

  const filteredSubCategory = subcategories?.filter((item: any) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });



  return (
    <div className="container">
      <div className="Main__page">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Main loading={loading} items={items} subcategories={filteredSubCategory} category={category} categoryId={categoryId} setCategoryId={setCategoryId} />
      </div>
    </div>

  )
}
