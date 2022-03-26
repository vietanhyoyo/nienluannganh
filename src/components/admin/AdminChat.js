import '../../css/adminchat.css';
import AdminChatUser from './adminchat/AdminChatUser';

function AdminChat() {

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
                    </div>
                </div>
                <div className='adminchat__right'></div>
            </div>
        </div>
    </div>)
}

export default AdminChat;