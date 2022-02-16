const client = {
    appName : "Fahimeh Haydari",
    headerMenuList : {
        en : {
            title :"Menu",
            itemsList : [
                {
                    title : "About",
                    path : "about"
                },
                {
                    title : "Exhibitions",
                    path : "exhibitions"
                },
                {
                    title : "Purchase",
                    path : "purchase",
                    nestedPath : ['products' , 'product'],
                },
                {
                    title : "Archive",
                    path : "archive"
                },
                {
                    title : "Notes and Publication",
                    path : "publication"
                },
                {
                    title : "Events",
                    path : "events"
                },
                {
                    title : "Contact",
                    path : "contact"
                },
            ].map(el => ({...el , title : el.title.toUpperCase()}))
        },
        fa : {
            title : "منو",
            itemsList : [
                {
                    title : "درباره",
                    path : "about"
                },
                {
                    title : "نمایشگاه",
                    path : "exhibitions"
                },
                {
                    title : "خرید",
                    path : "purchase",
                    nestedPath : ['products' , 'product'],
                },
                {
                    title : "آرشیو",
                    path : "archive"
                },
                {
                    title : "نوشته ها و انتشارات",
                    path : "publication"
                },
                {
                    title : "رخداد ها",
                    path : "events"
                },
                {
                    title : "تماس",
                    path : "contact"
                },
            ]
        }
    },
}


export default client;