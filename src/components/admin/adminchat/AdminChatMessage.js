import AdminChatUserAvatar from "./AdminChatUserAvatar";

function AdminChatMessage(props) {
    return (
        <div className='adminchatmessage'>
            <div className='adminchatmessage__box'>
                <AdminChatUserAvatar image={props.image} />
                <div className='adminchatmessage__text'>
                    <div className='adminchatmessage__name'>{props.name}</div>
                    <div>
                        <div className='adminchatmessage__message'>{props.message}</div>
                        <span>{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminChatMessage;