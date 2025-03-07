import React from 'react'
import myPhoto from "/my_photo.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Portfolio() {
  return (
    <div className='m-auto my-5 p-5 max-w-250'>
        <section>
            <nav className='flex direction-row justify-between align-center'>
                <div className='text-xl font-bold text-teal-700'>Krunal's Portfolio</div>
                <a href="https://drive.google.com/file/d/1ogS0vcw_64Xxz-WcB6h1PYuZtiHuhLi4/view?usp=drivesdk"
            target='_black' className='bg-teal-300 border-2 rounded-4xl px-2'>Download Resume</a>
            </nav>
        </section>

        <section className='flex justify-center flex-col text-center m-auto lg:flex-row my-5 '>
            <main>
                <h1 className='text-3xl font-bold text-teal-700'>Krunal Devganiya</h1>
                <h3 className='text-2xl font-semibold text-teal-600'>Software Developer</h3>
                <div className='text-2xl'>About me</div>
                <div className='max-w-150'>My name is Krunal Devganiya, pursuing B.E. in Information Science and Engineering with a CGPA 
of 8.31 at Atria Institute of Technology. I have interned at HedgeMyFunds and CIA Labs, gaining 
experience in backend and full-stack. My technical skills include React.js, Node.js, Express.js, 
MongoDB, and MySQL. I have built projects like a Job Portal, Second hand Product Website, and 
Portfolio Website. I am passionate about Web3, blockchain, and working in startup environments.  
</div>

                    <div className='flex flex-row justify-evenly m-5'>
                    <a href="https://github.com/KrunalDevganiya02" target='_blank' className='text-4xl text-teal-600' >
                    <FaGithub/>
                    </a>
                    <a href="https://linkedin.com/in/krunaldevganiya02 " target='_blank' className='text-4xl text-teal-600' >

                    <FaLinkedin/>
                    </a>
                    <a href="mailto:krunaldevganiya02@gmail.com" className='text-4xl text-teal-600' target='_blank' >

                    <IoIosMail/>
                    </a>
                        </div>        
            </main>
            <img src={myPhoto} className='border rounded-full w-49 m-auto h-50'alt="Photo"  />
        </section>

        <h1 className='text-center text-teal-700 text-4xl'>Education</h1>
        
        <section className='text-center m-2'>
            <h1 className='text-2xl'>B.E. Information Science & Engineering</h1>
            <h2 className='text-xl'>Atria Institute Of Technology</h2>
            <h3 className='text-l'>8.31 CGPA</h3>
        </section>

        <h1 className='text-center text-teal-700 text-4xl m-2'>Work Experiance</h1>
        <section className=' flex justify-center flex-col text-center items-center m-auto lg:flex-row my-5 '>
            <div className='border-2 shadow-2xl rounded-3xl m-4 p-2 w-70 h-100'>
                <h2 className='my-2 text-teal-700 font-bold'>Backend Intern <br />@HedgeMyFunds</h2>
                <h3> Jun 2024- Aug 2024 </h3>
                    <span> 
                        • Developed a backend architecture for a financial web application, implementing user authentication and data validation for
                    enhanced security. <br />
                        • Reduced response time by 30% by optimizing database queries and using efficient indexing on MongoDB. <br />
                        • Node.js, Express.js, MongoDB
                    </span>
            </div>
            <div className='border-2 shadow-2xl rounded-3xl m-4 p-2 w-70 h-100'>
                <h2 className='my-2 text-teal-700 font-bold'>Full Stack Intern <br />@CIA Labs</h2>
                <h3>  Dec 2023–Apr2024 </h3>
                    <span> 
                             • Leadthe development of a cross-platform mobile application using React Native, ensuring consistent user experience on both iOS
                                and Android devices. <br />
                            • Integrated FastAPI with MySQL to provide efficient data retrieval, cutting API response time by 25%. <br />
                            • React Native, FastAPI, MySql
                    </span>
            </div>
        </section>

        <h1 className='text-center text-teal-700 text-4xl'>Projects</h1>
        <section className=' flex justify-center flex-col text-center items-center m-auto lg:flex-row my-5 '>
            <div className='border-2  shadow-2xl rounded-3xl m-4 p-2 w-70'>
                <h2 className='my-2 text-teal-700 font-bold'> Job Portal
                </h2 >
                    <a className='text-blue-900 underline' href="https://github.com/KrunalDevganiya02/job-portal.git"> Github</a>
            </div>
            <div className='border-2  shadow-2xl rounded-3xl m-4 p-2 w-70'>
                <h2 className='my-2 text-teal-700 font-bold'>  Buy and Sell Second-hand Product
                </h2 >
                    <a className='text-blue-900 underline' href="https://github.com/KrunalDevganiya02/olx-clone.git"> Github</a>
            </div>

            <div className='border-2  shadow-2xl rounded-3xl m-4 p-2 w-70'>
                <h2 className='my-2 text-teal-700 font-bold'> Weather Application</h2 >
                    <a className='text-blue-900 underline' href="https://github.com/KrunalDevganiya02/Wether-api.git"> Github</a>
            </div>

        </section>

    </div>
  )
}

export default Portfolio