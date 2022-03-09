import DataController from "./controllers/DataController";


const Exprience = (props)=>
{
   var m_oDataController = new  DataController();
   var oCompantDetails = m_oDataController.getCompanyDetails();
   var arrProjects = m_oDataController.getWorkingProject();
   var project = arrProjects.map((oProjects)=>
   {
       return <div className="projectMainDiv">
                  <h5 className="projectName">{oProjects.projectName}</h5>
                  <h5 className="role"><label>Role :  </label>{oProjects.Role}</h5>
                  <p className="projectDescription">{oProjects.projectDescription}</p>
                  <div style={{width:"100%", height: oProjects.projectName === "Zenith" ? "15vh": 0}} >
                
                  </div>
             </div>
           
   })
   return(
       <div className="exprience" id="Exprience">
          <h3>Where I’ve Worked</h3> 
          <div className="company_Name_Desc">
            <h4 className="companyName">{oCompantDetails[0].companyName}</h4>
            <p className="company_work_desc" >{oCompantDetails[0].workDescription}</p>
         </div>
         <div className="projectDetails_mainDiv">
            <h3 className="projectHeader">Project Details</h3> 
                {project}
        </div>
       </div>
   )
}

export default Exprience;