

export default function MenuItemList(prop){

    const handleShowItem = (id) => {
        const item = document.querySelectorAll('.header__ul--child');
        item.forEach((ele) => {
            ele.classList.remove('header__ul--child--show')
        })
        const idUl = document.getElementById(id);
        idUl.classList.add('header__ul--child--show');
    }
    
    return (
        <li className='header__li' key={prop.index} onClick={() => handleShowItem(prop.index.toString())}>
            <div className='header__bardiv'>
                <p className='header__link' >{prop.name}</p>
                <i className='fa-solid fa-angle-down'></i>
            </div>
            <ul className='header__ul--child' id={prop.index.toString()}>
                {prop.item.map((item,index) =>
                    <li key={index} className='header__li--child'>
                        <a className='header__link' href='home' >{item.name}</a>
                    </li>
                )}
            </ul>
        </li>
    );
}