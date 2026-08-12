import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import constructionImg from "@/assets/industry-construction.jpg";
import packagingImg from "@/assets/industry-packaging.jpg";
import metalCoatingImg from "@/assets/industry-metal-coating.jpg";
import additives from "@/assets/additives.jpg";

const topIndustries = [
  {
    id: "construction",
    title: "Construction",
    image: constructionImg,
  },
  {
    id: "printing-packaging",
    title: "Printing & Packaging",
    image: packagingImg,
  },
  {
    id: "industrial-coating",
    title: "Industrial Coating",
    image: metalCoatingImg,
  },
];

const bottomIndustries = [
  {
    id: "additives",
    title: "Additives",
    image: additives,
  },
  {
    id: "others",
    title: "Others",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const IndustriesSection = () => {
  const navigate = useNavigate();

  const handleIndustryClick = (industryId: string) => {
    navigate(`/industry/${industryId}`);
  };

  const renderCard = (ind: { id: string; title: string; image: string }) => (
    <motion.div
      key={ind.title}
      variants={item}
      onClick={() => handleIndustryClick(ind.id)}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        bg-slate-100
        cursor-pointer
        shadow-lg
        hover:shadow-xl
        transition-shadow
        duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative h-[320px] overflow-hidden">
        <img
          src={ind.image}
          alt={ind.title}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "
        />

        {/* TITLE */}
        <h3
          className="
            absolute
            bottom-6
            left-6
            right-6
            text-2xl
            font-bold
            text-white
            tracking-tight
          "
        >
          {ind.title}
        </h3>
      </div>
    </motion.div>
  );

  return (
    <section id="industries" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="
              text-sm
              font-semibold
              tracking-[0.25em]
              uppercase
              text-blue-600
              mb-4
              block
            "
          >
            Industries & Services
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              tracking-tight
              text-slate-900
              mb-5
            "
          >
            Serving Various
            <span className="text-blue-600"> Industry Sectors</span>
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
            We provide high-quality coating and component solutions for various industrial needs.
          </p>
        </motion.div>

        {/* TOP ROW (3 ITEMS) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            mb-6
          "
        >
          {topIndustries.map(renderCard)}
        </motion.div>

        {/* BOTTOM ROW (2 ITEMS CENTERED) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            sm:grid-cols-2
            gap-6
            lg:w-2/3
            mx-auto
          "
        >
          {bottomIndustries.map(renderCard)}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
