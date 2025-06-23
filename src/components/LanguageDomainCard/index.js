import "./index.css"
const LanguageDomainCard=(props)=>{
    const {skills}=props
const {languageName,languageUrl,alt}=skills
    return <li className="language-list-card">
        <div className="language-checkbox-container">
<img className="language-url" src={languageUrl} alt={alt}/>
<p className="language-name-in-card">{languageName}</p>
</div>
<>
<input type="checkbox" className="checkbox-input"/>
</>
    </li>
}

export default LanguageDomainCard