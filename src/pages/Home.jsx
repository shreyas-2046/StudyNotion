import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa';
import HighLightText from '../components/core/Home/HighLightText';
import CTAbutton from '../components/core/Home/CTAbutton';
import Banner from '../assets/Images/banner.mp4';
import CodeBlocks from '../components/core/Home/CodeBlocks';

import LearningLanguageSection from '../components/core/Home/LearningLanguageSection';
import TimeLineSection from '../components/core/Home/TimeLineSection';
import InstructorSection from '../components/core/Home/InstructorSection';
import ExploreMore from '../components/core/Home/ExploreMore';
import Footer from '../components/common/Footer';
import ReviewSlider from '../components/common/ReveiwSlider';


const Home = () => {
    
  return (
    <div>
        {/* Section 1 */}
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white'>
            <Link to={'/signup'}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95  w-fit drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] hover:drop-shadow-none"'>
                    <div className='flex justify-center items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link> 
            <div className='text-center text-4xl font-semibold'>
                Empower Your Future With
                <HighLightText text={" Coding Skills"}/>
            </div>

            <div className='-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex gap-7 mt-8'>
                <CTAbutton active={true}>Learn More</CTAbutton>
                <CTAbutton active={false}>Book a demo</CTAbutton>
            </div>
            <div className='mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                <video 
                muted 
                loop
                autoPlay src={Banner} type="video/mp4" className='shadow-[20px_20px_rgba(255,255,255)] rounded-lg'>
                
                </video>
            </div>

            
        </div>
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white'>
            <CodeBlocks
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>Unlock Your <HighLightText text={"Coding Potential"}/> with our online courses</div>
                }
                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={{
                    btnText:'Try It Yourself',
                    linkto:'/signup',
                    active:true,
                }}
                ctabtn2={{
                    btnText: 'Learn More',
                    linkto: '/login',
                    active: false,
                }
                
                }
                codeblock={`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <title>This is myPage</title>
                    </head>
                    <body>
                    <h1><a href="/">Header</a></h1>
                    <nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>
                    </nav>
                    </body>`
                    }
                    codeColor={"text-yellow-25"}

                backgroundGradient={"codeblock1"}

            />
            <CodeBlocks
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>Unlock Your <HighLightText text={"Coding Potential"}/> with our online courses</div>
                }
                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={{
                    btnText:'Try It Yourself',
                    linkto:'/signup',
                    active:true,
                }}
                ctabtn2={{
                    btnText: 'Learn More',
                    linkto: '/login',
                    active: false,
                }
                
                }
                codeblock={`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <title>This is myPage</title>
                    </head>
                    <body>
                    <h1><a href="/">Header</a></h1>
                    <nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>
                    </nav>
                    </body>`
                    }
                    codeColor={"text-yellow-25"}
                backgroundGradient={"codeblock2"}

            />
            <ExploreMore/>
        </div>


        {/* section2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[333px]'>
                    <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto'>


                    <div className='h-[150px]'>

                    </div>


                        <div className='flex gap-7 text-white'>
                            <CTAbutton active={true} linkto={'/signup'}>
                                <div className='flex items-center justify-center'>
                                    Explore Full Catalog
                                    <FaArrowRight/>
                                </div>
                            </CTAbutton>
                            <CTAbutton active={false} linkto={'/signup'} >
                                <div>
                                    Learn More
                                </div>
                            </CTAbutton>
                        </div>
                    </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                    <div className='flex flex-row gap-5 mb-10 mt-[95px] justify-between'>
                        <div className='text-4xl font-semibold w-[45%]  '>
                            Get The Skills You need for a 
                            <HighLightText text={" job that is in demand."}/>
                        </div>
                        <div className='flex flex-col gap-10 w-[40%] items-start'>
                        <div className='text-[16px]'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <CTAbutton active={true} linkto={'/signup'}>
                            <div>
                                Learn More
                            </div>
                        </CTAbutton>
                    </div>
                    </div>

                    <TimeLineSection/>

            <LearningLanguageSection/>  
            </div> 



                             
        </div>
        {/* section 3 */}

        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-center gap-8 bg-richblack-900 text-white '>


            <InstructorSection />
            <h2 className='text-center text-4xl font-semibold mt-10'>Reviews from other learners</h2>
            {/* Review slider section */}
            <ReviewSlider/>
        </div>




        {/* Footer */}
        <Footer/>
        
    </div>
  )
}

export default Home