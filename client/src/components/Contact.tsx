import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const Contact= () => {
  return (
    <div className="container mx-auto">
      <div className="py-10">
        <h2 className="text-4xl font-bold text-center mb-4">Questions? Feel free to contact us.</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" className="form-input" placeholder="Enter your name"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
            <input type="text" id="subject" className="form-input" placeholder="Enter the subject" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input type="tel" id="phone" className="form-input" placeholder="Enter your phone number" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea id="message" className="form-textarea form-input" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn-primary px-[20px] py-[10px] bg-[#0c4740] text-white font-semibold text-[15px] tracking-widest flex justify-center items-center">Send Message <ArrowRightCircleIcon className="h-[20px]" /> </button>
        </form>
      </div>
      <div className="py-10">
        <h2 className="text-4xl font-bold text-center mb-4">Location</h2>
        <div className="google-map">
          {/* google map */}
          <div className="mt-[40px]">
            <div className="col-lg-3 md-mb-30">
              <div className="footer-widget footer-widget-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.84852409182!2d76.2274027148025!3d10.974803892187085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU4JzI5LjMiTiA3NsKwMTMnNDYuNSJF!5e0!3m2!1sen!2sin!4v1683529782440!5m2!1sen!2sin"
                  width="100%" height="400" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Contact;

