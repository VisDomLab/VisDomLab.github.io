import React from 'react';
import './NewsCopy.css'; 

import { Card, CardContent, Typography } from '@mui/material';
import { useState, useEffect } from 'react';


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import the CSS for the carousel


const NewsCopyCard = (props) => { 
    return (
        <Card className='newscopyCardMui' variant='outlined' sx={{
                ':hover': {
                    transform: 'scale(1.05)',
                },  
            }}>
                 <a href={props.link} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"inherit"}}>
                    {/*#F4F4F4*/}
                    <CardContent className='newscopyscontent'>
                        {/* <Typography variant="h5" component="div" align='center'>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                            <b>{props.designation}</b>
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                            {props.about}
                        </Typography> */}

                            <Typography variant='h6' component='div' align='' fontWeight={"600"} fontSize={"px"} sx={{margin:"10px 0px"}} className='newsTitle'>
                                {props.isnew &&<span className='newsLabel'>New</span> }  {props.title}
                            </Typography>
                            
                            <Typography variant='body2' component='p' >
                                {props.date} 
                            </Typography>
                            <Typography variant='body2' component='p' className='newsContent'>
                                {props.content} 
                            </Typography>

                    </CardContent>
                </a>
        </Card>
    );
}



const NewsCopySection = () => {
    const [newscopy, setNewsCopy] = useState([]);
    const handleDragStart = (e) => e.preventDefault();

    useEffect(() => {
        fetch('/data/news.json'
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
                setNewsCopy(newJson);
            });
    }, []);



    // return (
    //     <>
            {/* <div className='newscopyWrapper '> */}

                {/* <div className='newscopyCardsWrapper '>
                    
                        {
                            newscopy ?
                            newscopy.map((newsItem) => {
                                    return (
                                        <NewsCopyCard key={newsItem} title={newsItem.title} date={newsItem.date} content={newsItem.content}  isnew={newsItem.isnew} />
                                    )
                                })
                                :
                                <div>
                                    Could not load Past Members details. Either data is not available or there is an error.
                                </div>
                        }
                </div> */}
            {/* </div> */}
        {/* </>
    ); */}

    // Prepare the carousel items from the news data
    // const carouselItems = news.map((newsItem) => (
    //     <NewsCard key={newsItem.title} news={newsItem}  onDragStart={handleDragStart} role="presentation" />
    // ));
    const carouselItems = [
        
            <div className='newscopyCardsWrapper '>
                        
                {
                    newscopy ?
                    newscopy.map((newsItem) => {
                            return (
                                <NewsCopyCard key={newsItem} title={newsItem.title} link={newsItem.link} date={newsItem.date} content={newsItem.content}  
                                isnew={newsItem.isnew} onDragStart={handleDragStart} role="presentation"/>
                            )
                        })
                        :
                        <div>
                            Could not load Past Members details. Either data is not available or there is an error.
                        </div>
                }
            </div>
      ]

    return (
        <div className='newsWrapper news-carousel-container'>
            <h1>NEWS</h1>
            <AliceCarousel
                className='newsCarousel'

                mouseTracking
                items={carouselItems}
                autoPlay
                autoPlayInterval={300000}
                infinite
                dotsDisabled={false} // Enables dots for navigation, use `true` to disable
    buttonsDisabled={true} // Disables the navigation buttons, use `false` to enable
    responsive={{
        0: { items: 0 },
        1024: { items: 4 }, // Adjust to show 3 items on wider screens
    }}
                
            />
        </div>
    );

}

export default NewsCopySection;

