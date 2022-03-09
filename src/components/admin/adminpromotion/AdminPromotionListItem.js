

export default function AdminPromotionListItem({ data }) {
    const handleRemove = () => {
        let bool = window.confirm('Bạn có muốn xóa sản phẩm này khỏi khuyến mãi không?');
        if(bool) console.log('Xóa thành công');
    }

    return (
        <div className='admin-promotion-list-item'>
            <div className='admin-promotion-list-item__col'>
                <div className='admin-promotion-list-item__img'>
                    <img src={data.hinhanh} alt='aa' />
                </div>
                <span>{data.name}</span>
            </div>
            <div className='admin-promotion-list-item__col admin-promotion-list-item__col--button'>
                <div className='admin-promotion-list-item__button'>
                    <i className='fi fi-rr-trash' onClick={handleRemove}></i>
                </div>
            </div>
        </div>
    );
}