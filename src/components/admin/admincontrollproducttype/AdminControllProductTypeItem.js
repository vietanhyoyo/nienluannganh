import AdminControllProductTypeLi from './AdminControllProductTypeLi'

export default function AdminControllProductTypeItem() {

    return (
        <div className='admin-controll-product-type__item'>
            <div className='admin-controll-product-type__item--box'>
                <div className='admin-controll-product-type__col'>
                    <div className='admin-controll-product-type__angle'>
                        <i className='fi fi-rr-angle-small-down'></i>
                    </div>
                    <p>Nhóm loại sản phẩm: </p><span>Rau, củ, trái cây</span>
                </div>
                <div className='admin-controll-product-type__col'>
                    <i className='fi fi-rr-trash admin-controll-product-type__icon admin-controll-product-type__icon--red'></i>
                    <i className='fi fi-rr-pencil admin-controll-product-type__icon'></i>
                </div>
            </div>
            <ul>
                <AdminControllProductTypeLi />
                <AdminControllProductTypeLi />
                <AdminControllProductTypeLi />
            </ul>
        </div>
    );
}