import React from 'react';
import Portal  from "../provider/Portal"
import GalleryBox from './GalleryBox';

const UpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M6,6.21a1,1,0,0,0,1.41,0L11,2.58V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V2.59l3.62,3.62a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41L14.13.88a3,3,0,0,0-4.24,0L6,4.8A1,1,0,0,0,6,6.21Z"/></svg>

const DesktopHome = ({ cursorRef , isInHoverOfSomeGalleryItem , setIsInHoverOfSomeGalleryItem , model , currenetCusrsorPos , currentBodyPos }) => {
    return (
        <React.Fragment>
            <Portal>
                <div ref={cursorRef} className={`cursor ${isInHoverOfSomeGalleryItem ? "cursor--active" : ""}`}>
                    {
                        isInHoverOfSomeGalleryItem && <UpIcon />
                    }
                </div>
            </Portal>
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
                model.map((el , i) => <GalleryBox setIsHovered={setIsInHoverOfSomeGalleryItem} isSomeOneInHover={isInHoverOfSomeGalleryItem} cursorPos={currenetCusrsorPos} bodyScrollPos={currentBodyPos} {...el} key={i} />)
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
        </React.Fragment>
    )
}


export default DesktopHome;