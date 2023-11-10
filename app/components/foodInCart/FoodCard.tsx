import { Deletefood, LeftArrow, LinInCard, RightArrow } from '@/app/assets/Svg'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
  item: any,
  foods: any[],
  setFoods: any
}

export const FoodCard = ({ item, foods, setFoods }: Props) => {

  const decreaseCount = (foodId: any) => {
    setFoods((prevFood: any) => prevFood.map((fod: any) =>
      fod.id === foodId ?
        { ...fod, count: fod.count - 1 }
        :
        fod
    ))

    localStorage.setItem('food', JSON.stringify(foods));
  };

  const increaseCount = (foodId: any) => {
    setFoods((prevFood: any) => prevFood.map((fod: any) =>
      fod.id === foodId ?
        { ...fod, count: fod.count + 1 }
        :
        fod
    ))

    localStorage.setItem('food', JSON.stringify(foods));
  };

  const handleDelete = (item: any) => {
    const updatedFoodData = foods.filter((foodItem: any) => foodItem.id !== item.id);
    localStorage.setItem('food', JSON.stringify(updatedFoodData));
    setFoods(updatedFoodData);
  };


  return (
    <div className="inner__cart">
        <div className='cardFood flex gap-[50px] mt-[30px] relative'>
          <div className="left__card_food">
            <Image width='100' height='100' src={item.img} alt="" />
          </div>
          <div className="left__card_food">
            <div className="leftFood__title text-[24px] text-white">
              {item.title}
            </div>
            <div className="count__cardFood flex items-center mt-[12px]">
              <div className="left__arrow cursor-pointer" onClick={() => decreaseCount(item.id)}>
                <LeftArrow />
              </div>
              <div className="leftFood__count text-white">
                {item.count}
              </div>
              <div className="left__arrow cursor-pointer" onClick={() => increaseCount(item.id)}>
                <RightArrow />
              </div>
              <div className="count__name text-white ml-[12px]">
                Порций
              </div>
            </div>
          </div>
          <div className="delete__food absolute right-[0]  cursor-pointer" onClick={() => handleDelete(item)}>
            <Deletefood />
          </div>
        </div>
      </div>
  )
}
