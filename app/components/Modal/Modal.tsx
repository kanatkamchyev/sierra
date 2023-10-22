import { Deletefood } from '@/app/assets/Svg'
import { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


interface Props {
    food: any,
    active: any,
    setActive: any,
    getSostav:any,
    getDescription:any
}

export const Modal = ({ food, getDescription, active, setActive,getSostav }: Props) => {

    useEffect(() => {
        if(active){
            document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = 'hidden';
        }
    })

    return (
        <div className={active ? 'Modal active' : 'Modal'} onClick={() => setActive(false)}>
            <div className="container">
                <div className="Inside">
                    <div className="Modal__inside">
                        <div className="Modal__content relative" onClick={(e) => e.stopPropagation()}>
                            <div className="close__modal absolute right-[10px] top-[10px] cursor-pointer" onClick={() => setActive(false)}>
                                <Deletefood />
                            </div>
                            <div className="Modal__title mt-[24px]">
                                {
                                    food.title
                                }
                            </div>
                            <div className="Modal__image">
                                <Image width='200' height='200' src={food.img} alt="" />
                            </div>
                            <div className="Modal__describe text-white text-[16px] mt-[16px]">
                                {t("food_describe")}:
                            </div>
                            <div className="Modal__describe text-white text-[16px] mt-[8px] pl-[6px]" dangerouslySetInnerHTML={{ __html: getDescription(food) }}>
                            </div>
                            <div className="Modal__ingredients text-white text-[16px] mt-[16px]">
                                {t('sostav')}:
                            </div>
                            <div className="Modal__ingredients text-white text-[16px] pl-[6px]" dangerouslySetInnerHTML={{ __html: getSostav(food) }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
