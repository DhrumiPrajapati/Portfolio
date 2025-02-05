// import React from 'react'
// import './experience.css';

// const Experience = () => {
//     return (
//         <section id='experience'>
//             <h2 className='expTitle'>Experience</h2>
//         </section>

//     );
// }

// export default Experience;

// import React from 'react';
// import './experience.css';

// const Experience = () => {
//     const experiences = [
//         {
//             year: '2024-2025',
//             title: 'Master of Applied Computing',
//             description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptas voluptatem esse dolor saepe sed. Odio fuga ipsum, maiores ratione nulla minus eligendi et voluptas aliquam.'
//         },
//         {
//             year: '2019-2023',
//             title: 'Bachelor\'s of Computer Engineering',
//             description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptas voluptatem esse dolor saepe sed. Odio fuga ipsum, maiores ratione nulla minus eligendi et voluptas aliquam.'
//         },
//         {
//             year: '2017-2019',
//             title: 'Higher Secondary Education',
//             description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptas voluptatem esse dolor saepe sed. Odio fuga ipsum, maiores ratione nulla minus eligendi et voluptas aliquam.'
//         }
//     ];

//     return (
//         <section id="experience">
//             <h2 className="expTitle">Experience</h2>
//             <div className="timeline">
//                 {experiences.map((exp, index) => (
//                     <div className="timeline-item" key={index}>
//                         <div className="circle-dot"></div>
//                         <h3 className="timeline-date">
//                             <i className="fa fa-calendar"></i> {exp.year}
//                         </h3>
//                         <h4 className="timeline-title">{exp.title}</h4>
//                         <p className="timeline-text">{exp.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Experience;

import React from 'react';
import './experience.css';
import JobIcon from '../../assets/job.png';
import InternshipIcon from '../../assets/internship.jpg';

const Experience = () => {
    const experienceData = [
        {
            year: 'Mar 2023 - May 2023',
            title: 'Python-Django Developer Intern',
            company: 'Eliteware Solutions Pvt. Ltd. | Gujarat, IN',
            icon: JobIcon,
            description: 'Developed and maintained web applications using Python and Django, designed database models, and implemented migrations. Conducted code reviews, debugged issues, and optimized application performance while collaborating with teams and clients to refine technical requirements and deploy applications.'
        },
        {
            year: 'Jan 2023 - Feb 2023',
            title: 'Business Analyst Intern',
            company: 'Eliteware Solutions Pvt. Ltd. | Gujarat, IN',
            icon: JobIcon,
            description: 'Gathered, documented, and analyzed business and technical requirements from clients, conducted audits, and maintained traceability records for process and product quality. Used Zoho CRM and data analysis tools to generate insights, delivering structured reports and presentations to support stakeholder decision-making.'
        },
        {
            year: 'Jun 2022 - Jul 2022',
            title: 'Web Developer Intern',
            company: 'Tntra Innovation Ecosystem (Gurukula) | Gujarat, IN',
            icon: InternshipIcon,
            description: 'Developed and tested web applications using Java, Python, JavaScript, and Django while implementing Software Development Life Cycle (SDLC) best practices. Debugged, optimized, and enhanced frontend and backend functionality while collaborating with senior engineers to resolve real-world development challenges.'
        }
    ];

    return (
        <section id="experience">
            <span className="expTitle">Experience</span>
            <div className="expBars">
                {experienceData.map((exp, index) => (
                    <div className="expBar" key={index}>
                        <div className="icon-circle">
                            <img src={exp.icon} alt={exp.title} className="expBarIcon" />
                        </div>
                        <div className="expBarText">
                            <h2>{exp.title}</h2>
                            <h3>{exp.company}</h3>
                            <span className="expYear">{exp.year}</span>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;