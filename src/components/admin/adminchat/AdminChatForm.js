import AdminChatMessage from "./AdminChatMessage";
import AdminChatMyMessage from "./AdminChatMyMessage";
import { useEffect, useState, useRef, useCallback } from 'react';
import axios from "axios";
import io from 'socket.io-client';

function AdminChatForm({ nguoinhan }) {

    /**Socket để kết nối đến server */
    const socket = useRef();

    /**input của tin nhan */
    const [inputText, setInputText] = useState('');

    /**Lưu tinh nhắn đang hiển thị trong khung chat */
    const [tinnhan, setTinNhan] = useState([
        {
            nguoigui: 'Lalisa Manoban',
            noidung: 'Hello Guy, where are you from! asdadasdasda asdas asd asdasd asda dasd sdasda ',
            thoigian: '20:20 tháng 3'
        }
    ])

    /**Hàm lấy dữ liệu của người nhận khách hàng */
    const getTinNhan = useCallback(() => {
        axios.post('/message/laytinnhankhachhang', { _id: nguoinhan._id })
            .then(res => res.data)
            .then(res => {
                setTinNhan(res);
            })
            .catch(err => console.log(err))
    }, [nguoinhan._id]);

    /**Lấy dữ liệu tin nhan của nguòi nhận */
    useEffect(() => {
        getTinNhan()
    }, [getTinNhan]);

    /**Gửi tin nhắn đến khách hàng */
    const handleSend = async () => {
        await axios.post('/message/themtinnhannhanvien', {
            nguoinhan: nguoinhan._id,
            noidung: inputText,
            trangthai: 'Chưa đọc'
        })
            .then(res => res.data)
            .then(res => {
                console.log(res);
            })
        getTinNhan();
        setInputText('');
    }

    /**Lấy dữ liệu tin nhan của nguòi nhận */
    useEffect(() => {
        const element = document.getElementById('adminchat__outputform');
        element.scrollTop = element.scrollHeight;
    });

    /**Kết nối với socket */
    useEffect(() => {
        const socketIO = io('http://localhost:5000', { transports: ['websocket'] })
        socket.current = socketIO;
        socket.current.on(nguoinhan._id, data => {
            getTinNhan()
        });
        return () => {
            socket.current.removeAllListeners(nguoinhan._id);
        }
    }, [nguoinhan._id, getTinNhan]);

    /**Sự kiên Enter trong khung chat */
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    }


    return (<div className='adminchat__right'>
        <div className='adminchat__outputform' id='adminchat__outputform'>
            {tinnhan.map((ele, index) => {
                if (ele.nguoigui !== undefined && ele.nguoigui === nguoinhan._id)
                    return <AdminChatMessage
                        key={index}
                        name={nguoinhan.hoten}
                        message={ele.noidung}
                        image={nguoinhan.hinhanh}
                        time={ele.thoigian}
                    />
                else if (ele.nguoinhan !== undefined && ele.nguoinhan === nguoinhan._id) return <AdminChatMyMessage
                    key={index}
                    name='You'
                    message={ele.noidung}
                    image={'https://i.pinimg.com/550x/85/db/2a/85db2a30e0a25c21cce1bf50563afcc3.jpg'}
                    time={ele.thoigian}
                />
                else return < div key={index}></div>
            })}

        </div>
        <div className='adminchat__inputform' onKeyUp={handleEnter}>
            <input type='text' value={inputText} onChange={e => setInputText(e.target.value)} />
            <div className='button adminchat__send' onClick={handleSend}>
                <i className='fi fi-rr-paper-plane'></i>
            </div>
        </div>
    </div>)
}

export default AdminChatForm;