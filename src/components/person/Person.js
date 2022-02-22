import '../../css/person.css'


export default function Person() {
    return (
        <div className='person'>
            <div className='person__content row-app'>
                <div className='person__left'>
                    <div className='person__left__row person__left__row--top'>
                        <div className='person__left__image'>
                            <img src='' alt='z' />
                        </div>
                        <div className='person__left__text'>
                            <span>vanhyoyo</span>
                        </div>
                    </div>
                    <div className='person__left__row'>
                        <div className='person__left__image'>
                            <i className='fi fi-rr-portrait'></i>
                        </div>
                        <div className='person__left__text'>
                            <span>vanhyoyo</span>
                        </div>
                    </div>
                </div>
                <div className='person__right'></div>
            </div>
        </div>
    );
}