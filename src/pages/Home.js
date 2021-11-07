import { useLayoutEffect, useState } from "react";
import GalleryBox from "../components/GalleryBox";
import HelperCursor from "../components/HelperCursor";

const Home = () => {
    const [currentBodyPos, setCurrentBodyPos] = useState(0)
    const [currenetCusrsorPos, setCurrentCursorPos] = useState({ x : 0 , y : 0 })

    const model = [
        {
            title : "VIoew lore",
            desc : "Vero quae placeat omnis sed. Impedit amet temporibus aut fugiat et. Illo voluptatem atque cum nam. Provident soluta ipsa enim inventore occaecati placeat quia. Ipsum recusandae dolore fugit eos aut. Et in sed enim iusto dicta assumenda.",
            imageList : ['https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1528&q=80' , "https://images.unsplash.com/photo-1588260835465-6a819eff1455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80" , "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"]
        }
    ]

    useLayoutEffect(() => {
        document.addEventListener("scroll" , () => {
            const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            setCurrentBodyPos(scrollTop);
        })
    } , [])

    return (
        <div className="container-fluid">
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
            Atque id ea et dignissimos qui inventore possimus. Sit hic autem ab. Doloremque porro quia. Qui aliquam ut nisi ut perferendis vero. Adipisci est odio quis rerum.
 
Minus ut eum. Perferendis quam tenetur sint et accusamus est a culpa. Recusandae quis voluptatem doloremque. Dolor delectus et aliquid ut suscipit vitae praesentium nisi. Tenetur nihil numquam tenetur minima dignissimos mollitia velit.
 
Sed omnis accusamus. Velit modi illo inventore. Qui perferendis autem eos magni repellendus et nihil molestiae et.
            {
                model.map((el , i) => <GalleryBox cursorPos={currenetCusrsorPos} bodyScrollPos={currentBodyPos} {...el} key={i} />)
            }
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
            Iure eum qui id ad in ullam fuga tenetur veritatis. Nihil rerum praesentium et rerum nostrum. Aut et rerum unde vel odio occaecati quae eius enim.
 
Dolorum molestiae beatae. Perspiciatis molestias quis similique est eum debitis impedit aut quis. Maiores totam nesciunt ab. Soluta nam soluta quos sit.
 
Quae exercitationem et velit aspernatur illo ipsam ab aut ut. Rerum nam nulla quas aut cum qui. Voluptatem assumenda eligendi perspiciatis aspernatur debitis repudiandae necessitatibus et consequuntur. Necessitatibus quod occaecati corporis ut expedita omnis. Sit ea alias.
        </div>
    )
}


export default Home;