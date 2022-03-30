

export default function AdminPromotionItem(prop) {

    const promotion = prop.promo;
    /**Trang thai cua khuyen mai */
    let statusClass = 'admin-promotion__num';
    if(prop.trangthai === 1) statusClass += ' admin-promotion__num--green';
    else if (prop.trangthai === 0) statusClass += ' admin-promotion__num--yellow';
    /**Chuyen chuoi thanh ngay */
    const convertDate = function(string){
        const date = new Date(string);
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    return (
        <div className='admin-promotion__item' onClick={prop.onToggle}>
            <div className='admin-promotion__item__col'>
                <div className={statusClass}>
                    <div className='admin-promotion__num__content'>
                        <p>{promotion.danhsachsanpham.length}</p>
                        <p className='admin-promotion__num__sp'>sản phẩm</p>
                    </div>
                </div>
            </div>
            <div className='admin-promotion__item__col admin-promotion__item__col--after'>
                <div className='admin-promotion__item__row'>
                    <div className='admin-promotion__item__name'>{promotion.tenkhuyenmai}</div>
                    <div className='admin-promotion__item__price'>Giảm {promotion.phantram}%</div>
                </div>
                <div className='admin-promotion__item__row'>
                    <div className='admin-promotion__item__date'>{convertDate(promotion.ngaybd)} đến {convertDate(promotion.ngaykt)}</div>
                </div>
            </div>
        </div>
    );
}