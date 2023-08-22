import './contact.css';

function Contact() {
  return (<div className="Contact flex items-center justify-between container h-96 mt-20">
    <div className=''>
      <p className='heading'>Contact</p>
      <p className='text mt-5'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
    </div>
    <div>
      <form action="#">
        <input className='border-b bg-inherit placeholder-zinc-700' type="text" placeholder='NAME' /><br />
        <input className='border-b bg-inherit placeholder-zinc-700' type="text" placeholder='EMAIL' /><br />
        <textarea className='message border-b bg-inherit placeholder-zinc-700' name="message" id="" cols="30" rows="3" placeholder='MESSAGE'></textarea><br />
        {/* <input type="text" placeholder='MESSAGE' /><br /> */}
        <input className='border-b bg-inherit placeholder-zinc-700' type="submit" value="SEND MESSAGE" />
      </form>
    </div>
  </div>);
}

export default Contact;