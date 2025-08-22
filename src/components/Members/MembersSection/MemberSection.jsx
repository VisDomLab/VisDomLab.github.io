import React from 'react';
import './MemberSection.css';
import MemberCard from './MemberCard/MemberCard';

import { useState, useEffect } from 'react';

const MemberSection = () => {
    const [members, setMembers] = useState([]);
    const [oldMembers, setOldMembers] = useState([]);

    useEffect(() => {
        fetch('/data/members.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (newJson) {
                setMembers(newJson);
            });
    }, []);

    useEffect(() => {
        fetch('/data/old_members.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (newJson) {
                setOldMembers(newJson);
            });
    }, []);


    return ( 
        <div className='members_section'>
            <div className='members_head' >
                <MemberCard pictureURL={process.env.PUBLIC_URL + "/images/vinod.png"} name="Vinod K Kurmi" 
                designation="Assistant Professor" about="DSE, IISER Bhopal" email="vindokk@iiserb.ac.in" 
                moreInfo="My research areas are related to Computer Vision (CV), Deep Learning (DL),  Machine Learning (ML), Domain Adaptation, Multimodal Learning, Fair Learning, Medical Image Processing, and Speech/Audio Processing. I am also interested in working in fairness and multi-modal alignment problems." 
                social="https://vinodkkurmi.github.io/" 
                social_2 ="https://www.linkedin.com/in/vinod-k-kurmi-ph-d-b5b70651/"
                social_3 = "https://scholar.google.co.in/citations?user=Exo2VNAAAAAJ&hl=en"
                />

            </div>
            {members.length > 0 && <h1  style={{marginTop:'70px'}}>Current Group Members</h1>}
            <div className='group_members'>
                {
                    members ?
                        members.map((member) => {
                            return (
                                <MemberCard key={member} pictureURL={member.pictureURL} name={member.name} designation={member.designation} fellowship={member.fellowship} about={member.about} moreInfo={member.moreInfo} email={member.email} social={member.social}  social_2={member.social_2} social_3={member.social_3}/>
                            )
                        })
                        :
                        <div>
                            Could not load members details. Either data is not available or there is an error.
                        </div>
                }
            </div>
            {/* {oldMembers.length > 0 && <h1>Past Group Members</h1>}
            <div className='group_members'>
                {
                    oldMembers ?
                        oldMembers.map((member) => {
                            return (
                                <MemberCard key={member} pictureURL={member.pictureURL} name={member.name} about={member.about} moreInfo={member.moreInfo} email={member.email} social={member.social}/>
                            )
                        })
                        :
                        <div>
                            Could not load members details. Either data is not available or there is an error.
                        </div>
                }
            </div> */}
        </div>
    );
}

export default MemberSection;
