import AdminChatUserAvatar from "./AdminChatUserAvatar";

function AdminChatMyMessage(props) {
    return (
        <div className='adminchatmessage adminchatmessage__my'>
            <div className='adminchatmessage__box adminchatmessage__box--my'>
                <div className='adminchatmessage__text adminchatmessage__text--my'>
                    <div className='adminchatmessage__name adminchatmessage__name--my'>{props.name}</div>
                    <div><span>{props.time}</span><div className='adminchatmessage__message adminchatmessage__message--my'>{props.message}</div></div>
                </div>
                <AdminChatUserAvatar image={props.image} />
            </div>
        </div>
    )
}

export default AdminChatMyMessage;