import GalleryBox from "../components/GalleryBox";

const Home = () => {

    const model = [
        {
            title : "VIoew lore",
            desc : "Vero quae placeat omnis sed. Impedit amet temporibus aut fugiat et. Illo voluptatem atque cum nam. Provident soluta ipsa enim inventore occaecati placeat quia. Ipsum recusandae dolore fugit eos aut. Et in sed enim iusto dicta assumenda.",
            imageList : ["https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" , "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=383&q=80" , "https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"]
        }
    ]
    return (
        <div className="container-fluid">
            {
                model.map((el , i) => <GalleryBox {...el} key={i} />)
            }

            Laudantium et natus quasi non dicta. Iusto nihil vel voluptate tempora ipsa molestiae corrupti et dicta. Et nihil hic ipsa consequatur.
 
Ipsa sint cumque fugiat est aut qui. Sed deleniti est deleniti. Sunt doloribus aut minima. Rerum aperiam atque. Rem quidem molestias ut.
 
Officiis sint et qui vel ex tempora distinctio voluptatem. Reiciendis eos iusto impedit. Aliquid quibusdam omnis totam eos. Amet enim qui aliquid autem corporis animi.
            Laudantium et natus quasi non dicta. Iusto nihil vel voluptate tempora ipsa molestiae corrupti et dicta. Et nihil hic ipsa consequatur.
 
Ipsa sint cumque fugiat est aut qui. Sed deleniti est deleniti. Sunt doloribus aut minima. Rerum aperiam atque. Rem quidem molestias ut.
 
Officiis sint et qui vel ex tempora distinctio voluptatem. Reiciendis eos iusto impedit. Aliquid quibusdam omnis totam eos. Amet enim qui aliquid autem corporis animi.
            Laudantium et natus quasi non dicta. Iusto nihil vel voluptate tempora ipsa molestiae corrupti et dicta. Et nihil hic ipsa consequatur.
 
Ipsa sint cumque fugiat est aut qui. Sed deleniti est deleniti. Sunt doloribus aut minima. Rerum aperiam atque. Rem quidem molestias ut.
 
Officiis sint et qui vel ex tempora distinctio voluptatem. Reiciendis eos iusto impedit. Aliquid quibusdam omnis totam eos. Amet enim qui aliquid autem corporis animi.
            Laudantium et natus quasi non dicta. Iusto nihil vel voluptate tempora ipsa molestiae corrupti et dicta. Et nihil hic ipsa consequatur.
 
Ipsa sint cumque fugiat est aut qui. Sed deleniti est deleniti. Sunt doloribus aut minima. Rerum aperiam atque. Rem quidem molestias ut.
 
Officiis sint et qui vel ex tempora distinctio voluptatem. Reiciendis eos iusto impedit. Aliquid quibusdam omnis totam eos. Amet enim qui aliquid autem corporis animi.
            Laudantium et natus quasi non dicta. Iusto nihil vel voluptate tempora ipsa molestiae corrupti et dicta. Et nihil hic ipsa consequatur.
 
Ipsa sint cumque fugiat est aut qui. Sed deleniti est deleniti. Sunt doloribus aut minima. Rerum aperiam atque. Rem quidem molestias ut.
 
Officiis sint et qui vel ex tempora distinctio voluptatem. Reiciendis eos iusto impedit. Aliquid quibusdam omnis totam eos. Amet enim qui aliquid autem corporis animi.
            Laudantium et natus quasi non dicta. Iusto nihil vel voluptate tempora ipsa molestiae corrupti et dicta. Et nihil hic ipsa consequatur.
 
Ipsa sint cumque fugiat est aut qui. Sed deleniti est deleniti. Sunt doloribus aut minima. Rerum aperiam atque. Rem quidem molestias ut.
 
Officiis sint et qui vel ex tempora distinctio voluptatem. Reiciendis eos iusto impedit. Aliquid quibusdam omnis totam eos. Amet enim qui aliquid autem corporis animi.
        </div>
    )
}


export default Home;