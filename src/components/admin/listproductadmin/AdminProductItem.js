import { useState } from "react";
import AdminIconItem from "./AdminIconItem";

function AdminProductItem(props) {
    const [mount, setMount] = useState(false);

    return (
        <div className="admin-product-content" onClick={props.onSelectID}>
            <div className="admin-product-header-item"><img src={props.product.hinhanh[0]} alt="Alo" className="admin-product-header-item-img" /></div>
            <div className="admin-product-header-item admin-product-header-item__name">{props.product.tensanpham}</div>
            <div className="admin-product-header-item">{props.product.loaisanpham.tenloaisanpham}</div>
            <div className="admin-product-header-item"> {props.product.soluong} / {props.product.donvitinh} </div>
            <div id="admin-kg" className="admin-product-header-item">{props.product.gianiemyet}đ/{props.product.donvitinh}</div>
            <div className="admin-product-header-item admin-product-header-item-icon"
                onClick={() => {
                    setMount(!mount)
                }}
            >
                <i className="fi fi-rr-apps"></i>
                {mount && <AdminIconItem
                    onShowPromotion={props.onShowPromotion}
                    onShowEdit={props.onShowEdit}
                    IDProduct={props.product._id}
                    reRender={props.reRender}
                />}

            </div>
        </div>
    )

}

export default AdminProductItem;