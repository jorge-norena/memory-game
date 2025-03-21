import styles from '@/app/home.module.css'
import { FaQuestionCircle } from 'react-icons/fa';


export default function Card( { card, onClick, flipped }) {
 
  return (
    <div>
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ''}`}
        onClick={onClick}
      >
        {flipped ? card.value : <FaQuestionCircle className={ styles.backIcon }/>}
      </div>
    </div>
  )
}
