
import photo from './myImg.jpg'
import DataController from './controllers/DataController';


const Home = (props)=>
{
    var m_oDataController = new DataController();
    return(
            <div id="MainLayout_Div">
                {buildDeatilsLayout()}
                {buildImageLayout()}
            </div> 
    );

    function buildDeatilsLayout(){
        var oDisplayDetails = m_oDataController.getDeatils();
        return(
             <div className="about_div">
                <h4>{oDisplayDetails.nameIs}</h4>
                <h1>{oDisplayDetails.name}</h1>
                <h1 style={{fontSize:"65px",paddingTop:"30px"}}>{oDisplayDetails.build}</h1>
                <p>{oDisplayDetails.pragraph}</p>
             </div>
        );
    }

    function buildImageLayout()
    {
        var arrDetails = m_oDataController.getAboutData();
        var arrTechnologies = m_oDataController.getTechnologies();
        var strDiaplayTechnologies = arrTechnologies.map((oTech)=>
        {
            return<ul className="techList">
                    <li>{oTech.strTechnologiesName}</li>
                 </ul> 
                
        })
        return(
            <div className="img_layout" id="About">
                <h3>About Me</h3>
                 <div className="img_layout_main_div">
                     <div className="profile">
                        <img src={photo} className="profile_Img" alt=""/>
                     </div>
                     <div className="paragraph">
                        <p className="aboutPragraph">{arrDetails}</p>
                        <p style={{fontSize:"17px", paddingTop:"20px"}}>
                            Here are a few technologies I've been working with recently:
                        </p>
                        {strDiaplayTechnologies}
                    </div>
                </div>
            </div>
        )
    }
} 

export default Home;  