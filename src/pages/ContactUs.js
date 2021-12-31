import { useState } from "react";
import AdditionalContact from "../components/AditionalContact";
import Input from "../components/Input";
import useAppContext from "../hooks/useAppContext";
import reqUrl from "../utils/reqUrl";
import useRequest from "../utils/useRequest";

import Pic from "../static/Picture10.jpg"

const Instagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
const Facebook =  () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"/></svg>


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
                <div data-image={Pic} style={{ background :  `url(${Pic})` }} className="contact__images">
                </div>
            </div>
            <div className="contact__more">
                <div className="contact__socialMedia">
                    <p>Follow Combo on Social Media</p>
                    <div>
                        <a href="https://www.facebook.com/fahimeh.heydari.5">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com/fahimeh.heydarii">
                            <Instagram />
                        </a>
                    </div>
                </div>
                <AdditionalContact />
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