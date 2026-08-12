import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ShieldCheck, Layers, Sparkles, Box, Building2, ChevronDown } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import constructionImg from "@/assets/industry-construction.jpg";
import packagingImg from "@/assets/industry-packaging.jpg";
import metalCoatingImg from "@/assets/industry-metal-coating.jpg";
import additives from "@/assets/additives.jpg";

interface ConstructionSubCategory {
  title: string;
  image: string;
  description: string;
  productTypes: {
    name: string;
    description: string;
  }[];
  keyProducts: {
    name: string;
    code: string;
    description: string;
    features: string[];
  }[];
}

const constructionData: {
  overview: string;
  subCategories: ConstructionSubCategory[];
} = {
  overview: "We provide specialized coating solutions for the construction industry, delivering high-performance protective technologies engineered to extend structural lifespans, improve material resistance, and optimize the long-term durability of built assets",
  subCategories: [
    {
      title: "Decoratives & Waterproofing",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
      description: "Advanced acrylic emulsions, elastomeric binders, and water-repellent polymers engineered for premium wall finishes and structural waterproofing protection.",
      productTypes: [
        {
          name: "Exterior & Interior Wall Emulsion Binders",
          description: "Pure acrylic and styrene-acrylic emulsion polymers providing superior scrub resistance, weatherability, UV resistance, and excellent pigment binding capacity."
        },
        {
          name: "Elastomeric Waterproofing Membranes",
          description: "High-flexibility polymer emulsions designed to bridge structural micro-cracks, prevent water ingress, and withstand harsh outdoor environmental conditions."
        },
        {
          name: "Tile Adhesive & Grout Polymer Modifiers",
          description: "Specialized polymers and redispersible powders that significantly improve bond strength, flexural rigidity, and water resistance in tile adhesives and grouts."
        },
        {
          name: "Alkali-Resistant Primers & Wall Sealers",
          description: "Deep-penetrating acrylic primers formulated to bind powdery masonry substrates, block efflorescence, and prepare surfaces for long-lasting topcoats."
        }
      ],
      keyProducts: [
        {
          name: "AlkiShield WP-500",
          code: "WP-500",
          description: "High-grade pure acrylic elastomeric emulsion binder for premium roof & wall waterproofing coatings.",
          features: ["High Elongation (>300%)", "Crack Bridging Capability", "Excellent UV & Weather Resistance"]
        },
        {
          name: "AlkiCryl Wall-100",
          code: "AC-100",
          description: "Styrene-acrylic emulsion binder optimized for architectural exterior & interior paints.",
          features: ["Superior Scrub Resistance", "High Color Retention", "Low VOC & Odor"]
        },
        {
          name: "AlkiPrime AR-80",
          code: "AR-80",
          description: "Alkali-resistant primer binder designed for fresh concrete, plaster, and masonry sealing.",
          features: ["Alkali & Efflorescence Resistance", "Deep Substrate Penetration", "Strong Topcoat Adhesion"]
        },
        {
          name: "TileFlex Polymer-C2",
          code: "TF-C2",
          description: "Polymer additive for high-performance flexible tile adhesives and waterproof grouts.",
          features: ["Enhanced Bond Strength", "Improved Water Tightness", "Flexural Stress Absorption"]
        }
      ]
    },
    {
      title: "Floor Coating",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      description: "Heavy-duty epoxy and polyurethane resin systems crafted for industrial durability, chemical protection, hygienic spaces, and seamless cleanroom flooring.",
      productTypes: [
        {
          name: "Industrial Epoxy Floor Resins",
          description: "Two-component 100% solids epoxy binders providing extreme mechanical strength, forklift load durability, and high chemical resistance."
        },
        {
          name: "Polyurethane (PU) Screed Systems",
          description: "Heavy-duty thermal-shock resistant screed resins engineered specifically for food & beverage processing, chemical plants, and cold storage areas."
        },
        {
          name: "Self-Leveling Flooring Underlayments",
          description: "Seamless, self-smoothing polymer-modified resin binders providing ultra-smooth, high-durability floor surfaces for commercial & industrial facilities."
        },
        {
          name: "Anti-Slip & Quartz Protective Topcoats",
          description: "High-durability clear and pigmented topcoats with customizable anti-slip textures, high scratch resistance, and glossy aesthetic finishes."
        }
      ],
      keyProducts: [
        {
          name: "AlkiFloor EP-200",
          code: "EP-200",
          description: "Solvent-free 100% solids epoxy resin system for heavy-duty industrial floor coatings.",
          features: ["High Impact & Compression Strength", "Chemical & Solvent Resistant", "Seamless & Easy Clean"]
        },
        {
          name: "AlkiDur PU-Screed 40",
          code: "PU-40",
          description: "Hygienic polyurethane screed resin system designed for extreme thermal shock & heavy wear.",
          features: ["Thermal Shock Resistant (-40°C to 120°C)", "Antimicrobial Surface", "Extreme Heavy Load Bearing"]
        },
        {
          name: "AlkiLevel SL-50",
          code: "SL-50",
          description: "Self-leveling epoxy binder compound for seamless cleanroom, hospital, and laboratory floors.",
          features: ["Ultra-Smooth Finish", "Dust-Free Surface", "High Abrasion Resistance"]
        },
        {
          name: "AlkiArmor Topcoat-UV",
          code: "AT-UV",
          description: "Aliphatic polyurethane non-yellowing topcoat for high-gloss, scratch-resistant protective floor finishes.",
          features: ["Non-Yellowing UV Stability", "High Scratch Resistance", "Excellent Gloss Retention"]
        }
      ]
    }
  ]
};

const otherIndustriesData: Record<string, {
  title: string;
  image: string;
  overview: string;
  services: string[];
  applications: string[];
  keyProducts: { name: string; description: string }[];
}> = {
  "printing-packaging": {
    title: "Printing & Packaging",
    image: packagingImg,
    overview: "Our coating solutions for the printing and packaging industry deliver superior surface finishing, vibrant visual clarity, and exceptional long-term durability to maximize product protection",
    services: [
      "Water-based and UV overprint varnishes",
      "Heat-sealable coatings for flexible packaging",
      "Moisture and grease barrier coatings",
      "Lamination adhesives for paper and film"
    ],
    applications: [
      "Food & Beverage Flexible Packaging",
      "Pharmaceutical Boxes & Blister Packs",
      "Labels & Stickers",
      "Corrugated Cardboard & Paper Bags"
    ],
    keyProducts: [
      "AlkiPack Varnish-W10 (Water-based Overprint Varnish)",
      "AlkiSeal Barrier-G20 (Grease & Moisture Barrier Resin)",
      "AlkiLam Poly-30 (High-Clarity Lamination Binder)"
    ]
  },
  "industrial-coating": {
    title: "Industrial Coating",
    image: metalCoatingImg,
    overview: "We deliver high-performance industrial coatings offering superior finishes, various condition durability, and tailored formulations engineered to your exact specifications and needs for your industry.",
    services: [
      "Anti-corrosion protective coatings for structural steel",
      "UV-curable hardcoats for plastic components",
      "Clear and tinted finishes for industrial wood & furniture",
      "High-temperature resistant coating resins"
    ],
    applications: [
      "Metal Structures & Machinery",
      "Consumer Electronics & Plastic Housings",
      "Architectural Woodwork & Furniture",
      "Automotive Aftermarket Components"
    ],
    keyProducts: [
      "AlkiMetal Shield-800 (High-Performance Anti-Corrosion Primer)",
      "AlkiCoat Plastic-UV (Scratch Resistant Plastic Coating Resin)",
      "AlkiWood Clear-500 (UV-Resistant Polyurethane Wood Finish)"
    ]
  },
  "additives": {
    title: "Additives",
    image: additives,
    overview: "Our comprehensive range of chemical additives engineered to enhances the performance, elevate final application quality, optimize overall product performance, and simplify processing tailored to your exact operational requirements",
    services: [
      "Wetting and dispersing additives for pigments",
      "Defoamers and air release agents",
      "Rheology modifiers and thickeners",
      "Substrate wetting and leveling agents"
    ],
    applications: [
      "Paints & Architectural Coatings",
      "Industrial Inks & Colorants",
      "Adhesives & Sealants",
      "Polymer Compounds & Composites"
    ],
    keyProducts: [
      "AlkiAdd Disperse-10 (High-Efficiency Pigment Dispersant)",
      "AlkiDefoam Air-Zero (Non-Silicone Defoaming Agent)",
      "AlkiFlow Level-90 (Surface Leveling & Anti-Cratering Additive)"
    ]
  },
  "others": {
    title: "Others",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
    overview: "Custom resin synthesis and specialty chemical solutions tailored to meet unique industrial requirements, niche manufacturing, and technical challenges.",
    services: [
      "Custom polymer synthesis & modification",
      "Specialty binders for non-woven materials",
      "Technical consulting & joint product development",
      "Specialized industrial chemical formulations"
    ],
    applications: [
      "Specialty Textiles & Non-Woven Fabrics",
      "Electronics & Encapsulation Binders",
      "Niche Manufacturing & OEM Solutions",
      "Research & Development Pilot Projects"
    ],
    keyProducts: [
      "AlkiCustom Polymer-X (Tailored Synthetic Resin)",
      "AlkiSpec Binder-N90 (Specialty Non-Woven Emulsion)"
    ]
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryId]);

  const isConstruction = industryId === "construction";
  const genericIndustry = industryId ? otherIndustriesData[industryId] : null;

  const scrollToKeyProducts = (index: number) => {
    const targetElement = document.getElementById(`key-products-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isConstruction && !genericIndustry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-blue-600 hover:bg-blue-700 text-white">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="pt-20">
        {/* HERO BANNER */}
        <div className="relative h-[380px] md:h-[480px] overflow-hidden">
          <img
            src={isConstruction ? constructionImg : genericIndustry?.image}
            alt={isConstruction ? "Construction" : genericIndustry?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => navigate("/")}
                  className="mb-6 text-white hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 rounded-full gap-2 px-5"
                >
                  <ArrowLeft size={16} />
                  Back to Home
                </Button>

                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300">
                    <Building2 size={24} />
                  </span>
                  <span className="text-sm font-bold tracking-widest text-blue-300 uppercase">
                    Industry Solutions
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                  {isConstruction ? "Construction" : genericIndustry?.title}
                </h1>

                <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                  {isConstruction ? constructionData.overview : genericIndustry?.overview}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CONSTRUCTION SPECIAL VIEW */}
        {isConstruction ? (
          <div className="container mx-auto px-6 py-16 space-y-24">

            {/* 1. CONTAINERS GAMBAR SUBCATEGORIES (Decoratives & Waterproofing + Floor Coating) */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                  Specialized Sectors
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  Construction Categories
                </h2>
                <p className="text-slate-600 mt-2">
                  Click on any category below to jump directly to its featured Key Products.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {constructionData.subCategories.map((sub, idx) => (
                  <motion.div
                    key={sub.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    onClick={() => scrollToKeyProducts(idx)}
                    className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 shadow-xl hover:shadow-2xl flex flex-col cursor-pointer transition-all duration-300"
                  >
                    {/* CONTAINER GAMBAR */}
                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                        <div>
                          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2 shadow">
                            Category {idx + 1}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            {sub.title}
                          </h3>
                        </div>
                        <div className="p-2.5 bg-blue-600/90 text-white rounded-full opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all shadow-lg">
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </div>

                    {/* CONTAINER KETERANGAN */}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <p className="text-slate-700 leading-relaxed text-base mb-6">
                        {sub.description}
                      </p>

                      <div className="flex items-center justify-between text-blue-600 font-semibold text-sm pt-2 border-t border-slate-200/60">
                        <div className="flex items-center gap-2">
                          <Sparkles size={16} />
                          <span>High Durability & Certified Performance</span>
                        </div>
                        <span className="text-xs bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-bold border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          View Products ↓
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2. APPLICATION / PRODUCT TYPES BESERTA PENJELASANNYA */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                  Application Breakdown
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  Application & Product Types
                </h2>
                <p className="text-slate-600 mt-2">
                  Detailed breakdown of resin applications and product classifications tailored for each sector.
                </p>
              </div>

              <div className="space-y-16">
                {constructionData.subCategories.map((sub) => (
                  <div key={sub.title} className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
                      <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-md">
                        <Layers size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{sub.title}</h3>
                        <p className="text-sm text-slate-500">Applications and technical resin types</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {sub.productTypes.map((pt, i) => (
                        <motion.div
                          key={pt.name}
                          variants={itemAnim}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500/50 shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm shrink-0 border border-blue-200">
                              {i + 1}
                            </span>
                            <div>
                              <h4 className="text-lg font-bold text-slate-900 mb-2">{pt.name}</h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{pt.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. KEY PRODUCTS DARI DECORATIVES & WATERPROOFING DAN FLOOR COATING */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                  Featured Formulations
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  Key Products
                </h2>
                <p className="text-slate-600 mt-2">
                  Our flagship chemical product lines for Decoratives & Waterproofing and Floor Coating.
                </p>
              </div>

              <div className="space-y-16">
                {constructionData.subCategories.map((sub, idx) => (
                  <div
                    key={sub.title}
                    id={`key-products-${idx}`}
                    className="space-y-8 scroll-mt-28"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow">
                        <ShieldCheck size={22} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Key Products: <span className="text-blue-600">{sub.title}</span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {sub.keyProducts.map((prod) => (
                        <div
                          key={prod.code}
                          className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="text-xl font-bold text-slate-900">{prod.name}</h4>
                              <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold rounded-lg">
                                {prod.code}
                              </span>
                            </div>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                              {prod.description}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-100">
                            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                              Key Features:
                            </h5>
                            <ul className="space-y-2">
                              {prod.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA SECTION */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Need Technical Consultation for Construction Solutions?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-base">
                Our R&D team can provide custom resin formulations and technical specs tailored to your project requirements.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="bg-white text-blue-900 hover:bg-slate-100 font-bold rounded-xl px-8 shadow-lg"
              >
                Contact Our Technical Team
              </Button>
            </div>

          </div>
        ) : (
          /* GENERIC INDUSTRY VIEW */
          <div className="container mx-auto px-6 py-16 space-y-16">

            {/* OVERVIEW & SERVICES */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Box className="text-blue-600" />
                  Services & Capabilities
                </h2>
                <ul className="space-y-4">
                  {genericIndustry?.services.map((srv, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-blue-600 mt-1 shrink-0" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Layers className="text-blue-600" />
                  Key Applications
                </h2>
                <ul className="space-y-4">
                  {genericIndustry?.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* KEY PRODUCTS */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Products</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {genericIndustry?.keyProducts.map((kp, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{kp.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{kp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-3xl p-10 text-center shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in {genericIndustry?.title} Solutions?
              </h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Reach out to our specialists to discuss specifications and sample requests.
              </p>
              <Button
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 font-semibold"
              >
                Contact Us
              </Button>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default IndustryDetail;