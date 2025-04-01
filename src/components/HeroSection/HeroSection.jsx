import React from 'react';
import './HeroSection.css';
import visdomLogo from '../../assets/visdom_transp.png';
import visdomLogoNav from '../../assets/visdomnav6.png';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-section__logo"> 
                <img src={visdomLogo} alt="Logo" /> 
            </div>
            <div className="hero_section_about">
                <div className='about_inner_wrapper'>

                    <h1 style={{textAlign:'center'}}><span className="highlight-letter">V</span>isual Data Computing Group (<span className="highlight-letter">V</span>isDom)</h1>
                    <div>
                        <p> <b>About the Group:  </b>
                        Welcome to the VisDom Lab at the Indian Institute of Science Education and Research (IISER) Bhopal!
                        </p>
                        <br /> {/* Add a break here */}
                        <p>At VisDom Lab, we are driven by a passion for innovation and a commitment to pushing the boundaries of computer vision (CV), deep learning (DL), and machine learning (ML). Our interdisciplinary team works at the forefront of these fields, leveraging cutting-edge technologies to tackle diverse challenges and create impactful solutions that shape the future.</p>
                        <br /> {/* Add a break here */}
                        <p><b>With a focus on continuous innovation, we explore various research areas, including:</b>
                        </p>

                        <ul style={{ listStyleType: 'disc' }}>
                            <li> Transfer learning, encompassing domain adaptation and incremental learning</li>
                            <li> Fairness and bias-free learning to ensure equitable AI systems</li>
                            <li> Uncertainty in deep learning through Bayesian models</li>
                            <li>Data generative models such as GANs, VAEs, and Diffusion models</li>
                            <li>Efficient deep learning techniques including Binary neural networks and Active learning</li>
                            <li>3D reconstructions, augmented reality (AR), and virtual reality (VR) for immersive experiences</li>
                            <li>Multimodal learning, speech and audio processing, and medical machine learning</li>
                        </ul>
                        
                       
                        {/* Some other areas of interested in multimodal learning, speech and audio processing and medical machine learning. */}
                        <p></p>
                        <br /> {/* Add a break here */}
                        <p>
                        We are always on the lookout for motivated researchers who share our enthusiasm for CV, DL, and ML. Whether you're a junior research fellow, project associate, or PhD candidate, if you're eager to contribute to groundbreaking research and make a difference, we encourage you to reach out. Please send us your CV, highlighting your areas of interest and experience, as we have openings available in our dynamic group.
                        </p>
                        <p>
                        For BS-MS students @ IISERB, send a short email to schedule a meeting and discuss, or contact any of the PhD scholars whose work fascinates you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
