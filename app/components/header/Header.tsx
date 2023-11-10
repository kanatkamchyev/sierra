'use client'
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
    const { t } = useTranslation()

    return (
        <div className='Header'>
            <div className="Inside">
                <div className="Ayana__Kanat">
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
                            <div className="card__header cursor-pointer">
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
