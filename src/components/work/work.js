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
   
    const workItems = [
        {
            imgSrc: Texts[language].work.projects.chi.imageSrc,
            title: Texts[language].work.projects.chi.title,
            description: Texts[language].work.projects.chi.description,
            features: Texts[language].work.projects.chi.features,
            linkGit: Texts[language].work.projects.chi.linkGit,
            languagesUsed: ['Python', 'Jupyter'],
            phonePic: Texts[language].work.projects.chi.phonePic,
        },
        {
            imgSrc: Texts[language].work.projects.pca.imageSrc,
            title: Texts[language].work.projects.pca.title,
            description: Texts[language].work.projects.pca.description,
            features: Texts[language].work.projects.pca.features,
            linkGit: Texts[language].work.projects.pca.linkGit,
            languagesUsed: ['Python', 'Jupyter'],
            phonePic: Texts[language].work.projects.pca.phonePic,
        },
        {
            imgSrc: Texts[language].work.projects.cluster.imageSrc,
            title: Texts[language].work.projects.cluster.title,
            description: Texts[language].work.projects.cluster.description,
            features: Texts[language].work.projects.cluster.features,
            linkGit: Texts[language].work.projects.cluster.linkGit,
            languagesUsed: ['Python', 'Jupyter'],
            phonePic: Texts[language].work.projects.cluster.phonePic,
        },
        {
            imgSrc: Texts[language].work.projects.aktien.imageSrc,
            title: Texts[language].work.projects.aktien.title,
            description: Texts[language].work.projects.aktien.description,
            features: Texts[language].work.projects.aktien.features,
            linkGit: Texts[language].work.projects.aktien.linkGit,
            languagesUsed: ['Python', 'Jupyter'],
            phonePic: Texts[language].work.projects.aktien.phonePic,
        },
        {
            imgSrc: Texts[language].work.projects.statistics_R.imageSrc,
            title: Texts[language].work.projects.statistics_R.title,
            description: Texts[language].work.projects.statistics_R.description,
            features: Texts[language].work.projects.statistics_R.features,
            linkGit: Texts[language].work.projects.statistics_R.linkGit,
            languagesUsed: ['R', 'Jupyter'],
            phonePic: Texts[language].work.projects.statistics_R.phonePic,
        },
        {
            imgSrc: Texts[language].work.projects.statistics_Tasks.imageSrc,
            title: Texts[language].work.projects.statistics_Tasks.title,
            description: Texts[language].work.projects.statistics_Tasks.description,
            features: Texts[language].work.projects.statistics_Tasks.features,
            linkGit: Texts[language].work.projects.statistics_Tasks.linkGit,
            languagesUsed: ['Markdown', 'Jupyter'],
            phonePic: Texts[language].work.projects.statistics_Tasks.phonePic,
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
