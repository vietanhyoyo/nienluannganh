import { useState, useEffect } from 'react';
import axios from 'axios';


export default function PersonProfileQH(props) {
    // const [id, setId] = useState('');    
    const [QH, setQH] = useState([{
        _id: '',
        ten: '',
        tinhtp: ''
    }]);
    const [selectQH, setSelectQH] = useState(0);
    useEffect(() => {
        axios.get('/address/quanhuyen')
            .then(response => response.data)
            .then(response => {               
                    setQH(response);         
            });
    }, []);
    useEffect(() => {
        if (QH.length > 0 && props.QH._id !== '')
            setSelectQH(QH.indexOf(QH.filter(element => {
                return element._id === props.QH._id
            })[0]))
    }, [QH,props.QH])

    const check = ()=>{
        const a= QH.map((ele, index) => {
            return <option key={index} value={index}>{ele.ten}</option>})
            return a;

    }
    
    return (
        <div className="person__profile__row">
            <label className="person-profile__row-label">Quận/Huyện:</label>
            <select value={selectQH}
                onChange={(e) => {
                    props.setQH(QH[e.target.value]);
                    
                }}
                className="person__profile__row-input-wrapper-input">
                {check().filter((ele,index) =>{
                    return(QH[index].tinhtp===props.id)
                })}</select>
        </div>
    )
}
