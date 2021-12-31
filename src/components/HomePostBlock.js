import { makeLeanDate, _date } from "../utils";

const HomePostBlock = ({ EnTitle , CreateDate = "" , EnDescription , }) => {

    const leanDate = makeLeanDate(CreateDate);

    return (
        <div className="homePostBlock">
            <div className="homePostBlock__title">
                <div>
                    <p>{EnTitle}</p>
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