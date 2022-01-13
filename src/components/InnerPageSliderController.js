import { useEffect, useState } from "react";

const Right = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23.124,9.907,19.245,6.029a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L21.386,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.447l-3.616,3.615a1,1,0,0,0,0,1.415h0a1,1,0,0,0,1.414,0l3.88-3.879A3.008,3.008,0,0,0,23.124,9.907Z"/></svg>;
const Left = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M.876,14.088l3.879,3.879a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L2.614,13,23,13a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1L2.553,11,6.169,7.381a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0L.875,9.846A3.007,3.007,0,0,0,.876,14.088Z"/></svg>;

const InnerPageSliderController = ({ sliderRef }) => {
    const [renderForcer, setRenderForcer] = useState(0);

    const nextHandler = () => sliderRef?.slickNext()
    const prevHandler = () => sliderRef?.slickPrev?.();

    useEffect(() => {
        setRenderForcer(Date.now())
    } , [sliderRef]);


    return (
        <div className="innerSliderController">
            <div onClick={prevHandler}>
                <Left />                
            </div>
            <div onClick={nextHandler}>
                <Right />
            </div>
        </div>
    )
}


export default InnerPageSliderController;