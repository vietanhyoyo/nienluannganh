import { useRef } from 'react'

function Search() {
    const inputSearch = useRef();

    const handleSearch = () => {
        const input = inputSearch.current.value;
        window.location = `/findsearch/${input}`;
    }

    const handlEnter = (e) => {
        if (e.key === 'Enter') {
            const input = inputSearch.current.value;
            if (input !== '') {
                window.location = `/findsearch/${input}`;
            }
        }
    }

    return (
        <div className='header__search'>
            <input
                type='text'
                placeholder="Tìm sản phẩm"
                ref={inputSearch}
                onKeyPress={(e) => handlEnter(e)}
            />
            <div
                className='header__icon header__icon--search'
                onClick={handleSearch}
            ><i className='fas fa-search'></i></div>
        </div>
    );
}

export default Search;