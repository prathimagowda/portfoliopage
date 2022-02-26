
import DataController from "./controllers/DataController";
import SocialMediaIcon from "./SocialMediaIcon";


var m_oDataController = new DataController();

const SocialMediaIconLayout = (props)=>
{
    var arrIconData = m_oDataController.getSocailMediaIcon();
    var displayIcon = arrIconData.map((oIcon)=>
    {
      return <SocialMediaIcon c_bgColor={oIcon.link} strIconUrl={oIcon.icon}/> ;
    });
  
    return <nav id="socialIconNav">
         <ul className="social_icon_list">
             {displayIcon}
        </ul>
    </nav>
}

export default SocialMediaIconLayout;