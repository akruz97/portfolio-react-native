import React from "react";
import ProfileImg from "./../assets/img/perfil.jpg";
import { useTranslation } from "react-i18next";

const Resume = () => {

    const { t } = useTranslation();

    return (
        <section className="flex justify-center items-center mt-10 ml-8 sm:px-0 sm:ml-0" id="resume" >
            <div className="">
                <img src={ProfileImg} 
                    alt="Not found image profile" 
                    className="object-cover size-36 md:size-72 max-h-96 max-w-96 rounded-full"
                />
            </div>

            <div className="flex items-center px-10 md:p-10">   
                <div className="title text-2xl" style={{ fontFamily: 'Gilroy-Bold' }}>
                    <div>{t('title1')}</div>
                    <div>{t('title2')}</div>
                    <div>{t('title3')}</div>
                    <div>{t('title4')}</div>
                </div>
            </div>
           

        </section>
    )
};

export default Resume;