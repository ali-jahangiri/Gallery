import { useState } from "react";
import Input from "../components/Input";
import useAppContext from "../hooks/useAppContext";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

const Instagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
const Telegram =  () => <svg style={{ fillRule : "evenodd" , clipRule: "evenodd" , strokeLinejoin:"round" , strokeMiterlimit :1.41421 }} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" version="1.1" ><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>


const FORM_INPUT_LABEL = {
    Title : {
        fa : "عنوان",
        en : "Title"
    },
    Description : {
        fa : "توضیحات",
        en : "description"
    },
    PhoneNumber : {
        fa : "شماره تماس",
        en : "phon number"
    },
    Email : {
        fa : "ایمیل",
        en : "Email"
    }
}

const formItemList = [
    {
        name : 'Title',
        isRequired : true,
    },
    {
        name : 'PhoneNumber',
        isRequired : false,
    },
    {
        name : 'Email',
        isRequired : true,
    },
    {
        name : 'Description',
        isRequired : true,
    },
]



const ContactUs = () => {
    const [formData, setFormData] = useState({});
    const { getContext: { lang } } = useAppContext();
    const [error, setError] = useState([]);
    const [wasSuccessfulSubmission, setWasSuccessfulSubmission] = useState(false);
    const [wasUnSuccessfulSubmission, setWasUnSuccessfulSubmission] = useState(false);

    const fetcher = useRequest();


    const onFormInputChangeHandler = (key , value) => {
        setFormData(prev => ({
            ...prev ,
            [key] : value
        }))
    }


    const submitHandler = () => {
        const errorList = formItemList.filter(el => !formData[el.name] && el.isRequired);
        
        if(errorList.length) setError(errorList);
        else {
            console.log(formData , "lorem");
            fetcher(reqUrl.contact + `?contactUsForm=${JSON.stringify(formData)}`)
                .then(() => {
                    setWasSuccessfulSubmission(true);
                    setFormData({});
                    setError([]);
                }).catch(setWasUnSuccessfulSubmission)
        }

    }


    const clearFormAfterSubmitHandler = () => setFormData({});

    return (
        <div className="contact">
            <div className="contact__socialMedia">
                <p>Follow Combo on Social Media</p>
                <div>
                    <div>
                        <Telegram />
                    </div>
                    <div>
                        <Instagram />
                    </div>
                </div>
            </div>
            <div className="contact__container">
                <div className="contact__form">
                    <div className="contact__form__container">
                        {
                            formItemList.map((item , index) => (
                                <Input
                                    isRequired={item.isRequired}
                                    haveError={error.includes(item)}
                                    key={index}
                                    value={formData[item.name] || ""}
                                    as={index === formItemList.length - 1 ? "textarea" : "input"}
                                    label={FORM_INPUT_LABEL[item.name][lang]} 
                                    onChange={value => onFormInputChangeHandler(item.name , value)} />
                            ))
                        }

                        <button onClick={submitHandler}>
                            {
                                lang === "fa" ? "ارسال" : "Send Message"
                            }
                        </button>
                    </div>
                </div>
                <div style={{ background : `url(https://images.unsplash.com/photo-1639694324137-f409cf5666f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)` }} className="contact__images">
                </div>
            </div>
            {
                wasSuccessfulSubmission && <div className="contact__afterSubmitAlert"> 
                    <div className="contact__afterSubmitAlert__header"> 
                        <p>{lang === "fa" ? "فرم با موفقیت ارسال شد" : "Form submitted successfully!"}</p>
                    </div>
                    <div>
                        <button onClick={() => {
                            setWasSuccessfulSubmission(false);
                            clearFormAfterSubmitHandler()
                        }}>{lang === "fa" ? "تایید" : "Close"}</button>
                    </div>
                </div>
            }
            {
                wasUnSuccessfulSubmission && <div className="contact__afterSubmitAlert">
                    <div className="contact__afterSubmitAlert__header"> 
                        <p>{lang === "fa" ? "مشکلی در ارسال فرم رخ داده است . مجددا تلاش نمایید" : "We face to some problem in submition process , Please try again!!"}</p>
                    </div>
                    <div>
                        <button style={{ backgroundColor : "#FF5959" }} onClick={() => {
                            setWasUnSuccessfulSubmission(false);
                            clearFormAfterSubmitHandler()
                        }}>{lang === "fa" ? "بستن" : "Close"}</button>
                    </div>
                </div>
            }
        </div>
    )
}


export default ContactUs;