import React from 'react';
import './MemberCard.css';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { FaLink } from 'react-icons/fa6';


const MemberCard = (props) => {
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
        <Card className='memberCardMui' variant='outlined' sx={{
            ':hover': {
                transform: 'scale(1.05)',
            },  
        }}>
            <CardMedia
                component="img"
                alt="Profile Picture"
                height="140"
                image={props.pictureURL}
                title="Profile Picture"
            />
            <CardContent className='membercardcontent'>
                <Typography variant="h5" component="div" align='center'>
                    <bold>{props.name}</bold>
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'15px'}}>
                    <b>{props.designation}</b>
                </Typography>

                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'12px'}}>
                    <b>{props.fellowship}</b>
                </Typography>

                <Typography variant="body2" color="textPrimary" component="p" align='center'>
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

export default MemberCard;
