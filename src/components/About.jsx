import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden w-full"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light capitalize">
          Our brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="An apartment image"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of exellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            fugiat libero deserunt voluptate distinctio itaque. Natus,
            laboriosam ut. Porro, quia perspiciatis. Ad ipsa error iste, ipsam
            voluptatum tempore fuga illo. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
