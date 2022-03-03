export default function AdminControllProductTypeItem(props) {
    const handleDelete = () => {
        let yes = window.confirm('Bạn có muốn xoá nó không!');
        if (yes) {
            alert('Đã xóa một item')
        }
    }
    const handleEdit = () => {
        let str = prompt('Nhập tên nhóm loại hàng muốn thay đổi');
        if (str) {
            alert(str)
        }
    }

    return (
        <li className='admin-controll-product-type__li'>
            <div className='admin-controll-product-type__col'>
                <p>Loại sản phẩm: </p><span>Rau củ</span>
            </div>
            <div className='admin-controll-product-type__col'>
                <i
                    className='fi fi-rr-trash admin-controll-product-type__icon admin-controll-product-type__icon--red'
                    onClick={handleDelete}
                ></i>
                <i
                    className='fi fi-rr-pencil admin-controll-product-type__icon'
                    onClick={handleEdit}
                ></i>
            </div>
        </li>

    );
}