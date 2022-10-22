import facebook from '../../../imgs/socials/facebook.png';
import linkedin from '../../../imgs/socials/linkedin.png';
import twitter from '../../../imgs/socials/tweet.png';
import instagram from '../../../imgs/socials/ig.png';

import "./footer.scss";

export default function Footer() {
    return (
        <footer>
            <div class="copyright">
                ©2021 Digital Booking
            </div>
            <div class="socials">
                <a id="facebook" href=""><img src={facebook}/></a>
                <a id="linkedin" href=""><img src={linkedin}/></a>
                <a id="twitter" href=""><img src={twitter}/></a>
                <a id="instagram" href=""><img src={instagram}/></a>
            </div>
        </footer>
    );
}