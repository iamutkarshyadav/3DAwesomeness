import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        <span className="font-semibold mx-2 text-white">
          Ms. Grace (Why not, ma'am?)
        </span>
        <br />
        Yo, just checking in to say you're missed. Like, 'Where's Waldo?, (You have to scroll left to right)'
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
         Something  <br />   really importent
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Click
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Something but in good voice <br />  
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Click
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Well, see that bell below?  <br/> Click on that <br/> 
      </p>

      {/* <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link> */}
    </div>
    );
  }

  return null;
};

export default HomeInfo;
