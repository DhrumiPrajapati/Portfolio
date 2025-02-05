import React from 'react';
import './works.css';


import Portfolio11 from '../../assets/portfolio11.jpg';
import Portfolio22 from '../../assets/portfolio22.jpg';
import Portfolio33 from '../../assets/portfolio33.jpg';

const works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'>Explore a collection of my projects where innovation meets functionality. From web development and machine learning to data visualization and software optimization, each piece showcases my passion for creating impactful solutions.</span>
            <div className='worksImgs'>
                <a href="https://github.com/DhrumiPrajapati/Gemini_Clone" target="_blank" rel="noopener noreferrer">
                    <div className='worksImgContainer'>
                        <img className='worksImg' alt='Modern Search UI' src={Portfolio11} />
                        <div className='overlay'>
                            <span className='projectName'>Gemini Clone</span>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/DhrumiPrajapati/Food_Price_Analysis" target="_blank" rel="noopener noreferrer">
                    <div className='worksImgContainer'>
                        <img className='worksImg' alt='Grocery Price Comparison' src={Portfolio22} />
                        <div className='overlay'>
                            <span className='projectName'>Food Price Analysis</span>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/DhrumiPrajapati/Attendance_App" target="_blank" rel="noopener noreferrer">
                    <div className='worksImgContainer'>
                        <img className='worksImg' alt='Employee Attendance Tracker' src={Portfolio33} />
                        <div className='overlay'>
                            <span className='projectName'>Attendance Application</span>
                        </div>
                    </div>
                </a>
            </div>


            <a href="https://github.com/DhrumiPrajapati" target="_blank" rel="noopener noreferrer">
                <button className='workBtn'>See More</button>
            </a>
            
        </section>
    )
}

export default works;

// import React from 'react';
// import './works.css';
// // import Portfolio1 from '../../assets/portfolio-1.png';
// // import Portfolio2 from '../../assets/portfolio-2.png';
// // import Portfolio3 from '../../assets/portfolio-3.png';
// // import Portfolio4 from '../../assets/portfolio-4.png';
// // import Portfolio5 from '../../assets/portfolio-5.png';
// // import Portfolio6 from '../../assets/portfolio-6.png';

// import Portfolio11 from '../../assets/portfolio11.jpg';
// import Portfolio22 from '../../assets/portfolio22.jpg';
// import Portfolio33 from '../../assets/portfolio33.jpg';

// const works = () => {
//     return (
//         <section id='works'>
//             <h2 className='worksTitle'>My Portfolio</h2>
//             <span className='worksDesc'>Explore a collection of my projects where innovation meets functionality. From web development and machine learning to data visualization and software optimization, each piece showcases my passion for creating impactful solutions.</span>
//             <div className='worksImgs'>
//                 <img className='worksImg' alt='' src={Portfolio11} />
//                 <img className='worksImg' alt='' src={Portfolio22} />
//                 <img className='worksImg' alt='' src={Portfolio33} />
//                 {/* <img className='worksImg' alt='' src={Portfolio4} />
//                 <img className='worksImg' alt='' src={Portfolio5} />
//                 <img className='worksImg' alt='' src={Portfolio6} /> */}
//             </div>
//             <a href="https://github.com/DhrumiPrajapati" target="_blank" rel="noopener noreferrer">
//                 <button className='workBtn'>See More</button>
//             </a>
            
//         </section>
//     )
// }

// export default works;