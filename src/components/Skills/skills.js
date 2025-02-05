import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I am a Master's student in Applied Computing with over 7 months of internships and hands-on project experience in software development, full-stack web development, and data analytics. I have applied my technical skills across diverse projects, delivering measurable outcomes and improving system performance.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Full-Stack Development</h2>
                        <p>Designed and deployed 3+ applications, enhancing system performance by 30% and reducing query response times by 20%. Proficient in ReactJS, Django, and SQL, with experience in Agile methodologies and the Software Development Life Cycle (SDLC).</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Data Analytics & Machine Learning</h2>
                        <p>Created interactive dashboards and implemented machine learning models to derive actionable insights using PowerBI. Automated data collection using Selenium, reducing manual efforts by 80%, and utilized Python libraries like Scikit-learn and Pandas for data analysis and visualization.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Business Analysis</h2>
                        <p>Conducted requirement gathering and quality audits during client meetings, decreasing miscommunication errors by 40%. Presented insights using tools like Power BI, Excel, and Zoho CRM to support data-driven decision-making.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;