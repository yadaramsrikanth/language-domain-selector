import { useState } from "react"
import { IoSearch } from "react-icons/io5";
import LanguageDomainCard from "../LanguageDomainCard"

import "./index.css"
const languages=[{languageName:"PYTHON",languageUrl:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",alt:'"Python Logo"'},
                {languageName:"JAVA",languageUrl:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",alt:"java logo"},
{languageName:"C/C++",languageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",alt:"c logo"},
{languageName:"GOLANG",languageUrl:"https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg", alt:"go logo"},
{languageName:"PYTHON",languageUrl:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",alt:'"Python Logo"'},
                {languageName:"JAVA",languageUrl:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",alt:"java logo"},
{languageName:"C/C++",languageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",alt:"c logo"},
{languageName:"GOLANG",languageUrl:"https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg", alt:"go logo"}
]


const Language=()=>{
    const [languagename,setlanguagename]=useState("")

    const filteredLanguages=languages.filter((lang)=>(
        lang.languageName.includes(languagename.toLocaleUpperCase())
    ))


    return <div className="language-container col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="language-top-container">
            <p className="preferneces-para">Preferences</p>
        </div>
        <h3 className="languages-heading">What’s your  preferred Languages?</h3>
        <div className="search-container">
        <IoSearch size={25}/>
        <input type="serach" onChange={(e)=>setlanguagename(e.target.value)} placeholder="Search for preferred languages" value={languagename}/>
    </div>
    <ul className="languages-cards-container">
        {filteredLanguages.map((languageItem,index)=>(
            <LanguageDomainCard skills={languageItem} key={index}/>
        ))

        }
    </ul>
    <button className="next-button">Next</button>
    <p className="skip-para">Skip For Now</p>
    </div>
}

export default Language