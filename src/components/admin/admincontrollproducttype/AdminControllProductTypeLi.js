import axios from "axios";

export default function AdminControllProductTypeItem({ data, renderAPI }) {
    const handleDelete = () => {
        let yes = window.confirm('Bạn có muốn xoá nó không!');
        if (yes) {
            axios.post('/products/xoaloaisanpham', data)
                .then((response) => {
                    console.log(response.data)
                    renderAPI()
                })
        }
    }
    const handleEdit = () => {
        let str = prompt('Nhập tên nhóm loại hàng muốn thay đổi');
        if (str) {
            axios.post('/products/sualoaisanpham', {
                _id: data._id,
                tenloaisanpham: str,
                loaihang: data.loaihang
            })
                .then((response) => {
                    console.log(response.data)
                    renderAPI()
                })
        }
    }

    return (
        <li className='admin-controll-product-type__li'>
            <div className='admin-controll-product-type__col'>
                <p>Loại sản phẩm: </p><span>{data.tenloaisanpham}</span>
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