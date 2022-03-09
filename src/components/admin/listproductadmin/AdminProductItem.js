function AdminProductItem(props){
    return(
        <div className="admin-product-content">
                   <div className="admin-product-header-item"><img src={props.product.image} alt="Alo"className="admin-product-header-item-img"/></div>
                   <div className="admin-product-header-item">{props.product.name}</div>
                   <div className="admin-product-header-item">{props.product.type}</div>
                   <div className="admin-product-header-item">{props.product.amount} {props.product.unit}</div>
                   <div id="admin-kg" className="admin-product-header-item">{props.product.price}/{props.product.unit}</div>
                   <div className="admin-product-header-item admin-product-header-item-icon"><i class="fi fi-rr-apps"></i></div>
        </div>
    )

}

export default AdminProductItem;