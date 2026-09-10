import { motion } from "framer-motion";
import shivaImg from "@/assets/shiva.jpeg";
import alkImg from "@/assets/alk.jpeg";
import partner1Img from "@/assets/partners-1.jpeg";
import partner2Img from "@/assets/partners-2.jpeg";
import partner3Img from "@/assets/partners-3.jpeg";
import partner4Img from "@/assets/partners-4.jpeg";

const industries = [
  {
    image: shivaImg,
  },
  {
    image: alkImg,
  },
  {
    image: partner1Img,
  },
  {
    image: partner2Img,
  },
  {
    image: partner3Img,
  },
  {
    image: partner4Img,
  },
];

const IndustriesSection = () => {
  return (
    <section
      id="partners"
      className="py-24 bg-white"
    >

      {/* HEADER */}
      <div className="text-center mb-16 px-6">


        <h2
          className="
            text-4xl
            md:text-5xl
            font-black
            text-slate-900
            mb-5
          "
        >
          Who We
          <span className="text-blue-600">
            {" "}Work With
          </span>
        </h2>

        <p
          className="
            text-slate-600
            max-w-2xl
            mx-auto
            text-lg
            leading-relaxed
          "
        >
          We provide high-quality coating and component
          solutions for various industrial needs.
        </p>

      </div>

      {/* IMAGE LIST */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-10
          px-8"
      >

        {industries.map((ind, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center w-44 h-24"
          >
            <motion.img
              src={ind.image}
              loading="lazy"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default IndustriesSection;