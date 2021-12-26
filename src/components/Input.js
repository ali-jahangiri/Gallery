import useAppContext from "../hooks/useAppContext";
import { idGenerator } from "../utils";


const DynamicRenderElement = ({ type ,...restProps }) => type === "textarea" ? <textarea  {...restProps} /> : <input {...restProps} />

const Input = ({ value , onChange , label , as = "input" , haveError , isRequired }) => {
    const { getContext : { lang } } = useAppContext();

    const id = idGenerator();

    return (
        <div className={`customInput ${lang === "fa" ? "customInput--fa" : ""} ${haveError ? "customInput--error" : ""}`}>
            <label htmlFor={id}>
                {label}
                {
                    isRequired && <span>*</span>
                }
            </label>
            <DynamicRenderElement name={id} id={id} type={as} value={value} onChange={({ target : { value } }) => onChange(value)} />
        </div>
    )
}


export default Input;