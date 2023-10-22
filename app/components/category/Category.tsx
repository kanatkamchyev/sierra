import axios from 'axios'
import React, { useEffect, useState } from 'react'



type Props = {
    category: any,
    value: any,
    onClickCategory: any
}


export const Category = ({ value, category, onClickCategory }: Props) => {
    return (
        <div className='container'>
            <div className="category">
                <div className="Inside">
                    <ul>
                        {
                            category?.map((item: any) => (
                                <li key={item.id} onClick={() => onClickCategory(item.id)} className={value === item.id ? 'cactegory__li active' : 'cactegory__li'}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>


    )
}
