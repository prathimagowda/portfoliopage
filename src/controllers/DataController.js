export default class DataController 
{
    getSocailMediaIcon()
    {
        return [
            {
                "link" : "No",
                "icon" : "https://github.com/prathimagowda"
            },
            {
                "link" : "",
                "icon" : "https://www.linkedin.com/in/prathima-gowda-651320145"
            },
            {
                "link" : "",
                "icon" : "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=prathima.gowda64@gmail.com"
            },
            {
                "link" : "",
                "icon" : "https://www.instagram.com/prathima__gowda/"
            },
            {
                "link" : "",
                "icon" : "https://www.facebook.com/prathima.prathima.1253/"
            },
        ]
    }

    getDeatils()
    {
        return {
            "nameIs" : "Hi, my name is",
            "name":"Prathima M k",
            "build":"I build things for the web.",
            "pragraph":"I'm a software engineer who specializes in building "+
            "web Development experiences.\nI have 2+ Years of Experiences as a Reactjs Developer "+
            "Currently, I'm an software engineer at "+
            "TechMust Software Pvt Ltd.",
        }
    }


    getAboutData()
    {
        return"Hello! My name is Prathima and "+
            "I enjoy creating things that live on the internet. "+
            "My interest in web development/Front End development started back in 2019 "+
            "when I decided to try editing custom Tumblr themes — "+
            "turns out hacking together a custom reblog button taught me a lot about HTML & CSS!"
        
    }

    getTechnologies()
    {
        return [
            {"strTechnologiesName" : "Html"},
            {"strTechnologiesName" : "Html5"},
            {"strTechnologiesName" : "Css"},
            {"strTechnologiesName" : "javascript"}, 
            {"strTechnologiesName" : "React js"},
            {"strTechnologiesName" : "Json"},
            {"strTechnologiesName" : "AngularJS"},
            {"strTechnologiesName" : "Flutter"},
            {"strTechnologiesName" : "Dart"},
        ]
    }

    getCompanyDetails()
    {
       return [
           {
                "companyName": "TechMust Software Pvt. Ltd. -  April 2019 to present", 
                
                "workDescription":"Working as Software Developer in TechMust Software Pvt. Ltd. " +
                "I am working as a front-end web developer. Basically Client-Side programming " +
                "Design and Developed the Responsive UI/UX, Web Page, DataGrid Useing Html, CSS, "+
                "Reactjs and JavaScript." 
           },
           {
                "companyName": "Source One Management Services Pvt. Ltd. -  October 2018 to April 2019", 
                
                "workDescription":"I was Working as a IT Recruiter in Source One Management Services Pvt. Ltd. "+
                "IT recruiters are the communication link between the hiring company and the job applicant. "+
                "Recruiters are responsible for staying in touch with job applicants and assisting providing"+
                "them with guidance in their job search."
            }
       ]   
    }

    getWorkingProject()
    {
        return [
            {
                "projectName" : "Myngo - April 2021 to Present.",
                "Role" : "Reactjs Developer and Flutter Developer",
                "Technologies":"",
                "projectDescription" : "MyNGO is a crowd funding aggregator platform which assists NGO’s"+
                "and Social Service Organizations to raise funds for their social cause."
            },
            {
                "projectName" : "Ferrero - May 2020  to April 2021",
                "Role" : "Reactjs Developer",
                "Technologies":"",
                "projectDescription" : "Ferrero is an online document repository management system."+
                "It is used Advertise and Banner creation using Illustrator Templates."
            },
            {
                "projectName" : "Myngo BackOffice - October 2019  to  May 2020",
                "Role" : "Reactjs Developer",
                "Technologies":"",
                "projectDescription" : "MyNGO is a crowd funding aggregator platform which assists NGO’s"+
                "and Social Service Organizations to raise funds for their social cause.",
            },
            {
                "projectName" : "Zenith - May 2019  to  October 2019",
                "Role" : "javascript Developer",
                "Technologies":"",
                "projectDescription" : "Student Scholarship Management developed for Managing student’s" +
                "scholarship details,facilitators details, branch and academic details. \n"+
                "   \n"+
                " ",
            }
        ]
    }

    getEducationDeatils()
    {
        return[
            {
                "schoolingName":"Dayananda Sagar College of Engineering, Bangalore",
                "specification":"MCA(Master Of Computer Application)",
                "Year":"2017(FullTime)",
                "percentage":"74%",
            },
            {
                "schoolingName":"Bharat Education Society(B.E.S)",
                "specification":"BCA(Bachelor Of Computer Application)",
                "Year":"2015(FullTime)",
                "percentage":"54.6%",
            },
            {
                "schoolingName":"J.S.S PU college",
                "specification":"PUC",
                "Year":"2012(FullTime)",
                "percentage":"55%",
            }
        ]
    }

}