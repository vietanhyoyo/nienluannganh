import '../../css/adminchat.css';
import AdminChatUser from './adminchat/AdminChatUser';
import { useState, useEffect, useRef } from 'react'
import AdminChatForm from './adminchat/AdminChatForm';
import io from 'socket.io-client';
import axios from 'axios';

function AdminChat() {

    /**Danh sach khach hang chat voi minh */
    const [khachhang, setKhachHang] = useState([{
        _id: 'nono',
        hoten: 'Lalisa Manoban',
        hinhanh: 'https://top5kythu.com/wp-content/uploads/lisa-bp-top5kythu.jpg',
        tinnhan: {
            noidung: 'Hello Guy!'
        }
    }]);

    /**Socket để kết nối đến server */
    const socket = useRef();

    /**Khach hang dang noi chuyen voi minh */
    const [nguoinhan, setNguoiNhan] = useState(khachhang[0]);

    /**Axios lấy dữ liệu khách hàng  */
    const getListCustomer = () => {
        axios.get('/message/danhsachkhachhang')
            .then(res => res.data)
            .then(res => {
                setKhachHang(res);
            })
            .catch(err => console.log(err))
    }

    /**Kết nối với socket */
    useEffect(() => {
        const socketIO = io('http://localhost:5000', { transports: ['websocket'] })
        socket.current = socketIO;
        socket.current.on('user-chat', data => {
            getListCustomer()
        });
        return () => {
            socket.current.removeAllListeners('user-chat');
        }
    }, []);

    /**Kết nối với socket */
    useEffect(() => {
        getListCustomer();
    }, []);

    return (<div className='adminchat'>
        <div className='adminchat__content'>
            <div className='adminchat__header'>
                <h2>Chat với khách hàng</h2>
                <div className='adminchat__border'></div>
            </div>
            <div className='adminchat__body'>
                <div className='adminchat__left'>
                    <div className='adminchat__search'>
                        {/* <input type='text' placeholder='Tìm tên khách hàng' /> */}
                        <div className='adminchat__border'></div>
                        <div>
                            {khachhang.map((ele, index) => {
                                return <AdminChatUser
                                    key={index}
                                    name={ele.hoten}
                                    message={ele.tinnhan.noidung}
                                    image={ele.hinhanh}
                                    onclick={() => { setNguoiNhan(ele) }}
                                />
                            })}
                        </div>
                    </div>
                </div>
                <AdminChatForm
                    nguoinhan={nguoinhan}
                />
            </div>
        </div>
    </div>)
}

export default AdminChat;