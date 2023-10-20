import { Deletefood } from '@/app/assets/Svg'
import React, { useEffect, useState } from 'react'


interface Props {
    food: any,
    active: any,
    setActive: any
}

export const Modal = ({ food, active, setActive }: Props) => {

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
                                <img src={food.img} alt="" />
                            </div>
                            <div className="Modal__describe text-white text-[16px] mt-[16px]">
                                описание:
                            </div>
                            <div className="Modal__describe text-white text-[16px] mt-[8px] pl-[6px]" dangerouslySetInnerHTML={{ __html: food.description }}>
                            </div>
                            <div className="Modal__ingredients text-white text-[16px] mt-[16px]">
                                Состав:
                            </div>
                            <div className="Modal__ingredients text-white text-[16px] pl-[6px]" dangerouslySetInnerHTML={{ __html: food.sostav }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
