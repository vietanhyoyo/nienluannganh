import '../../css/adminchat.css';
import AdminChatUser from './adminchat/AdminChatUser';
import { useState } from 'react'
import AdminChatMessage from './adminchat/AdminChatMessage';
import AdminChatMyMessage from './adminchat/AdminChatMyMessage';

function AdminChat() {
    const [khachhang] = useState([{
        hoten: 'Lalisa Manoban',
        hinhanh: 'https://top5kythu.com/wp-content/uploads/lisa-bp-top5kythu.jpg',
        tinnhan: {
            noidung: 'Hello Guy!'
        }
    }, {
        hoten: 'Võ Duy Linh',
        hinhanh: 'https://i.pinimg.com/550x/85/db/2a/85db2a30e0a25c21cce1bf50563afcc3.jpg',
        tinnhan: {
            noidung: 'Xin chao shop'
        }
    }]);

    const [nguoinhan] = useState(khachhang[0]);

    const [tinnhan] = useState([
        {
            nguoigui: 'Lalisa Manoban',
            noidung: 'Hello Guy, where are you from! asdadasdasda asdas asd asdasd asda dasd sdasda ',
            thoigian: '20:20 tháng 3'
        }
    ])


    return (<div className='adminchat'>
        <div className='adminchat__content'>
            <div className='adminchat__header'>
                <h2>Chat với khách hàng</h2>
                <div className='adminchat__border'></div>
            </div>
            <div className='adminchat__body'>
                <div className='adminchat__left'>
                    <div className='adminchat__search'>
                        <input type='text' placeholder='Tìm tên khách hàng' />
                        <div className='adminchat__border'></div>
                        <div>
                            {khachhang.map((ele, index) => {
                                return <AdminChatUser
                                    key={index}
                                    name={ele.hoten}
                                    message={ele.tinnhan.noidung}
                                    image={ele.hinhanh}
                                />
                            })}
                        </div>
                    </div>
                </div>
                <div className='adminchat__right'>
                    <div className='adminchat__outputform'>
                        {tinnhan.map((ele, index) => {
                            return <AdminChatMessage
                                key={index}
                                name={ele.nguoigui}
                                message={ele.noidung}
                                image={nguoinhan.hinhanh}
                                time={ele.thoigian}
                            />
                        })}
                        <AdminChatMyMessage
                            name={'You'}
                            message={'Chao chi!'}
                            image={'https://i.pinimg.com/550x/85/db/2a/85db2a30e0a25c21cce1bf50563afcc3.jpg'}
                            time={'03:30 20/02/2022'}
                        />
                    </div>
                    <div className='adminchat__inputform'>
                        <input type='text' />
                        <div className='button adminchat__send'><i className='fi fi-rr-paper-plane'></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default AdminChat;