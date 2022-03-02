

export default function MenuItemList(prop){

    const handleShowItem = (id) => {

        const idIcon = document.getElementById(id + '_header__icon');
        if(idIcon.classList.contains('fa-angle-up')){
            
            idIcon.classList.remove('fa-angle-up');
            idIcon.classList.add('fa-angle-down');

            const idUl = document.getElementById(id + '_header__ul');
            idUl.classList.remove('header__ul--child--show');
        }
        else{

            const item = document.querySelectorAll('.header__ul--child');
            item.forEach((ele) => {
                ele.classList.remove('header__ul--child--show')
            })
            const idUl = document.getElementById(id + '_header__ul');
            idUl.classList.add('header__ul--child--show');
    
            const icons = document.querySelectorAll('.header__menubar__show__icon');
            icons.forEach((ele) => {
                ele.classList.remove('fa-angle-up');
                ele.classList.add('fa-angle-down');
            })
            
            idIcon.classList.remove('fa-angle-down');
            idIcon.classList.add('fa-angle-up');
        }
    }
    
    return (
        <li className='header__li' key={prop.index}>
            <div className='header__bardiv' onClick={() => handleShowItem(prop.index.toString())}>
                <p className='header__link' >{prop.name}</p>
                <i className='fa-solid fa-angle-down header__menubar__show__icon' id={prop.index.toString() + '_header__icon'}></i>
            </div>
            <ul className='header__ul--child' id={prop.index.toString() + '_header__ul'}>
                {prop.item.map((item,index) =>
                    <li key={index} className='header__li--child'>
                        <a className='header__link' href='home' >{item.name}</a>
                    </li>
                )}
            </ul>
        </li>
    );
}