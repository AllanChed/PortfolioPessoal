import whatsappImg from './whatsapp.png'
import linkedinImg from './linkedin.png'
import githubImg from './github.png'

function Header() {
    
    return(
        <div id="header">
            <div id="header-content">
                <h1>Allan Ched</h1>
                <ul id="links">
                    <li className='link'><a href="https://wa.me/5551995526209"><img alt="logo" src={whatsappImg}></img>WhatsApp</a></li>
                    <li className='link'><a href="https://www.linkedin.com/in/allan-ched-lucas-rodrigues-57225822a/"><img alt="logo" src={linkedinImg}></img>LinkedIn</a></li>
                    <li className='link'><a href="https://github.com/AllanChed"><img alt="logo" src={githubImg}></img>GitHub</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;



