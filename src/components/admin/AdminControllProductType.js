import '../../css/admincontrollproducttype.css'
import AdminControllProductTypeItem from './admincontrollproducttype/AdminControllProductTypeItem';

export default function AdminControllProductType() {
    return (
        <div className='admin-controll-product-type'>
            <div className='admin-controll-product-type__content'>
                <div className='admin-controll-product-type__topic'>
                        <i className='fi fi-rr-layout-fluid'></i>
                    <h2> Quản lý loại hàng</h2>
                </div>
                <div className='admin-controll-product-type__body'>
                    <div>
                        <AdminControllProductTypeItem />
                    </div>
                </div>
            </div>
        </div>
    );
}