import './projects.css';
import { SiHtml5, SiCss3, SiSass, SiJavascript, SiJsonwebtokens, SiNodedotjs, SiMongodb, SiFirebase, SiHeroku, SiFlutter, SiPython } from '@icons-pack/react-simple-icons';


function Projects() {
  return (<div className='Projects container mt-20 py-4'>
    <p className='head pb-3'>⚒️Projects</p>
    <hr className='border-stone-500' />
    <div className='list mt-6'>
      <div>
        <div className='flex items-center mt-2 gap-x-5'>
          <p className='pName'>URBAN DEALERS</p>
          <span className='flex gap-x-2'>
            <SiJavascript color="#FFFF00" size={20} />
            <SiNodedotjs color="#008000" size={20} />
            <SiMongodb color="#008000" size={20} />
            <SiHeroku color="#800080" size={20} />
            <SiJsonwebtokens color="#ADD8E6" size={20} />
          </span>
        </div>
        <p className='desc mt-2'>
          The RealEstate Insights API empowers agents with instant access to listing availability, sales stats, earned commissions, and performance rankings. Elevate efficiency, stay competitive, and make informed decisions in the fast-paced real estate landscape.
        </p>
        <div className='flex gap-x-3 mt-7'>
          <p className='underline underline-offset-8 decoration-green-500 '>VIEW SWAGGER</p>
          <p className='underline underline-offset-8 decoration-rose-500 '>VIEW SOURCE CODE</p>
        </div>
      </div>

      <div className='mt-14'>
        <div className='flex items-center mt-2 gap-x-5'>
          <p className='pName'>iTRENDS ANALYTICS</p>
          <span className='flex gap-x-2'>
            <SiJavascript color="#FFFF00" size={20} />
            <SiNodedotjs color="#008000" size={20} />
            <SiMongodb color="#008000" size={20} />
            <SiHeroku color="#800080" size={20} />
            <SiJsonwebtokens color="#ADD8E6" size={20} />
            <SiFirebase color="#FFA500" size={20} />
          </span>
        </div>
        <p className='desc mt-2'>
          Imagine Twitter, but exclusively for forex traders. An app where you can effortlessly track and discuss forex trends shared by experienced analysts and admins. Connect with like-minded users, collaborate on insights, and fuel your forex knowledge.
        </p>
        <div className='flex gap-x-3 mt-7'>
          <p className='underline underline-offset-8 decoration-green-500 '>VIEW SWAGGER</p>
          <p className='underline underline-offset-8 decoration-rose-500 '>VIEW SOURCE CODE</p>
        </div>
      </div>

      <div className='mt-14'>
        <div className='flex items-center mt-2 gap-x-5'>
          <p className='pName'>EASY SHELTER</p>
          <span className='flex gap-x-2'>
            <SiFlutter color="#318CE7" size={20} />
            <SiFirebase color="#FFA500" size={20} />
          </span>
        </div>
        <p className='desc mt-2'>
          Introducing Easy Shelter: Your pocket-sized housing solution. Browse, inquire, and rent student accommodations seamlessly through our mobile app. Your gateway to finding the perfect home away from home.
        </p>
        <div className='flex gap-x-3 mt-7'>
          <p className='underline underline-offset-8 decoration-green-500 '>VIEW APP</p>
          <p className='underline underline-offset-8 decoration-rose-500 '>VIEW SOURCE CODE</p>
        </div>
      </div>

    </div>

  </div>);
}

export default Projects;