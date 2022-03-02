export default function AdminControllProductTypeItem() {

    return (
        <li className='admin-controll-product-type__li'>
            <div className='admin-controll-product-type__col'>
                <p>Loại sản phẩm: </p><span>Rau củ</span>
            </div>
            <div className='admin-controll-product-type__col'>
                <i className='fi fi-rr-trash admin-controll-product-type__icon admin-controll-product-type__icon--red'></i>
                <i className='fi fi-rr-pencil admin-controll-product-type__icon'></i>
            </div>
        </li>

    );
}