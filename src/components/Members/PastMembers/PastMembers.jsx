import React from 'react';
import './PastMembers.css';

import { Card, CardContent, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const JRFPastMembersCard = (props) => {
    return (
        <Card className='jrfpastmembersCardMui' variant='outlined' sx={{
            ':hover': {
                transform: 'scale(1.05)',
            },backgroundColor:'#FAFAFA' 
        }}>
            <CardContent >
                <Typography variant="h5" component="div" align='center'>
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'15.5px'}}>
                    <b>{props.designation}</b>
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                    {props.about}
                </Typography>

            </CardContent>
        </Card>
    );
}

const BSMSPastMembersCard = (props) => {
    return (
        <Card className='bsmspastmembersCardMui' variant='outlined' sx={{
            ':hover': {
                transform: 'scale(1.05)',
            },backgroundColor:'#FAFAFA' 
        }}>
            <CardContent>
                <Typography variant="h5" component="div" align='center'>
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                    <b>{props.designation}</b>
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                    {props.about}
                </Typography>

            </CardContent>
        </Card>
    );
    
}

const PastMembersSection = () => {
    const [jrfpastmembers, setJRFPastMembers] = useState([]);
    const [bsmspastmembers, setBSMSPastMembers] = useState([]);

    useEffect(() => {
        fetch('/data/jrfpastmembers.json'
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
                setJRFPastMembers(newJson);
            });
    }, []);

    useEffect(() => {
        fetch('/data/bsmspastmembers.json'
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
                setBSMSPastMembers(newJson);
            });
    }, []);

    return (
        <>
            <div className='pastmembersWrapper '>
                <h1 align='center' style={{marginTop:'100px'}}>Past Members</h1>
                <div className='pastmembersCardsWrapper '>
                    
                        {
                            jrfpastmembers ?
                            jrfpastmembers.map((member) => {
                                    return (
                                        <JRFPastMembersCard key={member} name={member.name} designation={member.designation}  about={member.about} />
                                    )
                                })
                                :
                                <div>
                                    Could not load Past Members details. Either data is not available or there is an error.
                                </div>
                        }
                        
                    
            
                </div>
                <div className='pastmembersCardsWrapper '>
                 
                {
                         bsmspastmembers ?
                         bsmspastmembers.map((member) => {
                                 return (
                                     <BSMSPastMembersCard key={member} name={member.name} designation={member.designation} about={member.about}  />
                                 )
                             })
                             :
                             <div>
                                 Could not load Past Members details. Either data is not available or there is an error.
                             </div>
                     }
     
                 </div>
             
            </div>
             <div className='pastmembersWrapper '>

             
         
             </div>
          
         


        </>
    );

}

export default PastMembersSection;



// import React from 'react';
// import './PastMembers.css';

// import { Card, CardContent, Typography } from '@mui/material';
// import { useState, useEffect } from 'react';

// const JRFPastMembersCard = (props) => {
//     return (
//         <Card className='jrfpastmembersCardMui' variant='outlined' sx={{
//             ':hover': {
//                 transform: 'scale(1.05)',
//             },
//         }}>
//             <CardContent >
//                 <Typography variant="h5" component="div" align='center'>
//                     {props.name}
//                 </Typography>
//                 <Typography variant="body1" color="textPrimary" component="p" align='center'>
//                     {props.designation}
//                 </Typography>

//             </CardContent>
//         </Card>
//     );
// }

// const BSMSPastMembersCard = (props) => {
//     return (
//         <Card className='bsmspastmembersCardMui' variant='outlined' sx={{
//             ':hover': {
//                 transform: 'scale(1.05)',
//             },
//         }}>
//             <CardContent>
//                 <Typography variant="h5" component="div" align='center'>
//                     {props.name}
//                 </Typography>
//                 <Typography variant="body1" color="textPrimary" component="p" align='center'>
//                     {props.designation}
//                 </Typography>

//             </CardContent>
//         </Card>
//     );
    
// }

// const PastMembersSection = () => {
//     const [jrfpastmembers, setJRFPastMembers] = useState([]);
//     const [bsmspastmembers, setBSMSPastMembers] = useState([]);

//     useEffect(() => {
//         fetch('/data/jrfpastmembers.json'
//             , {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//             }
//         )
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (newJson) {
//                 setJRFPastMembers(newJson);
//             });
//     }, []);

//     useEffect(() => {
//         fetch('/data/bsmspastmembers.json'
//             , {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//             }
//         )
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (newJson) {
//                 setBSMSPastMembers(newJson);
//             });
//     }, []);

//     return (
//         <>
//             <div className='pastmembersWrapper '>
//                 <h1 align='center' style={{marginTop:'100px'}}>Past Members</h1>
//                 <div className='pastmembersCardsWrapper '>
                    
//                         {
//                             jrfpastmembers ?
//                             jrfpastmembers.map((member) => {
//                                     return (
//                                         <JRFPastMembersCard key={member} name={member.name} designation={member.designation} />
//                                     )
//                                 })
//                                 :
//                                 <div>
//                                     Could not load Past Members details. Either data is not available or there is an error.
//                                 </div>
//                         }
                
//                     <div className='bsmspastmembersSection'>
//                         {
//                             bsmspastmembers ?
//                             bsmspastmembers.map((member) => {
//                                     return (
//                                         <BSMSPastMembersCard key={member} name={member.name} designation={member.designation} />
//                                     )
//                                 })
//                                 :
//                                 <div>
//                                     Could not load Past Members details. Either data is not available or there is an error.
//                                 </div>
//                         }
//                     </div>
//                     {/* <div className='bsmspastmemebersSection'>
//                         {
//                             bsmspastmembers ?
//                             bsmspastmembers.map((member) => {
//                                     return (
//                                         <BSMSPastMembersCard key={member} name={member.name} designation={member.designation} />
//                                     )
//                                 })
//                                 :
//                                 <div>
//                                     Could not load Past Members details. Either data is not available or there is an error.
//                                 </div>
//                         }
//                     </div> */}
//                 </div>
//                 {/* <div className='bsmspastmemebersSection'>
//                     {
//                         bsmspastmembers ?
//                             bsmspastmembers.map((member) => {
//                                 return (
//                                     <BSMSPastMembersCard key={member} name={member.name} designation={member.designation} />
//                                 )
//                             })
//                             :
//                             <div>
//                                 Could not load Past Members details. Either data is not available or there is an error.
//                             </div>
//                     }
//                 </div> */}
//             </div>


//         </>
//     );

// }

// export default PastMembersSection;
