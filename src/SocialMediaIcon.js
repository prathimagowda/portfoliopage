
import { SocialIcon } from 'react-social-icons';

const SocialMediaIcon = (props) =>
{
    
    return <div className="socialMediaIconDiv">
                <SocialIcon 
                    url={props.strIconUrl} 
                    target="_blank"
                    bgColor={props.c_bgColor}
                    rel="noreferrer"/>
            </div>
}

export default  SocialMediaIcon;