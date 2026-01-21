export const translations = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      cv: "CV",
      connect: "Let's Connect"
    },
    banner: {
      tagline: "Welcome to my Portfolio",
      greeting: "Hi! I'm Maram",
      roles: ["web developer", "web designer", "front-end developer", "back-end developer"],
      description: "I develop modern web applications with a focus on clean architecture, performance, and maintainable code. I care about building reliable systems, not just good-looking interfaces.",
      connect: "Let's Connect"
    },
    topBanner: {
      message: "This portfolio is currently being updated. Some features may be incomplete, but feel free to explore."
    },
    skills: {
      title: "Skills",
      p1: "Full Stack Web Development with experience building structured, database-driven web applications.",
      p2: "Strong knowledge of HTML, CSS, JavaScript, and React for creating responsive, accessible user interfaces.",
      p3: "Back-end development using PHP and Laravel, including authentication, CRUD operations, and database integration with MySQL.",
      p4: "Experience with version control using Git and GitHub, and collaborative development workflows.",
      p5: "Familiar with debugging, testing, and iterative development in real-world projects.",
      carousel: [
        "Back-end", "Front-end", "Performance & Responsiveness", "UI implementation", "Full-stack", "CMS"
      ],
      categories: {
        tools: { title: "Tools", items: ["npm", "Environment configs", "Git/GitHub", "Debugging"] },
        databases: { title: "Databases", items: ["MySQL/SQL", "Database Design Basics", "CRUD Operations", "Relations & Constraints"] },
        webFundamentals: { title: "Web Fundamentals", items: ["Responsive Layouts", "Accessibility Basics", "Basic Security"] },
        backEnd: { title: "Back-end", items: ["PHP", "Laravel", "REST APIs", "Authentication & Authorization", "Session Management"] }
      }
    },
    projects: {
      title: "Projects & Case Studies",
      description: "Selected projects and upcoming case studies. Some entries are currently in progress and will be expanded with full technical breakdowns.",
      tabs: { all: "All", react: "React", laravel: "Laravel" },
      status: {
        completed: "Completed",
        wip: "Work in Progress",
        live: "Live",
        placeholder: "Coming Soon"
      },
      headers: {
        technologies: "Technologies Used:",
        problem: "Problem",
        solution: "Solution",
        outcome: "Outcome",
        learned: "What I Learned",
        back: "Back to Projects",
        viewLive: "View Live",
        viewSource: "View Source",
        clickEnlarge: "Click to enlarge"
      }
    },
    contact: {
      title: "Get In Touch",
      placeholders: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone No.",
        message: "Message"
      },
      button: { send: "Send", sending: "Sending..." },
      messages: {
        incomplete: "Please complete all fields.",
        success: "Message sent successfully!",
        error: "Something went wrong, please try again later."
      }
    },
    current: {
      title: "Currently Working On",
      subtitle: "Coding in Public | Updated Monthly",
      lastUpdate: "Last update: Jan 2026",
      stages: {
        building: "Building",
        backend: "Backend Development",
        frontend: "Frontend Development",
        planning: "Planning"
      },
      items: {
        "lang-btn": { title: "Language changer Button", desc: "Button to change the language of the portfolio website" },
        grocery: { title: "Grocery/Kitchen Inventory Tracker", desc: "Real-time pantry management with expiration alerts and auto shopping lists" },
        library: { title: "Book/Manga Library Tracker", desc: "Personal collection manager with reading progress, ratings, and lending logs" },
        calendar: { title: "Content Creation Calendar", desc: "Blog/social media scheduler with performance analytics and idea board" }
      }
    },
    cv: {
      backButton: "Back to Portfolio",
      role: "Full Stack Web Developer",
      download: "DOWNLOAD RESUME",
      about: {
        title: "ABOUT ME",
        greeting: "Hello, I'm Maram Aouini!",
        p1: "I am a Full Stack Web Developer focused on building reliable, user-friendly web applications using React, PHP, Laravel, and MySQL. I hold certifications in Full Stack and Back End Development from Talentform and have hands-on experience working with real-world projects.",
        p2: "Coming from a background in technical assistance and customer service, I combine strong problem-solving skills with clear communication and a user-centric mindset. I enjoy turning complex requirements into clean, maintainable solutions that actually work."
      },
      personalInfo: {
        title: "personal information",
        labels: {
          name: "FULL NAME",
          dob: "D.O.B.",
          address: "ADDRESS",
          email: "E-MAIL",
          phone: "PHONE",
          freelance: "FREELANCE"
        },
        values: {
          freelance: "Available"
        }
      },
      languages: {
        title: "languages",
        items: [
          { name: "English" },
          { name: "Italian" },
          { name: "Arabic" },
          { name: "Chinese" }
        ],
        levels: { native: "native", fluent: "fluent", intermediate: "intermediate", beginner: "beginner" }
      },
      certifications: {
        title: "CERTIFICATIONS & TRAINING",
        items: [
          { title: "Full Stack Web Developer", desc: "Comprehensive training in modern web technologies including HTML5, CSS3, JavaScript ES6+, React, PHP, and MySQL." },
          { title: "Back End Developer", desc: "Focused curriculum on server-side programming, database management, API development, and security best practices." }
        ]
      },
      strengths: {
        title: "KEY TECHNICAL STRENGTHS",
        items: [
          "Ability to translate requirements into functional web solutions",
          "Strong problem-solving approach to debugging and errors",
          "Experience working with full authentication flows",
          "User-focused mindset from customer support background"
        ]
      },
      focus: {
        title: "CURRENT TECHNICAL FOCUS",
        items: [
          "Improving Laravel authentication and database relationships",
          "Strengthening React component architecture",
          "Practicing clean, maintainable code patterns",
          "Exploring performance optimization and best practices"
        ]
      },
      experience: {
        title: "WORK EXPERIENCE",
        items: [
          {
            title: "Web Designer",
            desc: "Contributed to web development projects for an international startup during an Erasmus traineeship. Built and customized responsive websites using Framer and WordPress, with rapid prototyping and testing via Replit in a remote team environment."
          },
          {
            title: "Warehouse Worker",
            desc: "Package management and goods handling through digital systems. Warehouse organization, compliance with safety procedures, and operational problem resolution."
          },
          {
            title: "Call Center, Technical Assistance",
            desc: "Technical assistance via inbound calls for electricity and gas utilities, invoice analysis, consumption monitoring, tariff plans, and energy sector documentation management."
          },
          {
            title: "Call Center, Technical Assistance",
            desc: "Technical assistance via inbound calls, invoice analysis, PayTV troubleshooting, TV schedule information, packages and documentation related to pay TV, CAM and various decoders."
          }
        ]
      }
    },
    // PROJECTS CONTENT - KEYED BY PROJECT ID
    projects_content: {
      1: {
        title: "Responsive Portfolio Interface",
        shortDescription: "My personal portfolio, built and deployed with React.",
        fullDescription: [
          "A fully responsive personal portfolio website built with React and Bootstrap. Showcases skills, projects, and contact information. Live demo available, with source code hosted on GitHub.",
          "This portfolio is a living project, continuously improved with new features and refactors."
        ],
        psa: {
          problem: "The goal was to present my profile, skills, and projects in a clean, professional way that is easy to navigate and scalable over time.",
          solution: "I designed and developed a responsive portfolio using React, focusing on component reusability, clear information hierarchy, and smooth user experience.",
          outcome: "A fast, accessible portfolio that clearly communicates my skills and can be extended with new projects and features."
        },
        learned: [
          "Managing state across components",
          "Creating reusable UI components",
          "Debugging async logic",
          "Testing React hooks",
          "Responsive layouts with Flexbox/Grid",
          "Using modals and carousels",
          "Integrating libraries like Bootstrap and icons",
          "Conditional rendering based on data",
          "Optimizing component performance",
          "Organizing project data dynamically"
        ]
      },
      2: {
        title: "404 Cat-Astrophe Interactive Page",
        shortDescription: "An interactive, animated 404 page with draggable cats and surprise Easter eggs.",
        fullDescription: [
          "This project is a fully interactive 404 error page built in React. Beyond a simple error message, it includes draggable elements, randomized animations, and a hidden Easter egg mode with a 10% chance of unlocking a secret message for playful user engagement.",
          "Try visiting the page multiple times—you might just unlock a secret!",
          "The page handles complex animation sequences, state management for multiple dynamic elements, andensures smooth performance even with overlapping timers and transitions.",
          "It demonstrates advanced React skills including hooks, useRef management, useLayoutEffect for layout measurement, and precise control over component mounting and animations."
        ],
        psa: {
          problem: "The goal was to create an engaging, interactive 404 page while maintaining smooth performance and predictable component behavior. Challenges included coordinating multiple animations, preventing layout flickering, and managing dynamic state for multiple draggable elements.",
          solution: "Implemented a controlled animation sequence with useLayoutEffect and useEffect to manage timing, used refs to track draggable cats and forbidden zones, and created fallback logic to ensure stable rendering. Added randomized messages and Easter eggs for enhanced user experience.",
          outcome: "Resulting page is visually dynamic, fully interactive, and robust against routing edge cases. Users can play with draggable cats, experience Easter egg surprises, and navigate back safely. The codebase now includes reusable patterns for complex interactive elements in React."
        },
        learned: [
          "Coordinated complex animations using React hooks.",
          "Managed multiple refs for interactive elements.",
          "Handled timers safely to avoid glitches.",
          "Created playful yet performant UI.",
          "Combined UX delight with technical stability."
        ]
      },
      3: {
        title: "Full-Stack Web Platform",
        shortDescription: "(Case Study in Progress)",
        fullDescription: [
          "Full details, source code, and live demo will be added soon."
        ],
        psa: null,
        learned: []
      },
      4: {
        title: "Grocery Tracking App",
        shortDescription: "(Coming Soon)",
        fullDescription: [
          "Full details, source code, and live demo will be added soon."
        ],
        psa: null,
        learned: []
      },
      5: {
        title: "User Management System",
        shortDescription: "(Planned Case Study)",
        fullDescription: [
          "Full details, source code, and live demo will be added soon."
        ],
        psa: null,
        learned: []
      }
    },
    // WORKING ON CONTENT - KEYED BY ID STRING
    working_on_content: {
      "lang-btn": {
        title: "Language Changer Button",
        description: "A feature implementation granting users the ability to toggle the application language between English and Italian. Utilizes React Context API for global state management and dynamic content rendering.",
        roadmap: ["Implement Context", "Create Switcher UI", "Add Support for EN/IT", "Persist Choice"]
      },
      "grocery": {
        title: "Grocery/Kitchen Inventory Tracker",
        description: "A full-stack application designed to help households manage food inventory, reduce waste, and simplify shopping. Features include barcode scanning and expiration notifications.",
        roadmap: ["Database Schema Design", "API Development", "Frontend Implementation", "Barcode Integration"]
      },
      "library": {
        title: "Book/Manga Library Tracker",
        description: "An organizational tool for book and manga enthusiasts to track their collections and reading habits. Allows users to categorize titles, track reading progress, and rate series.",
        roadmap: ["UI Design", "Google Books API Integration", "User Auth", "Reading Log Feature"]
      },
      "calendar": {
        title: "Content Creation Calendar",
        description: "A productivity tool for content creators to plan and schedule posts. Includes a drag-and-drop calendar, idea board for brainstorming, and basic analytics.",
        roadmap: ["Calendar View Component", "Drag & Drop Logic", "Post Metadata Form", "Analytics Dashboard"]
      }
    },
  },
  it: {
    nav: {
      home: "Home",
      skills: "Competenze",
      projects: "Progetti",
      cv: "CV",
      connect: "Connettiamoci"
    },
    banner: {
      tagline: "Benvenuto nel mio Portfolio",
      greeting: "Ciao! Sono Maram",
      roles: ["sviluppatrice web", "web designer", "sviluppatrice front-end", "sviluppatrice back-end"],
      description: "Sviluppo applicazioni web moderne concentrandomi su architettura pulita, prestazioni e codice manutenibile. Mi preoccupo di costruire sistemi affidabili, non solo interfacce belle da vedere.",
      connect: "Connettiamoci"
    },
    topBanner: {
      message: "Questo portfolio è attualmente in aggiornamento. Alcune funzionalità potrebbero essere incomplete, ma sentiti libero di esplorare."
    },
    skills: {
      title: "Competenze",
      p1: "Sviluppo Web Full Stack con esperienza nella costruzione di applicazioni strutturate e basate su database.",
      p2: "Forte conoscenza di HTML, CSS, JavaScript e React per creare interfacce utente adattabili a tutti i dispositivi e accessibili.",
      p3: "Sviluppo Back-end usando PHP e Laravel, inclusa autenticazione, operazioni CRUD e integrazione database con MySQL.",
      p4: "Esperienza con controllo versione usando Git e GitHub, e flussi di lavoro collaborativi.",
      p5: "Familiarità con debugging, testing e sviluppo iterativo in progetti reali.",
      carousel: [
        "Back-end", "Front-end", "Performance & Responsive Design", "Implementazione interfacce UI", "Full-stack", "CMS"
      ],
      categories: {
        tools: { title: "Strumenti", items: ["npm", "Configurazioni ambiente", "Git/GitHub", "Debugging"] },
        databases: { title: "Database", items: ["MySQL/SQL", "Fondamenti di progettazione database", "Operazioni CRUD", "Relazioni & Vincoli"] },
        webFundamentals: { title: "Fondamenti Web", items: ["Layout Responsive", "Basi Accessibilità", "Nozioni base di sicurezza"] },
        backEnd: { title: "Back-end", items: ["PHP", "Laravel", "REST APIs", "Autenticazione & Autorizzazione", "Gestione Sessioni"] }
      }
    },
    projects: {
      title: "Progetti e Case Studies",
      description: "Progetti selezionati e case studies in arrivo. Alcune voci sono attualmente in corso e verranno ampliate con approfondimenti tecnici completi.",
      tabs: { all: "Tutti", react: "React", laravel: "Laravel" },
      status: {
        completed: "Completato",
        wip: "In Lavorazione",
        live: "Online",
        placeholder: "In Arrivo"
      },
      headers: {
        technologies: "Tecnologie Utilizzate:",
        problem: "Problema",
        solution: "Soluzione",
        outcome: "Risultato",
        learned: "Cosa ho imparato",
        back: "Torna ai Progetti",
        viewLive: "Vedi Live",
        viewSource: "Vedi Codice",
        clickEnlarge: "Clicca per ingrandire"
      }
    },
    contact: {
      title: "Contattami",
      placeholders: {
        firstName: "Nome",
        lastName: "Cognome",
        email: "Indirizzo Email",
        phone: "N. Telefono",
        message: "Messaggio"
      },
      button: { send: "Invia", sending: "Invio in corso..." },
      messages: {
        incomplete: "Per favore compila tutti i campi.",
        success: "Messaggio inviato con successo!",
        error: "Qualcosa è andato storto, per favore riprova più tardi."
      }
    },
    current: {
      title: "Attualmente al Lavoro su",
      subtitle: "Sviluppo in Pubblico | Aggiornato Mensilmente",
      lastUpdate: "Ultimo aggiornamento: Gen 2026",
      stages: {
        building: "In Costruzione",
        backend: "Sviluppo Back-end",
        frontend: "Sviluppo Front-end",
        planning: "Pianificazione"
      },
      items: {
        "lang-btn": { title: "Pulsante Cambio Lingua", desc: "Pulsante per cambiare la lingua del sito portfolio" },
        grocery: { title: "Gestione Inventario Cucina e Spesa", desc: "Gestione dispensa in tempo reale con avvisi scadenza e liste spesa automatiche" },
        library: { title: "Gestione Libreria Libri e Manga", desc: "Gestore collezione personale con progresso lettura, valutazioni e registro prestiti" },
        calendar: { title: "Calendario Creazione Contenuti", desc: "Pianificatore blog/social media con analisi prestazioni e bacheca idee" }
      }
    },
    cv: {
      backButton: "Torna al Portfolio",
      role: "Sviluppatrice Web Full Stack",
      download: "SCARICA CURRICULUM",
      about: {
        title: "CHI SONO",
        greeting: "Ciao, sono Maram Aouini!",
        p1: "Sono una sviluppatrice Web Full Stack specializzata nella creazione di applicazioni web affidabili e user-friendly usando React, PHP, Laravel e MySQL. Possiedo certificazioni in Sviluppo Full Stack e Back End presso Talentform e ho esperienza pratica su progetti reali.",
        p2: "Provenendo da un background di assistenza tecnica e servizio clienti, unisco forti capacità di problem-solving a una comunicazione chiara e una mentalità orientata all'utente. Mi piace trasformare requisiti complessi in soluzioni pulite e manutenibili che funzionano davvero."
      },
      personalInfo: {
        title: "informazioni personali",
        labels: {
          name: "NOME COMPLETO",
          dob: "DATA DI NASCITA",
          address: "INDIRIZZO",
          email: "E-MAIL",
          phone: "TELEFONO",
          freelance: "FREELANCE"
        },
        values: {
          freelance: "Disponibile"
        }
      },
      languages: {
        title: "lingue",
        items: [
          { name: "Inglese" },
          { name: "Italiano" },
          { name: "Arabo" },
          { name: "Cinese" }
        ],
        levels: { native: "madrelingua", fluent: "fluente", intermediate: "intermedio", beginner: "base" }
      },
      certifications: {
        title: "CERTIFICAZIONI E FORMAZIONE",
        items: [
          { title: "Sviluppatore Web Full Stack", desc: "Formazione completa in tecnologie web moderne inclusi HTML5, CSS3, JavaScript ES6+, React, PHP e MySQL." },
          { title: "Sviluppatore Back End", desc: "Curriculum focalizzato su programmazione server-side, gestione database, sviluppo API e best practices di sicurezza." }
        ]
      },
      strengths: {
        title: "PUNTI DI FORZA TECNICI",
        items: [
          "Capacità di tradurre requisiti in soluzioni web funzionali",
          "Forte approccio al problem-solving per debugging ed errori",
          "Esperienza con flussi di autenticazione completi",
          "Mentalità incentrata sull'utente derivante dal background nel supporto clienti"
        ]
      },
      focus: {
        title: "FOCUS TECNICO ATTUALE",
        items: [
          "Miglioramento autenticazione Laravel e relazioni database",
          "Rafforzamento architettura componenti React",
          "Pratica di pattern di codice pulito e manutenibile",
          "Esplorazione ottimizzazione performance e best practices"
        ]
      },
      experience: {
        title: "ESPERIENZA LAVORATIVA",
        items: [
          {
            title: "Web Designer",
            desc: "Contribuito a progetti di sviluppo web per una startup internazionale durante un tirocinio Erasmus. Costruito e personalizzato siti responsive usando Framer e WordPress, con prototipazione rapida e testing via Replit in un ambiente remoto."
          },
          {
            title: "Addetta al Magazzino",
            desc: "Gestione pacchi e movimentazione merci tramite sistemi digitali. Organizzazione magazzino, rispetto procedure sicurezza e risoluzione problemi operativi."
          },
          {
            title: "Call Center, Assistenza Tecnica",
            desc: "Assistenza tecnica via chiamate inbound per utenze luce e gas, analisi fatture, monitoraggio consumi, piani tariffari e gestione documentazione settore energetico."
          },
          {
            title: "Call Center, Assistenza Tecnica",
            desc: "Assistenza tecnica via chiamate inbound, analisi fatture, troubleshooting PayTV, informazioni palinsesto, pacchetti e documentazione relativa a pay TV, CAM e vari decoder."
          }
        ]
      }
    },
    // PROJECTS CONTENT - ITALIAN
    projects_content: {
      1: {
        title: "Interfaccia Portfolio Responsiva",
        shortDescription: "Il mio portfolio personale, costruito e pubblicato con React.",
        fullDescription: [
          "Un sito web portfolio personale completamente responsivo costruito con React e Bootstrap. Mostra competenze, progetti e informazioni di contatto. Demo live disponibile, con codice sorgente ospitato su GitHub.",
          "Questo portfolio è un progetto in evoluzione, continuamente migliorato con nuove funzionalità e refactoring."
        ],
        psa: {
          problem: "L'obiettivo era presentare il mio profilo, le competenze e i progetti in modo pulito e professionale, facile da navigare e scalabile nel tempo.",
          solution: "Ho progettato e sviluppato un portfolio responsivo utilizzando React, concentrandomi sulla riutilizzabilità dei componenti, una chiara gerarchia delle informazioni e un'esperienza utente fluida.",
          outcome: "Un portfolio veloce e accessibile che comunica chiaramente le mie competenze e può essere esteso con nuovi progetti e funzionalità."
        },
        learned: [
          "Gestione dello stato tra i componenti",
          "Creazione di componenti UI riutilizzabili",
          "Debug della logica asincrona",
          "Testing degli hook di React",
          "Layout responsivi con Flexbox/Grid",
          "Utilizzo di modali e caroselli",
          "Integrazione di librerie come Bootstrap e icone",
          "Rendering condizionale basato sui dati",
          "Ottimizzazione delle prestazioni dei componenti",
          "Organizzazione dinamica dei dati del progetto"
        ]
      },
      2: {
        title: "Pagina Interattiva 404 Cat-Astrophe",
        shortDescription: "Una pagina 404 interattiva e animata con gatti trascinabili e Easter egg a sorpresa.",
        fullDescription: [
          "Questo progetto è una pagina di errore 404 completamente interattiva costruita in React. Oltre a un semplice messaggio di errore, include elementi trascinabili, animazioni casuali e una modalità 'Easter egg' nascosta con il 10% di possibilità di sbloccare un messaggio segreto per coinvolgere l'utente.",
          "Prova a visitare la pagina più volte: potresti sbloccare un segreto!",
          "La pagina gestisce sequenze di animazione complesse, gestione dello stato per multipli elementi dinamici e garantisce prestazioni fluide anche con timer e transizioni sovrapposte.",
          "Dimostra competenze avanzate di React, inclusi hook, gestione useRef, useLayoutEffect per la misurazione del layout e controllo preciso sul mounting e le animazioni dei componenti."
        ],
        psa: {
          problem: "L'obiettivo era creare una pagina 404 coinvolgente e interattiva mantenendo prestazioni fluide e un comportamento prevedibile dei componenti. Le sfide includevano il coordinamento di animazioni multiple, la prevenzione dello sfarfallio del layout e la gestione dello stato dinamico per più elementi trascinabili.",
          solution: "Implementata una sequenza di animazione controllata con useLayoutEffect e useEffect per gestire i tempi, utilizzati ref per tracciare i gatti trascinabili e le zone proibite, e creata una logica di fallback per garantire un rendering stabile. Aggiunti messaggi casuali ed Easter egg per una migliore esperienza utente.",
          outcome: "La pagina risultante è visivamente dinamica, completamente interattiva e robusta contro i casi limite di routing. Gli utenti possono giocare con i gatti trascinabili, scoprire sorprese Easter egg e navigare indietro in sicurezza. Il codice include ora pattern riutilizzabili per elementi interattivi complessi in React."
        },
        learned: [
          "Coordinamento di animazioni complesse usando gli hook di React.",
          "Gestione di ref multipli per elementi interattivi.",
          "Gestione di timer sicura per evitare glitch.",
          "Creazione di UI giocosa ma performante.",
          "Combinazione di divertimento UX con stabilità tecnica."
        ]
      },
      3: {
        title: "Piattaforma Web Full-Stack",
        shortDescription: "(Case Study in Lavorazione)",
        fullDescription: [
          "Dettagli completi, codice sorgente e demo live verranno aggiunti presto."
        ],
        psa: null,
        learned: []
      },
      4: {
        title: "App Tracciamento Spesa",
        shortDescription: "(In Arrivo)",
        fullDescription: [
          "Dettagli completi, codice sorgente e demo live verranno aggiunti presto."
        ],
        psa: null,
        learned: []
      },
      5: {
        title: "Sistema Gestione Utenti",
        shortDescription: "(Case Study Pianificato)",
        fullDescription: [
          "Dettagli completi, codice sorgente e demo live verranno aggiunti presto."
        ],
        psa: null,
        learned: []
      }
    },
    // WORKING ON CONTENT - ITALIAN
    working_on_content: {
      "lang-btn": {
        title: "Pulsante Cambio Lingua",
        description: "Implementazione di una funzionalità che permette agli utenti di cambiare la lingua dell'applicazione tra Inglese e Italiano. Utilizza React Context API per la gestione dello stato globale.",
        roadmap: ["Implementare Context", "Creare UI Switcher", "Aggiungere Supporto EN/IT", "Salvare Preferenza"]
      },
      "grocery": {
        title: "Tracker Inventario Cucina/Spesa",
        description: "Un'applicazione full-stack progettata per aiutare le famiglie a gestire l'inventario alimentare, ridurre gli sprechi e semplificare la spesa con notifiche di scadenza.",
        roadmap: ["Design Schema Database", "Sviluppo API", "Implementazione Frontend", "Integrazione Barcode"]
      },
      "library": {
        title: "Tracker Libreria Libri/Manga",
        description: "Uno strumento organizzativo per tracciare collezioni e abitudini di lettura. Permette di categorizzare titoli, tracciare il progresso e valutare serie.",
        roadmap: ["Design UI", "Integrazione API Google Books", "Autenticazione Utente", "Registro Letture"]
      },
      "calendar": {
        title: "Calendario Creazione Contenuti",
        description: "Uno strumento di produttività per pianificare e programmare post. Include un calendario drag-and-drop e una bacheca idee per brainstorming.",
        roadmap: ["Componente Calendario", "Logica Drag & Drop", "Form Metadati Post", "Dashboard Analisi"]
      }
    }
  }
};
