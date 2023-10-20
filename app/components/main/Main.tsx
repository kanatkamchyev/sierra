import React, { useEffect, useState } from 'react'
import { Category } from '../category/Category'
import { Food } from '../food/Food'
import { Line } from '@/app/assets/Svg'

type Props = {
    category: any,
    categoryId: any,
    setCategoryId: any,
    items: any,
    subcategories: any,
    loading: any
}

export const Main = ({ loading, subcategories, category, categoryId, setCategoryId }: Props) => {



    return (
        <div className='Main'>
            <div className="Main__inside">
                <Category value={categoryId} category={category} onClickCategory={(categoryId: any) => setCategoryId(categoryId)} />
                {
                    loading ?
                        <p className='load'>loading...</p>
                        :
                        (
                            <div className="Main__foods">
                                {
                                    subcategories?.map((item: any) => (
                                        <div className="subCategory__food" key={item.id}>
                                            {
                                                item.foods.length > 0 ?
                                                    <div>

                                                        <div className="subCategory__title">
                                                            {item.title}
                                                        </div>
                                                        <div className="subCategory__line flex justify-end mt-[17px]">
                                                            <Line />
                                                        </div>
                                                        <Food item={item} />

                                                    </div>


                                                    :
                                                    null
                                            }

                                        </div>

                                    ))
                                }
                            </div>
                        )
                }

            </div>
        </div >
    )
}
