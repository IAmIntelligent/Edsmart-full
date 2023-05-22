import { Link } from "react-router-dom"
import { menuItems } from '../assets/utility/utitly'
import { PhoneIcon } from "@heroicons/react/20/solid"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { ArrowDownRightIcon } from "@heroicons/react/24/outline"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

function Footer() {
  const mubArray = ["+91 98478 99217", "+91 4933 350064", "+9645712322"]
  return (
    <footer className="bg-[#0F1216] px-[60px] py-[30px] text-white flex flex-col gap-4 md:flex-row relative">
      <div className="flex flex-col w-[80%] p-auto  ">
        <Link to="/">
          <img className="w-[300px] h-auto" src="/images/logo.png" alt="" />
        </Link>
        <div>
          <address><p>Administration Office</p>
            <p className="w-[250px]">Edsmart careers LLP 2nd Floor MPS Royal Suites Opp KSRTC Bus Stand Perinthalmanna , Malappuram Dt , Kerala ,India</p></address>
          <ul className="w-[200px]">
            {mubArray?.map((number, index) => <a key={index
            } href={`tel:${number}`}>
              <li className={`${index === 0 ? "mt-[20px]" : "mt-[10px]"} list-none flex gap-2`}>
                <PhoneIcon className="h-[20px]" /> {number}</li>
            </a>)}
          </ul>
          <span className="flex gap-2 mt-[10px]"><EnvelopeIcon className="h-[20px]" /> <a href="mailto:info@Edsmart.in">info@Edsmart.in</a></span>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="my-[20px] md:my-0 text-[30px] font-bold">Main</h1>
        <ul>
          {menuItems?.map((footerLi, index) =>
            <li key={index} className="py-[7px] hover:text-[#198754] hover:underline">
              <Link to={footerLi.path}>
                {footerLi.name}
              </Link>
            </li>)}
        </ul>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h3 className="font-bold text-[30px]">Newsletter</h3>
        <p>Get the latest Edsmart news
          delivered to you inbox</p>
        <span className="flex ">
          <input type="text" placeholder="Enter Your Email" className="text-black p-[15px] pl-[30px] outline-none " />

          <button className="bg-[#198754] p-2"><ArrowDownRightIcon className="h-[30px]" /></button>
        </span>
        {/* google map */}
        <div className="mt-[40px]">
          <div className="col-lg-3 md-mb-30">
            <div className="footer-widget footer-widget-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.84852409182!2d76.2274027148025!3d10.974803892187085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU4JzI5LjMiTiA3NsKwMTMnNDYuNSJF!5e0!3m2!1sen!2sin!4v1683529782440!5m2!1sen!2sin"
                width="280" height="300" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"></iframe>
            </div>
          </div>
        </div>

      </div>
     
      <div className="mt-[30px] absolute bottom-0 left-0 right-0 ">
        <hr className="border-gray-500" />
        <span className="flex items-center gap-4">Follow <AiFillFacebook /> <AiFillInstagram /> <AiFillLinkedin /> </span>
        
        <p className="text-gray-500 text-sm">© 2023 Edsmart. All Rights Reserved</p>
      </div>
    </footer>

  )
}

export default Footer