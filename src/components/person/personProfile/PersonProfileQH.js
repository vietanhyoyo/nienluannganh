import { useState, useEffect} from 'react';
import axios from 'axios';

export default function PersonProfileQH(props) {
    const [QH, setQH] = useState([{
        _id: '',
        ten: '',
        tinhtp: ''
    }]);
    useEffect(() => {
        // axios.get('/address/q')
            // .then(response => response.data)
            // .then(response => {
                setQH(QH);
            // });
    },[props.id]);
    console.log(props.ten)

    return (
        <div className="person__profile__row">
            <label className="person-profile__row-label">Quận/Huyện:</label>
            <select></select>
        </div>
    )
}
