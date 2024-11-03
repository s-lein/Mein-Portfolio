import React from 'react';
import { motion } from 'framer-motion';
import variantsBig from '../utils/variantsAnimation'
import Tools from '../utils/tools';
import CV_de from '../../assets/pdf/CV_de.pdf'
import CV_en from '../../assets/pdf/CV_en.pdf'
import Texts from '../utils/texts.js';
// import profilePic from '../../assets/img/profile.png'
import './about.scss'

const AboutMe = ({ id, isWidthGreaterThan1050, language }) => {

    return (
        <motion.div id={id}
            className="floating-container"
            initial={isWidthGreaterThan1050 ? "hidden" : ""}
            animate={isWidthGreaterThan1050 ? "visible" : ""}
            variants={isWidthGreaterThan1050 ? variantsBig : {}}
        >

            <div className="content">
                <div>
                    <div className='component_title' >
                        {/* Dynamic title for 'About Me' */}
                        <h2><span className='span_title'>{Texts[language].about.title.charAt(0)}</span>{Texts[language].about.title.slice(1)}</h2>
                    </div>
                    <div className='about_img_div'>
                        <div className='img_div' >
                            <img src={`${process.env.PUBLIC_URL}/img/profile.jpg`} alt='Profile' className="about_pic" />
                        </div>
                        <div className='text_div'>
                            <p>{Texts[language].about.welcomeText}</p>
                            <p>
                                {Texts[language].about.description.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line.split(' ').map((word, wordIndex) => {
                                            const technologiesToBold = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'];
                                            const cleanedWord = word.replace(/[,]/g, ''); // Remove commas only.
 
                                            const isBold = technologiesToBold.some(tech => cleanedWord.toLowerCase() === tech.toLowerCase());
 
                                            return (
                                                <React.Fragment key={wordIndex}>
                                                    {isBold ? <strong>{word}</strong> : word}{' '}
                                                </React.Fragment>
                                            );
                                        })}
                                    </span>
                                ))}
                            </p>
 
 
                            {language === 'en' ?
                            <a href={CV_en} style={{ color: 'var(--main-color)' }} rel='noreferrer' target='_blank'> Download CV </a>:
                            <a href={CV_de} style={{ color: 'var(--main-color)' }} rel='noreferrer' target='_blank'> Lebenslauf herunterladen </a>
                            } 
                        </div>
                    </div>
                </div>
                <div className='component_title'>
                    {/* Dynamic title for 'Skills & Technologies' */}
                    <h2><span className='span_title'>{Texts[language].about.skillsTitle.charAt(0)}</span>{Texts[language].about.skillsTitle.slice(1)}</h2>
                </div>
                <div className='about_img_div'>
                    <Tools />
                </div>
                
                
            </div>
        </motion.div>
    );
}

export default AboutMe;