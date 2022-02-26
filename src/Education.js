import DataController from "./controllers/DataController";


const Education = (props)=>
{
    var m_oDataController = new DataController();
    var arrEducationDetails = m_oDataController.getEducationDeatils();
    var education  = arrEducationDetails.map((oEducation)=>
    {
        return <div style={{marginTop:"60px"}}>
             <h2 style={{color:"aqua", marginTop:"20px"}}>{oEducation.specification}</h2>
             <h4 style={{color:"none",marginTop:"20px"}}>{oEducation.schoolingName}</h4>
             <h5 style={{marginTop:"20px"}}>{oEducation.Year}</h5>
        </div>
    })
    return   <div id="Education">
                <h3>Education</h3>
                 {education}
            </div>
}
export default Education; 