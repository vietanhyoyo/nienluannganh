const yellow = {
    color: '#fac917'
}
const gray = {
    color: '#999'
}

export default function ProductMiniStar(props) {
    const index = props.index;

    return (
        <span className='list-star'>
            <i className="fa-solid fa-star" style={index>=1 ? yellow : gray}></i>
            <i className="fa-solid fa-star" style={index>=2 ? yellow : gray}></i>
            <i className="fa-solid fa-star" style={index>=3 ? yellow : gray}></i>
            <i className="fa-solid fa-star" style={index>=4 ? yellow : gray}></i>
            <i className="fa-solid fa-star" style={index>=5 ? yellow : gray}></i>
        </span >
    )
}