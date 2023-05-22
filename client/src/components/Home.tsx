import HomeBg from "/images/hero/hero_bg.png"
import girlImg from "/images/hero/02.png"
import { ParentsAndCorparates, services } from "../assets/utility/utitly";
import HomeCard from "./HomeCard";

const Home = () => {
  console.log(HomeBg)
  return (
    <div className="h-auto flex flex-col">
      <div className={`flex items-center relative h-[90vh]`}>
        <img src={HomeBg} alt="Home page background " className="bg-cover bg-center absolute -z-10 -top-[25px] h-[inherit]" />
        <img src={girlImg} alt="gitl image" className="h-[300px] md:h-[500px] absolute -z-10" />
        <div className="absolute  w-[300px] bg-yellow-500 animate-bounce"></div>
        <div className="max-w-lg mx-auto text-black text-center ">
          <h1 className="text-xl md:text-4xl font-bold mb-4">Welcome to Edsmart</h1>
        </div>
      </div>
      <div className=" flex-grow  mt-[100px]">
        <div className="max-w-7xl mx-auto md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className=" text-[35px] md:text-[44px] font-semibold text-gray-800">

              Welcome to Edsmart Careers LLP</h2>

            <p className="mt-4 md:text-xl text-gray-500 text-justify">Established in 2002, Edsmart Education Consultants is one of the most sought after education consultants in India representing over 150 reputed universities/ colleges in and outside the country such as UK, Ireland, Canada, USA, Australia, China, Philippines, Russia, New Zealand, Poland, Italy and Germany. In the past decade, we have sent nearly 1,000 thousand students to various world-class universities/ colleges around the world.</p>
          </div>
          {/* Home services   */}
          <div className="flex flex-col flex-wrap md:flex-row">
            {services?.map(({ title, description, icon }, index) => <HomeCard key={index} title={title} description={description} icon={icon} width="250px" />)}
          </div>
          {/* end home services */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-[400] text-[#0c4740]">

              MISSION</h3>
            <p className="mt-4 text-xl md:text-[30px] text-gray-500">"GIVE A CHILD A CHANCE" Our vision is to reach and provide choices of affordable....</p>
            <h3 className="text-3xl font-[400] text-[#0c4740] mt-20">VISION</h3>
            <p className="mt-4 text-xl md:text-[30px] text-gray-500">As a well developed,professional and a global Education project managements</p>

            <button className="my-[20px] px-3 py-2 border-2 
            transition-colors ease-out delay-100  border-green-500 font-semibold hover:text-white hover:bg-[#0c4740]">Learn More</button>
          </div>
        </div>
      </div>
      <div className="h-70vh bg-gray-200 flex items-center justify-center py-[50px]">
        <div className=" mx-auto text-center">
          <p>What Saying</p>
          <h3 className="text-4xl font-bold mb-4">STUDENTS, PARENTS & CORPORATES</h3>
          <div className="flex justify-center  flex-wrap gap-4 ">
            {ParentsAndCorparates?.map(({ name, description, image, position, role, lessons, students }, index) => <HomeCard icon="" key={index
            } title={name} image={image} description={description} position={position} role={role} lessons={lessons} students={students} width= "300px"/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
