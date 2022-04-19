
const Theul = [
    {
        // Tài khoản
        id:1,
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
                path: '/admin/AddUser'
            },
          
        ]
    },
    {
            // Hàng hóa
        id:2,
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
    id:3,
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
        // Khuyen mai
    id:4,
    icon : 'fa-solid fa-percent',
    title : 'Khuyến mãi',
    icon2 : 'fa-solid fa-angle-down',
    path : '/',
    child: [
        {
            title: 'Danh sách khuyến mãi',
            path: '/admin/promotion'
        },
        
    ]
    },{
        // Chat Admin voi khach hang
    icon : 'fa-brands fa-teamspeak',
    title : 'Chat với khách hàng',
    icon2 : 'fa-solid fa-angle-down',
    path : '/',
    child: [
        {
            title: 'Chat',
            path: '/admin/adminchat'
        },
        
    ]
    }

]
const TheUl2 = [
    {
            // Hàng hóa
        id:2,
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
    id:3,
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
        // Khuyen mai
    id:4,
    icon : 'fa-solid fa-percent',
    title : 'Khuyến mãi',
    icon2 : 'fa-solid fa-angle-down',
    path : '/',
    child: [
        {
            title: 'Danh sách khuyến mãi',
            path: '/admin/promotion'
        },
        
    ]
    },{
        // Chat Admin voi khach hang
    icon : 'fa-brands fa-teamspeak',
    title : 'Chat với khách hàng',
    icon2 : 'fa-solid fa-angle-down',
    path : '/',
    child: [
        {
            title: 'Chat',
            path: '/admin/adminchat'
        },
        
    ]
    }

]





export {Theul,TheUl2,};