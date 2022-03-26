import AdminChatUserAvatar from "./AdminChatUserAvatar";

function AdminChatUser(props) {
    return (
        <div className='adminchatuser'>
            <div className='adminchatuser__box'>
            <AdminChatUserAvatar image={props.image}/>
            <div className='adminchatuser__text'>
                <div className='adminchatuser__name'>{props.name}</div>
                <div>{props.message}</div>
            </div></div>
        </div>
    )
}

export default AdminChatUser;