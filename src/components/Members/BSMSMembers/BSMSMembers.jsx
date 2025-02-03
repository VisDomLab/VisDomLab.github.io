import React from 'react';
import './BSMSMembers.css'; 

import { Card, CardContent, Typography,  Button, CardMedia } from '@mui/material';
import { useState, useEffect } from 'react';
import { FaLink } from 'react-icons/fa6';

const BSMSMembersCard = (props) => { 
    const [showDetails, setShowDetails] = useState(false);

    const [email, setEmail] = useState(props.email ? scrambleEmail(props.email) : ''); // Initialize with scrambled email if available
    const [isEmailScrambled, setIsEmailScrambled] = useState(true);

    function scrambleEmail(inputEmail) {
        // Ensure the email is not undefined or null
        if (!inputEmail) {
            return '';
        }
        return inputEmail.split('').sort(() => Math.random() - 0.5).join('');
    }

    const toggleEmail = () => {
        if (isEmailScrambled) {
            setEmail(props.email); // Set to original email
        } else {
            setEmail(scrambleEmail(props.email)); // Rescramble
        }
        setIsEmailScrambled(!isEmailScrambled);
    };

    return (
        <Card className='bsmsmembersCardMui' variant='outlined' sx={{
                ':hover': {
                    transform: 'scale(1.05)',
                },  
            }}>
            {/*#F4F4F4*/}
            <CardMedia
                    component="img"
                    alt="Profile Picture"
                    height="140"
                    image={props.pictureURL}
                    title="Profile Picture"
                />
            <CardContent className='bsmsmemebrscontent'>

                

                <Typography variant="h5" component="div" align='center'>
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                    <b>{props.designation}</b>
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                    {props.about}
                </Typography>

                {showDetails && (
                    <div className='moreInfo'>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {
                                props.moreInfo &&
                                <div style={{textJustify:"auto"}}>
                                    {props.moreInfo}
                                </div>
                            }
                            {
                                props.email &&
                                <div style={{  color: "#574E4F" }}>
                                     {/* Email: <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>{email}</span> */}
                                      <b>Email:</b><Button  onClick={toggleEmail} style={{margin:'auto', color:'#574E4F', fontSize:'14.5px'}} className=''>
                                        <span style={{ textTransform: 'lowercase', cursor: 'pointer', textDecoration: 'underline' }}>{email}</span>
                                    </Button>
                                </div>
                            }
                            {
                                props.social &&
                                <div style={{ margin: "5px 0px", color: "blue" }}>
                                    <a href={props.social} target="_blank" rel="noreferrer" style={{ display: "flex", flexWrap: "nowrap", gap: "5px", alignItems: "center" }}>Website <FaLink /> </a>
                                </div>
                            }
                            {
                                props.social_2 &&
                                <div style={{ margin: "5px 0px", color: "blue" }}>
                                    <a href={props.social_2} target="_blank" rel="noreferrer" style={{ display: "flex", flexWrap: "nowrap", gap: "5px", alignItems: "center" }}>LinkedIn <FaLink /> </a>
                                </div>
                            }
                            {
                                props.social_3 &&
                                <div style={{ margin: "5px 0px", color: "blue" }}>
                                    <a href={props.social_3} target="_blank" rel="noreferrer" style={{ display: "flex", flexWrap: "nowrap", gap: "5px", alignItems: "center" }}>G-Scholar <FaLink /> </a>
                                </div>
                            }
                        </Typography>

                        
                    </div>
                                       
                )}
            </CardContent>

            <div style={{ display: 'flex', marginTop:"auto", align:'center', justifyContent: 'center',}} className='div_scramble'>
                {showDetails && (
                    <Button  onClick={toggleEmail} style={{margin:'auto', color:'#574E4F', fontSize:'14.5px'}} className='button_scramble'>
                        {isEmailScrambled ? 'Unscramble Email' : 'Scramble Email'}
                    </Button>
                )}
                <Button color="primary" onClick={() => setShowDetails(!showDetails)} style={{margin:'auto', fontSize:'14.5px', align:'center'}}>
                    {showDetails ? 'Show Less' : 'Show More'}
                </Button>
            </div>

        </Card>
    );
}



const BSMSMembersSection = () => {
    const [bsmsmembers, setBSMSMembers] = useState([]);


    useEffect(() => {
        fetch('/data/bsmsmembers.json'
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
                setBSMSMembers(newJson);
            });
    }, []);



    return (
        <>
            {/* <div className='bsmsmembersWrapper '> */}

                <div className='bsmsmembersCardsWrapper '>
                    
                        {
                            bsmsmembers ?
                            bsmsmembers.map((member) => {
                                    return (
                                        <BSMSMembersCard key={member} pictureURL={member.pictureURL}  name={member.name} designation={member.designation} about={member.about} moreInfo={member.moreInfo}  email={member.email} social={member.social}  social_2={member.social_2} social_3={member.social_3} />
                                    )
                                })
                                :
                                <div>
                                    Could not load Past Members details. Either data is not available or there is an error.
                                </div>
                        }
                </div>
            {/* </div> */}
        </>
    );

}

export default BSMSMembersSection;

