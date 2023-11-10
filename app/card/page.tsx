'use client'

import React, { useEffect, useState } from 'react'
import '../globals.css'
import { Arrow, LinInCard, Line } from '../assets/Svg'
import { Language } from '../components/lang/Language'
import Link from 'next/link'
import { FoodCard } from '../components/foodInCart/FoodCard'
import { useTranslation } from 'react-i18next'
import line from '../assets/png/line.png'

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
          <div>
            <div className="Inside">
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
            </div>

            {
              foods.length > 0 ?
                <div className="card__foods ">
                  <div className="card__foods__inside relative mt-[38px]">
                    <div className="line__inCard">
                      <LinInCard />
                    </div>
                    <div className="foof__in__cart mt-[38px]">
                      {
                        foods.map((item: any, index: number) => (
                          <div key={item.id} className="food-card relative">
                            <div className="Inside">
                              <FoodCard setFoods={setFoods} foods={foods} item={item} />
                            </div>
                            {index % 2 === 0 ? (
                              <div className='mt-[15px]'>
                                <LinInCard />
                              </div>
                            ) : (
                              <div className='flex justify-end mt-[15px]'>
                                <LinInCard />
                              </div>
                            )}
                          </div>
                        )
                        )
                      }
                    </div>

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

  )
}

export default Card