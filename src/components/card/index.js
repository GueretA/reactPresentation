import Link from 'next/link'
import Image from 'next/image'
import style from '../../css/main.module.css'

function Card({ id, title, image }) {
	return (
		<li key={id} className={style.card_container}>

				<div className={style.card_divImg}>
					<Image src={image} className={style.card_img} alt='Default image'/>
				</div>
				<div className={style.card_divText}>
					<p className={style.card_text}>{title}</p>
				</div>
		</li>
	)
};

export default Card;