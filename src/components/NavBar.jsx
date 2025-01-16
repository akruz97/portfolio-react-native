import React from "react"

const NavBar = () => {
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
                                <li className="px-2 py-3 mr-5 hover:underline">Resume</li>
                                <li className="px-2 py-3 mr-5 hover:underline">Experiences</li>
                                <li className="px-2 py-3 mr-5 hover:underline">Technologies</li>
                                <li className="px-2 py-3 mr-5 hover:underline">Projects</li>
                        </ul>
                    </div>
                </nav>
                
            </header>

        </div>
    )
}

export default NavBar