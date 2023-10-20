import { Deletefood, LeftArrow, RightArrow } from '@/app/assets/Svg'
import React, { useState } from 'react'

type Props = {
  item: any,
  foods:any[],
  setFoods:any
}

export const FoodCard = ({ item, foods, setFoods }: Props) => {


  const [count, setCount] = useState(item.count)


  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const handleDelete = (item: any) => {
    const updatedFoodData = foods.filter((foodItem: any) => foodItem.id !== item.id);
    localStorage.setItem('food', JSON.stringify(updatedFoodData));
    setFoods(updatedFoodData);
  };

  return (
    <div className="Inside">
      <div className='cardFood flex gap-[50px] mt-[30px] relative'>
        <div className="left__card_food">
          <img src={item.img} alt="" />
        </div>
        <div className="left__card_food">
          <div className="leftFood__title text-[24px] text-white">
            {item.title}
          </div>
          <div className="count__cardFood flex items-center mt-[12px]">
            <div className="left__arrow cursor-pointer" onClick={decreaseCount}>
              <LeftArrow />
            </div>
            <div className="leftFood__count text-white">
              {count}
            </div>
            <div className="left__arrow cursor-pointer" onClick={increaseCount}>
              <RightArrow />
            </div>
            <div className="count__name text-white ml-[12px]">
              порций
            </div>
          </div>
        </div>
        <div className="delete__food absolute right-[0]  cursor-pointer" onClick={()=>handleDelete(item)}>
          <Deletefood />
        </div>
      </div>
    </div>

  )
}
