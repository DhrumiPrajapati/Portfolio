// import React from 'react'
// import './education.css';

// const Education = () => {
//     return (
//         <section id='education'>
//             <h2 className='eduTitle'>Education</h2>
//         </section>
//     );
// }

// export default Education;
//-----------------------------------------------------------------------
// import React from 'react';
// import './education.css';

// const Education = () => {
//     const educationData = [
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
//         <section id="education">
//             <h2 className="eduTitle">Education</h2>
//             <div className="timeline">
//                 {educationData.map((edu, index) => (
//                     <div className="timeline-item" key={index}>
//                         <div className="circle-dot"></div>
//                         <h3 className="timeline-date">
//                             <i className="fa fa-calendar"></i> {edu.year}
//                         </h3>
//                         <h4 className="timeline-title">{edu.title}</h4>
//                         <p className="timeline-text">{edu.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Education;

import React from 'react';
import './education.css';
import CollegeIcon from '../../assets/college.png';
import UniversityIcon from '../../assets/university.png';
import SchoolIcon from '../../assets/school.png';
import School1Icon from '../../assets/school1logo.jpeg';

const Education = () => {
    const educationData = [
        {
            year: 'May 2024 - Present',
            title: 'Master of Applied Computing',
            name: 'University of Windsor | Ontario, CN',
            icon: UniversityIcon,
            description: 'Dynamic program focused on practical and theoretical aspects of computing, including software engineering, data management, and AI applications.'
        },
        {
            year: 'Jun 2019 - Jun 2023',
            title: 'Bachelor of Computer Engineering',
            name: 'Gujarat Technological University | Gujarat, IN',
            icon: CollegeIcon,
            description: 'Comprehensive engineering program covering programming, hardware, and software design, emphasizing problem-solving and innovation.'
        },
        {
            year: 'Jun 2017 - Apr 2019',
            title: 'Higher Secondary Education',
            name: 'Shree Narayana Vidhyalaya | Gujarat, IN',
            icon: School1Icon,
            description: 'Gained an in-depth understanding of mathematics, physics, and computer science, building a strong analytical and problem-solving foundation for an engineering career.'
        },
        {
            year: 'Jun 2007 - Apr 2017',
            title: 'Primary & Secondary Education',
            name: 'Rosary High School | Gujarat, IN',
            icon: SchoolIcon,
            description: 'Received a well-rounded education covering science, mathematics, languages, and social studies, fostering intellectual curiosity and analytical thinking.'
        }
    ];

    return (
        <section id="education">
            <span className="eduTitle">Education</span>
            <div className="eduBars">
                {educationData.map((edu, index) => (
                    <div className="eduBar" key={index}>
                        <div className="icon-circle">
                            <img src={edu.icon} alt={edu.title} className="eduBarIcon" />
                        </div>
                        <div className="eduBarText">
                            <h2>{edu.title}</h2>
                            <h3>{edu.name}</h3>
                            <span className="eduYear">{edu.year}</span>
                            <p>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;