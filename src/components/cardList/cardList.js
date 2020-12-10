import { useEffect } from 'react';
import DetailCard from '../detailCard/detailCard';
import './cardListStyles.css';

function CardList(props) {

    useEffect(() => {
        // console.log(props)
    })

    const renderItems = () => {
        return props.cardListData.map((cardData) => {
            return <DetailCard key={cardData._id} {...cardData}></DetailCard>
        })
    }

    return (
        <div className={'cardList'}>
            {
                renderItems()
            }
        </div>
    )
}


export default CardList