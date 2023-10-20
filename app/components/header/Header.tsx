import { Card, Search } from '@/app/assets/Svg'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Language } from '../lang/Language'
import { useTranslation } from 'react-i18next'


interface Props {
    setSearchQuery: any,
    searchQuery: any
}

export const Header = ({ searchQuery, setSearchQuery }: Props) => {
    const [food, setFood] = useState([])


    const { t } = useTranslation()


    useEffect(() => {
        const foodData = localStorage.getItem('food');

        if (foodData) {
            const parsedFoodData = JSON.parse(foodData);
            setFood(parsedFoodData);
        } else {
            setFood([])
        }
    }, [])


    return (
        <div className='Header'>
            <div className="Inside">
                <div className="Header__inside">
                    <div className="left__header">
                        <div className="header__search">
                            <Search />
                            <input
                                type="text"
                                placeholder={t("search")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} />
                        </div>
                    </div>
                    <div className="right__header">
                        <Link href='card'>
                            <div className="card__header">
                                <Card />
                            </div>
                        </Link>

                        <Language />
                    </div>
                </div>
            </div>
        </div>

    )
}
