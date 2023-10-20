// import { Logo } from '@/app/assets/Svg'
import Logo from '../../assets/svg/20230823_201812 копія 4.svg'

export const Loader = () => {
  return (
    <div className='container'>
      <div className="loader__page">
        <div className="loader__main">
          <img src={Logo.src} alt="preloader" />
        </div>
      </div>
    </div>

  )
}
