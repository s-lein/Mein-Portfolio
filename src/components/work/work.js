import React, { useState } from 'react';
import { motion } from 'framer-motion';
import variantsBig from '../utils/variantsAnimation'
import Texts from '../utils/texts.js';
import ProjectDetails from './project_details'

// svg icons

import Python from '../../assets/svgs/Python.svg'
import C from '../../assets/svgs/C.svg'
import R from '../../assets/svgs/R.svg'
import Azure from '../../assets/svgs/Azure.svg'
import Analysis from '../../assets/svgs/Analysis.svg'
import CPP from '../../assets/svgs/CPP.svg'
import SVN from '../../assets/svgs/SVN.svg'
import Jupyter from '../../assets/svgs/Jupyter.svg'
import './work.scss'

const Work = ({ id, isWidthGreaterThan1050, language }) => {

    const [activeItem, setActiveItem] = useState(null);

    // project pictures imports from public folder
    const de_Chi_Quadrat_Verteilung = `${process.env.PUBLIC_URL}/img/de_Chi-Quadrat-Verteilung.svg`;

    const PCA = `${process.env.PUBLIC_URL}/img/PCA.png`;
    const PairPlot = `${process.env.PUBLIC_URL}/img/PairPlot.ppg`;
    const Korrelationsmatrix_der_Merkmale = `${process.env.PUBLIC_URL}/img/Korrelationsmatrix der Merkmale.png`;

    const Clustering = `${process.env.PUBLIC_URL}/img/Clustering.png`;

    const VergeleichAktienvorhersage = `${process.env.PUBLIC_URL}/img/Vergleich Akteinkursvorhersage.png`;
    
    const workItems = [
        {
            imgSrc: de_Chi_Quadrat_Verteilung,
            title: Texts[language].work.projects.chi.title,
            description: Texts[language].work.projects.chi.description,
            features: Texts[language].work.projects.chi.features,
            linkGit: 'https://github.com/s-lein/Beispiele/blob/main/Gammastrahlung/Gammstrahlung.ipynb',
            languagesUsed: ['Python', 'Jest', 'Cucumber', 'Puppeteer', 'HTML', 'Sass', 'React', 'Google Calendar API', 'OAuth2', 'Recharts'],
            //phonePic: [meet_phone, meet]
            //languagesUsed: [Python, Jupyter],
            phonePic: [de_Chi_Quadrat_Verteilung]


            //imgSrc: meet,
            //title: Texts[language].work.projects.meet.title,
            //description: Texts[language].work.projects.meet.description,
            
            //linkGit: 'https://github.com/alinalein/meet',
            //linkLive: 'https://alinalein.github.io/meet/',
            // languagesUsed: [Reacticon, Jest, AWS, Cucumber],
           
        },
        {
            imgSrc: PCA,
            title: Texts[language].work.projects.pca.title,
            description: Texts[language].work.projects.pca.description,
            features: Texts[language].work.projects.pca.features,
            linkGit: 'https://github.com/s-lein/Beispiele/blob/main/Gammastrahlung/Gammstrahlung.ipynb',
            languagesUsed: [Python, Jupyter],
            phonePic: [Korrelationsmatrix_der_Merkmale, PCA]
        },
        {
            imgSrc: Clustering,
            title: Texts[language].work.projects.cluster.title,
            description: Texts[language].work.projects.cluster.description,
            features: Texts[language].work.projects.cluster.features,
            linkGit: 'https://github.com/s-lein/Beispiele/blob/main/Gammastrahlung/Gammstrahlung.ipynb',
            languagesUsed: [Python, Jupyter],
            phonePic: [Clustering]
        },
        {
            imgSrc: VergeleichAktienvorhersage,
            title: Texts[language].work.projects.aktien.title,
            description: Texts[language].work.projects.aktien.description,
            features: Texts[language].work.projects.aktien.features,
            linkGit: 'https://github.com/s-lein/Beispiele/blob/main/Gammastrahlung/Gammstrahlung.ipynb',
            languagesUsed: [Python, Jupyter],
            phonePic: [VergeleichAktienvorhersage]
        },
    ];

    const showDetails = (item) => {
        setActiveItem(item);
    };

    const onClose = () => {
        setActiveItem(null);
    };

    return (
        <motion.div id={id}
            className="floating-container"
            initial={isWidthGreaterThan1050 ? "hidden" : ""}
            animate={isWidthGreaterThan1050 ? "visible" : ""}
            variants={isWidthGreaterThan1050 ? variantsBig : {}}
        >
            <div className="content">
                <div className='component_title' >
                    <h2> <span className='span_title'>{Texts[language].work.title.charAt(0)}</span>
                        {Texts[language].work.title.slice(1)}</h2>
                </div>
                <div className='work_grid'>
                    {workItems.map(item => (
                        <div className='work_grid_item' key={item.title} onClick={() => showDetails(item)}>
                            <div className='work_img_div'>
                                <img className='work_img' src={item.imgSrc} alt={item.title} loading="lazy" />
                                <div className="portfolio-overlay"><p className='overlay_plus'>+</p></div>
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="scrollable_images_container">
                    
                {activeItem &&
                    <ProjectDetails onClose={onClose} language={language}
                        title={activeItem.title} description={activeItem.description} features={activeItem.features}
                        languagesUsed={activeItem.languagesUsed} linkGit={activeItem.linkGit}
                        phonePic={activeItem.phonePic} />
                }
            </div></div>
        </motion.div >
    );
}

export default Work;
