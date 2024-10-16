import React from 'react';
import './NewsCopy.css'; 

import { Card, CardContent, Typography } from '@mui/material';
import { useState, useEffect, useRef } from 'react';


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import the CSS for the carousel

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NewsCopyCard = (props) => { 
    return (
        <Card key={props.title} className='newscopyCardMui' variant='outlined' sx={{
                ':hover': {
                    transform: 'scale(1.05)',
                },  
            }}>
                 {/* <a href={props.link}  target="_blank" rel="noreferrer" style={{ textDecoration:"none", color:"inherit"}}> */}
                    {/*#F4F4F4*/}
                    <CardContent className='newscopyscontent' sx={{backgroundColor:'rgba(101, 175, 197, 0.35)'}}>
                        {/* <Typography variant="h5" component="div" align='center'>
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                            <b>{props.designation}</b>
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p" align='center' style={{fontSize:'px'}}>
                            {props.about}
                        </Typography> */}

                            <Typography variant='h6' component='div' align='' fontWeight={"600"} fontSize={"px"} sx={{margin:"1px 0px"}} className='newsTitle2'>
                                {props.isnew &&<span className='newsLabel2'>New</span> }  {props.title}
                            </Typography>
                            
                            <Typography variant='body2' component='p' >
                                {props.date} 
                            </Typography>
                            <Typography variant='body2' component='p' className=''>
                                {props.content} 
                            </Typography>

                    </CardContent>
                {/* </a> */}
        </Card>
    );
}



const NewsCopySection = () => {
    const [newscopy, setNewsCopy] = useState([]);
    const handleDragStart = (e) => e.preventDefault();
    const sliderRef = useRef();

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

    

 
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000, // Minimize the transition speed
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200, // As low as possible for continuous motion
        cssEase: 'linear',
        pauseOnHover: true,
        vertical: true,
        verticalSwiping: true,
    };

      return (
        <div className='newsWrapper2 homepage_Wrapper news-carousel-container'>
        <h1>RECENT NEWS</h1>
            <div className='slider_newscopy' >
                {/* style={{ fontSize:'15px', width: '250px', height: '600px' }}> */}
            { <Slider ref={sliderRef} {...settings}>
                {newscopy ? newscopy.map((newsItem,index) => (
                    <NewsCopyCard 
                        className='carousel_newscard_copy' 
                        key={`${newsItem.title}-${index}`} 
                        title={newsItem.title} 
                        link={newsItem.link} 
                        date={newsItem.date} 
                        isnew={newsItem.isnew} 
                        // news={newsItem}  
                        onDragStart={handleDragStart} 
                        role="presentation" 
                    />
                )) : null}
                </Slider>
            }
            </div>
        </div>
      );


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
    // const carouselItems2 = [
        
    //         <div className='newscopyCardsWrapper '>
                        
    //             {
    //                 newscopy ?
    //                 newscopy.map((newsItem) => {
                            // return (
                            //     <NewsCopyCard key={newsItem} title={newsItem.title} link={newsItem.link} date={newsItem.date} content={newsItem.content}  
                            //     isnew={newsItem.isnew} onDragStart={handleDragStart} role="presentation"/>
                            // )
    //                         <NewsCopyCard key={newsItem.title} newscopy={newsItem}  onDragStart={handleDragStart} role="presentation" />
    //                     })
    //                     :
    //                     <div>
    //                         Could not load Past Members details. Either data is not available or there is an error.
    //                     </div>
    //             }
    //         </div>
    //   ]

    // return (
    //     <div className='newsWrapper2 news-carousel-container'>
    //         <h1>NEWS</h1>
    //         <AliceCarousel
    //             className='newsCarousel2'

    //             mouseTracking
    //             items={carouselItems2}
    //             autoPlay
    //             autoPlayInterval={300000}
    //             infinite
    //             dotsDisabled={false} // Enables dots for navigation, use `true` to disable
    // buttonsDisabled={true} // Disables the navigation buttons, use `false` to enable
    // responsive={{
    //     0: { items: 0 },
    //     1024: { items: 3 }, // Adjust to show 3 items on wider screens
    // }}
                
    //         />
    //     </div>
    // );

}

export default NewsCopySection;

