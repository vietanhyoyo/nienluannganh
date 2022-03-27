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
    const [chatMessage, setChatMessage] = useState([{
        className: 'chat__message chat__message--left',
        message: 'Xin chào',
    }, {
        className: 'chat__message chat__message--right',
        message: 'Tôi có thể giúp gì cho bạn.',
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
    }, [iduser]);

    /**Kết nối với socket */
    useEffect(() => {
        const socketIO = io('http://localhost:5000', { transports: ['websocket'] })
        socket.current = socketIO;
        socket.current.on('user-chat', data => {
            console.log('lang nghe user chat');
            setChatMessage(prev => ([...prev, {
                className: 'chat__message chat__message--right',
                message: data.message
            }]));

            const element = document.getElementById('chat-show');
            element.scrollTop = element.scrollHeight;
        });
        return () => {
            socket.current.removeAllListeners('user-chat');
        }
    }, []);

    /**Gửi dữ liệu message */
    const handleSendMessage = async () => {
        if (role !== null)
            return;
        /**Thêm vào cơ sở dữ liệu */
        await axios.post('/message/themtinnhankhachhang', { nguoigui: iduser, noidung: inputText, trangthai: 'Chưa đọc' })
            .then(res => res.data)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        /**Gửi lên socket */
        socket.current.emit('on-chat', { id: iduser, name: nameUser, message: inputText, role: role });
        /**Xóa input */
        setInputText('');
    }

    /**Sự kiên Enter trong khung chat */
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }

    return (
        <div className='chat'>
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
                    {chatMessage.map((ele, index) => {
                        return <div className={ele.className} key={index}>
                            <p>{ele.message}</p>
                        </div>
                    })}
                </div>
                <div className='chat__write' onKeyPress={e => handleEnter(e)}>
                    <input type='text' className='chat__input input-text'
                        onChange={e => setInputText(e.target.value)} value={inputText} />
                    <div className='button chat__button' onClick={handleSendMessage}>Gửi</div>
                </div>
            </div>
        </div>
    );

}

export default memo(Chat);
