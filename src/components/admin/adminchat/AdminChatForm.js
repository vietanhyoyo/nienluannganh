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
        /**Gửi lên socket */
        socket.current.emit('on-chat', {
            id: nguoinhan._id,
            nguoigui: 'admin',
            nguoinhan: nguoinhan._id,
            message: inputText,
            role: 'admin'
        });

        getTinNhan();
        setInputText('');
    }

    /**Lăng form chat xuống mỗi khi có tin nhắn */
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

    const convertTime = (time) => {
        const date = new Date(time)
    
        const thoigian = `${date.getHours()} h ${date.getMinutes()} m`;
        let result;
        result = thoigian;
        return result;
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
                        time={convertTime(ele.thoigian)}
                    />
                else if (ele.nguoinhan !== undefined && ele.nguoinhan === nguoinhan._id) return <AdminChatMyMessage
                    key={index}
                    name='Admin'
                    message={ele.noidung}
                    image={'https://cdn4.vectorstock.com/i/thumb-large/93/48/customer-support-or-service-agent-vector-26289348.jpg'}
                    time={convertTime(ele.thoigian)}
                />
                else return <div key={index}></div>
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