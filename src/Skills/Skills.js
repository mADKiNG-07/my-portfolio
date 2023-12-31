import './skills.css';
import { SiPostgresql, SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiHeroku, SiFlutter, SiPython } from '@icons-pack/react-simple-icons';

const color = "#5A5A5A"

function Skills() {
  return (
    <div className='Skills container'>
      <p className='head pb-3'>✨Skills</p>
      <hr className='border-stone-500' />
      <div className='skill-list mt-6 grid grid-cols-3 gap-x-6 gap-y-9'>
        <div>
          <div className='flex items-center space-x-2'>
            <SiHtml5 color="#f16a30" size={30} />
            <p>HTML</p>
          </div>
          <p className='xp text-rose-500'>4 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiCss3 color="#2277bc" size={30} />
            <p>CSS</p>
          </div>
          <p className='xp text-rose-500'>4 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiSass color="#ea2568" size={30} />
            <p>SCSS</p>
          </div>
          <p className='xp text-rose-500'>1 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiJavascript color="#f7e025" size={30} />
            <p>Javascript</p>
          </div>
          <p className='xp text-rose-500'>4.5 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiReact color="#5ed3f3" size={30} />
            <p>React</p>
          </div>
          <p className='xp text-rose-500'>3.5 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiNodedotjs color="#90ca51" size={30} />
            <p>NodeJs</p>
          </div>
          <p className='xp text-rose-500'>2 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiMongodb color="#08ee69" size={30} />
            <p>MongoDB</p>
          </div>
          <p className='xp text-rose-500'>2 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiFirebase color="#ffa816" size={30} />
            <p>Firebase</p>
          </div>
          <p className='xp text-rose-500'>3 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiHeroku color="#a180c3" size={30} />
            <p>Heroku</p>
          </div>
          <p className='xp text-rose-500'>1.5 years experience</p>
        </div>

        <div>
          <div className='flex items-center space-x-2'>
            <SiFlutter color="#59c7f8" size={30} />
            <p>Flutter</p>
          </div>
          <p className='xp text-rose-500'>2.5 years experience</p>
        </div>
        <div>
          <div className='flex items-center space-x-2'>
            <SiPython color="#ffd952" size={30} />
            <p>Python</p>
          </div>
          <p className='xp text-rose-500'>2 years experience</p>
        </div>
        <div>
          <div className='flex items-center space-x-2'>
            <SiPostgresql color="#396c94" size={30} />
            <p>Postgresql</p>
          </div>
          <p className='xp text-rose-500'>0.5 years experience</p>
        </div>


      </div>
    </div>
  );
}

export default Skills;