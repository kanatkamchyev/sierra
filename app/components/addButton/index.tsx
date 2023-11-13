import { Star } from '@/app/assets/Svg';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';


interface Props {
    count: number,
    currentImage: any,
    addedToCart: any,
    setAddedToCart: any
}

export const Button = ({ count, addedToCart, setAddedToCart, currentImage }: Props) => {
    const { t, i18n } = useTranslation()
    const AddToCard = (food: any) => {
        const storedFood = localStorage.getItem('food');
        let existingFood = storedFood ? JSON.parse(storedFood) : [];

        const existingFoodIndex = existingFood.findIndex((item: any) => item.title === food.title);
        const updatedFoodData = {
            id: food.id,
            img: food.img,
            title: food.title,
            price: food.price,
            count: count,
        };

        if (existingFoodIndex !== -1) {
            existingFood[existingFoodIndex] = updatedFoodData;
        } else {
            existingFood.push(updatedFoodData);
        }
        localStorage.setItem('food', JSON.stringify(existingFood));
        setAddedToCart(true);
    }
    return (
        <div className="right__take flex ">
            {addedToCart ? (
                <button className='btn flex gap-[8px] text-center cursor-pointer' disabled>{t('added')}</button>
            ) : (
                <button className='flex items-center gap-[8px] text-center cursor-pointer' onClick={() => AddToCard(currentImage)}>{t("add")} <Star /></button>
            )}
        </div>
    )
}
