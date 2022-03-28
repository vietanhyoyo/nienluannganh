import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    /**Navigate để chuyển trang tim kiếm */
    const navigate = useNavigate(); 
    /**input đầu vào tên sản phẩm tìm kiếm */
    const inputSearch = useRef();

    const handleSearch = () => {
        const input = inputSearch.current.value;
        navigate(`/findsearch/${input}`);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            const input = inputSearch.current.value;
            if (input !== '') {
                navigate(`/findsearch/${input}`);
            }
        }
    }

    return (
        <div className='header__search'>
            <input
                type='text'
                placeholder="Tìm sản phẩm"
                ref={inputSearch}
                onKeyPress={(e) => handleEnter(e)}
            />
            <div
                className='header__icon header__icon--search'
                onClick={handleSearch}
            ><i className='fas fa-search'></i></div>
        </div>
    );
}

export default Search;