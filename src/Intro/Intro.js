import './intro.css';
import 'animate.css';
import panda from './../assets/panda.png';

function Intro() {
  return (
    <div className="Intro container py-16">
      <p className='flex greeting'>
        <div>
          Thrilled to make <br /> your acquaintance.<br />
          <span className='underline underline-offset-8 decoration-rose-500 text-rose-500'>I'm Jordan.</span>
        </div>
      </p>
      <p className='bio py-6 '>
        A software engineer, but with a panda's chill vibe.
        Imagine coding while munching on bamboo 😂 – that's my style.
        I whip up sleek backend stuff that works like a <span className='text-rose-500'>charm</span>.
      </p>
      <p className='contact underline underline-offset-8 decoration-rose-500 transition duration-150 ease-out hover:ease-in-out hover:text-rose-400 py-6 '>
        CONTACT ME
      </p>

    </div>
  );
}

export default Intro;