

//ASSETS
import FacebookIcon from '../assets/fb.svg'
import TwitterIcon from '../assets/Twitter.svg'
import LinkedingIcon from '../assets/Linkedin.svg'
import InstagramIcon from '../assets/insta.svg'

export default function Footer() {
    return (
        <footer className="footer">
             <div className="divFooterIcons">
                            <a href="https://google.com" target='_blank'>
                                <img src={FacebookIcon} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={TwitterIcon} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={LinkedingIcon} alt="" />
                            </a>
                            <a href="https://google.com" target='_blank'>
                                <img src={InstagramIcon} alt="" />
                            </a>
                        </div>
            <p>Copyright © 2026 Ivan Lima — Desenvolvedor Front End</p>
        </footer>
    )
}