import { memo } from 'react'

function AdminChatUserAvatar({image}) {

    return (
        <div className='header__avatar--img' style={{ backgroundImage: `url(${image})` }} />
    )
}

export default memo(AdminChatUserAvatar);