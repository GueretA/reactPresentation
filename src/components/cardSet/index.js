import { useFetch } from '../../utils/hooks'
import Card from '../card'
import style from '../../css/main.module.css'
import DefaultPetImage from '../../assets/default-pet-image.png'
import Filter from '../filter'

function CardsSet() {
	const { data, isLoading, error } = useFetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`, 'GET')

	if (error) {
		return <span>Une erreur est survenue. Merci de réessayer ultérieurement.</span>
	}

    var i = 0;
    function GetInc(){
        return i++;
    }

	return (
		<section className={style.cardsSet_section}>
			<Filter />
			{isLoading ? (
				<></>
			) : (
				<ul className={style.cardsSet_list}>
					{data.map(({ id, name, status, photoUrls }) => (
						<Card key={ `${id}-${GetInc()}`}
							id={id}
							title={name}
							image= {photoUrls && photoUrls[0] && photoUrls[0].includes('data:image/')?photoUrls[0]:DefaultPetImage}
							status={status}
						/>
					))}
				</ul>
			)}
        </section>
	)
}

export default CardsSet