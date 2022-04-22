import { Link } from 'react-router-dom';
import '../../css/topbody.css'

function TopBody() {
    return (
        <div className='topbody'>
            <div className='topbody__content row-app'>
                <div className='topbody__first'>
                    <Link to='/findpromotion' >Khuyến mãi</Link>
                    <div>Hỗ trợ kỹ thuật</div>
                </div>
            </div>
        </div>
    );
}

export default TopBody;