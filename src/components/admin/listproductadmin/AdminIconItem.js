import React from 'react'
import { memo } from 'react';
function AdminIconItem() {
  return (
    <div>
        <div className="admin-product-header-item-icon-absolute"> 
                        <p className="admin-product-header-item-icon-absolute-text">
                        <i className="fa-solid fa-calendar-plus"></i> Thêm khuyến mãi
                        </p>
                        <p className="admin-product-header-item-icon-absolute-text">
                        <i className="fa-solid fa-pen-to-square"></i> Chỉnh sửa
                        </p>
                        <p className="admin-product-header-item-icon-absolute-text">
                        <i className="fa-solid fa-trash-can"></i>  Xóa
                        </p>           
        </div>

    </div>
  )
}

export default memo(AdminIconItem);