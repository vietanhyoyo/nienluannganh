import { Link } from 'react-router-dom'

function MerchandiseItem(prop) {
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return (
        <Link to={`/product/${prop._id}`} className='merchandise__item'>
            <div className='merchandise__box'>
                <div className='merchandise__element'>
                    <div className='merchandise__img'>
                        <img src={prop.image} alt='noPhoto' />
                    </div>
                    <p className='merchandise__name'>{prop.name}</p>
                    {prop.cost === prop.salecost ?
                        <p className='merchandise__price'>
                            <span>
                                <b>{formatNumber(prop.cost)}</b>đ/{prop.donvi}
                            </span>
                        </p> :
                        <p className='merchandise__price'>
                            <span>
                                <b>{formatNumber(prop.salecost)}</b>đ/{prop.donvi}
                            </span>
                            <span className='merchandise__price--undone'>
                                {formatNumber(prop.cost)}đ/{prop.donvi}
                            </span>
                        </p>}
                </div>
            </div>
        </Link>
    );
}

export default MerchandiseItem;