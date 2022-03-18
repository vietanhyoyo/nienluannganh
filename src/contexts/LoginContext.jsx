import { useState, createContext, useEffect } from "react";
import axios from "axios";

const LoginContext = createContext()

function LoginProvider({ children }) {

    /**iduser để lưu id của tài khoản đăng nhập */
    const [iduser, setIDUser] = useState(null);
    /**role có 3 giá trị
     * nếu là khách hàng role = null
     * nếu là admin role = 'admin'
     * nếu là nhân viên role = 'nhanvien'
     */
    const [role, setRole] = useState(null);

    console.log('Context: ' + role)

    /**Hàm set lại id user */
    const handleSetLogin = (value) => {
        setIDUser(value)
    }

    /**Giá trị trả về của Login Context này */
    const value = {
        iduser,
        role,
        handleSetLogin,
        setRole
    }

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            /**setState cho iduser */
            setIDUser(localStorage.getItem('accessToken'));
            /*Lấy kiểm tra quyền đăng nhập của user => trả về giá trị bến role*/
            axios.post('/login/layuser', { id: localStorage.getItem('accessToken') })
                .then(response => response.data)
                .then(response => {
                    if (response.chucvu !== undefined) {
                        setRole(response.chucvu)
                    }else setRole(null);
                });
        }
    }, []);

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginProvider }