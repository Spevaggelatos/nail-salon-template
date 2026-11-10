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
  // --- ΒΑΣΙΚΑ ΣΤΟΙΧΕΙΑ ΕΠΙΧΕΙΡΗΣΗΣ (NETA NAILS) ---
  business: {
    name: "Neta Nails",
    shortName: "Neta Nails",
    tagline: "Nails • Pedicure • Lashes & Brows • Waxing",
    logoUrl: "/images/netanails/logo.jpg",
    subtitle:
      "Το σύγχρονο nail lounge στον Χολαργό. Εξειδικευμένο μανικιούρ, θεραπευτικό πεντικιούρ, τεχνητά νύχια dipping & gel, lash lift και αποτρίχωση με βαθμολογία 4.9 ★ (267+ αξιολογήσεις).",
    rating: "4.9",
    reviewCount: 267,
    award: "Top Rated Salon • 4.9 ★ (267+ Κριτικές)",
  },

  // --- ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ & ΤΟΠΟΘΕΣΙΑ ---
  contact: {
    phone: "210 6512635",
    mobile: "210 6512635",
    whatsapp: "302106512635",
    email: "info@netanails.gr",
    address: {
      street: "Λεωφόρος Περικλέους 56",
      city: "Χολαργός, Αθήνα",
      postalCode: "155 61",
      area: "Χολαργός (Κεντρική Λεωφόρος)",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.896752762263!2d23.79978!3d38.00345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1985160803c0b%3A0x7d6f55562140bb93!2sLeof.%20Perikleous%2056%2C%20Cholargos%20155%2061!5e0!3m2!1sel!2sgr!4v1700000000000!5m2!1sel!2sgr",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Neta+Nails+Λεωφόρος+Περικλέους+56+Χολαργός",
    socials: {
      instagram: "https://www.instagram.com/netanails/",
      instagramHandle: "@netanails",
      facebook: "https://www.facebook.com/",
      treatwell: "https://widget.treatwell.gr/katasthma/neta-nails/",
    },
  },

  // --- ΩΡΑΡΙΟ ΛΕΙΤΟΥΡΓΙΑΣ ---
  openingHours: [
    { days: "Δευτέρα", hours: "Κλειστά" },
    { days: "Τρίτη - Παρασκευή", hours: "10:00 - 20:00" },
    { days: "Σάββατο", hours: "09:00 - 17:00" },
    { days: "Κυριακή", hours: "Κλειστά" },
  ],

  // --- ΧΡΩΜΑΤΙΚΟ ΣΤΥΛ & THEME ---
  theme: {
    accentColor: "terracotta",
    badgeText: "✨ 4.9 ★ Top Rated Nail Studio στον Χολαργό",
  },

  // --- ΑΝΑΚΟΙΝΩΣΗ HEADER ---
  announcement: {
    enabled: true,
    text: "💅 Neta Nails Χολαργός: Λ. Περικλέους 56 • Κλείστε άμεσα το ραντεβού σας!",
    linkText: "Κράτηση Online",
  },

  // --- STATS / TRUST INDICATORS ---
  stats: [
    { value: "4.9 ★", label: "Βαθμολογία (267+ Κριτικές)" },
    { value: "100%", label: "Αποστείρωση & Υγιεινή" },
    { value: "Top Trends", label: "Dipping, Nail Art & Gel" },
    { value: "Luxe Care", label: "Περιποίηση Άκρων & Spa" },
  ],

  // --- Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ ---
  features: [
    {
      title: "Εξειδικευμένες Τεχνικές Νυχιών",
      description:
        "Από κλασικό και express μανικιούρ έως ενισχυμένο dipping, τεχνητά νύχια gel και custom nail art που διαρκεί.",
      icon: "Sparkles",
    },
    {
      title: "Απόλυτη Υγιεινή & Αποστείρωση",
      description:
        "Αυστηρό πρωτόκολλο αποστείρωσης σε κάθε συνεδρία για την προστασία και την υγεία των φυσικών σας νυχιών.",
      icon: "ShieldCheck",
    },
    {
      title: "Κορυφαία Αξιολόγηση 4.9 ★",
      description:
        "Περισσότερες από 267 θετικές αξιολογήσεις επιβεβαιώνουν την άψογη εξυπηρέτηση, την ταχύτητα και την προσοχή στη λεπτομέρεια.",
      icon: "Award",
    },
    {
      title: "Ολοκληρωμένη Περιποίηση",
      description:
        "Συνδυάστε τα άκρα σας με θεραπευτικό πεντικιούρ, Lash Lift, Brow Lamination, αποτρίχωση με κερί/κλωστή ή χαλαρωτικό μασάζ.",
      icon: "HeartHandshake",
    },
  ],

  // --- ΚΑΤΗΓΟΡΙΕΣ ΥΠΗΡΕΣΙΩΝ (ΒΑΣΕΙ ΤΙΜΟΚΑΤΑΛΟΓΟΥ NETA NAILS) ---
  categories: [
    {
      id: "manicure",
      name: "Μανικιούρ & Τεχνητά",
      description: "Απλό, ημιμόνιμο, ενισχυμένο dipping, gel extensions & nail art.",
    },
    {
      id: "pedicure",
      name: "Πεντικιούρ",
      description: "Κλασικό, express, ημιμόνιμο, θεραπευτικό πεντικιούρ & spa παραφίνης.",
    },
    {
      id: "brows-lashes",
      name: "Φρύδια & Βλεφαρίδες",
      description: "Lash Lift, Brow Lamination και σχηματισμός φρυδιών με βαφή.",
    },
    {
      id: "waxing-massage",
      name: "Αποτρίχωση & Μασάζ",
      description: "Αποτρίχωση με κερί & κλωστή για γυναίκες & άνδρες, full body massage.",
    },
  ] as ServiceCategory[],

  // --- ΑΚΡΙΒΗΣ ΤΙΜΟΚΑΤΑΛΟΓΟΣ NETA NAILS (ΑΠΟ ΤΟ WIDGET) ---
  services: [
    // 1. ΜΑΝΙΚΙΟΥΡ & ΤΕΧΝΗΤΑ
    {
      id: "mani-express",
      categoryId: "manicure",
      name: "Manicure Express",
      description: "Γρήγορη και αποτελεσματική περιποίηση νυχιών και απλό βερνίκι.",
      duration: "30 λεπτά",
      price: "10.00€",
      popular: false,
    },
    {
      id: "mani-classic",
      categoryId: "manicure",
      name: "Manicure Κλασικό",
      description:
        "Ολοκληρωμένη περιποίηση επωνυχίων, σχηματισμός νυχιών, ενυδάτωση και απλό βερνίκι.",
      duration: "45 λεπτά",
      price: "15.00€",
      popular: false,
    },
    {
      id: "mani-semi-express",
      categoryId: "manicure",
      name: "Ημιμόνιμο Express",
      description: "Γρήγορη εφαρμογή ημιμόνιμου βερνικιού με άμεσο στέγνωμα.",
      duration: "30 λεπτά",
      price: "15.00€",
      popular: false,
    },
    {
      id: "mani-semi",
      categoryId: "manicure",
      name: "Ημιμόνιμο Μανικιούρ",
      description:
        "Πλήρης καθαρισμός επωνυχίων και άψογη εφαρμογή ημιμόνιμου χρώματος μακράς διάρκειας.",
      duration: "50 λεπτά",
      price: "23.00€",
      popular: true,
    },
    {
      id: "mani-semi-dipping",
      categoryId: "manicure",
      name: "Ημιμόνιμο Ενισχυμένο Dipping",
      description:
        "Ειδική τεχνική ενίσχυσης dipping για μέγιστη σκληρότητα, αντοχή και ανθεκτικότητα.",
      duration: "60 λεπτά",
      price: "28.00€",
      popular: true,
    },
    {
      id: "mani-fullset-gel",
      categoryId: "manicure",
      name: "Τοποθέτηση Τεχνητών Νυχιών",
      description:
        "Πλήρης επιμήκυνση και αρχιτεκτονική φόρμα με επαγγελματικό Gel για εντυπωσιακά νύχια.",
      duration: "110-120 λεπτά",
      price: "50.00€",
      popular: true,
    },
    {
      id: "mani-natural-overlay",
      categoryId: "manicure",
      name: "Φυσική Ενίσχυση Νυχιών",
      description:
        "Ενίσχυση του φυσικού νυχιού με gel για προστασία από σπασίματα.",
      duration: "60 λεπτά",
      price: "40.00€",
      popular: false,
    },
    {
      id: "mani-refill",
      categoryId: "manicure",
      name: "Συντήρηση Τεχνητών",
      description: "Ανανέωση σχήματος, γέμισμα ρίζας και νέο χρώμα.",
      duration: "60 λεπτά",
      price: "35.00€",
      popular: true,
    },
    {
      id: "mani-paraffin",
      categoryId: "manicure",
      name: "Θεραπεία Χεριών Παραφίνη",
      description: "Εντατική ενυδάτωση και βαθιά θρέψη για ξηρά και ταλαιπωρημένα χέρια.",
      duration: "20 λεπτά",
      price: "8.00€",
      popular: false,
    },
    {
      id: "mani-removal-semi",
      categoryId: "manicure",
      name: "Αφαίρεση Ημιμόνιμου",
      description: "Απαλή και ασφαλής αφαίρεση χωρίς φθορά της φυσικής πλάκας.",
      duration: "15 λεπτά",
      price: "5.00€",
      popular: false,
    },
    {
      id: "mani-removal-ext",
      categoryId: "manicure",
      name: "Αφαίρεση Τεχνητών + Φινίρισμα",
      description: "Πλήρης αφαίρεση τεχνητών και φινίρισμα φυσικού νυχιού.",
      duration: "30 λεπτά",
      price: "15.00€",
      popular: false,
    },
    {
      id: "mani-nailart",
      categoryId: "manicure",
      name: "Nail Art (ανά νύχι)",
      description: "Custom σχέδια, γραμμικά, γαλλικά twists, chrome & glitter.",
      duration: "10 λεπτά",
      price: "από 1.50€",
      popular: false,
    },

    // 2. ΠΕΝΤΙΚΙΟΥΡ
    {
      id: "pedi-express",
      categoryId: "pedicure",
      name: "Pedicure Express",
      description: "Γρήγορη φροντίδα νυχιών ποδιών και ανανέωση χρώματος.",
      duration: "20 λεπτά",
      price: "18.00€",
      popular: false,
    },
    {
      id: "pedi-classic",
      categoryId: "pedicure",
      name: "Pedicure Κλασικό",
      description:
        "Ολοκληρωμένη περιποίηση πέλματος, αφαίρεση σκληρύνσεων, καθαρισμός επωνυχίων και απλό βερνίκι.",
      duration: "45 λεπτά",
      price: "23.00€",
      popular: false,
    },
    {
      id: "pedi-semi-express",
      categoryId: "pedicure",
      name: "Pedicure Ημιμόνιμο Express",
      description: "Περιποίηση νυχιών και ημιμόνιμη βαφή ποδιών express.",
      duration: "35 λεπτά",
      price: "20.00€",
      popular: false,
    },
    {
      id: "pedi-semi",
      categoryId: "pedicure",
      name: "Pedicure Ημιμόνιμο",
      description:
        "Πλήρης περιποίηση πέλματος και ημιμόνιμο χρώμα μακράς διάρκειας με άμεσο στέγνωμα.",
      duration: "60 λεπτά",
      price: "28.00€",
      popular: true,
    },
    {
      id: "pedi-therapeutic",
      categoryId: "pedicure",
      name: "Pedicure Θεραπευτικό",
      description:
        "Εξειδικευμένη αντιμετώπιση υπερκερατώσεων, κάλων και σκληρύνσεων για απόλυτη ανακούφιση.",
      duration: "60 λεπτά",
      price: "25.00€",
      popular: true,
    },
    {
      id: "pedi-paraffin",
      categoryId: "pedicure",
      name: "Θεραπεία Ποδιών Παραφίνη",
      description: "Βαθιά ενυδάτωση και απαλότητα για σκασμένες φτέρνες και ξηρά πέλματα.",
      duration: "20 λεπτά",
      price: "8.00€",
      popular: false,
    },

    // 3. ΦΡΥΔΙΑ & ΒΛΕΦΑΡΙΔΕΣ
    {
      id: "lash-lift",
      categoryId: "brows-lashes",
      name: "Lash Lift Βλεφαρίδων",
      description: "Φυσική καμπυλότητα, ανόρθωση και όγκος στις δικές σας βλεφαρίδες.",
      duration: "45 λεπτά",
      price: "40.00€",
      popular: true,
    },
    {
      id: "brow-lamination",
      categoryId: "brows-lashes",
      name: "Brow Lamination",
      description: "Σταθεροποίηση και πειθάρχηση των τριχών των φρυδιών για πυκνό, ανορθωμένο αποτέλεσμα.",
      duration: "45 λεπτά",
      price: "40.00€",
      popular: true,
    },
    {
      id: "brow-shaping",
      categoryId: "brows-lashes",
      name: "Σχηματισμός Φρυδιών",
      description: "Καθαρισμός και γεωμετρικός σχηματισμός ανάλογα με τα χαρακτηριστικά σας.",
      duration: "10 λεπτά",
      price: "10.00€",
      popular: false,
    },
    {
      id: "brow-shaping-tint",
      categoryId: "brows-lashes",
      name: "Σχηματισμός Φρυδιών με Βαφή",
      description: "Σχηματισμός και ημιμόνιμη βαφή φρυδιών για έντονο, καλοσχηματισμένο βλέμμα.",
      duration: "15 λεπτά",
      price: "15.00€",
      popular: true,
    },

    // 4. ΑΠΟΤΡΙΧΩΣΗ & ΜΑΣΑΖ
    {
      id: "wax-legs-full",
      categoryId: "waxing-massage",
      name: "Αποτρίχωση με Κερί Πόδια (Ολόκληρα)",
      description: "Αποτελεσματική αποτρίχωση με υποαλλεργικό κερί για βελούδινο δέρμα.",
      duration: "45 λεπτά",
      price: "25.00€",
      popular: false,
    },
    {
      id: "wax-legs-half",
      categoryId: "waxing-massage",
      name: "Αποτρίχωση με Κερί Πόδια (Μισά)",
      description: "Αποτρίχωση γάμπες ή μηροί.",
      duration: "30 λεπτά",
      price: "15.00€",
      popular: false,
    },
    {
      id: "wax-arms",
      categoryId: "waxing-massage",
      name: "Αποτρίχωση με Κερί Χέρια",
      description: "Απαλότητα και καθαρό δέρμα χωρίς ερεθισμούς.",
      duration: "30 λεπτά",
      price: "12.00€",
      popular: false,
    },
    {
      id: "wax-underarms",
      categoryId: "waxing-massage",
      name: "Αποτρίχωση με Κερί Μασχάλες",
      description: "Γρήγορη και ανώδυνη αποτρίχωση μασχαλών.",
      duration: "15 λεπτά",
      price: "10.00€",
      popular: false,
    },
    {
      id: "thread-face",
      categoryId: "waxing-massage",
      name: "Αποτρίχωση με Κλωστή Πρόσωπο",
      description: "Παραδοσιακή τεχνική με κλωστή για απόλυτη ακρίβεια χωρίς ερεθισμούς.",
      duration: "30 λεπτά",
      price: "15.00€",
      popular: false,
    },
    {
      id: "thread-lip",
      categoryId: "waxing-massage",
      name: "Αποτρίχωση με Κλωστή Άνω/Κάτω Χείλος",
      description: "Γρήγορη αφαίρεση χνουδιού με κλωστή.",
      duration: "10 λεπτά",
      price: "5.00€",
      popular: false,
    },
    {
      id: "massage-fullbody",
      categoryId: "waxing-massage",
      name: "Full Body Massage",
      description: "Χαλαρωτικό μασάζ σε όλο το σώμα για εκτόνωση της έντασης και ευεξία.",
      duration: "60 λεπτά",
      price: "35.00€",
      popular: true,
    },
  ] as ServiceItem[],

  // --- GALLERY / LOOKBOOK (ΠΡΑΓΜΑΤΙΚΕΣ ΦΩΤΟΓΡΑΦΙΕΣ INSTAGRAM NETA NAILS) ---
  gallery: [
    {
      id: "g1",
      title: "Signature Nail Art & French Twist",
      category: "manicure",
      imageUrl: "/images/netanails/work-1.jpg",
    },
    {
      id: "g2",
      title: "Glazed Powder & Almond Gel Extensions",
      category: "manicure",
      imageUrl: "/images/netanails/work-2.jpg",
    },
    {
      id: "g3",
      title: "Bold Red Nails & Flawless Cuticles",
      category: "manicure",
      imageUrl: "/images/netanails/work-3.jpg",
    },
    {
      id: "g4",
      title: "Neta Nails Lounge & Reception",
      category: "manicure",
      imageUrl: "/images/netanails/salon-1.jpg",
    },
    {
      id: "g5",
      title: "Spa Pedicure & Therapeutic Care",
      category: "pedicure",
      imageUrl: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g6",
      title: "Lash Lift & Brow Lamination Glow",
      category: "brows-lashes",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    },
  ] as GalleryItem[],

  // --- ΚΡΙΤΙΚΕΣ ΠΕΛΑΤΩΝ NETA NAILS ---
  testimonials: [
    {
      id: "t1",
      name: "Χριστίνα Β.",
      service: "Ημιμόνιμο Dipping & Pedicure",
      comment:
        "Το αγαπημένο μου spot στον Χολαργό! Καταπληκτική δουλειά, τα νύχια κρατάνε 4 εβδομάδες χωρίς σπάσιμο. Οι κοπέλες είναι ευγενέστατες και ο χώρος πεντακάθαρος.",
      rating: 5,
      date: "Κριτική Treatwell / Google",
    },
    {
      id: "t2",
      name: "Ιωάννα Κ.",
      service: "Τοποθέτηση Τεχνητών Νυχιών",
      comment:
        "Πρώτη φορά τεχνητά νύχια που φαίνονται τόσο φυσικά και κομψά. Έχουν τεράστια ποικιλία χρωμάτων και το αποτέλεσμα ήταν ακριβώς αυτό που ζήτησα!",
      rating: 5,
      date: "Κριτική Treatwell / Google",
    },
    {
      id: "t3",
      name: "Ελένη Μ.",
      service: "Lash Lift & Σχηματισμός Φρυδιών",
      comment:
        "Απίστευτο αποτέλεσμα στο Lash Lift! Το βλέμμα μου άλλαξε τελείως χωρίς να χρειάζομαι μάσκαρα. Το προτείνω ανεπιφύλακτα!",
      rating: 5,
      date: "Κριτική Treatwell / Google",
    },
  ] as Testimonial[],

  // --- ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ (FAQS) ---
  faqs: [
    {
      question: "Πού βρίσκεται το Neta Nails στον Χολαργό;",
      answer:
        "Βρισκόμαστε στη Λεωφόρο Περικλέους 56 στον Χολαργό (Τ.Κ. 155 61), σε κεντρικό και πολύ εύκολα προσβάσιμο σημείο με άνετη στάθμευση.",
    },
    {
      question: "Ποιο είναι το ωράριο λειτουργίας;",
      answer:
        "Λειτουργούμε Τρίτη έως Παρασκευή 10:00 - 20:00 και Σάββατο 09:00 - 17:00. Δευτέρα και Κυριακή το κατάστημα είναι κλειστό.",
    },
    {
      question: "Πώς μπορώ να κλείσω ραντεβού;",
      answer:
        "Μπορείτε να κλείσετε ραντεβού online μέσα από την ιστοσελίδα μας, τηλεφωνικά στο 210 6512635 ή στέλνοντάς μας μήνυμα στο Instagram (@netanails).",
    },
    {
      question: "Τι είναι το ενισχυμένο Dipping;",
      answer:
        "Το dipping είναι μια πρωτοποριακή τεχνική ενίσχυσης με ειδική πούδρα που χαρίζει εξαιρετική σκληρότητα και αντοχή στα νύχια χωρίς να τα βαραίνει, ιδανική για εύθραυστα νύχια.",
    },
  ] as FAQItem[],
};
