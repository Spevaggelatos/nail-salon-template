export interface ServiceItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  iconName?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export const salonConfig = {
  // --- ΒΑΣΙΚΑ ΣΤΟΙΧΕΙΑ ΕΠΙΧΕΙΡΗΣΗΣ (ELLO BEAUTY) ---
  business: {
    name: "ELLO BEAUTY",
    shortName: "ELLOnails",
    tagline: "Nails • Brows • Facial Aesthetics",
    logoUrl: "/images/ellobeauty_logo_small.svg",
    subtitle:
      "Το αγαπημένο σας ινστιτούτο περιποίησης άκρων και αισθητικής στον Χολαργό. Εξειδικευμένο μανικιούρ, θεραπευτικό πεντικιούρ, τεχνητά νύχια gel, lash lift και προηγμένες θεραπείες προσώπου.",
    award: "Διάκριση «Αετοί της Ομορφιάς» - Χολαργός",
    rating: "4.8",
    reviewCount: 135,
  },

  // --- ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ & ΤΟΠΟΘΕΣΙΑ ---
  contact: {
    phone: "210 6549430",
    mobile: "210 6549430",
    whatsapp: "302106549430",
    viber: "302106549430",
    email: "ellonails.gr@gmail.com",
    secondaryEmail: "info@ellobeauty.gr",
    address: {
      street: "Λεωφόρος Μεσογείων 248",
      city: "Χολαργός, Αθήνα",
      postalCode: "155 61",
      area: "5η Είσοδος Χολαργού (πλησίον Μετρό Χολαργός)",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.835162441984!2d23.7942!3d38.0048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19853b2e370bd%3A0x400bd2ce2b97b90!2sLeof.%20Mesogeion%20248%2C%20Cholargos%20155%2061!5e0!3m2!1sel!2sgr!4v1700000000000!5m2!1sel!2sgr",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=ELLO+BEAUTY+Μεσογείων+248+Χολαργός",
    socials: {
      instagram: "https://www.instagram.com/ellonails_beauty/",
      instagramHandle: "@ellonails_beauty",
      facebook: "https://www.facebook.com/",
      website: "https://ellonails.wordpress.com/",
    },
  },

  // --- ΩΡΑΡΙΟ ΛΕΙΤΟΥΡΓΙΑΣ ---
  openingHours: [
    { days: "Δευτέρα", hours: "Κλειστά" },
    { days: "Τρίτη", hours: "10:00 - 20:00" },
    { days: "Τετάρτη", hours: "10:00 - 18:00" },
    { days: "Πέμπτη - Παρασκευή", hours: "10:00 - 20:00" },
    { days: "Σάββατο", hours: "09:00 - 17:00" },
    { days: "Κυριακή", hours: "Κλειστά" },
  ],

  // --- ΧΡΩΜΑΤΙΚΟ ΣΤΥΛ & THEME ---
  theme: {
    accentColor: "dusty-rose",
    badgeText: "🏆 Διάκριση «Αετοί της Ομορφιάς» στον Χολαργό",
  },

  // --- ΑΝΑΚΟΙΝΩΣΗ HEADER ---
  announcement: {
    enabled: true,
    text: "✨ Καλώς ήρθατε στο ELLO BEAUTY Χολαργού! Λ. Μεσογείων 248 (δίπλα στο Μετρό)",
    linkText: "Κλείσε το ραντεβού σου",
  },

  // --- STATS / TRUST INDICATORS ---
  stats: [
    { value: "4.8 ★", label: "Βαθμολογία Google (135+ Reviews)" },
    { value: "Top Rated", label: "Βραβείο «Αετοί της Ομορφιάς»" },
    { value: "100%", label: "Αποστείρωση & Υγιεινή" },
    { value: "Premium", label: "Προϊόντα Neonail & Schrammek" },
  ],

  // --- Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ (ΓΙΑΤΙ ELLO BEAUTY) ---
  features: [
    {
      title: "Κορυφαία Επαγγελματικά Brands",
      description:
        "Χρησιμοποιούμε αποκλειστικά πιστοποιημένα επαγγελματικά προϊόντα (όπως Neonail στα άκρα και Schrammek στην αισθητική προσώπου) για ασύγκριτη διάρκεια και φροντίδα.",
      icon: "Sparkles",
    },
    {
      title: "Αυστηρό Πρωτόκολλο Υγιεινής",
      description:
        "Η ασφάλειά σας είναι αδιαπραγμάτευτη. Εφαρμόζουμε πλήρη αποστείρωση εργαλείων σε κάθε ραντεβού και εξειδικευμένη θεραπευτική προσέγγιση.",
      icon: "ShieldCheck",
    },
    {
      title: "Βραβευμένη Εξυπηρέτηση",
      description:
        "Με διάκριση στους «Αετούς της Ομορφιάς» και βαθμολογία 4.8/5, η ομάδα μας ξεχωρίζει για την ευγένεια, τη λεπτομέρεια και το άψογο αποτέλεσμα.",
      icon: "Award",
    },
    {
      title: "Ολοκληρωμένος Χώρος Ομορφιάς",
      description:
        "Συνδυάστε το μανικιούρ και το πεντικιούρ σας με Lash Lift, σχηματισμό φρυδιών ή εξειδικευμένες θεραπείες προσώπου σε ένα άνετο, minimal περιβάλλον δίπλα στο Μετρό Χολαργού.",
      icon: "HeartHandshake",
    },
  ],

  // --- ΚΑΤΗΓΟΡΙΕΣ ΥΠΗΡΕΣΙΩΝ ---
  categories: [
    {
      id: "manicure",
      name: "Μανικιούρ",
      description: "Απλό, ημιμόνιμο, ενισχυμένο, γαλλικό, ombre & εφέ πούδρας.",
    },
    {
      id: "pedicure",
      name: "Πεντικιούρ",
      description: "Απλό, ημιμόνιμο, χαλαρωτικό SPA & εξειδικευμένο θεραπευτικό πεντικιούρ.",
    },
    {
      id: "extensions",
      name: "Τεχνητά Νύχια & Gel",
      description: "Εφαρμογή τεχνητών με Gel, φυσική ενίσχυση, συντήρηση & nail art.",
    },
    {
      id: "beauty",
      name: "Brows, Lashes & Πρόσωπο",
      description: "Lash Lift, σχηματισμός/βαφή φρυδιών, κλωστή & θεραπείες αισθητικής προσώπου.",
    },
  ] as ServiceCategory[],

  // --- ΑΚΡΙΒΗΣ ΤΙΜΟΚΑΤΑΛΟΓΟΣ ELLO BEAUTY ---
  services: [
    // 1. ΜΑΝΙΚΙΟΥΡ
    {
      id: "mani-simple",
      categoryId: "manicure",
      name: "Απλό Μανικιούρ",
      description:
        "Πλήρης περιποίηση επωνυχίων, σχηματισμός νυχιών, ενυδάτωση και απλό βερνίκι μακράς διάρκειας.",
      duration: "40 λεπτά",
      price: "18€",
      popular: false,
    },
    {
      id: "mani-semi",
      categoryId: "manicure",
      name: "Ημιμόνιμο Μανικιούρ",
      description:
        "Βαθύς καθαρισμός επωνυχίων, τέλεια εφαρμογή ημιμόνιμου χρώματος από την πλούσια παλέτα μας με λάμψη που διαρκεί.",
      duration: "50 λεπτά",
      price: "25€",
      popular: true,
    },
    {
      id: "mani-french-ombre",
      categoryId: "manicure",
      name: "Ημιμόνιμο με Γαλλικό / Ombre / Εφέ Πούδρας",
      description:
        "Ημιμόνιμο μανικιούρ συνδυασμένο με κλασικό ή μοντέρνο γαλλικό, ντεγκραντέ ombre ή εντυπωσιακό chrome/glazed εφέ πούδρας.",
      duration: "60 λεπτά",
      price: "30€",
      popular: true,
    },
    {
      id: "mani-reinforced",
      categoryId: "manicure",
      name: "Ενισχυμένο Ημιμόνιμο Μανικιούρ",
      description:
        "Ιδανικό για λεπτά ή εύθραυστα νύχια. Ειδική ενισχυμένη βάση που προσφέρει έξτρα σκληρότητα, ομοιομορφία και μέγιστη αντοχή.",
      duration: "60 λεπτά",
      price: "32€",
      popular: true,
    },
    {
      id: "mani-shape-polish",
      categoryId: "manicure",
      name: "Σχήμα & Απλό Βάψιμο",
      description:
        "Γρήγορη ανανέωση σχήματος με λίμα και εφαρμογή απλού βερνικιού (Απλό βάψιμο: 10€).",
      duration: "25 λεπτά",
      price: "12€",
      popular: false,
    },
    {
      id: "mani-removal",
      categoryId: "manicure",
      name: "Αφαίρεση Ημιμόνιμου",
      description:
        "Ασφαλής και προσεκτική αφαίρεση ημιμόνιμου βερνικιού χωρίς τραυματισμό της φυσικής πλάκας του νυχιού.",
      duration: "15 λεπτά",
      price: "4€ - 6€",
      popular: false,
    },

    // 2. ΠΕΝΤΙΚΙΟΥΡ
    {
      id: "pedi-simple",
      categoryId: "pedicure",
      name: "Απλό Πεντικιούρ",
      description:
        "Αναζωογονητικό ποδόλουτρο, περιποίηση νυχιών και επωνυχίων, καθαρισμός φτερνών και εφαρμογή απλού βερνικιού.",
      duration: "45 λεπτά",
      price: "25€",
      popular: false,
    },
    {
      id: "pedi-semi",
      categoryId: "pedicure",
      name: "Ημιμόνιμο Πεντικιούρ",
      description:
        "Ολοκληρωμένη περιποίηση κάτω άκρων με ημιμόνιμη βαφή που στεγνώνει άμεσα και διατηρείται άψογη για εβδομάδες.",
      duration: "60 λεπτά",
      price: "30€",
      popular: true,
    },
    {
      id: "pedi-spa",
      categoryId: "pedicure",
      name: "SPA Πεντικιούρ",
      description:
        "Πολυτελής εμπειρία απολέπισης (peeling), βαθιάς ενυδάτωσης και χαλαρωτικού μασάζ για ξεκούραστα, βελούδινα πέλματα.",
      duration: "60 λεπτά",
      price: "30€",
      popular: true,
    },
    {
      id: "pedi-therapeutic",
      categoryId: "pedicure",
      name: "Θεραπευτικό Πεντικιούρ",
      description:
        "Εξειδικευμένη φροντίδα για σκληρύνσεις, κάλους, υπερκερατώσεις ή προβλήματα είσφρυσης ονύχων με απόλυτη ανακούφιση.",
      duration: "60 λεπτά",
      price: "30€",
      popular: true,
    },
    {
      id: "pedi-express",
      categoryId: "pedicure",
      name: "Λιμάρισμα & Απλό Βάψιμο Ποδιών",
      description: "Σχηματισμός νυχιών ποδιών και ανανέωση χρώματος με απλό βερνίκι.",
      duration: "25 λεπτά",
      price: "14€",
      popular: false,
    },

    // 3. ΤΕΧΝΗΤΑ ΝΥΧΙΑ & GEL
    {
      id: "gel-fullset",
      categoryId: "extensions",
      name: "Εφαρμογή Τεχνητών Νυχιών με Gel",
      description:
        "Επιμήκυνση νυχιών με επαγγελματικό Gel για τέλειο μήκος, αρχιτεκτονική φόρμα και εξαιρετική αντοχή.",
      duration: "110 λεπτά",
      price: "50€",
      popular: true,
    },
    {
      id: "gel-fullset-design",
      categoryId: "extensions",
      name: "Τεχνητά Gel με Γαλλικό / Ombre / Πούδρα",
      description:
        "Επιμήκυνση νυχιών με Gel συνδυασμένη με γραμμή γαλλικού, ombre ντεγκραντέ ή mirror/glazed πούδρα.",
      duration: "115 λεπτά",
      price: "55€",
      popular: false,
    },
    {
      id: "gel-refill",
      categoryId: "extensions",
      name: "Συντήρηση Τεχνητών με Gel",
      description:
        "Ανανέωση και γέμισμα τεχνητών νυχιών, επαναφορά σχήματος και νέο χρώμα (45€ με γαλλικό/ombre/πούδρα).",
      duration: "90 λεπτά",
      price: "40€",
      popular: true,
    },
    {
      id: "gel-natural-overlay",
      categoryId: "extensions",
      name: "Φυσική Ενίσχυση με Gel",
      description:
        "Θωράκιση του φυσικού σας νυχιού με στρώση Gel χωρίς επιμήκυνση, για νύχια που μακραίνουν χωρίς να σπάνε.",
      duration: "90 λεπτά",
      price: "40€",
      popular: false,
    },
    {
      id: "gel-removal-mani",
      categoryId: "extensions",
      name: "Αφαίρεση Τεχνητών + Απλό Μανικιούρ",
      description:
        "Ασφαλής αφαίρεση gel/τεχνητών και πλήρης περιποίηση απλού μανικιούρ (Σκέτη αφαίρεση τεχνητών: 12€).",
      duration: "50 λεπτά",
      price: "23€",
      popular: false,
    },

    // 4. BROWS, LASHES & ΑΙΣΘΗΤΙΚΗ ΠΡΟΣΩΠΟΥ
    {
      id: "beauty-lashlift",
      categoryId: "beauty",
      name: "Lash Lift & Βαφή Βλεφαρίδων",
      description:
        "Φυσική ανόρθωση, καμπυλότητα και ενδυνάμωση των δικών σας βλεφαρίδων. Περιλαμβάνεται δωρεάν η βαφή βλεφαρίδων για έντονο βλέμμα!",
      duration: "60 λεπτά",
      price: "45€",
      popular: true,
    },
    {
      id: "beauty-brows-combo",
      categoryId: "beauty",
      name: "Καθαρισμός, Σχηματισμός & Βαφή Φρυδιών",
      description:
        "Μελέτη συμμετρίας προσώπου, καθαρισμός/σχηματισμός (8€-12€) και ειδική βαφή φρυδιών (12€) ή ολοκληρωμένο πακέτο.",
      duration: "35 λεπτά",
      price: "17€",
      popular: true,
    },
    {
      id: "beauty-threading",
      categoryId: "beauty",
      name: "Αποτρίχωση με Κλωστή (Χείλος & Πρόσωπο)",
      description:
        "Παραδοσιακή τεχνική με κλωστή για απόλυτη ακρίβεια χωρίς ερεθισμούς σε άνω χείλος και πρόσωπο.",
      duration: "20 λεπτά",
      price: "8€ - 12€",
      popular: false,
    },
    {
      id: "beauty-facial-clean",
      categoryId: "beauty",
      name: "Βαθύς Καθαρισμός & Ενυδάτωση Προσώπου",
      description:
        "Εξειδικευμένες θεραπείες αισθητικής προσώπου, δερμοαπόξεση με διαμάντι (Diamond), peeling και θεραπείες Schrammek.",
      duration: "60 λεπτά",
      price: "Επικοινωνήστε",
      popular: false,
    },
  ] as ServiceItem[],

  // --- GALLERY / PORTFOLIO ΕΙΚΟΝΕΣ (@ellonails_beauty style) ---
  gallery: [
    {
      id: "g1",
      title: "Glazed Pearl & Powder Effect",
      category: "manicure",
      imageUrl:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g2",
      title: "Elegant French Twist & Almond Shape",
      category: "manicure",
      imageUrl:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g3",
      title: "Gel Extensions & Soft Ombre",
      category: "extensions",
      imageUrl:
        "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g4",
      title: "Seasonal Nude & Minimal Nail Art",
      category: "extensions",
      imageUrl:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g5",
      title: "Therapeutic & Spa Pedicure Care",
      category: "pedicure",
      imageUrl:
        "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g6",
      title: "Lash Lift, Brows & Facial Glow",
      category: "beauty",
      imageUrl:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    },
  ] as GalleryItem[],

  // --- ΠΡΑΓΜΑΤΙΚΟ ΥΦΟΣ ΚΡΙΤΙΚΩΝ ΠΕΛΑΤΩΝ (ΧΟΛΑΡΓΟΣ) ---
  testimonials: [
    {
      id: "t1",
      name: "Κατερίνα Μ.",
      service: "Ημιμόνιμο Μανικιούρ & Θεραπευτικό Πεντικιούρ",
      comment:
        "Το καλύτερο κατάστημα στον Χολαργό! Πεντακάθαρος χώρος ακριβώς δίπλα στο μετρό, ευγενέστατα κορίτσια και το ημιμόνιμο δεν παθαίνει απολύτως τίποτα για εβδομάδες.",
      rating: 5,
      date: "Google Review",
    },
    {
      id: "t2",
      name: "Αγγελική Δ.",
      service: "Τεχνητά Νύχια με Gel & Nail Art",
      comment:
        "Εξαιρετικές επαγγελματίες! Έκανα εφαρμογή gel με γαλλικό και το αποτέλεσμα είναι super φυσικό και κομψό. Έχουν τεράστια ποικιλία χρωμάτων και προσέχουν κάθε λεπτομέρεια.",
      rating: 5,
      date: "Google Review",
    },
    {
      id: "t3",
      name: "Νίκη Π.",
      service: "Lash Lift & Σχηματισμός Φρυδιών",
      comment:
        "Έμεινα ενθουσιασμένη με το Lash Lift και τον καθαρισμό φρυδιών! Πολύ προσεκτική δουλειά, όμορφο και ήρεμο περιβάλλον. Σίγουρα έγινε το σταθερό μου στέκι.",
      rating: 5,
      date: "Google Review",
    },
  ] as Testimonial[],

  // --- ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ (FAQS) ---
  faqs: [
    {
      question: "Πού ακριβώς βρίσκεται το ELLO BEAUTY και πώς έρχομαι;",
      answer:
        "Βρισκόμαστε στη Λεωφόρο Μεσογείων 248 στον Χολαργό (5η είσοδος Χολαργού), σε απόσταση αναπνοής από τη στάση του Μετρό «Χολαργός». Η πρόσβαση είναι πανεύκολη τόσο με μετρό και λεωφορεία όσο και με αυτοκίνητο.",
    },
    {
      question: "Ποιο είναι το ωράριο λειτουργίας σας;",
      answer:
        "Είμαστε ανοιχτά Τρίτη, Πέμπτη και Παρασκευή 10:00 - 20:00, Τετάρτη 10:00 - 18:00 και Σάββατο 09:00 - 17:00. Τη Δευτέρα και την Κυριακή το ινστιτούτο παραμένει κλειστό.",
    },
    {
      question: "Πώς μπορώ να κλείσω ραντεβού;",
      answer:
        "Μπορείτε να κλείσετε το ραντεβού σας τηλεφωνικά στο 210 6549430, μέσω της online φόρμας στην ιστοσελίδα μας, ή στέλνοντάς μας μήνυμα στο Instagram (@ellonails_beauty).",
    },
    {
      question: "Εκτός από νύχια, ποιες άλλες υπηρεσίες προσφέρετε;",
      answer:
        "Στο ELLO BEAUTY προσφέρουμε ολοκληρωμένη φροντίδα: σχηματισμό και βαφή φρυδιών, αποτρίχωση προσώπου με κλωστή ή κερί, Lash Lift βλεφαρίδων, καθώς και εξειδικευμένες θεραπείες αισθητικής προσώπου (βαθύς καθαρισμός, δερμοαπόξεση με διαμάντι, μεσοθεραπεία, peeling).",
    },
  ] as FAQItem[],
};
