import './detailCardStyles.css'

function DetailCard(props) {
    return (
        <div className={'cardContainer'}>
            <div className={'cardHeader'}>
                <img
                    src={'https://place-hold.it/300x100/509b98/000000.png&text=Restaurant'}
                    alt={props.name}
                />
            </div>
            <div className={'cardBody'}>
                <div className={'bodyTitle'}>{props.name}</div>
                <div className={'bodyDescription'}>{props.location}</div>
            </div>
            <div className={'cardFooter'}>
                <div>{`${props.eta} Mins` }</div>
            </div>
        </div>
    )
}

export default DetailCard