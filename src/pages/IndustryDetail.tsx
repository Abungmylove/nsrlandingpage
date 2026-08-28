import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ShieldCheck, Layers, Sparkles, Building2, ChevronDown, Printer, Wrench, Droplets, Settings } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

// Prepared images from user's 'gambar fix' folder
import constructionHeroImg from "@/assets/fix-construction-hero.png";
import decorativesWpImg from "@/assets/fix-construction-hero.png";
import floorCoatingImg from "@/assets/fix-floor-coating.png";

import packagingImg from "@/assets/printing_packaging.png";
import inkImg from "@/assets/fix-ink.png";
import opvImg from "@/assets/fix-opv.png";
import functionalCoatingImg from "@/assets/fix-functional-coating.png";

import industrialCoatingImg from "@/assets/industrial_coating.png";
import metalCoatingImg from "@/assets/fix-metal-coating.png";
import woodCoatingImg from "@/assets/fix-wood-coating.png";
import plasticCoatingImg from "@/assets/fix-plastic-coating.png";

import additivesImg from "@/assets/additives.jpg";
import defoamerImg from "@/assets/fix-defoamer.png";
import levelingImg from "@/assets/fix-leveling.png";
import dispersingImg from "@/assets/fix-dispersing.png";
import heroFrontImg from "@/assets/fix-halaman-depan.jpeg";
import othersImg from "@/assets/others.png";
import chainLubricantsImg from "@/assets/chain_lubricants.png";
import rustCleanerImg from "@/assets/rust_cleaner.png";
import coolantImg from "@/assets/coolant.png";
import h2sScavengerImg from "@/assets/h2s_scavenger.png";




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
      image: decorativesWpImg,
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
      image: floorCoatingImg,
      description: "Heavy-duty epoxy and polyurethane resin systems crafted for industrial durability, chemical protection, hygienic spaces, and seamless cleanroom flooring.",
      productTypes: [],
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

const packagingData: {
  overview: string;
  subCategories: ConstructionSubCategory[];
} = {
  overview: "Our coating solutions for the printing and packaging industry deliver superior surface finishing, vibrant visual clarity, and exceptional long-term durability to maximize product protection",
  subCategories: [
    {
      title: "Ink",
      image: inkImg,
      description: "High-performance pigment dispersions, flexographic inks, and gravure binders formulated for vivid color intensity and excellent substrate adhesion.",
      productTypes: [
        {
          name: "Flexographic & Gravure Ink Resins",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. High pigment binding capacity and fast drying performance."
        },
        {
          name: "Water-Based Ink Dispersions",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eco-friendly formulations for paper and cardboard packaging."
        }
      ],
      keyProducts: [
        {
          name: "AlkiPrint Ink-100",
          code: "INK-100",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium water-based ink binder resin.",
          features: ["High Pigment Load", "Fast Drying Speed", "Low Odor & VOC"]
        },
        {
          name: "AlkiFlex Color-200",
          code: "INK-200",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Specialty flexographic resin system.",
          features: ["Superior Adhesion", "High Gloss & Clarity", "Rub Resistance"]
        }
      ]
    },
    {
      title: "Overprint Varnish (OPV)",
      image: opvImg,
      description: "Water-based and UV-curable overprint varnishes providing extreme gloss, scuff resistance, and protective finishing for printed packaging.",
      productTypes: [
        {
          name: "Water-Based Gloss & Matte OPV",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Smooth surface protection with high scuff resistance."
        },
        {
          name: "UV-Curable High Gloss OPV",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Instant curing varnish delivering brilliant high-gloss finishes."
        }
      ],
      keyProducts: [
        {
          name: "AlkiVarnish OPV-50",
          code: "OPV-50",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-gloss water-based overprint varnish.",
          features: ["Brilliant Gloss", "High Scuff Resistance", "Food-Grade Compliant"]
        },
        {
          name: "AlkiCoat UV-Gloss",
          code: "OPV-UV",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rapid UV-curing protective clear varnish.",
          features: ["Instant UV Cure", "Anti-Block Performance", "Superior Heat Resistance"]
        }
      ]
    },
    {
      title: "Functional Coating",
      image: functionalCoatingImg,
      description: "Specialized barrier coatings, heat-seal lacquers, and moisture/grease resistant solutions engineered for food-grade flexible packaging.",
      productTypes: [
        {
          name: "Moisture & Grease Barrier Resins",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-barrier coating for sustainable paper packaging."
        },
        {
          name: "Heat-Sealable Lacquers & Binders",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Strong peel-strength sealing resins for foils and films."
        }
      ],
      keyProducts: [
        {
          name: "AlkiSeal Barrier-G20",
          code: "FC-G20",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Grease and moisture barrier coating resin.",
          features: ["Grease & Oil Proof", "Moisture Vapor Barrier", "Recyclable Paper Friendly"]
        },
        {
          name: "AlkiBond HeatSeal-30",
          code: "FC-HS30",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-strength heat sealable lacquer binder.",
          features: ["Strong Seal Strength", "Low Sealing Temperature", "Food Safety Compliant"]
        }
      ]
    }
  ]
};

const industrialCoatingData: {
  overview: string;
  subCategories: ConstructionSubCategory[];
} = {
  overview: "We deliver high-performance industrial coatings offering superior finishes, various condition durability, and tailored formulations engineered to your exact specifications and needs for your industry.",
  subCategories: [
    {
      title: "Metal Coating",
      image: metalCoatingImg,
      description: "Advanced anti-corrosion primers, protective topcoats, and direct-to-metal (DTM) resin systems for structural steel, machinery, and automotive components.",
      productTypes: [
        {
          name: "Anti-Corrosion Primers & Zinc Rich Systems",
          description: "High-protection epoxy and alkyd primers blocking oxidation and rust in harsh coastal or industrial environments."
        },
        {
          name: "High-Performance Polyurethane Topcoats",
          description: "UV-stable, chemical-resistant finishes providing glossy aesthetic appeal and long-lasting mechanical protection."
        }
      ],
      keyProducts: [
        {
          name: "AlkiMetal Shield-800",
          code: "MC-800",
          description: "High-performance epoxy anti-corrosion primer for structural steel & heavy machinery.",
          features: ["Extreme Salt Spray Resistance", "High Adhesion Strength", "Chemical & Solvent Resistant"]
        },
        {
          name: "AlkiArmor Metal-PU",
          code: "MC-PU",
          description: "Aliphatic polyurethane topcoat offering non-yellowing high gloss for metal structures.",
          features: ["UV & Weather Stable", "Scratch & Impact Resistant", "Superior Gloss Retention"]
        }
      ]
    },
    {
      title: "Wood Coating",
      image: woodCoatingImg,
      description: "Clear and pigmented polyurethane, nitrocellulose, and UV-curable finishes designed to protect and enhance the natural beauty of wood & furniture.",
      productTypes: [
        {
          name: "Clear Polyurethane Wood Finishes",
          description: "High-clarity wood sealers and topcoats offering water tightness, scratch resistance, and natural grain highlighting."
        },
        {
          name: "UV-Curable & Waterborne Wood Coatings",
          description: "Eco-friendly, fast-curing coatings engineered for mass furniture manufacturing and architectural woodwork."
        }
      ],
      keyProducts: [
        {
          name: "AlkiWood Clear-500",
          code: "WC-500",
          description: "Premium UV-resistant polyurethane wood finish for indoor and outdoor architectural woodwork.",
          features: ["Highlights Natural Grain", "Water & Stain Resistant", "High Hardness & Flexibility"]
        },
        {
          name: "AlkiWood Sealer-10",
          code: "WC-10",
          description: "Deep-penetrating wood sealer binder preventing moisture absorption and wood swelling.",
          features: ["Deep Pore Penetration", "Easy Sanding", "Fast Drying Time"]
        }
      ]
    },
    {
      title: "Plastic Coating",
      image: plasticCoatingImg,
      description: "UV-curable hardcoats, soft-touch coatings, and adhesion promoters for consumer electronics, automotive interiors, and plastic enclosures.",
      productTypes: [
        {
          name: "UV-Curable Anti-Scratch Hardcoats",
          description: "Ultra-hard clear coatings protecting polycarbonate, ABS, and acrylic plastics from scratching and chemicals."
        },
        {
          name: "Soft-Touch & Rubberized Resins",
          description: "Tactile coating formulations providing luxurious feel and matte appearance for electronic devices and interiors."
        }
      ],
      keyProducts: [
        {
          name: "AlkiCoat Plastic-UV",
          code: "PC-UV",
          description: "Scratch-resistant UV-curable plastic hardcoat resin for consumer electronics housings.",
          features: ["High Pencil Hardness (3H+)", "Instant UV Cure", "Anti-Fingerprint Finish"]
        },
        {
          name: "AlkiFeel Soft-Touch",
          code: "PC-ST",
          description: "Specialty matte soft-touch polyurethane coating for automotive and appliance plastic parts.",
          features: ["Luxurious Soft Feel", "Non-Sticky Surface", "Chemical & Sweat Resistant"]
        }
      ]
    }
  ]
};

const additivesData: {
  overview: string;
  subCategories: ConstructionSubCategory[];
} = {
  overview: "Our comprehensive range of chemical additives engineered to enhances the performance, elevate final application quality, optimize overall product performance, and simplify processing tailored to your exact operational requirements",
  subCategories: [
    {
      title: "Defoamer",
      image: defoamerImg,
      description: "High-efficiency non-silicone and mineral-oil defoaming agents designed to eliminate micro-foam, macro-bubbles, and air entrapment during formulation and application.",
      productTypes: [
        {
          name: "Non-Silicone Air Release Agents",
          description: "Specialized defoamers preventing micro-foam formation in water-based coatings and industrial inks."
        },
        {
          name: "Mineral Oil & Polymer Defoamers",
          description: "Fast-acting foam knock-down additives for high-shear manufacturing processes and architectural paints."
        }
      ],
      keyProducts: [
        {
          name: "AlkiDefoam Air-Zero",
          code: "ADD-DF10",
          description: "Non-silicone defoaming agent for water-based coatings, inks, and adhesive formulations.",
          features: ["Immediate Foam Knock-Down", "Long-Term Persistence", "Zero Fish-Eye Formation"]
        },
        {
          name: "AlkiDefoam Poly-90",
          code: "ADD-DF90",
          description: "High-performance polymeric air release additive for high-build epoxy & PU floor coatings.",
          features: ["Prevents Micro-Pinholes", "Excellent Compatibility", "High Shear Stability"]
        }
      ]
    },
    {
      title: "Leveling",
      image: levelingImg,
      description: "Surface wetting, leveling, and flow control additives formulated to prevent orange peel, cratering, and surface defects while enhancing gloss.",
      productTypes: [
        {
          name: "Polyether-Modified Siloxane Leveling Agents",
          description: "Powerful surface tension reducing additives providing smooth film formation and anti-cratering."
        },
        {
          name: "Acrylic Flow & Leveling Modifiers",
          description: "Silicone-free leveling resins enhancing film clarity, recoatability, and surface smoothness."
        }
      ],
      keyProducts: [
        {
          name: "AlkiFlow Level-90",
          code: "ADD-LV90",
          description: "Polyether-modified leveling additive for superior surface smoothness & crater prevention.",
          features: ["Prevents Orange Peel", "Anti-Cratering Action", "Enhances Surface Gloss"]
        },
        {
          name: "AlkiFlow Smooth-30",
          code: "ADD-LV30",
          description: "Silicone-free acrylic flow control modifier for clear coats, UV varnishes, and industrial finishes.",
          features: ["High Recoat Adhesion", "Substrate Wetting", "Non-Hazing Finish"]
        }
      ]
    },
    {
      title: "Dispersing",
      image: dispersingImg,
      description: "Polymeric dispersants and wetting agents engineered for maximum pigment stabilization, viscosity reduction, and intense color development.",
      productTypes: [
        {
          name: "High-Molecular Weight Polymeric Dispersants",
          description: "Steric stabilization additives for organic and inorganic pigments in solvent and waterborne systems."
        },
        {
          name: "Wetting & Colorant Stabilization Resins",
          description: "Synergistic wetting agents reducing grinding time and preventing pigment flocculation."
        }
      ],
      keyProducts: [
        {
          name: "AlkiAdd Disperse-10",
          code: "ADD-DS10",
          description: "High-efficiency polymeric pigment dispersant for architectural paints and industrial color concentrates.",
          features: ["Rapid Pigment Wetting", "Viscosity Reduction", "Prevents Flocculation & Settling"]
        },
        {
          name: "AlkiDisperse Ultra-50",
          code: "ADD-DS50",
          description: "Universal wetting & dispersing additive for carbon black and organic pigments in high-grade inks.",
          features: ["Intense Color Development", "High Transparency", "Excellent Storage Stability"]
        }
      ]
    }
  ]
};

const othersData: {
  overview: string;
  subCategories: ConstructionSubCategory[];
} = {
  overview: "Custom resin synthesis and specialty chemical solutions tailored to meet unique industrial requirements, niche manufacturing, and technical challenges.",
  subCategories: [
    {
      title: "Chain Lubricants",
      image: chainLubricantsImg,
      description: "High-performance synthetic chain oils and conveyor lubricants engineered for extreme temperature, high load, and wear protection.",
      productTypes: [
        {
          name: "High-Temperature Synthetic Chain Oils",
          description: "Thermal-stable lubricants preventing carbon residue buildup in high-heat industrial ovens."
        },
        {
          name: "Conveyor & Drive Lubricant Resins",
          description: "Water-resistant fluids ensuring smooth conveyor operations in beverage and packaging lines."
        }
      ],
      keyProducts: [
        {
          name: "AlkiLube Chain-300",
          code: "OTH-CL30",
          description: "High-temperature synthetic chain lubricant for conveyor systems & industrial ovens.",
          features: ["Resists Thermal Breakdown", "Low Evaporation Rate", "Prevents Carbon Residue"]
        },
        {
          name: "AlkiLube Wet-Conveyor",
          code: "OTH-CL50",
          description: "Water-resistant conveyor lubricant formulated for high-speed bottling & packaging lines.",
          features: ["High Friction Reduction", "Corrosion Inhibition", "Easy Water Cleanability"]
        }
      ]
    },
    {
      title: "Rust Cleaners",
      image: rustCleanerImg,
      description: "Advanced chemical rust removers, descalers, and surface passivation agents designed to restore corroded metal parts safely.",
      productTypes: [
        {
          name: "pH-Neutral Rust Removers",
          description: "Non-acidic chemical solutions dissolving rust without damaging base metal alloys or rubber seals."
        },
        {
          name: "Heavy-Duty Oxide & Scale Cleaners",
          description: "Fast-acting descaling formulations for industrial machinery, tanks, and structural steel."
        }
      ],
      keyProducts: [
        {
          name: "AlkiClean Rust-Off",
          code: "OTH-RC10",
          description: "Fast-acting chemical rust remover & oxide converter for steel and iron components.",
          features: ["Dissolves Heavy Rust", "Passivates Metal Surface", "Safe for Base Metal"]
        },
        {
          name: "AlkiClean Scale-Pro",
          code: "OTH-RC50",
          description: "Heavy-duty industrial scale cleaner and rust descaling compound for heat exchangers.",
          features: ["Rapid Oxide Conversion", "Inhibited Acid Formula", "Reduces Maintenance Downtime"]
        }
      ]
    },
    {
      title: "Radiator Coolant",
      image: coolantImg,
      description: "Organic Acid Technology (OAT) radiator coolants and antifreeze concentrates providing superior heat transfer and corrosion protection.",
      productTypes: [
        {
          name: "Long-Life OAT Coolant Concentrates",
          description: "Extended life coolant formulations protecting aluminum and cast iron engine cooling systems."
        },
        {
          name: "Heavy-Duty Industrial Heat Transfer Fluids",
          description: "Glycol-based heat transfer coolants for stationary engines and industrial chillers."
        }
      ],
      keyProducts: [
        {
          name: "AlkiCool OAT-50",
          code: "OTH-CO50",
          description: "Extended-life organic acid technology radiator coolant concentrate.",
          features: ["5-Year / 250,000 km Protection", "Prevents Cavitation & Corrosion", "Optimal Heat Transfer"]
        },
        {
          name: "AlkiCool Chiller-Max",
          code: "OTH-CO80",
          description: "Industrial heat transfer fluid concentrate for stationary power generators and chillers.",
          features: ["Freezing & Boiling Protection", "Multi-Metal Safe", "Non-Foaming Formula"]
        }
      ]
    },
    {
      title: "H2S Scavenger",
      image: h2sScavengerImg,
      description: "Fast-acting triazine and non-triazine Hydrogen Sulfide (H2S) scavengers designed for oilfield, gas processing, and wastewater treatment.",
      productTypes: [
        {
          name: "Water-Soluble Triazine H2S Scavengers",
          description: "High-capacity chemical scavengers rapidly neutralizing sour gas and H2S toxicity in production fluids."
        },
        {
          name: "Non-Triazine Specialty Scavengers",
          description: "Non-corrosive H2S removal chemical additives designed for sensitive refinery processes."
        }
      ],
      keyProducts: [
        {
          name: "AlkiScav H2S-100",
          code: "OTH-HS10",
          description: "High-activity triazine-based H2S scavenger for oilfield and gas processing operations.",
          features: ["Instant H2S Neutralization", "High Reaction Capacity", "Reduces Sulfide Corrosion"]
        },
        {
          name: "AlkiScav Clean-Gas",
          code: "OTH-HS50",
          description: "Non-triazine H2S scavenger for wastewater treatment plants and refinery fuel gas streams.",
          features: ["Zero Mineral Scaling", "Non-Hazardous Byproducts", "High Thermal Stability"]
        }
      ]
    }
  ]
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
  const isPackaging = industryId === "printing-packaging";
  const isIndustrial = industryId === "industrial-coating";
  const isAdditives = industryId === "additives";
  const isOthers = industryId === "others";

  const scrollToKeyProducts = (prefix: string, index: number) => {
    const targetElement = document.getElementById(`${prefix}-key-products-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isConstruction && !isPackaging && !isIndustrial && !isAdditives && !isOthers) {
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

  const decSub = constructionData.subCategories[0]; // Decoratives & Waterproofing
  const floorSub = constructionData.subCategories[1]; // Floor Coating

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="pt-20">
        {/* HERO BANNER */}
        <div className="relative h-[380px] md:h-[480px] overflow-hidden">
          <img
            src={
              isConstruction
                ? constructionHeroImg
                : isPackaging
                ? packagingImg
                : isIndustrial
                ? industrialCoatingImg
                : isAdditives
                ? additivesImg
                : othersImg
            }
            alt={
              isConstruction
                ? "Construction"
                : isPackaging
                ? "Printing & Packaging"
                : isIndustrial
                ? "Industrial Coating"
                : isAdditives
                ? "Additives"
                : "Others"
            }
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
                    {isPackaging ? (
                      <Printer size={24} />
                    ) : isIndustrial ? (
                      <Wrench size={24} />
                    ) : isAdditives ? (
                      <Droplets size={24} />
                    ) : isOthers ? (
                      <Settings size={24} />
                    ) : (
                      <Building2 size={24} />
                    )}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-blue-300 uppercase">
                    Industry Solutions
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                  {isConstruction
                    ? "Construction"
                    : isPackaging
                    ? "Printing & Packaging"
                    : isIndustrial
                    ? "Industrial Coating"
                    : isAdditives
                    ? "Additives"
                    : "Others"}
                </h1>

                <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                  {isConstruction
                    ? constructionData.overview
                    : isPackaging
                    ? packagingData.overview
                    : isIndustrial
                    ? industrialCoatingData.overview
                    : isAdditives
                    ? additivesData.overview
                    : othersData.overview}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CONSTRUCTION SPECIAL VIEW (2 COLUMNS) */}
        {isConstruction ? (
          <div className="container mx-auto px-6 py-16 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                Specialized Sectors
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Construction Solutions
              </h2>
              <p className="text-slate-600 mt-2">
                Explore our specialized product categories below. Click on any top card to scroll directly to its key products.
              </p>
            </div>

            {/* 2 COLUMNS GRID */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              
              {/* LEFT COLUMN: DECORATIVES & WATERPROOFING */}
              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onClick={() => scrollToKeyProducts("const", 0)}
                  className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 shadow-xl hover:shadow-2xl flex flex-col cursor-pointer transition-all duration-300"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={decSub.image}
                      alt={decSub.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2 shadow">
                          Category 1
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                          {decSub.title}
                        </h3>
                      </div>
                      <div className="p-2.5 bg-blue-600/90 text-white rounded-full opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all shadow-lg">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <p className="text-slate-700 leading-relaxed text-base mb-4">
                      {decSub.description}
                    </p>

                    <div className="flex items-center justify-between text-blue-600 font-semibold text-sm pt-2 border-t border-slate-200/60">
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} />
                        <span>High Durability & Certified</span>
                      </div>
                      <span className="text-xs bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-bold border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        View Products ↓
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* APPLICATION / PRODUCT TYPES */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
                    <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-md">
                      <Layers size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Application & Product Types</h3>
                      <p className="text-xs text-slate-500">{decSub.title}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {decSub.productTypes.map((pt, i) => (
                      <motion.div
                        key={pt.name}
                        variants={itemAnim}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-500/50 shadow-sm transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 border border-blue-200 mt-0.5">
                            {i + 1}
                          </span>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 mb-1">{pt.name}</h4>
                            <p className="text-slate-600 text-xs leading-relaxed">{pt.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* KEY PRODUCTS */}
                <div id="const-key-products-0" className="space-y-6 scroll-mt-28">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <div className="p-2 bg-blue-600 text-white rounded-lg shadow">
                      <ShieldCheck size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Key Products: <span className="text-blue-600">{decSub.title}</span>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {decSub.keyProducts.map((prod) => (
                      <div
                        key={prod.code}
                        className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-slate-900">{prod.name}</h4>
                            <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold rounded-md">
                              {prod.code}
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                            {prod.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100">
                          <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Key Features:
                          </h5>
                          <ul className="space-y-1.5">
                            {prod.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                                <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: FLOOR COATING */}
              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  onClick={() => scrollToKeyProducts("const", 1)}
                  className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 shadow-xl hover:shadow-2xl flex flex-col cursor-pointer transition-all duration-300"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={floorSub.image}
                      alt={floorSub.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2 shadow">
                          Category 2
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                          {floorSub.title}
                        </h3>
                      </div>
                      <div className="p-2.5 bg-blue-600/90 text-white rounded-full opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all shadow-lg">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <p className="text-slate-700 leading-relaxed text-base mb-4">
                      {floorSub.description}
                    </p>

                    <div className="flex items-center justify-between text-blue-600 font-semibold text-sm pt-2 border-t border-slate-200/60">
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} />
                        <span>High Durability & Certified</span>
                      </div>
                      <span className="text-xs bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-bold border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        View Products ↓
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* NO APPLICATION / PRODUCT TYPES FOR FLOOR COATING */}
                <div id="const-key-products-1" className="space-y-6 scroll-mt-28 pt-2">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <div className="p-2 bg-blue-600 text-white rounded-lg shadow">
                      <ShieldCheck size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Key Products: <span className="text-blue-600">{floorSub.title}</span>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {floorSub.keyProducts.map((prod) => (
                      <div
                        key={prod.code}
                        className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-slate-900">{prod.name}</h4>
                            <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold rounded-md">
                              {prod.code}
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                            {prod.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100">
                          <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Key Features:
                          </h5>
                          <ul className="space-y-1.5">
                            {prod.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                                <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* CTA SECTION */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl mt-16">
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
        ) : isPackaging ? (
          /* PRINTING & PACKAGING SPECIAL VIEW (3 COLUMNS) */
          <div className="container mx-auto px-6 py-16 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                Specialized Sectors
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Printing & Packaging Solutions
              </h2>
              <p className="text-slate-600 mt-2">
                Explore our 3 core sectors below. Click on any top card to scroll directly to its key products.
              </p>
            </div>

            {/* 3 COLUMNS GRID */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {packagingData.subCategories.map((sub, idx) => (
                <div key={sub.title} className="space-y-10">
                  
                  {/* TOP CONTAINER CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    onClick={() => scrollToKeyProducts("pkg", idx)}
                    className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 shadow-xl hover:shadow-2xl flex flex-col cursor-pointer transition-all duration-300"
                  >
                    <div className="relative h-[240px] overflow-hidden">
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
                          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                            {sub.title}
                          </h3>
                        </div>
                        <div className="p-2 bg-blue-600/90 text-white rounded-full opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all shadow-lg">
                          <ChevronDown size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <p className="text-slate-700 leading-relaxed text-sm mb-4">
                        {sub.description}
                      </p>

                      <div className="flex items-center justify-between text-blue-600 font-semibold text-xs pt-2 border-t border-slate-200/60">
                        <div className="flex items-center gap-1.5">
                          <Sparkles size={14} />
                          <span>High Quality Finish</span>
                        </div>
                        <span className="text-xs bg-blue-50 px-2.5 py-1 rounded-full text-blue-700 font-bold border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          View Products ↓
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* APPLICATION / PRODUCT TYPES */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-5 border-b border-slate-200 pb-3">
                      <div className="p-2 bg-blue-600 text-white rounded-xl shadow-md">
                        <Layers size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Application & Product Types</h3>
                        <p className="text-xs text-slate-500">{sub.title}</p>
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      {sub.productTypes.map((pt, i) => (
                        <motion.div
                          key={pt.name}
                          variants={itemAnim}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-500/50 shadow-sm transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 border border-blue-200 mt-0.5">
                              {i + 1}
                            </span>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 mb-1">{pt.name}</h4>
                              <p className="text-slate-600 text-xs leading-relaxed">{pt.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* KEY PRODUCTS */}
                  <div id={`pkg-key-products-${idx}`} className="space-y-5 scroll-mt-28">
                    <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
                      <div className="p-2 bg-blue-600 text-white rounded-lg shadow">
                        <ShieldCheck size={18} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Key Products: <span className="text-blue-600">{sub.title}</span>
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {sub.keyProducts.map((prod) => (
                        <div
                          key={prod.code}
                          className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-base font-bold text-slate-900">{prod.name}</h4>
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold rounded-md">
                                {prod.code}
                              </span>
                            </div>
                            <p className="text-slate-600 text-xs mb-3 leading-relaxed">
                              {prod.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100">
                            <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                              Key Features:
                            </h5>
                            <ul className="space-y-1">
                              {prod.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                                  <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA SECTION */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl mt-16">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Need Technical Consultation for Printing & Packaging?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-base">
                Our specialists provide custom formulations for inks, OPVs, and functional barrier coatings tailored to your packaging needs.
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
        ) : isIndustrial ? (
          /* INDUSTRIAL COATING SPECIAL VIEW (3 COLUMNS) */
          <div className="container mx-auto px-6 py-16 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                Specialized Sectors
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Industrial Coating Solutions
              </h2>
              <p className="text-slate-600 mt-2">
                Explore our 3 core industrial sectors below. Click on any top card to scroll directly to its key products.
              </p>
            </div>

            {/* 3 COLUMNS GRID */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {industrialCoatingData.subCategories.map((sub, idx) => (
                <div key={sub.title} className="space-y-10">
                  
                  {/* TOP CONTAINER CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    onClick={() => scrollToKeyProducts("ind", idx)}
                    className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 shadow-xl hover:shadow-2xl flex flex-col cursor-pointer transition-all duration-300"
                  >
                    <div className="relative h-[240px] overflow-hidden">
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
                          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                            {sub.title}
                          </h3>
                        </div>
                        <div className="p-2 bg-blue-600/90 text-white rounded-full opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all shadow-lg">
                          <ChevronDown size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <p className="text-slate-700 leading-relaxed text-sm mb-4">
                        {sub.description}
                      </p>

                      <div className="flex items-center justify-between text-blue-600 font-semibold text-xs pt-2 border-t border-slate-200/60">
                        <div className="flex items-center gap-1.5">
                          <Sparkles size={14} />
                          <span>Industrial Grade Protection</span>
                        </div>
                        <span className="text-xs bg-blue-50 px-2.5 py-1 rounded-full text-blue-700 font-bold border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          View Products ↓
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* APPLICATION / PRODUCT TYPES */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-5 border-b border-slate-200 pb-3">
                      <div className="p-2 bg-blue-600 text-white rounded-xl shadow-md">
                        <Layers size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Application & Product Types</h3>
                        <p className="text-xs text-slate-500">{sub.title}</p>
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      {sub.productTypes.map((pt, i) => (
                        <motion.div
                          key={pt.name}
                          variants={itemAnim}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-500/50 shadow-sm transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 border border-blue-200 mt-0.5">
                              {i + 1}
                            </span>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 mb-1">{pt.name}</h4>
                              <p className="text-slate-600 text-xs leading-relaxed">{pt.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* KEY PRODUCTS */}
                  <div id={`ind-key-products-${idx}`} className="space-y-5 scroll-mt-28">
                    <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
                      <div className="p-2 bg-blue-600 text-white rounded-lg shadow">
                        <ShieldCheck size={18} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Key Products: <span className="text-blue-600">{sub.title}</span>
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {sub.keyProducts.map((prod) => (
                        <div
                          key={prod.code}
                          className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-base font-bold text-slate-900">{prod.name}</h4>
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold rounded-md">
                                {prod.code}
                              </span>
                            </div>
                            <p className="text-slate-600 text-xs mb-3 leading-relaxed">
                              {prod.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100">
                            <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                              Key Features:
                            </h5>
                            <ul className="space-y-1">
                              {prod.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                                  <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA SECTION */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl mt-16">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Need Technical Consultation for Industrial Coatings?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-base">
                Our engineering team formulates custom coating resins tailored to your exact metal, wood, or plastic surface specifications.
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
        ) : isAdditives ? (
          /* ADDITIVES SPECIAL VIEW (3 COLUMNS) */
          <div className="container mx-auto px-6 py-16 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                Specialized Sectors
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Additive Solutions
              </h2>
              <p className="text-slate-600 mt-2">
                Explore our 3 core chemical additive sectors below. Click on any top card to scroll directly to its key products.
              </p>
            </div>

            {/* 3 COLUMNS GRID */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {additivesData.subCategories.map((sub, idx) => (
                <div key={sub.title} className="space-y-10">
                  
                  {/* TOP CONTAINER CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    onClick={() => scrollToKeyProducts("add", idx)}
                    className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 shadow-xl hover:shadow-2xl flex flex-col cursor-pointer transition-all duration-300"
                  >
                    <div className="relative h-[240px] overflow-hidden">
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
                          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                            {sub.title}
                          </h3>
                        </div>
                        <div className="p-2 bg-blue-600/90 text-white rounded-full opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all shadow-lg">
                          <ChevronDown size={18} />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <p className="text-slate-700 leading-relaxed text-sm mb-4">
                        {sub.description}
                      </p>

                      <div className="flex items-center justify-between text-blue-600 font-semibold text-xs pt-2 border-t border-slate-200/60">
                        <div className="flex items-center gap-1.5">
                          <Sparkles size={14} />
                          <span>High Efficiency Formulations</span>
                        </div>
                        <span className="text-xs bg-blue-50 px-2.5 py-1 rounded-full text-blue-700 font-bold border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          View Products ↓
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* APPLICATION / PRODUCT TYPES */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-5 border-b border-slate-200 pb-3">
                      <div className="p-2 bg-blue-600 text-white rounded-xl shadow-md">
                        <Layers size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Application & Product Types</h3>
                        <p className="text-xs text-slate-500">{sub.title}</p>
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      {sub.productTypes.map((pt, i) => (
                        <motion.div
                          key={pt.name}
                          variants={itemAnim}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-500/50 shadow-sm transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 border border-blue-200 mt-0.5">
                              {i + 1}
                            </span>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 mb-1">{pt.name}</h4>
                              <p className="text-slate-600 text-xs leading-relaxed">{pt.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* KEY PRODUCTS */}
                  <div id={`add-key-products-${idx}`} className="space-y-5 scroll-mt-28">
                    <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
                      <div className="p-2 bg-blue-600 text-white rounded-lg shadow">
                        <ShieldCheck size={18} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Key Products: <span className="text-blue-600">{sub.title}</span>
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {sub.keyProducts.map((prod) => (
                        <div
                          key={prod.code}
                          className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-5 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-base font-bold text-slate-900">{prod.name}</h4>
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold rounded-md">
                                {prod.code}
                              </span>
                            </div>
                            <p className="text-slate-600 text-xs mb-3 leading-relaxed">
                              {prod.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100">
                            <h5 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                              Key Features:
                            </h5>
                            <ul className="space-y-1">
                              {prod.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                                  <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA SECTION */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl mt-16">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Need Technical Consultation for Additive Formulations?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-base">
                Our specialists provide custom additive packages to resolve foam, leveling, or pigment dispersion challenges in your production.
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
        ) : isOthers ? (
          /* OTHERS SPECIAL VIEW (4 COLUMNS) */
          <div className="container mx-auto px-6 py-16 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                Specialized Sectors
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Specialty Chemical Solutions
              </h2>
              <p className="text-slate-600 mt-2">
                Explore our 4 specialty chemical product lines below. Click on any top card to scroll directly to its key products.
              </p>
            </div>

            {/* 4 COLUMNS GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {othersData.subCategories.map((sub, idx) => (
                <div key={sub.title} className="space-y-8">
                  
                  {/* TOP CONTAINER CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onClick={() => scrollToKeyProducts("oth", idx)}
                    className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 shadow-xl hover:shadow-2xl flex flex-col cursor-pointer transition-all duration-300"
                  >
                    <div className="relative h-[220px] overflow-hidden">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 bg-blue-600 text-white text-[11px] font-semibold rounded-full mb-1.5 shadow">
                            Category {idx + 1}
                          </span>
                          <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight leading-tight">
                            {sub.title}
                          </h3>
                        </div>
                        <div className="p-1.5 bg-blue-600/90 text-white rounded-full opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all shadow-lg shrink-0">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <p className="text-slate-700 leading-relaxed text-xs mb-3">
                        {sub.description}
                      </p>

                      <div className="flex items-center justify-between text-blue-600 font-semibold text-xs pt-2 border-t border-slate-200/60">
                        <div className="flex items-center gap-1">
                          <Sparkles size={13} />
                          <span>Specialty Grade</span>
                        </div>
                        <span className="text-[11px] bg-blue-50 px-2 py-0.5 rounded-full text-blue-700 font-bold border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          View Products ↓
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* APPLICATION / PRODUCT TYPES */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-5 shadow-sm">
                    <div className="flex items-center gap-2.5 mb-4 border-b border-slate-200 pb-2.5">
                      <div className="p-1.5 bg-blue-600 text-white rounded-lg shadow-md">
                        <Layers size={18} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Application Types</h3>
                        <p className="text-[11px] text-slate-500">{sub.title}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {sub.productTypes.map((pt, i) => (
                        <motion.div
                          key={pt.name}
                          variants={itemAnim}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="bg-white border border-slate-200 rounded-xl p-3.5 hover:border-blue-500/50 shadow-sm transition-all"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-[10px] shrink-0 border border-blue-200 mt-0.5">
                              {i + 1}
                            </span>
                            <div>
                              <h4 className="text-xs font-bold text-slate-900 mb-0.5">{pt.name}</h4>
                              <p className="text-slate-600 text-[11px] leading-relaxed">{pt.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* KEY PRODUCTS */}
                  <div id={`oth-key-products-${idx}`} className="space-y-4 scroll-mt-28">
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-2.5">
                      <div className="p-1.5 bg-blue-600 text-white rounded-lg shadow">
                        <ShieldCheck size={16} />
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        Key Products: <span className="text-blue-600">{sub.title}</span>
                      </h3>
                    </div>

                    <div className="space-y-3.5">
                      {sub.keyProducts.map((prod) => (
                        <div
                          key={prod.code}
                          className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-4 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-1.5">
                              <h4 className="text-sm font-bold text-slate-900">{prod.name}</h4>
                              <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono font-bold rounded">
                                {prod.code}
                              </span>
                            </div>
                            <p className="text-slate-600 text-[11px] mb-2.5 leading-relaxed">
                              {prod.description}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-100">
                            <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                              Key Features:
                            </h5>
                            <ul className="space-y-1">
                              {prod.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                                  <CheckCircle2 size={12} className="text-blue-600 shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA SECTION */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white rounded-3xl p-10 md:p-14 text-center shadow-xl mt-16">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Need Custom Specialty Chemical Formulations?
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-base">
                Our R&D specialists formulate tailored chain lubricants, rust cleaners, coolants, and scavengers for unique operational challenges.
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
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default IndustryDetail;