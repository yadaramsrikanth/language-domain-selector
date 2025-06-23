import { useState } from "react"
import { IoSearch } from "react-icons/io5";
import LanguageDomainCard from "../LanguageDomainCard"

import "./index.css"
const languages=[{languageName:"MACHINE LEARNING",languageUrl:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1750705109/Screenshot_8_rm2uhz.png",alt:"ml Logo"},
                {languageName:"WEB DEVELOPMENT",languageUrl:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1750705124/Screenshot_9_filtty.png",alt:"web logo"},
{languageName:"CYBER SECURITY",languageUrl:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1750704742/Screenshot_10_hmmfwa.png",alt:"cybersecurity logo"},
{languageName:"UI/UX",languageUrl:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1750704955/Screenshot_12_editnw.png", alt:"uiux logo"},
{languageName:"MACHINE LEARNING",languageUrl:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1750705109/Screenshot_8_rm2uhz.png",alt:"ml Logo"},
                {languageName:"WEB DEVELOPMENT",languageUrl:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1750705124/Screenshot_9_filtty.png",alt:"web logo"},
{languageName:"CYBER SECURITY",languageUrl:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1750704742/Screenshot_10_hmmfwa.png",alt:"cybersecurity logo"},
{languageName:"UI/UX",languageUrl:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1750704955/Screenshot_12_editnw.png", alt:"uiux logo"}
]


const Domain=()=>{
    const [languagename,setlanguagename]=useState("")

    const filteredLanguages=languages.filter((lang)=>(
        lang.languageName.includes(languagename.toLocaleUpperCase())
    ))


    return <div className="language-container col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="language-top-container">
            <p className="preferneces-para">Preferences</p>
        </div>
        <h3 className="languages-heading">What Topics Are You Interested In?</h3>
        <div className="search-container">
        <IoSearch size={25}/>
        <input type="serach" onChange={(e)=>setlanguagename(e.target.value)} placeholder="Search for preferred domain" value={languagename}/>
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

export default Domain