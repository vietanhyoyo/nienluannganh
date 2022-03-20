import React from 'react'
import '../../../css/adminmenu.css'
import Theul from './AdminMenuData.js'
import {useState} from 'react'; 
import {Link} from 'react-router-dom';
export default function AdminMenu() {


  const [focus,setFocus] = useState(-1);
  

  return (
    <div className='Adminmenu__app'>
        {/* menu */}
            <div className='Adminmenu__app--logo'>
                <img src='../../../images/logotext.png' alt='logo' className='Adminmenu__app--logo-img'/>
            </div>
            {/* content */}
            <div className='Adminmenu__app--content'>
                    {/* Chữ page */}
                    <p className='Adminmenu__app--content-page'> PAGES</p>
                       {/* Title quản lý tài khoảng và icon */}
                    {Theul.map((menu,index)=> (
                      <ul className='Adminmenu__app--content-title' key={index} >
                      {/* Items title */}
                     <div className='Adminmenu__app--content-title-content' 
                      onClick={
                       () => focus === index ? setFocus(-1) : setFocus(index) 
                    }>
                        <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-left'>
                          <i className={menu.icon}></i>
                          </p>  
                          <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-mid'>
                              {menu.title}
                          </p>
                          <p className='Adminmenu__app--content-title-text Adminmenu__app--content-title-right'>
                          <i className={menu.icon2}></i>
                        </p>
                     </div>

                    <ul className={ focus === index  ? 'ad-ulchildactive' : 'ad-ulchild'}>
                            {/* Thẻ con */}
                         {menu.child.map((menuchild,index)=> (
                          <Link to={menuchild.path} className='Link-Addmenu'>  <li className='Adminmenu__app--content-title-items' key={index} >
                              <p className='Adminmenu__app--content-title-items-content'>
                                    { menuchild.title}
                              </p> 
                          </li>
                          </Link>
                          ))}
                    </ul>
                  </ul>
                    ))}
                    
            </div>
                     

    </div>
  )
}
