import { 
    FaQuestionCircle,
    FaAmbulance,
    FaBicycle,
    FaCarSide,
    FaHelicopter,
    FaMotorcycle,
    FaPlane,
    FaShuttleVan,
    FaTruckMoving,
    FaTruckMonster,
    FaTractor,
    FaTram,
    FaRocket
 } from 'react-icons/fa';
 import styles from '@/app/home.module.css'


export default function Icons( {iconCode} ) {
    console.log('======>', iconCode)
  return (
    <div>
        <div className={ styles.frontIcon }>
        { iconCode === 'A' && <FaAmbulance/> }
        { iconCode === 'B' && <FaBicycle/> }
        { iconCode === 'C' && <FaCarSide/> }
        { iconCode === 'D' && <FaHelicopter/> }
        { iconCode === 'E' && <FaMotorcycle/> }
        { iconCode === 'F' && <FaPlane/> }
        { iconCode === 'G' && <FaShuttleVan/> }
        { iconCode === 'H' && <FaTruckMoving/> }
        { iconCode === 'I' && <FaTruckMonster/> }
        { iconCode === 'J' && <FaTractor/> }
        { iconCode === 'K' && <FaTram/> }
        { iconCode === 'L' && <FaRocket/> }
        </div>
    </div>
  )
}
