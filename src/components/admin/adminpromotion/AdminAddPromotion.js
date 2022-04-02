import { useEffect, useState } from "react";
import axios from "axios";
import AdminPromotionItem from "./AdminPromotionItem";
import '../../../css/adminaddpromotion.css';

function AdminAddPromotion(props) {
    const idProduct = props.idProductSelect;

    /**Danh sach khuyen mai */
    const [promotions, setPromotions] = useState([{
        _id: 'ddd',
        tenkhuyenmai: 'null',
        phantram: '10',
        ngaybd: '12:00 8/3/2022',
        ngaykt: '24:00 20/3/2022',
        danhsachsanpham: [],
        trangthai: 0
    }]);
    /**Danh sach khuyen mai duoc hien thi */
    const [displaypromotions, setDisplayPromotions] = useState(promotions);

    /**Ham lay du lieu khuyen mai */
    const getPromotionsAPI = () => {
        axios.get('/promotion/danhsachkhuyenmai')
            .then(res => res.data)
            .then(res => {
                setPromotions(res);
            });
    }
    /**Lay du lieu */
    useEffect(() => {
        getPromotionsAPI()
    }, [])

    /**Loc cac hien thi */
    useEffect(() => {
        const data = promotions.filter(ele => {
            return ele.trangthai === 0 || ele.trangthai === 1;
        })
        setDisplayPromotions(data);
    }, [promotions])
    /**Thêm sản phẩm vào khuyến mãi */
    const handleAddProduct = (promotion, idProduct) => {
        if (findProductInPromotion(promotion.danhsachsanpham, idProduct) === false)
            axios.post('/promotion/themsanpham', { promotion: promotion, idProduct: idProduct })
                .then(res => res.data)
                .then(res => getPromotionsAPI())
        else console.log('San pham nay da duoc them')
    }

    const findProductInPromotion = (array, id) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i]._id === id) {
                return true;
            }
        };
        return false;
    }

    return (
        <div className='adminaddpromotion'>
            <div className='adminaddpromotion__turnoff' onClick={props.onUnShow}></div>
            <div className='adminaddpromotion__box'>
                <div className='adminaddpromotion__header'>
                    <span>Thêm khuyến mãi cho sản phẩm</span>
                    <span className='adminaddpromotion__close' onClick={props.onUnShow}>Đóng</span>
                </div>
                <div className='adminaddpromotion__body'>
                    {displaypromotions.map((promotion, index) => {
                        const dathem = findProductInPromotion(promotion.danhsachsanpham, idProduct);
                        return <AdminPromotionItem
                            key={index}
                            promo={promotion}
                            trangthai={promotion.trangthai}
                            dathem={dathem}
                            onAddProduct={() => handleAddProduct(promotion, idProduct)}
                        />
                    })}
                </div>
                <div className='adminaddpromotion__footer'></div>
            </div>
        </div>
    )
}

export default AdminAddPromotion;