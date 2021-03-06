import '../css/chat.css';
import { memo, useRef, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { LoginContext } from '../contexts/LoginContext';

function Chat() {

    /**Lấy giá trị context */
    const context = useContext(LoginContext);
    const role = context.role;
    const iduser = context.iduser;

    /**Tên user đăng nhập */
    const [nameUser, setNameUser] = useState('Chưa đăng nhập!');

    /**Socket để kết nối đến server */
    const socket = useRef();

    /**useState lưu thông tin chat message */
    const [tinnhan, setTinNhan] = useState([{
        nguoigui: 'Lalisa Manoban',
        noidung: 'Hello Guy, where are you from! asdadasdasda asdas asd asdasd asda dasd sdasda ',
        thoigian: '20:20 tháng 3'
    }]);

    /**Dữ liệu trong ô input */
    const [inputText, setInputText] = useState('');

    /**Đóng mở form */
    const turnon = useRef();
    const form = useRef();
    const handleToggle = () => {
        turnon.current.classList.toggle('chat--hidden');
        form.current.classList.toggle('chat--hidden');
    };

    /**Lấy dữ liệu tên user đăng nhập */
    useEffect(() => {
        axios.post('/login/layuser', { id: iduser })
            .then(response => response.data)
            .then(response => {
                setNameUser(response.hoten);
            });
        /**Lấy dữ liệu tin nhắn khách hàng */
        if (iduser !== null)
            axios.post('/message/laytinnhankhachhang', { _id: iduser })
                .then(res => res.data)
                .then(res => {
                    setTinNhan(res);
                })
    }, [iduser]);

    /**Kết nối với socket */
    useEffect(() => {
        const socketIO = io('http://localhost:5000', { transports: ['websocket'] })
        socket.current = socketIO;
        /**Lắng nghe socket */
        socket.current.on(iduser, data => {
            setTinNhan(prev => ([...prev, {
                nguoigui: data.nguoigui,
                nguoinhan: data.nguoinhan,
                noidung: data.message
            }
            ]));
        });
        return () => {
            socket.current.removeAllListeners(iduser);
        }
    }, [iduser]);

    /**Gửi dữ liệu message */
    const handleSendMessage = async () => {
        if (role !== null)
            return;
        /**Thêm vào cơ sở dữ liệu */
        await axios.post('/message/themtinnhankhachhang', {
            nguoigui: iduser,
            noidung: inputText,
            trangthai: 'Chưa đọc'
        })
            .then(res => res.data)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        /**Gửi lên socket */
        socket.current.emit('on-chat', {
            id: iduser,
            nguoigui: iduser,
            nguoinhan: 'admin',
            message: inputText,
            role: role
        });
        /**Xóa input */
        setInputText('');
    }

    /**Sự kiên Enter trong khung chat */
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }

    /**Lăng form chat xuống mỗi khi có tin nhắn */
    useEffect(() => {
        const element = document.getElementById('chat-show');
        if (element !== null)
            element.scrollTop = element.scrollHeight;
    }, [tinnhan]);
    return (
        <>{role === null &&
            <div className='chat' id={nameUser}>
                <div className='chat__turn-on' ref={turnon} onClick={handleToggle}>
                    <i className='fa-solid fa-comment chat__icon'></i>
                    <span style={{ marginLeft: '10px' }}>Chat</span>
                </div>
                <div className='chat__form chat--hidden' ref={form}>
                    <div className='chat__hearder'>
                        <p>CHAT</p>
                        <i className='fa-solid fa-square-xmark chat__icon--close' onClick={handleToggle}></i>
                    </div>
                    <div className='chat__show' id='chat-show'>
                        {tinnhan.map((ele, index) => {
                            if (ele.nguoigui !== undefined && ele.nguoigui === iduser)
                                return <div className='chat__message chat__message--right' key={index}>
                                    <p className='chat__username'>bạn</p>
                                    <p className='chat__messagetext'>{ele.noidung}</p>
                                </div>

                            else if (ele.nguoinhan !== undefined && ele.nguoinhan === iduser)
                                return <div className='chat__message chat__message--left' key={index}>
                                    <p className='chat__username'>shop</p>
                                    <p className='chat__messagetext'>{ele.noidung}</p>
                                </div>
                            else return < div key={index} ></div>
                        })}
                    </div>
                    <div className='chat__write' onKeyPress={e => handleEnter(e)}>
                        <input type='text' className='chat__input input-text'
                            onChange={e => setInputText(e.target.value)} value={inputText} />
                        <div className='button chat__button' onClick={handleSendMessage}>Gửi</div>
                    </div>
                </div>
            </div>}
        </>
    );

}

export default memo(Chat);
