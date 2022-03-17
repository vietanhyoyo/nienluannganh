import {Link} from 'react-router-dom'

function MerchandiseItem(prop) {
    return (
        <Link to='/product/id=0' className='merchandise__item'>
            <div className='merchandise__box'>
                <div className='merchandise__element'>
                    <div className='merchandise__img'>
                        <img src={prop.image} alt='noPhoto' />
                    </div>
                    <p className='merchandise__name'>{prop.name}</p>
                    <p>{prop.cost} / {prop.donvi}</p>
                    <div className='button'>Thêm vào giỏ</div>
                </div>
            </div>
        </Link>
    );
}

export default MerchandiseItem;