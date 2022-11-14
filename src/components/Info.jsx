import dpImgUrl from '../assets/dp.png'
import emailImg from '../assets/Mail.png'
import linkedInImg from '../assets/linkedin.png'
import '../App.css'

const Info = () => (
  <div className="info">
    <img src={dpImgUrl} alt="Display Picture" />
    <h1 className='name'>Laura Smith</h1>
    <h3 className='position'>Frontend Developer</h3>
    <a href="laurasmith.website">laurasmith.website</a>
    <div className='big-buttons'>
      <a href="https://gmail.com">
        <button className="big-email">
          <img src={emailImg} alt="Email" />
          <span>Email</span>
        </button>
      </a>
      <a href="https://linkedin.com">
        <button className="big-linkedin">
          <img src={linkedInImg} alt="LinkedIn Image" />
          <span>LinkedIn</span>
        </button>
      </a>
    </div>
  </div>
);

export default Info; 