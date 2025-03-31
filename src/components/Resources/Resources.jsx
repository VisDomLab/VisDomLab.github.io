import React, { useEffect } from 'react';
import './Resources.css';
import { useState } from 'react';

import Popup from 'reactjs-popup';
import { Card, CardMedia, Typography, Button, Box } from '@mui/material';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const ResourcesCard = (props) => { 
    return (
        // <Card sx={{ display: 'flex' }} variant='outlined' className='resourcesCard'>
        <Card sx={{ display: 'flex' }}  className='resourcesCard'>
            {/* <CardMedia
                component="img"
                sx={{ width: "30%", maxWidth: "200px", objectFit: "contain", repeat: "no-repeat" }}
                image={props.image}
                alt="resources image"
                className='resourcesImage'
            /> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: "15px" }}>
                <Typography variant="h5" component="div" className='Typography_resources'>
                <a href={props.link} target="_blank" style={{ color: 'blue' }}><span>{props.title1}</span> </a>
                <span>{props.title2}</span> 
                </Typography>
                {/* <Typography variant="body1" color="textPrimary" component="p" >
                    {props.title2}
                </Typography> */}
                {/* <Typography variant="body1" color="textPrimary" component="p" sx={{ fontStyle: "italic" }} >
                    {props.resources.conference}
                </Typography> */}
                {/* <Box sx={{ flexGrow: 1, marginTop: "10px" }} > */}
                    {/* {props.links && Object.entries(props.links).map(([name, url]) => {
                        return (
                            <Button key={name} variant="contained" href={url} target="_blank" rel='noreferrer' sx={{ margin: "5px" }} >
                                {name}
                            </Button>
                        )
                    }) 
                    } */}
                    {/* {props.resources.details && Object.entries(props.resources.details).map(([name, value]) => {
                        return (

                            <Popup key={name} trigger={<Button variant="contained" sx={{ margin: "5px" }} >
                                {name}
                            </Button>} modal>
                                {
                                    close => (
                                        <div className='modal'>
                                            <button className="close" onClick={close}>
                                                &times;
                                            </button>
                                            <div className="header"> {name.toUpperCase()} </div>
                                            <div className="content">
                                                {name.toUpperCase() === "BIBTEX" ?
                                                    <pre>
                                                        {value.split("\n").map(function (item, idx) {
                                                            return (
                                                                <span key={idx}>
                                                                    {item}
                                                                    <br />
                                                                </span>
                                                            )
                                                        })}
                                                    </pre>
                                                    :

                                                    value.split("\n").map(function (item, idx) {
                                                        return (
                                                            <span key={idx}>
                                                                {item}
                                                                <br />
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="actions">
                                                <Button variant="contained" className='button' onClick={() => {
                                                    close();
                                                }} >
                                                    Close
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                            </Popup>
                        )
                    })} */} 
                    <Typography variant="body1" color="textPrimary" component="p" >
                        {props.abstract}
                    </Typography>
                {/* </Box> */}
            </Box>
        </Card>
    )
}

const ResourcesContent = () => {
    const [resources_books, setResources_books] = useState([]);
    const [resources_other, setResources_other] = useState([]);
    const [resources_selectedpapers, setResources_selectedpapers] = useState([]);
    const [resources_tutorial_courses, setResources_tutorial_courses] = useState([]);
    const [resources_video_talks, setResources_video_talks] = useState([]);

    useEffect(() => {
        fetch('/data/resources_books.json'
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
            .then(function (myJson) {
                setResources_books(myJson);
            });
    }, []);

    useEffect(() => {
        fetch('/data/resources_other.json'
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
            .then(function (myJson) {
                setResources_other(myJson);
            });
    }, []);

   
    useEffect(() => {
        fetch('/data/resources_tutorial_courses.json'
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
            .then(function (myJson) {
                setResources_tutorial_courses(myJson);
            });
    }, []);
    useEffect(() => {
        fetch('/data/resources_video_talks.json'
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
            .then(function (myJson) {
                setResources_video_talks(myJson);
            });
    }, []);
    useEffect(() => {
        fetch('/data/resources_selectedpapers.json'
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
            .then(function (myJson) {
                setResources_selectedpapers(myJson);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className='resourcesWrapper'>
                

                <h1 style={{marginBottom:'2px'}}>
                     Paper Deadlines
                </h1>
                {/* Include the iframe here */}
                <div className='iframeContainer'>
                    {/* <iframe
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSEj_TKv2YLYNucO-MIiTeOJqQf_aHEo_IBLakctEi1Gmk02gvpViPnxP6Mh7CbhHgCmHNOEX_xLCat/pubhtml"

                        style={{ border: 'none' }}
                        title="Embedded Content"
                    ></iframe> */}
                    <iframe 
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSEj_TKv2YLYNucO-MIiTeOJqQf_aHEo_IBLakctEi1Gmk02gvpViPnxP6Mh7CbhHgCmHNOEX_xLCat/pubhtml?widget=false&amp;headers=false"
                        // width="1000"
                        // height="550"
                        // style={{border: "none"}}
                        // style={{ width: '100%', minWidth: '1010px', height: '600px', border: 'none'  }} 
                        title="Paper Deadlines">
                    </iframe>
                </div>

                
                <h1 style={{marginBottom:'30px', marginTop:'80px'}}>
                    Resources
                </h1>
                
                <div className='resourcesSection'>
                     <h2>Tutorials/Courses</h2>
                    {/* <div className='resourcesSubSection'> */}
                        
                        {
                            resources_tutorial_courses ?
                            resources_tutorial_courses.map((resource) => {
                                    return (
                                        
                                        <div key={resource.title} className='resourcesCardsWrapper'>
                                            <ResourcesCard resource={resource} title1={resource.title1} title2={resource.title2} link={resource.link}/>
                                        </div>
                                    )
                                })
                                :
                                <div>
                                    Could not load resources. Either data is not available or there is an error.
                                </div>
                        }
                    {/* </div> */}
                </div>
                
                <div className='resourcesSection'>
                    <h2>Video/Talks</h2>
                    {/* <div className='resourcesSubSection'> */}
                        {
                            resources_video_talks ?
                            resources_video_talks.map((resource) => {
                                    return (
                                        <div key={resource.title} className='resourcesCardsWrapper'>
                                            <ResourcesCard resource={resource} title1={resource.title1} title2={resource.title2} link={resource.link}/>
                                        </div>
                                    )
                                })
                                :
                                <div>
                                    Could not load resources. Either data is not available or there is an error.
                                </div>
                        }
                       {/* </div> */}
                    </div>
                
                <div className='resourcesSection'>
                    <div className='head_div'>Selected Papers</div>

                    <div className='resourcesSubSection'> 
                        <h2>Fundamentals</h2>
                        
                        {
                            resources_selectedpapers ?
                            resources_selectedpapers.map((resource) => {
                                    return (
                                        <div key={resource.title} className='resourcesCardsWrapper'>
                                            <ResourcesCard resource={resource} title1={resource.title1} title2={resource.title2} link={resource.link}/>
                                        </div>
                                    )
                                })
                                :
                                <div>
                                    Could not load resources. Either data is not available or there is an error.
                                </div>
                        }
                    </div>
                    <div className='resourcesSubSection'> 
                        <h2>Semantic Segmentation</h2>
                        {
                            resources_selectedpapers ?
                            resources_selectedpapers.map((resource) => {
                                    return (
                                        <div key={resource.title} className='resourcesCardsWrapper'>
                                            <ResourcesCard resource={resource} title1={resource.title1} title2={resource.title2} link={resource.link}/>
                                        </div>
                                    )
                                })
                                :
                                <div>
                                    Could not load resources. Either data is not available or there is an error.
                                </div>
                        }
                    </div>
                </div>                    

                <div className='resourcesSection'>
                    <div className='head_div'>Other Resources</div>
                    {/* <h2>Video/Talks</h2> */}
                    {
                        resources_other ?
                        resources_other.map((resource) => {
                                return (
                                    <div key={resource.title} className='resourcesCardsWrapper'>
                                        <ResourcesCard resource={resource} title1={resource.title1} title2={resource.title2} link={resource.link}/>
                                    </div>
                                )
                            })
                            :
                            <div>
                                Could not load resources. Either data is not available or there is an error.
                            </div>
                    }
                </div>
                <div className='resourcesSection'>
                    <div className='head_div'>Books</div>
                    {/* <h2>Video/Talks</h2> */}
                    {
                        resources_books ?
                        resources_books.map((resource) => {
                                return (
                                    <div key={resource.title} className='resourcesCardsWrapper'>
                                        <ResourcesCard resource={resource} title1={resource.title1} title2={resource.title2} link={resource.link}/>
                                    </div>
                                )
                            })
                            :
                            <div>
                                Could not load resources. Either data is not available or there is an error.
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ResourcesContent;
