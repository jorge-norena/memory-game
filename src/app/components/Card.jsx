import styles from '@/app/home.module.css'
import { FaQuestionCircle } from 'react-icons/fa';
import Icons from './Icons';


export default function Card( { card, onClick, flipped }) {
 
  return (
    <div>
      <div
        className={`${styles.card} ${flipped ? styles.flipped : ''}`}
        onClick={onClick}
      >
        {flipped ? <Icons iconCode={card.value}/> : <FaQuestionCircle className={ styles.backIcon }/>}
      </div>
    </div>
  )
}
