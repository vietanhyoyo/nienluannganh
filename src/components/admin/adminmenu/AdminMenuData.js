
const TheUl = [
    {
        // Tài khoản
        icon : 'fa-solid fa-user-gear',
        title : 'Quản lý tài khoản',
        icon2 : 'fa-solid fa-angle-down',
    
        child: [
            {
                title: 'Danh sách nhân viên',
                path: '/admin/staff'
            },
            {
                title: 'Thêm nhân viên',
                path: '/admin/AdminAddUser'
            },
          
        ]
    },
    {
            // Hàng hóa
        icon : 'fa-solid fa-truck-ramp-box',
        title : 'Hàng hóa',
        icon2 : 'fa-solid fa-angle-down',
   
        child: [
            {
                title: 'Duyệt hàng hóa',
                path: '/admin/invoice'
            },
            {
                title: 'Danh sách hàng hóa',
                path: '/admin/product'
            },
            {
                title: 'Thêm hàng hóa',
                path: '/admin/addproduct'
            },
            {
                title: 'Thêm loại hàng hóa',
                path: '/admin/producttype'
            },
           
        ]
    },
    {
        // Thống kê
    icon : 'fa-solid fa-chart-pie',
    title : 'Thống kê',
    icon2 : 'fa-solid fa-angle-down',
   
    child: [
        {
            title: 'Thống kê',
            path: '/admin/Statistical'
        },
        
    ]
    },
    {
        // Hàng hóa
    icon : 'fa-brands fa-teamspeak',
    title : 'Khuyến mãi',
    icon2 : 'fa-solid fa-angle-down',
    path : '/',
    child: [
        {
            title: 'Danh sách khuyến mãi',
            path: '/admin/promotion'
        },
        
    ]
    },

]

export default TheUl;