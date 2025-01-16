import React, { useState } from "react"
import { LANGUAGES } from "../const/listLanguages";
import { useTranslation } from "react-i18next";

const TitleLanguages = {
    en: 'English',
    es: 'Spanish'
}


const NavBar = () => {

    const [visible, setVisible] = useState(false);
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLang, setCurrentLang] = useState(language);
    
    const onClickVisible = () => {
        setVisible(!visible);
    }

    const handleChangeLanguage = (value) => {
       
        setCurrentLang(value);
        changeLanguage(value);
      }

    return (
        <div>
            <header>
                <nav  className="flex flex-row px-10 py-10">
                    <div className="flex items-center">
                        <span className="px-5">
                            Jose Cruz Dev
                        </span>
                    </div>
                    <div className="flex-1 justify-items-end">
                        <ul className="flex text-md" style={{ fontFamily: 'Gilroy-Bold' }}>
                                <li className="px-2 py-3 mr-5 hover:underline">{t('resume')}</li>
                                <li className="px-2 py-3 mr-5 hover:underline">{t('experiences')}</li>
                                <li className="px-2 py-3 mr-5 hover:underline">{t('technology')}</li>
                                <li className="px-2 py-3 mr-5 hover:underline">{t('projects')}</li>       
                        </ul>
                    </div>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">{TitleLanguages[language]} </button>


                    <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
                    
                        <ul className="py-1" aria-labelledby="dropdown">
                            {
                                LANGUAGES.map((lang, idx) => {
                                    return (
                                        <li key={idx} onClick={() => handleChangeLanguage(lang.value)} >
                                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">{lang.title}</a>
                                        </li>
                                    )
                                })
                            }
                           
                        </ul>
                    </div>
                </nav>
                
            </header>

        </div>
    )
}

export default NavBar