import { _date } from "../utils";

const FavStarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z"/></svg>

const HomePostBlock = ({ EnTitle , IsFavorite , CreateDate = "" , EnDescription , }) => {

    const leanDate = Number(CreateDate.slice(CreateDate.indexOf("(") + 1 , CreateDate.indexOf(")")));

    return (
        <div className="homePostBlock">
            <div className="homePostBlock__title">
                <div>
                    <p>{EnTitle}</p>
                    {
                        IsFavorite && <FavStarIcon />
                    }
                </div>
                <span>{_date(leanDate).format("YYYY/MM/DD")}</span>
            </div>
            <div>
                <p>{EnDescription}</p>
            </div>
        </div>
    )
}


export default HomePostBlock;