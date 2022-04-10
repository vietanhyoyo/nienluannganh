import axios from "axios";


export default function AdminPromotionListItem(props) {
    const handleRemove = () => {
        let bool = window.confirm('Bạn có muốn xóa sản phẩm này khỏi khuyến mãi không?');
        if (bool)
            axios.post('/promotion/xoasanpham', { promotion: props.promotion, idSP: props.data._id })
                .then(res => res.data)
                .then(res => {
                    props.resetSelectPromotion();
                    props.onDelete(props.data._id)
                })
    }

    return (
        <div className='admin-promotion-list-item'>
            <div className='admin-promotion-list-item__col'>
                <div className='admin-promotion-list-item__img'>
                    <img src={props.data.hinhanh[0]} alt='aa' />
                </div>
                <span>{props.data.tensanpham}</span>
            </div>
            <div className='admin-promotion-list-item__col admin-promotion-list-item__col--button'>
                <div className='admin-promotion-list-item__button'>
                    <i className='fi fi-rr-trash' onClick={handleRemove}></i>
                </div>
            </div>
        </div>
    );
}