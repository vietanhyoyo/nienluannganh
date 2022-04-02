import '../../css/adminpromotion.css'
import AdminPromotionItem from './adminpromotion/AdminPromotionItem';
import { useEffect, useState } from 'react'
import AdminPromotionList from './adminpromotion/AdminPromotionList';
import axios from 'axios'

export default function AdminPromotion() {
    /**Dong mo form edit khuyen mai */
    const [show, setShow] = useState(false);
    /**useState them khuyen mai */
    const [newPromotion, setNewPromotion] = useState({
        tenkhuyenmai: '',
        ngaybd: '',
        ngaykt: '',
        phantram: '',
        danhsachsanpham: []
    });
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
    /**Khuyen mai duoc chon de chinh sua */
    const [selectPromotion, setSelectPromotion] = useState({
        _id: 'ddd',
        tenkhuyenmai: 'null',
        phantram: '10',
        ngaybd: '12:00 8/3/2022',
        ngaykt: '24:00 20/3/2022',
        danhsachsanpham: [],
        trangthai: 0
    });

    /**Danh sach khuyen mai duoc hien thi */
    const [displaypromotions, setDisplayPromotions] = useState(promotions);
    /**bo loc cac khuyen mai*/
    const [filter, setFilter] = useState({
        ngaybd: '',
        ngaykt: '',
        trangthai: '2'
    })
    /**Xử lí lọc dữ liệu */
    const handleFilter = () => {
        const ngaybdFilter = document.getElementById('ngaybd');
        const ngayktFilter = document.getElementById('ngaykt');
        const trangthaiFilter = document.getElementById('trangthai');

        const fi = {
            ngaybd: ngaybdFilter.value,
            ngaykt: ngayktFilter.value,
            trangthai: trangthaiFilter.value
        }

        setFilter(fi);
    }
    /**Hủy lọc */
    const handleResetFilter = () => {
        setFilter({
            ngaybd: '',
            ngaykt: '',
            trangthai: '2'
        })
        const ngaybdFilter = document.getElementById('ngaybd');
        const ngayktFilter = document.getElementById('ngaykt');
        const trangthaiFilter = document.getElementById('trangthai');

        ngaybdFilter.value = '';
        ngayktFilter.value = '';
        trangthaiFilter.value = '2';

    }
    /**Su kien dong mo form edit khuyen mai */
    const handleToggleShow = () => {
        setShow(!show);
    }
    /**Them khuyen mai */
    const handleAddPromotion = () => {

        const data = newPromotion;
        /**Cap nhat trang thai */
        const now = new Date();
        let th = 0;
        if (new Date(data.ngaybd) <= now && new Date(data.ngaykt) >= now) th = 1;
        else if (new Date(data.ngaykt) <= now) th = -1;

        data.trangthai = th;

        axios.post('/promotion/themkhuyenmai', { promotion: data })
            .then(res => res.data)
            .then(res => {
                getPromotionsAPI();
                setNewPromotion({ danhsachsanpham: [] });
                resetInput();
            })
    }
    /**Hàm lấy dữ liệu khuyến mãi */
    const getPromotionsAPI = () => {
        axios.get('/promotion/danhsachkhuyenmai')
            .then(res => res.data)
            .then(res => {
                setPromotions(res);
            });
    }
    /**Lay du lieu */
    useEffect(() => {
        getPromotionsAPI();
    }, [])
    /**Xoa khuyen mai */
    const handleDeletePromotion = () => {
        const bool = window.confirm('Bạn có muốn xóa khuyến mãi này');
        if (bool) {
            axios.post('/promotion/xoakhuyenmai', { promotion: selectPromotion })
                .then(res => res.data)
                .then(res => {
                    console.log(res);
                    getPromotionsAPI();
                    handleToggleShow();
                })
        }
    }
    /**Loc cac hien thi */
    useEffect(() => {
        let data = [...promotions];
        if (filter.ngaybd !== '' && filter.ngaykt !== '') {
            data = data.filter(ele => (
                ((new Date(ele.ngaybd) <= new Date(filter.ngaybd)) &&
                    (new Date(ele.ngaykt) >= new Date(filter.ngaybd)))
                ||
                ((new Date(ele.ngaybd) <= new Date(filter.ngaykt)) &&
                    (new Date(ele.ngaykt) >= new Date(filter.ngaykt)))
            ));
        } else {
            if (filter.ngaybd !== '') {
                data = data.filter(ele => (new Date(ele.ngaybd) >= new Date(filter.ngaybd)));
            }
            if (filter.ngaykt !== '') {
                data = data.filter(ele => (new Date(ele.ngaykt) <= new Date(filter.ngaykt)));
            }
        }
        if (filter.trangthai !== '2') {
            data = data.filter(ele => (ele.trangthai === Number(filter.trangthai)));
        }

        setDisplayPromotions(data);
    }, [promotions, filter])

    /**Xóa ô input */
    const resetInput = () => {
        const inputs = document.querySelectorAll('.admin-promotion__input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    }

    return (
        <div className='admin-promotion'>
            <div className='admin-promotion__header'>
                <div className='admin-promotion__header__1'>
                    <div className='admin-promotion__header--title'>
                        <i className='fi fi-rr-megaphone'></i>
                        <h2>Tạo khuyến mãi cho sản phẩm</h2>
                    </div>
                    <p className='admin-promotion__minitext'>Form thêm khuyến mãi!</p>
                </div>
                <div>
                    <form method='post' action='' className='admin-promotion__form'>
                        <div className='admin-promotion__row'>
                            <div className='admin-promotion__col'>
                                <label htmlFor='name' className='admin-promotion__label'>Tên khuyến mãi<b>*</b></label>
                                <input type='text' name='name' className='admin-promotion__input'
                                    onChange={e => setNewPromotion(prev => ({ ...prev, tenkhuyenmai: e.target.value }))} />
                            </div>
                            <div className='admin-promotion__col admin-promotion__col--after'>
                                <label htmlFor='price' className='admin-promotion__label'>Nhập giá giảm<b>*</b></label>
                                <input type='text' name='price' className='admin-promotion__input' placeholder='30'
                                    onChange={e => setNewPromotion(prev => ({ ...prev, phantram: Number(e.target.value) }))} />
                            </div>
                        </div>
                        <div className='admin-promotion__row'>
                            <div className='admin-promotion__col'>
                                <label htmlFor='startdate' className='admin-promotion__label'>Ngày bắt đầu<b>*</b></label>
                                <input type='date' name='startdate' className='admin-promotion__input'
                                    onChange={e => setNewPromotion(prev => ({ ...prev, ngaybd: new Date(e.target.value) }))} />
                            </div>
                            <div className='admin-promotion__col admin-promotion__col--after'>
                                <label htmlFor='enddate' className='admin-promotion__label'>Ngày kết thúc<b>*</b></label>
                                <input type='date' name='enddate' className='admin-promotion__input'
                                    onChange={e => setNewPromotion(prev => ({ ...prev, ngaykt: new Date(e.target.value) }))} />
                            </div>
                        </div>
                        <div className='admin-promotion__row admin-promotion__row--btn'>
                            <div className='button' onClick={handleAddPromotion} >Thêm</div>
                            <div className='button admin-promotion__btn-gray' onClick={resetInput}>Hủy</div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='admin-promotion__body'>
                <div className='admin-promotion__controll'>
                    <div className='admin-promotion__row admin-promotion__filter'>
                        <div className='admin-promotion__col--small'>
                            <p>Lọc</p>
                        </div>
                        <div className='admin-promotion__col'>
                            <label htmlFor='startdatefilter' className='admin-promotion__label'>Ngày bắt đầu</label>
                            <input id='ngaybd' type='date' name='startdatefilter' className='admin-promotion__input' />
                        </div>
                        <div className='admin-promotion__col admin-promotion__col'>
                            <label htmlFor='enddatefilter' className='admin-promotion__label'>Ngày kết thúc</label>
                            <input id='ngaykt' type='date' name='enddatefilter' className='admin-promotion__input' />
                        </div>
                        <div className='admin-promotion__col'>
                            <label htmlFor='statefilter' className='admin-promotion__label'>Trạng thái</label>
                            <select id='trangthai' type='date' name='startdate' className='admin-promotion__input' >
                                <option value='2'>tất cả</option>
                                <option value='1'>hiệu lực</option>
                                <option value='0'>sắp diễn ra</option>
                                <option value='-1'>hết hiệu lực</option>
                            </select>
                        </div>
                        <div className='admin-promotion__col--small'>
                            <div className='button' onClick={handleFilter}>Liệt kê</div>
                        </div>
                        <div className='admin-promotion__col--small' style={{ paddingLeft: '0px' }}>
                            <div className='button admin-promotion__btn-gray' onClick={handleResetFilter}>Bỏ lọc</div>
                        </div>
                    </div>
                </div>
                <div className='admin-promotion__list'>
                    {displaypromotions.map((promotion, index) => {
                        return <AdminPromotionItem
                            onToggle={handleToggleShow}
                            key={index}
                            promo={promotion}
                            trangthai={promotion.trangthai}
                            onSelectPromotion={() => setSelectPromotion(promotion)}
                        />
                    })}
                </div>
            </div>
            {show && <AdminPromotionList
                onToggle={handleToggleShow}
                onDelete={handleDeletePromotion}
                selectPromotion={selectPromotion}
                resetSelectPromotion={getPromotionsAPI}
            />}
        </div>
    );
}