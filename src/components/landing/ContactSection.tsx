import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const BANNED_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.id",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "mail.com",
  "zoho.com",
  "gmx.com",
  "yandex.com",
  "proton.me",
  "protonmail.com",
];

const isBusinessEmail = (email: string) => {
  const domain = email.split("@")[1]?.toLowerCase();
  return !!domain && !BANNED_DOMAINS.includes(domain);
};

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState<"Domestic" | "International">("Domestic");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const productInterests = [
    "Construction",
    "Printing & Packaging",
    "Industrial Coating",
    "Additives",
    "Others",
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const target = e.target as HTMLFormElement;
    const data = new FormData(target);

    const fullName = data.get("fullName");
    const company = data.get("company");
    const email = data.get("email") as string;
    const phone = data.get("phone") || "-";
    const message = data.get("message");
    const interests = selectedInterests.length > 0 ? selectedInterests.join(", ") : "-";
    
    // Internal routing target (Rahasia Dapur / Hidden from UI)
    const destinationEmail = region === "Domestic" ? "admin@alkindo.com" : "admin@novasindo.com";

    // VALIDASI EMAIL BISNIS
    if (!isBusinessEmail(email)) {
      setLoading(false);
      toast({
        title: "Business Email Required",
        description: "Please use your company email address. Free email providers such as Gmail, Yahoo, Outlook, and similar services are not accepted.",
        variant: "destructive",
      });
      return;
    }

    // NOMOR WA
    const nomorWA = "6285123901305";

    const teksPesan = `Halo Nova Sindo Raya, ada yang ingin kami diskusikan:%0A%0A` +
                      `*Kategori Inquiry:* ${region} (${destinationEmail})%0A` +
                      `*Nama:* ${fullName}%0A` +
                      `*Perusahaan:* ${company}%0A` +
                      `*Email:* ${email}%0A` +
                      `*No. HP:* ${phone}%0A` +
                      `*Product Interest:* ${interests}%0A%0A` +
                      `*Pesan:*%0A${message}`;

    setTimeout(() => {
      setLoading(false);
      window.open(`https://wa.me/${nomorWA}?text=${teksPesan}`, "_blank");
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Please confirm your pre-filled message in the chat app.",
      });
      target.reset();
      setSelectedInterests([]);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 gradient-ocean opacity-[0.03]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3 block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Ready to Discuss?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our team is ready to help with your industrial coating and chemical needs. 
            Contact us for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          
          {/* Info Bisnis Sebelah Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Address</h4>
                <p className="text-sm text-muted-foreground">Jl. Jend Gatot Subroto KM. 8, Kadu Jaya, Tangerang, Kabupaten Tangerang, Banten 15810</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Phone</h4>
                <p className="text-sm text-muted-foreground">+62 xxx xxxx xxxx</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-1">Email</h4>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:admin@novasindo.com" className="text-blue-600 hover:underline">
                    admin@novasindo.com
                  </a>
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/6285123901305"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[hsl(142,70%,40%)] text-white font-medium hover:bg-[hsl(142,70%,35%)] transition-colors min-h-[48px]"
            >
              <MessageCircle size={20} />
              Chat via WhatsApp
            </a>

            {/* GOOGLE MAPS */}
            <div className="rounded-xl overflow-hidden border border-border h-48 w-full shadow-sm bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d599.5010487076747!2d106.56119133730444!3d-6.208279051836945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1780662359075!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nova Sindo Raya Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Utama Sebelah Kanan */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card rounded-xl p-6 md:p-8 space-y-5 shadow-sm border border-slate-200"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input required name="fullName" placeholder="Your Name" className="min-h-[44px]" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <Input required name="company" placeholder="Company name" className="min-h-[44px]" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input required name="email" type="email" placeholder="email@company.com" className="min-h-[44px]" />
                <p className="text-xs text-muted-foreground mt-1.5">
                  Please use your company email address (e.g. <a href="mailto:name@company.com" className="text-primary hover:underline">name@company.com</a>)
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <Input name="phone" placeholder="+62 xxx xxxx" className="min-h-[44px]" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">Product Interest</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {productInterests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={selectedInterests.includes(interest)}
                      onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                    />
                    <Label
                      htmlFor={interest}
                      className="text-sm font-normal cursor-pointer text-slate-800"
                    >
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* INQUIRY LOCATION (COMPACT RADIO OPTIONS NEAR PRODUCT INTEREST) */}
            <div>
              <label className="text-sm font-medium text-foreground mb-2.5 block">Inquiry Location</label>
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center space-x-2 cursor-pointer text-sm font-normal text-slate-800">
                  <input
                    type="radio"
                    name="region"
                    value="Domestic"
                    checked={region === "Domestic"}
                    onChange={() => setRegion("Domestic")}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span>Domestic (Indonesia)</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer text-sm font-normal text-slate-800">
                  <input
                    type="radio"
                    name="region"
                    value="International"
                    checked={region === "International"}
                    onChange={() => setRegion("International")}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span>International (Overseas)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea required name="message" rows={4} placeholder="Tell us about your coating or product needs..." />
            </div>

            <Button type="submit" variant="ocean" size="lg" className="w-full min-h-[48px]" disabled={loading}>
              {loading ? "Redirecting..." : (
                <>Send Message <Send size={16} /></>
              )}
            </Button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
