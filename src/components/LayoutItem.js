import { useHistory } from "react-router";
import Slider from "react-slick";
import useDate from "../hooks/useDate";

const RightIconSvg = ({ onClick }) => <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z"/></svg>

const LayoutItem = ({ images = []  , title , createTime , redirectBase , Id , renderImageAs }) => {

    const history = useHistory();

    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        autoplay : true,
    }

    const redirectHandler = () => {
        history.push(`/${redirectBase}/${Id}`)
    }

    const dateHandler = useDate();

    return (
        <div className="layoutItem">
            <div className="layoutItem__images">
                {
                    renderImageAs || <Slider {...sliderConfig}>
                        {
                            images.map((img , i) => (
                                <div key={i}>
                                    <div
                                        style={{ background : `url(${img})` }} 
                                        className="layoutItem__imageSlide"
                                    >
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>
            <div className="layoutItem__details">
                <div>
                    <p onClick={redirectHandler}>{title}</p>
                    <RightIconSvg onClick={redirectHandler} />
                </div>
                <span>{dateHandler(createTime)}</span>
            </div>
        </div>
    )
}


export default LayoutItem;