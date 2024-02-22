import React from 'react';
import './News.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import Slider from 'react-slick'; // Importing the slider component
import 'slick-carousel/slick/slick.css'; // Importing default styles for the slider
import 'slick-carousel/slick/slick-theme.css';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import the CSS for the carousel


const NewsCard = (props) => { 
    return (
        <Card key={props.news.title} className='newsCard' variant='outlined' >
            <a href={props.news.link} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"inherit"}}>
                
                {
                    // props.news.image &&
                    // <CardMedia
                    //     component="img"
                    //     sx={{ width: "100%", objectFit: "contain", repeat: "no-repeat" }}
                    //     image={props.news.image}
                    //     alt="Newsimage"
                    //     className='newsImage'
                    // />
                }
                <CardContent className='newsCardContent'>

                            <Typography variant='h6' component='h6' align='' fontWeight={"600"} fontSize={"px"} sx={{margin:"10px 0px"}} className='newsTitle'>
                            {props.news.isnew &&<span className='newsLabel'>New</span> }  {props.news.title}
                            </Typography>
                           
                            <Typography variant='body2' component='p' >
                                {props.news.date} 
                            </Typography>
                            <Typography variant='body2' component='p' className='newsContent'>
                                {props.news.content}
                            </Typography>

                    {/* <Typography variant='h6' component='h6' align='' fontWeight={"600"} fontSize={"px"} sx={{margin:"10px 0px"}}>
                        {props.news.title}
                    </Typography>
                    <Typography variant='body2' component='p' >
                        {props.news.date} 
                    </Typography>
                    <Typography variant='body2' component='p'>
                        {props.news.content}
                    </Typography> */}
                    {/* {props.news.isnew &&
                            <Typography variant='body2' component='div' color='error' sx={{padding: "2px", paddingBottom:'0px', paddingTop:'0px', background: "#FF4D4D", fontWeight:'500', color:"white", width:"fit-content", borderRadius:"4px", fontSize:'12.5px'}}>
                                New
                            </Typography>
                        } */}
                </CardContent>
            </a> 
        </Card>
    )

}





const News = () => {
    const [news, setNews] = useState([]);
    const handleDragStart = (e) => e.preventDefault();

    useEffect(() => {
        fetch('/data/news.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((myJson) => {
            setNews(myJson);
        });
    }, []);

    // Prepare the carousel items from the news data
    const carouselItems = news.map((newsItem) => (
        <NewsCard className='carousel_newscard' key={newsItem.title} news={newsItem}  onDragStart={handleDragStart} role="presentation" />
    ));

    return ( 
        <div className='newsWrapper news-carousel-container'>
            <h1>NEWS</h1>
            <AliceCarousel
                className='newsCarousel'

                mouseTracking
                items={carouselItems}
                autoPlay
                autoPlayInterval={600}
                // autoPlayStrategy="none" 
                vertical = "true"
          
                animationDuration={600} 
                // Duration of the slide animation for smooth transitions
                infinite
                dotsDisabled={false} // Enables dots for navigation, use `true` to disable
                     // Disables the navigation buttons, use `false` to enable
                responsive={{
                    0: { items: 1 },
                    1024: { items: 3 }, // Adjust to show 3 items on wider screens
                }}
                
            />
        </div>
    );
}

export default News;

//Default
// const News = () => {
//     const [news, setNews] = useState([]);

//     useEffect(() => {
//         fetch('/data/news.json'
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
//             .then(function (myJson) {
//                 setNews(myJson);
//             });
//     }, []);

//     return (
//         <div className='newsWrapper'>
//             <h1>NEWS</h1>
//             <div className='newsCardWrappers'>
//                 {
//                     news ?
//                         news.map((newsItem) => {
//                             return (
//                                 <NewsCard key={newsItem.title} news={newsItem} />
//                             )
//                         })
//                         :
//                         <div>
//                             Could not load news. Either data is not available or there is an error.
//                         </div>
//                 }
//             </div>
//         </div>
//     );
// }

// export default News;



// const News = () => {
//     const [news, setNews] = useState([]);
//     // Slider settings
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         // responsive: [
//         //     {
//         //         breakpoint: 1024,
//         //         settings: {
//         //             slidesToShow: 2,
//         //             slidesToScroll: 2,
//         //             infinite: true,
//         //             dots: true
//         //         }
//         //     },
//         //     {
//         //         breakpoint: 600,
//         //         settings: {
//         //             slidesToShow: 2,
//         //             slidesToScroll: 2
//         //         }
//         //     }
//         // ]
//     };
//     // if (!news || news.length === 0) {
//     //     return <div>Loading news...</div>; // Or any other placeholder content
//     // }
    

//     return (
//         <div className='newsWrapper'>
//             <h1>Latest News</h1>
//             <Slider {...settings}>
            
//                 {news.map(newsItem => (
//                     <NewsCard key={newsItem.title} news={newsItem} />
//                 ))}
//             </Slider>
//             :
//                 <div>
//                        Could not load news. Either data is not available or there is an error.
//                 </div>
//         </div>
//     );
// };

// export default News;