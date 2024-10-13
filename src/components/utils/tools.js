import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CSS from '../../assets/svgs/CSS.svg'
import GitHub from '../../assets/svgs/GitHub.svg'
import HTML from '../../assets/svgs/HTML5.svg'
import JS from '../../assets/svgs/JavaScript.svg'
import Node from '../../assets/svgs/Node_js.svg'
import SQL from '../../assets/svgs/Sql.svg'
import VS from '../../assets/svgs/Visual_Studio.svg'
import Python from '../../assets/svgs/Python.svg'
import C from '../../assets/svgs/C.svg'
import R from '../../assets/svgs/R.svg'
import Azure from '../../assets/svgs/Azure.svg'
import Analysis from '../../assets/svgs/Analysis.svg'
import CPP from '../../assets/svgs/CPP.svg'
import SVN from '../../assets/svgs/SVN.svg'
import Jupyter from '../../assets/svgs/Jupyter.svg'


const Tools = () => {
    const controls = useAnimation();
    const svgs = [
        C, CPP, HTML, Python, SQL, R, JS, GitHub, CSS, 
        VS, Node, Azure, Analysis, SVN, Jupyter
    ]
    const doubledSvgs = [...svgs, ...svgs];

    useEffect(() => {
        const sequence = async () => {
            // 88.6px x svg icons number (88.6 px  calculated based on the width of each svg)
            // if last icon jumps to the left, increase 88.6px 
            // if the last icon jumps to the right, decrease 88.6px 
            const totalWidth = 88.6 * svgs.length;
            await controls.start({
                x: -totalWidth,
                // move left to the total width of all icons
                transition: { duration: 1 * svgs.length, ease: "linear", repeat: Infinity }
            });
        };

        sequence();
    }, [controls, svgs.length]);

    return (
        <div
            className='tools_div'
            style={{
                overflow: 'hidden', backgroundColor: 'rgba(231, 231, 231, 0.6)',
                boxShadow: '0 0 10px rgba(159, 157, 157, 0.4)',
                borderRadius: '5px', margin: '20px 0',
            }}>
            <motion.div
                initial={{ x: 0 }}
                animate={controls}
                // if last icon jumps to the left, increase 88.6px 
                // if the last icon jumps to the right, decrease 88.6px 
                style={{ display: 'flex', width: `calc(88.6px * ${svgs.length})` }}
            >
                {doubledSvgs.map((SvgIcon, index) => (
                    <img key={index} src={SvgIcon} style={{ width: '80px', height: '40px', margin: ' 10px 20px', }} />
                ))}
            </motion.div>
        </div>
    );
};

export default Tools;