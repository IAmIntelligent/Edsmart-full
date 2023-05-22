
function About() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gray-200">
        {/* Image section */}
        <img src="/images/about/ab.png" alt="about image" className="w-full h-full object-contain" />
      </div>
      <div className="w-full md:w-1/2 bg-white px-6 py-8">
        {/* Text section */}
        <h1 className="text-4xl font-bold mb-4">Welcome to Edsmart Careers LLP</h1>
        <p className="text-lg">
          About Edsmart: Edsmart has a strong presence all over India with a network located in all major cities of India with many more on the way. Our head office is in Perinthalmanna, Kerala, which is also the corporate head office of Edsmart. We render end-to-end services in visa assistance, travel assistance, and admissions at the undergraduate and postgraduate levels, along with tutorial services for IELTS/PTE, making us a one-stop shop for overseas education and domestic admissions.
        </p>
        <p className="text-lg">
          We have already provided over 100,000+ hours of counseling to students and can boast of more than 2,500 success stories. With a stupendous 97% visa success rate, one of the best in the industry, our dynamic and well-informed counselors have studied overseas themselves, allowing them to empathize with the students' needs and constraints.
        </p>
        {/* Continue with the rest of the content */}
      </div>
    </div>
  )
}

export default About