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
    const Gamma = `${process.env.PUBLIC_URL}/img/Gamma.jpg`;
    const Gamma_phone = `${process.env.PUBLIC_URL}/img/Gamma_phone.jpg`;

    const PCA = `${process.env.PUBLIC_URL}/img/PCA.png`;
    const PairPlot = `${process.env.PUBLIC_URL}/img/PairPlot.ppg`;
    const Korrelationsmatrix_der_Merkmale = `${process.env.PUBLIC_URL}/img/Korrelationsmatrix der Merkmale.png`;

    const Clustering = `${process.env.PUBLIC_URL}/img/Clustering.png`;

    const VergeleichAktienvorhersage = `${process.env.PUBLIC_URL}/img/Vergleich Akteinkursvorhersage.png`;
    
    const workItems = [
        {
            imgSrc: Gamma,
            title: Texts[language].work.projects.gamma.title,
            description: Texts[language].work.projects.gamma.description,
            linkGit: 'https://github.com/s-lein/Beispiele/blob/main/Gammastrahlung/Gammstrahlung.ipynb',

            languagesUsed: [Python, Jupyter],
            phonePic: [Gamma]
        },
        {
            imgSrc: PCA,
            title: Texts[language].work.projects.pca.title,
            description: Texts[language].work.projects.pca.description,
            linkGit: 'https://github.com/s-lein/Beispiele/blob/main/Gammastrahlung/Gammstrahlung.ipynb',
            languagesUsed: [Python, Jupyter],
            phonePic: [Korrelationsmatrix_der_Merkmale, PCA]
        },
        {
            imgSrc: Clustering,
            title: Texts[language].work.projects.cluster.title,
            description: Texts[language].work.projects.cluster.description,
            linkGit: 'https://github.com/s-lein/Beispiele/blob/main/Gammastrahlung/Gammstrahlung.ipynb',
            languagesUsed: [Python, Jupyter],
            phonePic: [Clustering]
        },
        {
            imgSrc: VergeleichAktienvorhersage,
            title: Texts[language].work.projects.aktien.title,
            description: Texts[language].work.projects.aktien.description,
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
                {activeItem &&
                    <ProjectDetails onClose={onClose} language={language}
                        title={activeItem.title} description={activeItem.description}
                        languagesUsed={activeItem.languagesUsed} linkGit={activeItem.linkGit}
                        phonePic={activeItem.phonePic} />
                }
            </div>
        </motion.div >
    );
}

export default Work;
