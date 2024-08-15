import React from 'react'

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1) {
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='font-semibold mx-2 text-white'>Mohan</span>
                <br />
                A Software Developer from India
            </h1>
        )
    } else if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Worked with many companies <br /> and picked up many skills along the way
                </p>
                <link rel="stylesheet" href="#" />
            </div>
        )
    } else if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Let's multiple projects to success over the year <br /> Curious about the impact?
                </p>
                <link rel="stylesheet" href="#" />
            </div>
        )
    } else if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dev? <br /> I'm Just a few keystrokes away
                </p>
                <link rel="stylesheet" href="#" />
            </div>
        )
    }
    return null
}

export default HomeInfo
