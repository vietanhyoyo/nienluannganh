import '../css/chat.css'
import { useRef, useEffect } from 'react';
import io from 'socket.io-client'

export default function Chat() {

    const turnon = useRef();
    const form = useRef();

    const handleToggle = () => {
        turnon.current.classList.toggle('chat--hidden');
        form.current.classList.toggle('chat--hidden');
    };

    useEffect(() => {
        const socket = io('http://localhost:5000', { transports : ['websocket'] });
    },[])

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
                <div className='chat__show'>
                    <div className='chat__message chat__message--left'>
                        <p>Xin chào chúng tôi có thể giúp gì cho bạn!
                            lorem skdfjjlkạ djdj ákdkfj lákkdjf ládjf a sd fj alskdjf lksdjf laksdjf lalskdfj
                            àádsdfádf ádfsdfsdf ádfsfsdf ággggggggggg geegg sgfgsdgdg sdfgsdfgsdfg éttsd
                            sdfgdgd sfgsdgsdg sdfgsdgsdgf ảgegdg
                            sdfgsdgsdgf sdfgsdgsdg sdfgsdgsdfg ate iiiiiiii hhjhjhj jhjhjhihi kljljlj
                            jlkj ljọi ôiihoihoi ohhoip
                        </p>
                    </div>
                    <div className='chat__message chat__message--right'>
                        <p>Xin chào Admin! ádfsadf ádfấdf ádfádf
                            ádfsadf ádfád fádfád fa ádf âssssss      sadfsfà
                            adsfs ádf       fádfsdfsdf adsfsfá sdạlsdljf ádlfjlaksdfj
                            ádfjl ádlkfjlakskdfj alkdfjlaksdjfks alkkfjlklaksfjákl
                            alsjdfklsdì ạdfiwfoaề áidhfóiahfía aoídhfsdfà oiáhfsjdfkldsjf
                            ạklsà ádjfiodjsfíadf ạdfjiajflsjdf alsdjfídfjaoídjf jádjfládfj
                        </p>
                    </div>
                    <div className='chat__message chat__message--left'>
                        <p>Xin chào chúng tôi có thể giúp gì cho bạn!
                            lorem skdfjjlkạ djdj ákdkfj lákkdjf ládjf a sd fj alskdjf lksdjf laksdjf lalskdfj
                            àádsdfádf ádfsdfsdf ádfsfsdf ággggggggggg geegg sgfgsdgdg sdfgsdfgsdfg éttsd
                            sdfgdgd sfgsdgsdg sdfgsdgsdgf ảgegdg
                            sdfgsdgsdgf sdfgsdgsdg sdfgsdgsdfg ate iiiiiiii hhjhjhj jhjhjhihi kljljlj
                            jlkj ljọi ôiihoihoi ohhoip
                        </p>
                    </div>
                </div>
                <div className='chat__write'>
                    <input type='text' className='chat__input input-text' />
                    <div className='button chat__button'>Gửi</div>
                </div>
            </div>
        </div>
    );

}

