import { LeftArrow, Star, RightArrow, Yellow } from '@/app/assets/Svg'
import React, { useEffect, useState, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Modal } from '../Modal/Modal'
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import i18n from '@/app/i18';


type Props = {
    item: any,
}


type Mores = {
    id: number,
    img: any,
    title: string,
    description: string,
    description_ru: string,
    description_ky: string,
    price: number,
    sostav: string,
    sostav_ky:string,
    sostav_ru:string,
}



export const Food = ({ item }: Props) => {
    const [count, setCount] = useState(1)
    const [addedToCart, setAddedToCart] = useState(false);
    const [active, setActive] = useState(false)



    useEffect(() => {
        if (active) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [active])

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
            setAddedToCart(false)
        }
    };

    const { t, i18n } = useTranslation()

    const increaseCount = () => {
        setCount(count + 1);
        setAddedToCart(false)

    };

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

    const { foods } = item

    const [currentImage, setCurrentImage] = useState<Mores>({
        id: 0,
        img: null,
        title: '',
        description: '',
        description_ru: '',
        description_ky: '',
        price: 0,
        sostav: '',
        sostav_ky: '',
        sostav_ru: '',
    });

    useEffect(() => {
        if (item.foods && item.foods.length > 0) {
            const initialFood = item.foods[0];
            setCurrentImage({
                id: initialFood.id,
                img: initialFood.photos[0].photo,
                title: initialFood.title,
                description: initialFood.description,
                description_ru: initialFood.description_ru,
                description_ky: initialFood.description_ky,
                price: initialFood.price,
                sostav: initialFood.ingredients,
                sostav_ky: initialFood.ingredients_ky,
                sostav_ru: initialFood.ingredients_ru,
            });
        }
    }, [item.foods]);

    const getDescription = (obj: any) => {
        switch (i18n.language) {
            case 'kg':
                return obj?.description_ky ? obj?.description_ky : obj?.description_ru;
                break;
            default:
                return obj?.description_ru
        }
    }

     const getSostav = (obj: any) => {
        switch (i18n.language) {
            case 'kg':
                return obj?.sostav_ky ? obj?.sostav_ky : obj?.sostav_ru;
                break;
            default:
                return obj?.sostav_ru
        }
    }


    return (
        <div className='food'>
            <div className="container">
                {
                    active ?
                        <Modal getDescription={getDescription} getSostav={getSostav} food={currentImage} active={active} setActive={setActive} /> :
                        null
                }
                <div className="food__inside">
                    <h1 className={currentImage ? 'food__title' : 'food__title active'}>{currentImage.title}</h1>
                </div>
            </div>
            <div className="food__image">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    centeredSlides={true}
                    modules={[Navigation, Pagination]}
                    onSlideChange={(swiper) => {
                        setAddedToCart(false)
                        const activeFood = item.foods[swiper.activeIndex];
                        if (activeFood) {
                            const firstPhoto = activeFood.photos[0];
                            setCurrentImage({
                                id: activeFood.id,
                                img: firstPhoto.photo,
                                title: activeFood.title,
                                description: activeFood.description,
                                description_ru: activeFood.description_ru,
                                description_ky: activeFood.description_ky,
                                price: activeFood.price,
                                sostav: activeFood.ingredients,
                                sostav_ru: activeFood.ingredients_ru,
                                sostav_ky: activeFood.ingredients_ky,
                            });
                        }
                    }}
                    className='mySwiper'
                >
                    {foods.map((food: any) => (
                        <SwiperSlide key={food.id}>
                            {food.photos.map((image: any) => (
                                <div className="image__root flex justify-center" key={image.id}>
                                    <Image layout="responsive"  width={120} height={120} src={image.photo} alt="" />
                                </div>  
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <div>
                <div className="line__yelllow mt-[32px]">
                    <Yellow />
                </div>
                <div className="Inside">

                    <div className="food__description mt-[16px]" dangerouslySetInnerHTML={{ __html: getDescription(currentImage) }} >
                    </div>
                    <div className="food__more mt-[10px]" onClick={() => setActive(true)}>
                        {t('more')}
                    </div>
                    <div className="food__price">
                        {currentImage.price} сом
                    </div>
                    <div className="food__take flex justify-center mt-[20px] items-center gap-[16px]">
                        <div className="left__take flex items-center">
                            <div className="left__arrow cursor-pointer" onClick={decreaseCount}>
                                <LeftArrow />
                            </div>
                            <div className="counter__take text-center text-[20px]">
                                {count}
                            </div>
                            <div className="left__arrow cursor-pointer" onClick={increaseCount}>
                                <RightArrow />
                            </div>
                        </div>
                        <div className="right__take flex ">
                            {addedToCart ? (
                                <button className='btn flex gap-[8px] text-center' disabled>{t('added')}</button>
                            ) : (
                                <button className='flex gap-[8px] text-center' onClick={() => AddToCard(currentImage)}>{t("add")} <Star /></button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

