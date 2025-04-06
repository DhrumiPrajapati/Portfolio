// import React from 'react';
// import './intro.css';
// import btnImg from '../../assets/hireme.png';
// import bg from '../../assets/image.png';
// import {Link} from 'react-scroll';

// const intro = () => {
//     return (
//         <section id='intro'>
//             <div className='introContent'>
//                 <span className='hello'>Hey there,</span>
//                 <span className='IntroText'>I'm <span className='introName'>Dhrumi Prajapati</span> <br/>Web Developer</span>
//                 <p className='intropara'>abcd efgh i jk lmno pq r stu vwx yz</p>
//                 <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' />Hire Me</button></Link>
//             </div>
//             <img src={bg} alt='Profile' className='bg'/>
//         </section>
//     )
// }

// export default intro;

//---------------------------------------------------------------------------------
//neartest to final
import React, { useEffect, useRef } from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import bg from '../../assets/image.png';
//import { Link } from 'react-scroll';
import Typed from 'typed.js';

const Intro = () => {
    const typedElement = useRef(null); // Ref for the element where typing effect is applied

    useEffect(() => {
        const options = {
            strings: ["", "Web Developer", "Data Analyst", "UWin Grad Student"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        // Cleanup Typed.js instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hey there,</span>
                <span className='IntroText'>
                    I'm <span className='introName'>Dhrumi Prajapati</span> <br />
                    <span ref={typedElement} className="typing"></span>
                </span>
                <p className='intropara'>"Passionate about technology, driven by curiosity!"</p>
                
//                <a href={`${process.env.PUBLIC_URL}/DhrumiPrajapati_Resume.pdf`} target="_blank" rel="noopener noreferrer" className='hiremebtnlink'>
//                    <button className='btn'>
//                        <img src={btnImg} alt='Hire Me' className='btnImg' />
//                        Hire Me
//                    </button>
//                </a>
                
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    );
};

export default Intro;


//---------------------------------------------------------------------------------

// import React, { useEffect, useRef } from 'react';
// import './intro.css';
// import btnImg from '../../assets/hireme.png';
// import bg from '../../assets/image.png';
// import Typed from 'typed.js';

// const Intro = () => {
//     const typedElement = useRef(null); // Ref for the element where typing effect is applied

//     useEffect(() => {
//         const options = {
//             strings: ["", "Web Developer", "Data Analyst", "UWin Grad Student"],
//             typeSpeed: 100,
//             backSpeed: 60,
//             loop: true,
//         };

//         const typed = new Typed(typedElement.current, options);

//         // Cleanup Typed.js instance on component unmount
//         return () => {
//             typed.destroy();
//         };
//     }, []);

//     return (
//         <section id='intro'>
//             <div className='introContent'>
//                 <span className='hello'>Hey there,</span>
//                 <span className='IntroText'>
//                     I'm <span className='introName'>Dhrumi Prajapati</span> <br />
//                     <span ref={typedElement} className="typing"></span>
//                 </span>
//                 <p className='intropara'>abcd efgh i jk lmno pq r stu vwx yz</p>
//                     <button className='btn'>
//                         <img src={btnImg} alt='Hire Me' className='btnImg' />
//                         Hire Me
//                     </button>
//             </div>
//             <img src={bg} alt='Profile' className='bg' />
//         </section>
//     );
// };

// export default Intro;
