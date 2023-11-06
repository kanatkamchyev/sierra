'use client'

import React, { useEffect, useState } from 'react'
import '../globals.css'
import { Arrow } from '../assets/Svg'
import { Language } from '../components/lang/Language'
import Link from 'next/link'
import { FoodCard } from '../components/foodInCart/FoodCard'
import { useTranslation } from 'react-i18next'

const Card = () => {

  const [foods, setFoods] = useState([]);

  const { t } = useTranslation()

  useEffect(() => {

    const foodData = localStorage.getItem('food');

    if (foodData) {
      const parsedFoodData = JSON.parse(foodData);
      setFoods(parsedFoodData);
    }

  }, [])

  const clearStorage = () => {
    localStorage.clear(),
      setFoods([]);
    localStorage.setItem('food', JSON.stringify([]));
  }


  return (
    <div className='Card'>
      <div className="container">
        <div className="Main__page">
          <div className="Inside">
            <div>
              <div className="Card__inside">
                <div className="Card__top_inside flex justify-between">
                  <Link href='/'>
                    <div className="card__backs flex cursor-pointer">
                      <Arrow />
                      {t("back")}
                    </div>
                  </Link>
                  <Language />
                </div>
              </div>
              {
                foods.length > 0 ?
                  <div className="card__foods">
                    <div className="card__foods__inside">
                      {
                        foods.map((item: any) => <FoodCard key={item.id} setFoods={setFoods} foods={foods} item={item} />)
                      }
                    </div>
                    <div className="Clear__toStorage text-black cursor-pointer text-[20px] mt-[20px]" onClick={clearStorage}>
                      <button>{t("clear")}</button>
                    </div>
                  </div>
                  :
                  <div className="empty__card flex justify-center h-[100vh] items-center">
                    <div className="clear__card_inside">
                      <div className="clear__card max-w-[205px] text-center text-[48px]">
                        {t("empty")}
                      </div>
                      <div className="smach text-white max-w-[205px] text-center mt-[9px]">
                        {t("choose")}
                      </div>
                      <Link href='/'>
                        <div className="clear__btn mt-[32px]">
                          <button>{t("sweet")}</button>
                        </div>
                      </Link>
                    </div>
                  </div>

              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card