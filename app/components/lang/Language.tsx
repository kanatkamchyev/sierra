import React, { useState } from 'react'
import i18n from '@/app/i18'



export const Language = () => {



    const change = (language: any) => {
        i18n.changeLanguage(language)
    }

    return (
        <div className="header__lang">
            <div className={i18n.language === 'ru' ? "header__language active" : "header__language cursor-pointer"} onClick={() => change('ru')}>
                Ру
            </div>

            <div>
                /
            </div>
            <div className={i18n.language === 'kg' ? "header__language active" : "header__language cursor-pointer"} onClick={() => change('kg')}>
                Кг
            </div>
        </div>
    )
}
