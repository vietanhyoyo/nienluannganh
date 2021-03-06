import '../../css/presonprofile.css';
import PersonProfileQH from './personProfile/PersonProfileQH';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { LoginContext } from '../../contexts/LoginContext';


export default function PersonProfile() {
    const [check, setcheck] = useState('');
    const idKH = useContext(LoginContext)
    const [load, setLoad] = useState({
        _id: '',
        hoten: '',
        sdt: '',
        gioitinh: '',
        quanhuyen: '',
        diachi: ''
    });
    const [TP, setTP] = useState([{
        _id: '',
        ten: ''
    }]);
    const [selectTP, setSelectTP] = useState(0);
    const [QH, setQH] = useState({
        _id: '',
        ten: '',
        tinhtp: ''
    });
    useEffect(() => {
        axios.get('/address/tinh')
            .then(response => response.data)
            .then(response => {
                setTP(response);
            });
    }, []);
    useEffect(() => {
        axios.post('/customer/infokhachhang', { id: idKH.iduser })
            .then(response => response.data)
            .then(response => {
                setLoad(response);
                if (response.gioitinh !== undefined) {
                    setcheck(response.gioitinh)
                }
                if (response.quanhuyen !== undefined) {
                    setQH(response.quanhuyen)
                }
                console.log(response)
            });

    }, [idKH.iduser]);

    useEffect(() => {
        if (TP.length > 0 && load.quanhuyen !== undefined && QH._id !== '') {
            const index = TP.indexOf(TP.filter(element => {
                return element._id === QH.tinhtp
            })[0]);
            if (index !== -1)
                setSelectTP(index)
        }

        if (load.diachi === undefined) {
            setLoad(prev => ({ ...prev, diachi: '' }))
        }
    }, [load, TP, QH])
    const handleSubmit = () => {
        load.quanhuyen = QH._id
        load.gioitinh = check;
        axios.post('/customer/updateinfo', { id: load._id, load: load })
            .then(response => response.data)
            .then(response => {
                alert('C???p nh???t th??nh c??ng')
            })
    }
    return (
        <>
            <div className='person__profile'>
                <h2 className='person__profile-title'>Th??ng tin t??i kho???n</h2>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">H??? T??n:</label>
                    <input
                        onChange={(e) => {
                            setLoad(prev => ({ ...prev, hoten: e.target.value }))
                        }}
                        className="person__profile__row-input-wrapper-input" defaultValue={load.hoten}></input>
                </div>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">S??? ??i???n tho???i:</label>
                    <input
                        onChange={(e) => {
                            setLoad(prev => ({ ...prev, sdt: e.target.value }))
                        }}
                        className="person__profile__row-input-wrapper-input" defaultValue={load.sdt}></input>
                </div>
                <div className="person__profile__row person__profile__row-radio">
                    <span className='person__profile__row-span'>
                        <input onChange={() => {
                            setcheck('nam');

                        }}
                            checked={check === 'nam'} type={'radio'} className="person__profile__row-span-radio"></input>
                        <label className='person__profile__row-span-sex'>nam</label>
                    </span>
                    <span className='person__profile__row-span'>
                        <input onChange={() => {
                            setcheck('n???');
                        }}
                            checked={check === 'n???'} type={'radio'} className="person__profile__row-span-radio"></input>
                        <label className='person__profile__row-span-sex'>n???</label>
                    </span>

                </div>
                <div className="person__profile__row">
                    <label className="person-profile__row-label">T???nh/Th??nh ph???:</label>
                    <select name='dsTinh' onChange={(e) => {
                        setSelectTP(e.target.value);
                    }}
                        value={selectTP} className="person__profile__row-input-wrapper-input">
                        {TP.map((ele, index) => {
                            return <option key={index} value={index}>{ele.ten}</option>
                        })}
                    </select>
                </div>
                {TP.length > 0 && <PersonProfileQH
                    id={TP[selectTP]._id}
                    ten={TP[selectTP].ten}
                    setQH={(value) => { setQH(value) }}
                    QH={QH}
                />}
                <div className="person__profile__row">
                    <label className="person-profile__row-label">S??? nh??:</label>
                    <input type={'text'}
                        onChange={(e) => {
                            setLoad(prev => ({ ...prev, diachi: e.target.value }))
                        }}
                        className="person__profile__row-input-wrapper-input" defaultValue={load.diachi}></input>
                </div>
                <div className="person__profile__row">
                    <div onClick={handleSubmit} className='button button_update'>
                        C???p nh???t
                    </div>
                </div>
            </div>
        </>
    );
}