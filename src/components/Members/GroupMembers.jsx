import React, { useRef } from 'react';
import MemberSection from './MembersSection/MemberSection';
import './GroupMembers.css';
import Navbar from '../NavBar/NavBar';
import Collaborators from './Collaborators/Collaborators';
import Footer from '../Footer/Footer';
import PastMembers from './PastMembers/PastMembers';
import BSMSMembers from './BSMSMembers/BSMSMembers'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Import the CSS for the carousel
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


// const GroupMembers = () => {
//     const sliderRef = useRef();
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 1500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 0,
//         cssEase: 'linear',
//         verticalSwiping: true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//     };

//     return (
//         <>
//             <Navbar />
//             <div>
//                 <Slider ref={sliderRef} {...settings}>
                    
//                     <div><img className='groupPhoto' src="/images/group_photo5.png" alt="Group 1" /></div>
//                     <div><img className='groupPhoto' src="/images/group_photo6.png" alt="Group 2" /></div>
                    
//                 </Slider>
//                 <MemberSection />
//                 <BSMSMembers />
//              </div>
//              <PastMembers />
//              <Collaborators />
//              <Footer />
//          </>
//     );
// };

// // Custom Next Arrow
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "red" }}
//             onClick={onClick}
//         />
//     );
// }

// // Custom Prev Arrow
// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }

const GroupMembers = () => {
    const carouselRef = useRef();

    const slidePrev = () => {
        carouselRef.current.slidePrev(); // Using the ref to access slidePrev method
    };

    const slideNext = () => {
        carouselRef.current.slideNext(); // Using the ref to access slideNext method
    };

    const items = [
        // <img className='groupPhoto' src="/images/group_photo5.png" alt="Group 1" />,
        // <img className='groupPhoto' src="/images/group_photo6.png" alt="Group 2" />,

        <div className='groupPhoto2'></div>,
        <div className='groupPhoto3'></div>
        // <div class="groupPhoto">
        //     <div class="slide active">
        //         <img src="/images/group_photo5.png" alt="First Image"/>
        //     </div>
        //     <div class="slide">
        //         <img src="/images/group_photo6.png" alt="Second Image"/>
        //     </div>
        // </div>
    ];

    return (
        <>
            <Navbar className='navb' />
            <div className='memberWrapper'>
                <AliceCarousel 
                    mouseTracking 
                    items={items} 
                    autoPlay 
                    autoPlayInterval={3000000} 
                    ref={carouselRef} // Attach the ref to AliceCarousel
                    disableDotsControls 
                    infinite
                    disableButtonsControls // Disable default buttons to use custom ones
                    className="alicetag"
                />
                <button onClick={slidePrev} className="alice-carousel__prev-btn-custom">
                    <FontAwesomeIcon icon={faArrowLeft} size='2x' /> {/* Left arrow icon */}
                </button>
                <button onClick={slideNext} className="alice-carousel__next-btn-custom">
                    <FontAwesomeIcon icon={faArrowRight} size='2x'/> {/* Right arrow icon */}
                </button>
                <MemberSection />
                <BSMSMembers />
            </div>
            <PastMembers />
            {/* <Collaborators /> */}
            <Footer />
        </>
    );
}


// const GroupMembers = () => {
//     return (
//         <>
//             <Navbar />
//             <div className='memberWrapper'>
//                 <div className='groupPhoto'>
//                 </div>
//                 <MemberSection />
//                 <BSMSMembers/>
//             </div>
//             <PastMembers />
//             <Collaborators />
//             <Footer />
//         </>
//     );
// }

export default GroupMembers;
