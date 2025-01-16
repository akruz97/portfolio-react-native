import React from "react";
import ProfileImg from "./../assets/img/perfil.jpg";

const Resume = () => {
    return (
        <div className="flex justify-center mt-10" >
            <div className="">
                <img src={ProfileImg} 
                    alt="Not found image profile" 
                    className="object-cover size-44 md:size-72 max-h-96 max-w-96 rounded-full"
                />
            </div>

            <div className="flex items-center px-10 md:p-10">   
                <div className="title text-2xl" style={{ fontFamily: 'Gilroy-Bold' }}>
                    <div>Hi. I'm Jose Cruz</div>
                    <div>I'm a Software Engineer,</div>
                    <div>FullStack  and</div>
                    <div>React Native Developer</div>
                </div>
            </div>
           

        </div>
    )
};

export default Resume;