// All business content in one place — edit here to update the whole site.

export const site = {
  name: "Green & Clean",
  legalName: "Green & Clean Waste Management",
  url: "https://greenanclean.com",
  tagline: "Your Mess is Our Mission!",
  motto: "There is no Planet B",
  description:
    "Eco-friendly waste management for salons, offices and homes across Kerala. Safe, reliable and compliant disposal solutions — excluding medical waste.",
  associate: "Green 360-N.E.R.T",
  phone: "6282305350",
  phoneDisplay: "+91 62823 05350",
  phoneHref: "tel:+916282305350",
  email: "greenancleanwm@gmail.com",
  address: {
    line1: "Aniyoor, Chempazhathy P.O.",
    city: "Thiruvananthapuram",
    state: "Kerala",
    pin: "695 587",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Aniyoor%2C+Chempazhathy%2C+Thiruvananthapuram+695587",
  },
} as const;

export const faqs = [
  {
    q: "What kind of waste does Green & Clean handle?",
    a: "We handle all non-medical waste from salons, offices, retail stores and homes — including hair, plastic gloves and synthetic salon waste, plastic, paper, metal, wood, textile, general dry waste and cafeteria waste. For homes, we provide composting bins and inoculum solution for kitchen and organic waste.",
  },
  {
    q: "Do you collect medical or biomedical waste?",
    a: "No. Biomedical and infectious waste must be handled by authorised biomedical waste facilities. We focus on non-medical salon, commercial and residential waste.",
  },
  {
    q: "Which areas in Kerala do you serve?",
    a: "We are based in Thiruvananthapuram (Trivandrum) and serve businesses and homes across all 14 districts of Kerala — from Thiruvananthapuram and Kollam to Ernakulam, Kozhikode and Kasaragod.",
  },
  {
    q: "How often do you collect waste?",
    a: "Pickups are scheduled around your business hours and the amount of waste you generate, so collection happens reliably without disrupting your work.",
  },
  {
    q: "Do you provide documentation for compliance?",
    a: "Yes. We provide monthly waste reports and documentation, along with compliance tracking and support, so you stay on the right side of local regulations.",
  },
  {
    q: "How do I get started?",
    a: `Call us on +91 62823 05350, email greenancleanwm@gmail.com or send an enquiry through our contact form. We'll understand your requirements and recommend the right bins, pickup schedule and segregation setup.`,
  },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "10+", label: "Years in waste management" },
  { value: "14", label: "Kerala districts covered" },
  { value: "100%", label: "Compliance support" },
  { value: "Monthly", label: "Reports & documentation" },
] as const;

export const districts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
] as const;

export const impact = [
  { title: "Reduce landfill load", text: "Segregation and recycling keep usable material out of overflowing dumps." },
  { title: "Protect water bodies", text: "No more waste leaching into Kerala's rivers, backwaters and canals." },
  { title: "Lower carbon footprint", text: "Recovery and composting instead of open burning." },
  { title: "Promote hygiene & safety", text: "Clean workplaces for your staff, clients and neighbourhood." },
] as const;

export const process = [
  { title: "Assess", text: "We visit, understand the waste your space generates and plan the right setup." },
  { title: "Segregate", text: "Colour-coded bins and containers, plus short awareness training for your staff." },
  { title: "Collect", text: "Hassle-free pickups on a schedule that fits your business hours." },
  { title: "Report", text: "Responsible disposal with monthly reports and documentation for compliance." },
] as const;

export const offerings = [
  "Segregated bins and containers",
  "Scheduled waste pickup",
  "Proper disposal of chemical & organic waste",
  "Monthly reports & documentation",
] as const;

export const reasons = [
  { title: "Tailored solutions", text: "Plans built around your business — not a one-size-fits-all pickup." },
  { title: "Eco-friendly practices", text: "Segregation, recycling and composting come first." },
  { title: "Reliable pickup & disposal", text: "Punctual, scheduled collection you can count on." },
  { title: "Experienced, trained team", text: "Over a decade of hands-on waste management experience." },
  { title: "100% compliance support", text: "Documentation that keeps you on the right side of local regulations." },
] as const;

export type ServiceKey = "salon" | "commercial" | "residential";

export const services = [
  {
    key: "salon" as ServiceKey,
    title: "Salon Waste Management",
    short: "Keep your beauty business beautiful — and compliant.",
    text: "Hair clippings, chemicals, single-use tools, wax strips, cotton, PPE… the list of salon waste is long and tricky. We provide expert handling and disposal of all non-medical salon waste, keeping your space clean, safe and sustainable.",
    image: "/images/recycling-hands.jpg",
    handles: ["Hair", "Plastic gloves", "Other synthetic items", "Cotton, wax strips & single-use tools"],
    serves: ["Beauty salons", "Nail studios", "Spas & wellness centres", "Barber shops"],
  },
  {
    key: "commercial" as ServiceKey,
    title: "General & Commercial Waste",
    short: "For IT offices, retail stores and business hubs.",
    text: "Waste is inevitable — mismanaging it isn't. Our commercial waste management keeps offices and business spaces hygienic, eco-friendly and legally compliant, without the stress.",
    image: "/images/office.jpg",
    handles: ["Paper waste", "Dry non-recyclables", "Food & organic waste", "Recyclable packaging & more"],
    serves: ["IT & corporate offices", "Retail stores", "Co-working spaces", "Business hubs"],
  },
  {
    key: "residential" as ServiceKey,
    title: "Residential Waste & Composting",
    short: "Turn kitchen waste into garden gold.",
    text: "Composting bins and inoculum solution that make home composting simple — plus segregation support for households, apartments and housing societies.",
    image: "/images/recycling-bottles.jpg",
    handles: ["Composting bins", "Inoculum solution", "Kitchen & garden waste", "Segregation guidance"],
    serves: [
      "Households & apartments",
      "Residential communities & housing societies",
      "Home & kitchen gardens",
      "Eco-friendly families",
    ],
  },
] as const;

export const wasteCategories = [
  {
    title: "Plastic",
    image: "/images/plastic-waste.jpg",
    items: [
      "PET bottles (water, soft drinks)",
      "HDPE containers (detergent, shampoo)",
      "LDPE films (stretch & shrink wrap)",
      "PP materials (buckets, crates)",
      "Multi-layer packaging (for RDF if not recyclable)",
      "Plastic drums & containers (non-toxic residues)",
      "Thermocol (EPS)",
    ],
  },
  {
    title: "Paper",
    image: "/images/paper-waste.jpg",
    items: [
      "Office paper (non-confidential)",
      "Newspapers, books, brochures",
      "Corrugated cardboard boxes",
      "Carton board",
      "Paper cores and tubes",
    ],
  },
  {
    title: "Metal",
    image: "/images/metal-waste.jpg",
    items: ["Aluminium cans", "Steel and tin cans", "Small clean scrap metal (non-oily)", "Clean foil & industrial trimmings"],
  },
  {
    title: "Wood",
    image: "/images/wood-waste.jpg",
    items: ["Untreated wood pallets", "Wooden crates and boxes", "Offcuts & shavings (unpainted, non-oiled)"],
  },
  {
    title: "Textile",
    image: "/images/textile-waste.jpg",
    items: [
      "Fabric scraps from production",
      "Cotton & linen waste (dry, uncontaminated)",
      "Non-woven industrial wipes (non-infectious)",
    ],
  },
  {
    title: "General dry waste",
    image: "/images/dry-waste.jpg",
    items: ["Broom & sweeping waste", "Mop cloths (non-infectious)", "Dust and dry debris", "Packaging ties, empty tape rolls"],
  },
  {
    title: "Cafeteria & admin",
    image: "/images/cafeteria-waste.jpg",
    items: [
      "Disposable cups & cutlery",
      "Food wrappers",
      "Paper napkins (dry)",
      "Tea & coffee packaging",
      "Water bottles",
    ],
  },
] as const;

export const commercialPerks = [
  "Hassle-free scheduled pickups",
  "Custom bin solutions",
  "Waste segregation training for staff",
  "Compliance tracking & support",
] as const;

export const testimonials = [
  {
    quote:
      "We struggled with proper disposal of salon waste until we found Green & Clean. Their team is punctual, professional, and completely understands the kind of waste we deal with. It feels great to run a clean, eco-conscious business now!",
    name: "Anjali R",
    role: "Salon owner, Kochi",
  },
  {
    quote:
      "We've been using Green & Clean's office waste management service for 6 months now. The staff is well-trained and their documentation makes compliance super easy. Highly recommended for any corporate office.",
    name: "Sudeesh M",
    role: "Facilities Manager",
  },
  {
    quote:
      "Managing spa waste was always a headache for us. Green & Clean offered a hassle-free pickup schedule and helped us set up proper waste segregation. Our staff was even given a short awareness session — really appreciated that!",
    name: "Priya Menon",
    role: "Spa owner, Calicut",
  },
  {
    quote:
      "What we love most is their proactive communication. We get reminders, monthly waste reports, and even suggestions to reduce waste. It's more than just a pickup service — it's a sustainability partnership.",
    name: "Ramesh K",
    role: "Operations Head, CoWork Kerala",
  },
] as const;
