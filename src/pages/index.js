
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() 
{
  return (

    <>
    <head>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css"/>
    </head>
      
   <body>
    <div className="bg-container justify-content-center">
        <div className="d-flex flex-row">
        <div>
        <h1 className="heading pt-5 pb-4 pl-5 pr-3">Direct Hiring by Zigup</h1>
        
            <p className="paragraph pl-5 pr-3">Get interviewed directly by hiring managers
                and hired by Top Startups.</p>
        </div>

            <img src="https://res.cloudinary.com/dn14yrrye/image/upload/v1675149969/Mask_group_afi6un.png" className="image pt-3" />
        </div>
        <p className="description pt-5">
            No need to share resumes with job boards and get spammed unnecessarily. 
            Get your profile in front of top startup hiring managers and get direct invitations to interviews.</p>
    </div>
        
    <div className="rectangle-card">
        <h1 className="rectangle-page-heading">What is Direct hiring?</h1>
        <p className="page-description p-4">
            Zigup finds, qualifies, and hires candidates for top Global Startups and Companies through direct hiring process. In order to save your time & energy, We connect you with trusted companies & hiring managers directly for a quick turnaround time. Our clients offers full-time positions with benefits, sometimes part-time/freelancing positions as well.
          
            
            Zigup Direct Hiring fast tracks hiring process for candidates as well as companies. Once job requirements are shared by our clients (companies), qualified candidates receives in-app push notification & Whatsapp notification, enabling fast TAT.
            
    
            We at Zigup, help companies hire candiates directly from our 100000+ talent pool, screened by AI.From interview scheduling, candidate communications and ATS integration, Zigup providedes complete recruitment coordination.
        </p>
        <h1 className="rectangle-page-heading">How Zigup direct hiring works?</h1>

           <div className="d-flex flex-row  justify-content-center">

           <div className="card m-2 d-flex flex-row">
            <button className="logo-button">1</button>
            <p className="process-heading">Applications</p>
           </div>

           <div className="card m-2 d-flex flex-row">
            <button className="logo-button">2</button>
            <p className="process-heading">Shortlisting</p>
           </div>

           <div className="card m-2 d-flex flex-row">
            <button className="logo-button">3</button>
            <p className="process-heading">HR/Technical Screening</p>
           </div>

           <div className="card m-2 d-flex flex-row">
            <button className="logo-button">4</button>
            <p className="process-heading">Final Interview with Client</p>
           </div>

           <div className="card m-2 d-flex flex-row">
            <button className="logo-button">5</button>
            <p className="process-heading">Decision with offer</p>
           </div>

          </div>

        <div className="description-card m-3">
        <p className="rectangle-page-description pt-3 pb-3">Search for job postings that suits your skills & exprience in our 
            Job section. Submit your resume with updated details.</p>  
        </div>  
      </div>
    

    <div  className=" up_background d-flex flex-row justify-content-center ">
        
        
        <div>
            <img src="https://res.cloudinary.com/dn14yrrye/image/upload/v1675149923/Mask_group_3_y1slla.png"/>
       </div>
     
        
     <div>
        <h1>Sign up and complete your profile.</h1>
        <p>
            Answer a few questions about your experience & skill.
            upload your resume  - it takes less than 3 minutes to .
            complete your profile on zigup and get direct access to.
            hiring managers.
        </p>
        <p>
            Apply for relevant Jobs from our job section and sit back.
            while we review your profile for the best job.
        </p>
    
     </div>

    </div>


    <div  className=" low_background d-flex flex-row justify-content-center">
       
        
       <div>
         <h1>
            Receive Job offers. Get hired.
         </h1>
         <p>
            Get interview requests from top startups, usually within 2-3 days.
            Our HR screening process is doesn't take more than 30 mins, and 
            the final interview takes only an hours. 
         </p>

         <p>
            Your time matter, and our interview exprience is designed to . 
            ensure you receive timely feedback and offeers. We make job .
            offers within 3-7 Days.
         </p>

        </div>

    
      <div>
           <img src="https://res.cloudinary.com/dn14yrrye/image/upload/v1675149923/Rectangle_1_2_fllvv7.png"/>
      </div>

    </div>





</body>

    </>
  )
}

