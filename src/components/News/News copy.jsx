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
        <Card key={props.news.title} className='newsCard' variant='outlined'>
            <a href={props.news.link} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"inherit"}}>
                
                {
                    props.news.image &&
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", objectFit: "contain", repeat: "no-repeat" }}
                        image={props.news.image}
                        alt="publication image"
                        className='publicationImage'
                    />
                }
                <CardContent>
                   
                    <Typography variant='h5' component='h2' align='' fontWeight={"600"} sx={{margin:"10px 0px"}}>
                        {props.news.title}
                    </Typography>
                    <Typography variant='body2' component='p' >
                        {props.news.date} 
                    </Typography>
                    <Typography variant='body2' component='p'>
                        {props.news.content}
                    </Typography>
                    {props.news.isnew &&
                        <Typography variant='body2' component='div' color='error' sx={{padding: "6px", background: "red", color:"white", width:"fit-content", borderRadius:"4px"}}>
                            New
                        </Typography>
                    }
                    
                </CardContent>
            </a> 
        </Card>
    )

}

const News = ({ newsItems }) => {
    // Check if newsItems is defined, if not, provide an empty array as default
    const items = newsItems || [];
  
    // Prepare the items for the carousel
    const carouselItems = items.map((item, index) => (
      <div key={index} className="news-item">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {/* Add more content if needed */}
      </div>
    ));
  
    return (
      <div className="news-carousel-container">
        <AliceCarousel
          mouseTracking
          items={carouselItems}
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableDotsControls
          disableButtonsControls
        />
      </div>
    );
  };
  
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