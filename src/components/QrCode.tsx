import './QrCode.css'
import Qr from '../assets/image-qr-code.png'
const QrCode = () => {
  return (
    <div className='container'>
      <div className="qr">
      <img src={Qr} alt="Qr code" />
      </div>
      <h2>Improve your front-end skills by building projects</h2>
      <p>Scan the QR code to visit frontend mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default QrCode
