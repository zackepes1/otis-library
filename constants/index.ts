import { wadsworth, slater, florence, dpnc, nlms, oldstate, childrens, map1, map2, map3, map4, espan, flag, english, health, law, consumer, government, benefits, jobs, house, education, tech, facebook, instagram, youtube, coffee, techclass, steamboat, passes, newsletter, printer, readnext, hoopla, libby, rickdawn, palaceproject, staysane, legalclinic, monica, sunday, norwichgold, adwoa, nfa1, nfa2, nfa3, nfa4, knittersgroup, marianne, bartandlori, norwichbookies } from "../assets";

export const general = [
  {
    id: 1,
    name: "FAQ's",
    link: "/faq",
    desc: "Find answers to our frequently asked questions."
  },
  {
    id: 2,
    name: "Hours, Parking, & Bookdrops",
    link: "/hpb",
    desc: "Hours of operation, parking, and bookdrop locations.",
  },
  {
      id: 3,
      name: "Call Ahead Pickup",
      link: "/call-ahead",
      desc: "We offer call ahead pickup for books and media."
    },
    {
      id: 4,
      name: "Friends of Otis Library",
      link: "/friends-of-otis",
      desc: "Find out more about the friends of Otis Library."
    },
    {
      id: 5,
      name: "En Español",
      link: "/en-espanol",
      desc: "Support material and helpful documentation for spanish speaking individuals."
    },
    {
      id: 6,
      name: "Policies",
      link: "/policies",
      desc: "Learn about Otis Library's policies, including fees and rules of conduct."
    }

]
export const services = [
  {
    id: 1,
    name: "Home Delivery",
    link: "/home-delivery",
    desc: "Details about our home delivery program for patrons who cannot visit."
  },
  {
    id: 2,
    name: "Text Notifications",
    link: "/text-notifications",
    desc: "We offer text notifications, subscribe now!",
  },
  {
      id: 3,
      name: "Passports",
      link: "/passports",
      desc: "Find out about our passport application process."
    },
    {
      id: 4,
      name: "Temporary Library Card",
      link: "/temporary-card",
      desc: "Apply for a temporary library card."
    },
    {
      id: 5,
      name: "Mobile Printing/Print from Home",
      link: "https://www.printeron.net/system/printspot/interface/select_file.jsp?protocolSwitched=true&url=otis%2Fmain-library",
      desc: "Print to the library's printers from anywhere!"
    },
    {
      id: 6,
      name: "Literacy Volunteers",
      link: "/literacy-volunteers",
      desc: "Get assistance with learning the english language."
    },
    {
      id: 7,
      name: "Notary Public",
      link: "/notary-public",
      desc: "Otis Library provides limited Notary Services as a courtesy to patrons."
    },
    {
      id: 8,
      name: "Meeting Spaces",
      link: "/meeting-rooms",
      desc: "Learn how to book a meeting space at Otis Library."
    },
    {
      id: 9,
      name: "Passes to Local Attractions",
      link: "/museum-passes",
      desc: "Otis Library offers passes to a variety of local attractions"
    }

]
export const booksandmore = [
  {
    id: 1,
    name: "Catalog",
    link: "https://nw.catalog.lionlibraries.org/",
    desc: "Explore our catalog and place holds on books."
  },
  {
    id: 2,
    name: "What to Read Next",
    link: "/read-next",
    desc: "Looking for something new to read? Get help from our staff here.",
  },
  {
      id: 3,
      name: "Downloadables",
      link: "/downloadables",
      desc: "Check out our downloadable content!"
    },
    {
      id: 4,
      name: "On Exhibit at Otis Library",
      link: "/on-exhibit",
      desc: "Find out what's on display in the library's atrium."
    },
    {
      id: 5,
      name: "Donor Spotlight",
      link: "/donor-spotlight",
      desc: "Become an Otis Library supporter."
    }
]
export const resources = [
  {
    id: 1,
    name: "Citizenship & Immigration",
    link: "/citizenship",
    desc: "Get assistance with citizenship."
  },
  {
    id: 2,
    name: "Ask a Librarian",
    link: "/ask-a-librarian",
    desc: "Looking for something new to read? Get help from our staff here.",
  },
  {
      id: 3,
      name: "Learn a Language",
      link: "/learn-a-language",
      desc: "Get assistance with learning english."
    },
    {
      id: 4,
      name: "Local Historical Photos",
      link: "/local-photos",
      desc: "Find out what's on display in the library's atrium."
    },
    {
      id: 5,
      name: "Newsletter",
      link: "/newsletter",
      desc: "Stay up to date on everything Otis Library has to offer by signing up for our emails!"
    },
    {
      id: 6,
      name: "Board Meetings",
      link: "/contact-us#board",
      desc: "Find details of board meeting agendas and minutes here."
    },
    {
      id: 7,
      name: "Employment & Educational Resources",
      link: "/employment",
      desc: "We offer resources for adults and children for employment and educational needs."
    },
    {
      id: 8,
      name: "Misinformation Resources",
      link: "/misinformation",
      desc: "We are committed to stopping the spread of misinformation."
    },
]
export const departments = [
  {
    id: 1,
    name: "Adult Programs",
    link: "/adult",
    desc: "Check out programs that are curated for adults!"
  },
  {
    id: 2,
    name: "'Tweens and Teens",
    link: "/teens",
    desc: "Stop in and stay awhile! We offer a wide variety of books, graphic novels, programs, and crafts for tweens and teens.",
  },
  {
      id: 3,
      name: "Children's",
      link: "/childrens",
      desc: "Join us at the library for storytimes, crafts, book clubs and special guest programs of nature, art, music and more!"
    },
    {
      id: 4,
      name: "Geneology",
      link: "/geneology",
      desc: "Our collection focuses most intensely on the history and families of Norwich and its surrounding towns."
    },

]

export const nav = [
    {
      id: 1,
      name: "General",
      submenu: true,
        sublinks: 
        [
          { name: "FAQ's", link: "/faq" },
          { name: "Hours, Parking, & Bookdrops", link: "/hpb" },
          { name: "Call Ahead Pickup", link: "/call-ahead" },
          { name: "Friends of Otis Library", link: "/friends-of-otis" },
          { name: "En Español", link: "/en-espanol" },
          { name: "Policies", link: "/policies" },
        ],
      },
      {
        id: 2,
        name: "Services",
        submenu: true,
          sublinks: 
          [
            { name: "Home Delivery", link: "/home-delivery" },
            { name: "Sign up for Text Notifications", link: "/text-notifications" },
            { name: "Passports", link: "/passports" },
            { name: "Temporary Library Card", link: "/temporary-card" },
            { name: "Mobile Printing/Print from Home", link: "https://www.printeron.net/system/printspot/interface/select_file.jsp?protocolSwitched=true&url=otis%2Fmain-library" },
            { name: "Literacy Volunteers", link: "/literacy-volunteers" },
            { name: "Notary Public", link: "/notary-public" },
            { name: "Meeting Spaces", link: "/meeting-rooms" },
            { name: "Passes to Local Attractions", link: "/museum-passes" },
          ],
        },
        {
          id: 3,
          name: "Books",
          submenu: true,
            sublinks: 
            [
              { name: "Catalog", link: "https://nw.catalog.lionlibraries.org/" },
              { name: "What to Read Next", link: "/read-next" },
              { name: "Downloadables", link: "/downloadables" },
              { name: "On Exhibit at Otis Library", link: "/on-exhibit" },
              { name: "Donor Spotlight", link: "/donor-spotlight" },
            ],
          },
          {
            id: 4,
            name: "Resources",
            submenu: true,
              sublinks: 
              [
                { name: "Citizenship & Immigration", link: "/citizenship" },
                { name: "Ask a Librarian", link: "/ask-a-librarian" },
                { name: "Learn a Language", link: "/learn-a-language" },
                { name: "Local Historical Photos", link: "/local-photos" },
                { name: "Newsletter", link: "/newsletter" },
                { name: "Board Meetings", link: "/contact-us#board" },
                { name: "Employment & Educational Resources", link: "/employment" },
                { name: "Misinformation Resources", link: "/misinformation" },
              ],
            },
            {
              id: 5,
              name: "Departments",
              submenu: true,
                sublinks: 
                [
                  { name: "Adult Programs", link: "/adult" },
                  { name: "'Tweens and Teens", link: "/teens" },
                  { name: "Children's", link: "/childrens" },
                  { name: "Geneology", link: "/geneology" },
                ],
              },
  ];
  export const adultprograms = [
    {
      id: 9,
      title: "From Clutter to Clarity with Monica Jenkins",
      date: "Thursday, January 4, 2024",
      time: "6:30 PM - 7:30 PM",
      img: monica,
      description: "Otis Library will host the program “From Clutter to Clarity: 21-Day Decluttering Challenge” live on Zoom. Guest speaker Monica Jenkins will lead the discussion. This program is designed to kick-start your year and provide inspiration and motivation to tackle those decluttering goals!",
      link: "/programs",
      format: "Virtual",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=From%20Clutter%20to%20Clarity%20with%20Monica%20Jenkins&dates=20240104T233000Z/20240105T003000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    },
    {
      id: 1,
      title: "The British Invasion Concert with Rick & Dawn",
      date: "Saturday, January 6, 2024",
      time: "12:30 PM - 1:30 PM",
      img: rickdawn,
      description: "Join us as we welcome Rick Spencer and Dawn Indermuehle to the Otis Library Community Room for the concert The British Invasion.",
      link: "/programs",
      format: "In-Person",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=%22The%20British%20Invasion%22%20Concert%20with%20Rick%20%26amp%3B%20Dawn&dates=20240106T173000Z/20240106T183000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    },
    {
      id: 10,
      title: "Changing Minds Book Club",
      date: "Wednesday, January 10, 2024",
      time: "6:00 PM - 7:00 PM",
      img: sunday,
      description: "Live in the Community Room and over Zoom. We will be discussing Lessons in Chemistry by Bonnie Garmus. Join us! A limited number of copies of the book are available to borrow at the Front Desk. To attend this program over Zoom.",
      link: "/programs",
      format: "Hybrid",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=Changing%20Minds%20Book%20Club&dates=20240110T230000Z/20240111T000000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    },
    {
      id: 6,
      title: "The Sinking of the Steamboat Lexington on Long Island Sound",
      date: "Thursday, January 18, 2024",
      time: "5:00 PM - 6:00 PM",
      img: steamboat,
      description: "Join journalist, historian, and author Bill Bleyer for a book talk and PowerPoint lecture about the 1840 fire and sinking in Long Island Sound that claimed the lives of 139 of the 143 people on board.",
      link: "/programs",
      format: "Virtual",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=The%20Sinking%20of%20the%20Steamboat%20Lexington%20on%20Long%20Island%20Sound&dates=20240118T220000Z/20240118T230000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    },
    {
      id: 7,
      title: "Books, Brews & Banking",
      date: "Thursday, January 25, 2024",
      time: "6:00 PM - 7:00 PM",
      img: staysane,
      description: "Otis Library, in partnership with Liberty Bank, will host a book discussion at Epicure Brewing. Pamela Days-Luketich, Community Outreach Officer at Liberty Bank, will facilitate a discussion of Stay Sane in an Insane World: How to Control the Controllables and Thrive by Greg Harden. Pizza will be provided; beverages will be available for purchase. To register for this free program and receive a copy of Stay Sane in an Insane World, contact Julie at Otis Library at 860-889-2365, ext. 128. Epicure Brewing is located at 40 Franklin Street in Norwich.",
      link: "/programs",
      format: "In-Person",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=Books%2C%20Brews%20%26amp%3B%20Banking&dates=20240125T230000Z/20240126T000000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    },
    {
      id: 11,
      title: "Author Robert Dees: Book Talk and Signing",
      date: "Wednesday, January 24, 2024",
      time: "5:30 PM - 6:30 PM",
      img: norwichgold,
      description: "Join us in the Community Room for a book talk and signing with local author Robert Dees. Robert is the author of Norwich Gold, a fictional coming of age novel set in 1858 Norwich, CT. It addresses the effect of gold fever on Norwich. Robert will also talk about his website Iconic Norwich, which helps educate the public about Norwich’s rich heritage and history during the 300-year period of 1659-1959.",
      link: "/programs",
      format: "In-Person",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=Author%20Robert%20Dees%3A%20%20Book%20Talk%20and%20Signing&dates=20240124T223000Z/20240124T233000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    },
    {
      id: 8,
      title: "Lawyers In Libraries: Free Legal Clinic",
      date: "Wednesday, January 31, 2024",
      time: "4:00 PM - 6:00 PM",
      img: legalclinic,
      description: "Otis Library, in partnership with the Connecticut Bar Association, is working with local attorneys to offer the program 'Lawyers in Libraries.' If you have questions or a case that involves immigration law, family law, consumer rights, personal injury, or a landlord/tenant conflict, you can sign up to meet with an attorney for free for 20 minutes regarding your case. Attorneys will be on-site at the Library on the last Wednesday of each month from 4-6pm. To book an in-person appointment for the January 31 session, call Otis Library at 860-889-2365, ext. 128. Please bring any case-related materials you have to the meeting so that the attorney can provide their best assistance.",
      link: "/programs",
      format: "In-Person",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=Lawyers%20In%20Libraries%3A%20%20Free%20Legal%20Clinic%20%20&dates=20240131T210000Z/20240131T230000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    },
    {
      id: 2,
      title: "Harriet Tubman: A Woman with a Railrod",
      date: "Saturday, February 10, 2024",
      time: "11:00 AM - 12:00 PM",
      img: adwoa,
      description: "In this live, theatrical performance, learn of Harriet Tubman’s struggle for freedom from slavery and for inclusion as an American citizen. This inspiring one-woman show is written and performed by Adwoa Bandele-Asante, M.A., founder of P.E.A.C.E. Works Group, LLC, in New London. Free event; no registration is required. For ages 8 and up. This program will take place in the Community Room.",
      link: "/programs",
      format: "In-Person",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=Harriet%20Tubman%3A%20A%20Woman%20with%20a%20Railrod&dates=20240210T160000Z/20240210T170000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    },
    {
      id: 3,
      title: "A Perky Pairing: Coffee and Chocolate",
      date: "Saturday, February 17, 2024",
      time: "11:00 AM  12:00 PM",
      img: coffee,
      description: "For teens and adults. Kim Larkin of Klassic Kreations will present the program “A Perky Pairing: Coffee and Chocolate” in the Community Room. In this fun, educational 1-hour workshop, participants will hear about the history and health benefits of both dark chocolate and coffee, as well as exploring a variety of brewing methods. Coffee will be paired with different chocolate varieties throughout the class, and each person will receive a coffee-chocolate tasting wheel to help throughout the tasting. Free event; registration required. Register on the website calendar or call 860-889-2365, x128.",
      link: "/programs",
      format: "In-Person",
      invite: "http://www.google.com/calendar/event?action=TEMPLATE&text=A%20Perky%20Pairing%3A%20%20Coffee%20and%20Chocolate&dates=20240217T160000Z/20240217T170000Z&location=261%20Main%20St.%2C%20Norwich%2C%20CT%2006360"
    }
  ]
  
  export const events = [
    {
      id: 1,
      title: "Otis Festival",
      date: "Saturday, November 18, 2023",
      time: "9:00 AM - 3:00 PM",
      description: "Enjoy handmade creations of 40+ local artisans, all-day entertainment, children's activities & Santa! We can't wait to see you!",
      img: techclass,
      link: "/events"
    }
  ]
  export const homeCards = [
    {
      id: 1,
      title: "Newsletter",
      content: "Find out what's happening at Otis Library this season. Sign up to stay in touch!",
      img: newsletter,
      link: "/"
    },
    {
      id: 2,
      title: "What to Read Next",
      content: "Looking for something new to read? Our library staff can help you pick.",
      img: readnext,
      link: "/read-next"
    },
    {
      id: 3,
      title: "Mobile Printing",
      content: "Print virtually any document or web page from your Internet connected PC to one of our Library printers.",
      img: printer,
      link: "https://www.printeron.net/system/printspot/interface/select_file.jsp?protocolSwitched=true&url=otis%2Fmain-library"
    },
    {
      id: 4,
      title: "Passes to Local Attractions",
      content: "Otis Library partners with local museums and cultural institutions, offering free or discounted passes for patrons.",
      img: passes,
      link: "/museum-passes"
    }
  ]
  export const downloadables = [
    {
      id: 1,
      title: "Hoopla",
      link: "https://www.hoopladigital.com/",
      img: hoopla,
      content: "Hoopla is a digital library service that allows you to borrow ebooks, audiobooks, movies, TV shows, music, and comics – all for free with your library card! Just like at your physical library, you can browse the Hoopla collection and borrow titles with your library card. The best part? There are no late fees and you can borrow as many titles as you'd like!"
    },
    {
      id: 2,
      title: "Libby",
      link: "https://www.overdrive.com/apps/libby",
      img: libby,
      content: "Discover a world of stories and knowledge at your fingertips with Libby, a free app that connects you to your library's digital collection.  Explore thousands of ebooks, audiobooks, and magazines, ready to be borrowed instantly and enjoyed on your favorite devices. Whether you're craving a captivating novel, eager to learn something new, or seeking a captivating listening experience, Libby is your gateway to endless possibilities."
    },
    {
      id: 3,
      title: "The Palace Project",
      link: "https://thepalaceproject.org/",
      img: palaceproject,
      content: "Imagine a library beyond shelves and stacks, where digital and physical boundaries dissolve, and reading becomes an immersive adventure. Welcome to The Palace Project, an innovative platform transforming Otis Library into a vibrant hub for all things bookish."
    }
  ]
  export const footerLinks = [
    {
      title: "General Information",
      links: [
        {
          name: "FAQ's",
          link: "/faq",
        },
        {
          name: "Hours, Parking, & Bookdrops",
          link: "/hpb",
        },
        {
          name: "Call Ahead Pickup",
          link: "/call-ahead",
        },
        {
          name: "Friends of Otis Library",
          link: "/friends-of-otis",
        },
        {
          name: "En Español",
          link: "en-espanol",
        },
        {
          name: "Policies",
          link: "policies",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: "Home Delivery",
          link: "/home-delivery",
        },
        {
          name: "Sign up for Text Notifications",
          link: "/text-notifications",
        },
        {
          name: "Passports",
          link: "/passports",
        },
        {
          name: "Temporary Library Card Request",
          link: "/temporary-card",
        },
        {
          name: "Mobile Printing/Print from Home",
          link: "https://www.printeron.net/system/printspot/interface/select_file.jsp?protocolSwitched=true&url=otis%2Fmain-library",
        },
        {
          name: "Literacy Volunteers",
          link: "/literacy-volunteers",
        },
        {
          name: "Notary Public",
          link: "/notary-public",
        },
        {
          name: "Meeting Spaces",
          link: "/meeting-rooms",
        },
        {
          name: "Passes to Local Attractions",
          link: "/museum-passes",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "Citizenship & Immigration",
          link: "https://www.hoobank.com/newsletters/",
        },
        {
          name: "Ask a Librarian",
          link: "https://www.hoobank.com/newsletters/",
        },
        {
          name: "Learn a Language",
          link: "https://www.hoobank.com/newsletters/",
        },
        {
          name: "Local Historical Photos",
          link: "https://www.hoobank.com/newsletters/",
        },
        {
          name: "Newsletter",
          link: "https://www.hoobank.com/newsletters/",
        },
        {
          name: "Board Meetings",
          link: "https://www.hoobank.com/newsletters/",
        },
        {
          name: "Employment & Educational Resources",
          link: "https://www.hoobank.com/newsletters/",
        },
        {
          name: "Misinformation Resources",
          link: "https://www.hoobank.com/become-a-partner/",
        }
      ],
    },
    {
      title: "Books & More",
      links: [
        {
          name: "Catalog",
          link: "https://nw.catalog.lionlibraries.org/",
        },
        {
          name: "What to Read Next",
          link: "https://www.hoobank.com/become-a-partner/",
        },
        {
          name: "Downloadables",
          link: "https://www.hoobank.com/become-a-partner/",
        },
        {
          name: "On Exhibit at Otis Library",
          link: "https://www.hoobank.com/become-a-partner/",
        },
        {
          name: "Donor Spotlight",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
    {
      title: "Departments",
      links: [
        {
          name: "'Tweens & Teens Department",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Children's Department",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Genealogy Department & Local History",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
  ];
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: youtube,
      link: "https://www.youtube.com/",
    },
  ];
  export const faqs = [
    {
      id: 1,
      question: "Are you open?",
      answer: "Yes! Our hours are Monday & Wednesday 9AM-7PM; Tuesday & Friday 9AM-5pm; and Thursday & Saturday 9AM-2PM. Call Ahead Pickup (formerly Outside Pickup) is still available by appointment. More details can be found on the Call Ahead Pickup page. We look forward to seeing you!"
    },
    {
      id:2,
      question: "Where can I park?",
      answer: "Two-hour parking is available on Main Street, Ferry Street, Railroad Avenue, and in the white-lined spaces in the Cliff Street parking lot. Handicap accessible parking is available in front of the building on Main Street. You can view a parking map here."
    },
    {
      id:3,
      question: "Is there a notary public at the library?",
      answer: "Yes! You can find more information on our Notary Public page."
    },
    {
      id:4,
      question: "Are you offering onsite one-on-one technology instruction?",
      answer: "We are currently offering in-person technology instruction. You are welcome to come to the library or call us 860-889-2365 ext. 108 and we can schedule a time for an appointment."
    },
    {
      id:5,
      question: "Is the Literacy Volunteers program available?",
      answer: "We are not currently offering walk-in sessions but Conversation Groups are available. For the current schedule of Conversations Groups available for registration, contact the Literacy Office at 860-886-9096."
    },
    {
      id:6,
      question: "May I reserve one of your meeting spaces?",
      answer: "Meeting room spaces are available to nonprofits and individuals. Please visit our Meeting Spaces page for more details."
    },
    {
      id:7,
      question: "Can I get a library card?",
      answer: "Yes! If you are a Norwich resident, you may come in and register for an Otis Library card. Please bring in a photo ID with your current, Norwich address. If your photo ID does not have your current, Norwich address please bring an official piece of mail (ie: from bank, utility, rent receipt etc) that has your name and your current, Norwich address as well as your photo ID. If you had a card but lost it, please bring in current, valid identification and we will replace your lost card for $1. We welcome non-Norwich residents to Otis Library. However, to check out materials you must have a valid library card from your hometown library. Once you have a library card from your hometown, you may use that card at any public library in the state!"
    }
  ]
  export const staff = [
    {
      id: 1,
      name:"Cathleen Special",
      title: "Executive Director",
      link: "mailto:cspecial@otislibrarynorwich.org",
      content: "Executive Director - Cathleen Special",
      category: "Contact Us",
    },
    {
      id: 2,
      name:"Jessa Franco",
      title:"Assistant Director",
      link: "mailto:jfranco@otislibrarynorwich.org",
      content: "Assistant Director - Jessa Franco",
      category: "Contact Us",
    },
    {
      id: 3,
      name:"Andrea Kaiser",
      title: "Director of Development",
      link: "mailto:akaiser@otislibrarynorwich.org",
      content: "Director of Development - Andrea Kaiser",
      category: "Contact Us",
    },
    {
      id: 4,
      name:"Sally Gagnon",
      title: "Adult Services Manager",
      link: "mailto:sgagnon@otislibrarynorwich.org",
      content: "Adult Services Manager - Sally Gagnon",
      category: "Contact Us",
    },
    {
      id: 5,
      name:"Bethany Jensen",
      title:"Head of Children's Services",
      link: "mailto:bjensen@otislibrarynorwich.org",
      content: "Head of Children's Services - Bethany Jensen",
      category: "Contact Us",
    },
    {
      id: 6,
      name:"Kaitlyn Moseley",
      title:"Young Adult Librarian",
      link: "mailto:kmoseley@otislibrarynorwich.org",
      content: "Young Adult Librarian - Kaitlyn Moseley",
      category: "Contact Us",
    },
    {
      id: 7,
      name:"Susan Straub",
      title:"Head of Technical Services",
      link: "mailto:sstraub@otislibrarynorwich.org",
      content: "Head of Technical Services - Susan Straub",
      category: "Contact Us",
    },
    {
      id: 8,
      name:"Cornell McNair",
      title:"Systems Coordinator",
      link: "mailto:cmcnair@otislibrarynorwich.org",
      content: "Systems Coordinator - Cornell McNair",
      category: "Contact Us",
    },
    {
      id: 9,
      name:"Julie Menders",
      title:"Programming Coordinator",
      link: "mailto:jmenders@otislibrarynorwich.org",
      content: "Programming Coordinator - Julie Menders",
      category: "Contact Us",
    },
    {
      id: 10,
      name:"Bassem Gayed",
      title:"Multicultural Services Coordinator",
      link: "mailto:bgayed@otislibrarynorwich.org",
      content: "Multicultural Services Coordinator - Bassem Gayed",
      category: "Contact Us",
    }
  ];
  export const trustees = [
    {
      id: 1,
      name:" Mr. John Iovino",
      title: "President",
    },
    {
      id: 2,
      name:"TBD",
      title:"Vice President",
    },
    {
      id: 3,
      name:" Ms. Kathryn Lord",
      title: "Secretary",
    },
    {
      id: 4,
      name:"Mr. Charles Seeman",
      title: "Treasurer",
    },
    {
      id: 5,
      name:"Mr. Kevin Brown",
      title:"Trustee",
    },
    {
      id: 6,
      name:"Ms. Karen Cook",
      title:"Trustee",
    },
    {
      id: 7,
      name:"Ms. Tracey Gomes-Johnson",
      title:"Trustee",
    },
    {
      id: 8,
      name:"Atty. Ayanti E. Grant",
      title:"Trustee",
    },
    {
      id: 9,
      name:"Hon. Thomas Griffin",
      title:"Trustee",
    },
    {
      id: 10,
      name:"Mr. Michael P. Gualtieri",
      title:"Trustee",
    },
    {
      id: 11,
      name:"Dr. Yvette Jacaruso",
      title:"Trustee",
    },
    {
      id: 12,
      name:"Dr. Mary Ellen Jukoski",
      title:"Trustee",
    },
    {
      id: 13,
      name:"Ms. Kristie Kriss",
      title:"Trustee",
    },
    {
      id: 14,
      name:"Atty. Bart Sayet",
      title:"Trustee",
    },
    {
      id: 15,
      name:"Ms. Fawn Walker",
      title:"Trustee",
    }
  ];
  export const capi = [
    {
      id: 1,
      title: "Call Ahead Pickup",
      desc: "Please follow this link to place your holds",
      link: "https://nw.catalog.lionlibraries.org/",
      sections: [
        {
          id: 1,
          title: "Here's how it works:",
          content: [
            {
              id: 1,
              contents: "First, go to our online catalog to place items on hold or call us at (860) 889-2365 and press 0 for assistance."
            },
            {
              id: 2,
              contents: "If you placed holds yourself using the online catalog and want to schedule your holds as a Call Ahead Pickup, please call (860) 889-2365 and press 0 to speak with a staff member who will coordinate the details of your pickup."
            }
          ]
        },
        {
          id: 2,
          title: "Please observe the following guidelines:",
          content: [
            {
              id: 1,
              contents: "For the safety of the staff and public, wearing a mask is encouraged inside the library."
            },
            {
              id: 2,
              contents: "Please observe the three-item limit by selecting only three items per author, subject, or series."
            },
            {
              id: 4,
              contents: "Pickups can be made either by the person placing the order or a borrower may indicate which party or parties can act on his or her behalf to pick up holds by sending his or her library card or notice with another party."
            },
            {
              id: 5,
              contents: "Adult cardholders can designate up to 3 other adult cardholders to pick up reserved materials for them by completing a “Holds Pickup” form. This authorization is specifically noted in the cardholder's account."
            },
            {
              id: 6,
              contents: "If you have materials to return, you may place them in the book drops located in the atrium. Or the building exterior."
            },
          ]
        }
      ]
    }
  ];
  export const espanol = [
    {
      id: 1,
      title: "En Español",
      img: espan,
      heading: "La Biblioteca Otis ofrece acceso libre y gratuito a la información, las ideas y servicios que se anticipen a las necesidades personales, educativas y profesionales de nuestra comunidad.",
      subheading: "La Biblioteca enriquece nuestra región, manteniendo un ambiente seguro y acogedor, ofreciendo recursos que promueven el aprendizaje para toda la vida.",
      sections: [
        {
          id: 1,
          title: "Servicios y Carné de la biblioteca",
          heading: "Servicios de la Biblioteca",
          content: [
            {
              links: [
                {
                  id: 1,
                  name: "",
                  link: "https://www.otislibrarynorwich.org/s/4-2022LibraryBrochure-Spanish.pdf"
                }
              ]
            }
          ],
          img: "",
        }
  ],
    },
  ]
  
  export const esp_services = [
    {
      id: 1,
      title: "Servicios y Carné de la biblioteca",
      link_title:"Servicios de la Biblioteca",
      link: "https://www.otislibrarynorwich.org/s/4-2022LibraryBrochure-Spanish.pdf"
    }
  ]
  export const esp_collection = [
    {
      id: 1,
      title: "Colección",
      heading: "La biblioteca Otis cuenta con una colección de libros, peliculas, música y revistas en Español para adultos y niños."
    }
  ]
  export const esp_immigration = [
    {
      id: 1, 
      title: "Inmigración y Ciudadanía/Immigration and Citizenship",
      img: flag,
      links: [
        {
          id: 1,
          title: "https://www.uscis.gov/es",
          link: "https://www.uscis.gov/es"
        },
        {
          id:2,
          title: "https://www.immi.org/es",
          link: "https://www.immi.org/es"
        },
        {
          id: 3,
          title: "https://www.citizenshipworks.org/es",
          link: "https://www.citizenshipworks.org/es"
        }
      ]
    }
  ]
  export const esp_english = [
    {
      id: 1, 
      title: "Aprenda Inglés/Learning English",
      img: english,
      links: [
        {
          id: 1,
          link: "http://www.otislibrarynorwich.org/learn-a-language/"
        },
        {
          id: 2,
          link: "http://www.englishlearner.com/tests/"
        },
        {
          id: 3,
          link: "http://www.usalearns.org/"
        },
        {
          id: 4,
          link: "http://learnersdictionary.com/"
        }
      ],
      content: [
        {
          id: 1,
          title: "Se ofrece clases de Inglés gratis en la biblioteca"
        },
        {
          id: 2,
          title: "La bibioteca cuenta con libros, CDs y DVDs para aprender Inglés que se pueden tomar prestado gratis"
        }
      ]
    }
  ]
  export const esp_health = [
    {
      id: 1,
      title: "Salud/Health",
      img: health,
      links: [
        {
          id: 1,
          link: "https://medlineplus.gov/spanish/"
        },
        {
          id: 2,
          link: "https://gobierno.usa.gov/salud"
        }
      ]
    }
  ]
  export const esp_legal = [
    {
      id: 1,
      title: "Ayuda Legal/Legal Help",
      img: law,
      links: [
        {
          id: 1, 
          link: "https://ctlawhelp.org/es"
        }
      ]
    }
  ]
  export const esp_consumer = [
    {
      id: 1, 
      title: "Protección al Consumidor/Consumer Protection",
      img: consumer,
      links: [
        {
          id: 1,
          link: "http://www.ct.gov/dcp/site/default.asp"
        },
        {
          id: 2,
          link: "https://www.ftc.gov/es"
        },
        {
          id: 3,
          link: "https://www.ftc.gov/es"
        }
      ]
    }
  ]
  export const esp_gov_services = [
    {
      id: 1,
      title: "Servicios y Información del Gobierno/U.S. Government Services & Information",
      img: government,
      links: [
        {
          id: 1,
          link: "https://gobierno.usa.gov/servicios-informacion"
        },
        {
          id: 2,
          link: "https://gobierno.usa.gov/directorios"
        }
      ]
    }
  ]
  export const esp_gov_benefits = [
    {
      id: 1,
      title: "Ayuda Financiera, Becas y Benificios/Government Benefits, Grants and Loans",
      img: benefits,
      links: [
        {
          id: 1,
          link: "https://gobierno.usa.gov/ayuda-financiera-becas-beneficios"
        },
        {
          id: 2,
          link: "https://www.consumerfinance.gov/es/"
        }
      ]
    }
  ]
  export const esp_jobs = [
    {
      id: 1,
      title: "Trabajo y Desempleo/Jobs and Unemployment",
      img: jobs,
      links: [
        {
          id: 1,
          link: "https://gobierno.usa.gov/trabajo-y-desempleo"
        }
      ]
    }
  ]
  export const esp_housing = [
    {
      id: 1, 
      title: "Vivienda y Comunidad/Housing and Community",
      img: house,
      links: [
        {
          id: 1,
          link: "https://gobierno.usa.gov/vivienda"
        }
      ]
    }
  ]
  export const esp_education = [
    {
      id: 1,
      title: "Educación/Education",
      img: education,
      links: [
        {
          id: 1,
          link: "https://gobierno.usa.gov/educacion"
        }
      ]
    }
  ]
  export const esp_tech = [
    {
      id: 1,
      title: "Tecnología/Technology",
      img: tech,
      links: [
        {
          id: 1,
          link: "https://www.gcfaprendelibre.org/index.do"
        }
      ]
    }
  ]
  export const hours = [
    {
    id: 1,
    title: "Monday",
    time: "9:00 AM - 7:00 PM"
    },
    {
    id: 2,
    title: "Tuesday",
    time: "9:00 AM - 5:00 PM"
  },
  {
    id: 3,
    title: "Wednesday",
    time: "9:00 AM - 7:00 PM"
  },
  {
    id: 4,
    title: "Thursday",
    time: "9:00 AM - 2:00 PM"
  },
  {
    id: 5,
    title: "Friday",
    time: "9:00 AM - 5:00 PM"
  },
  {
    id: 6,
    title: "Saturday",
    time: "9:00 AM - 2:00 PM"
  },
  {
    id: 7,
    title: "Sunday",
    time: "Closed"
  }
]
export const parking = [
  {
    id:1,
    title: "Available Parking",
    heading: "Two-hour parking is available on Main Street, Ferry Street, Railroad Avenue, and in the white-lined spaces in the Cliff Street parking lot. Handicap accessible parking is available in front of the building on Main Street. You can view a parking map here.",

  },
]

export const bookdrops = [
  {
    id:1,
    name: "Bookdrop Locations",
      content: [
            {id: 1,  name: "CDs or DVDs may be placed only in the media bookdrop at the library."},
            {id: 2,  name: "Bookdrops (returns) are available at the following locations:"},
              ],
    links: [
      {
        id: 1,
        location: "Otis Library, 261 Main St., Norwich", 
        link: "https://www.google.com/maps/place/261+Main+St,+Norwich,+CT+06360/@41.52445,-72.0761614,17z/data=!3m1!4b1!4m6!3m5!1s0x89e67161b6d9fa93:0x71d8b4637460024f!8m2!3d41.524446!4d-72.0735865!16s%2Fg%2F11gg6kf15h?entry=ttu", 
        img: map1
      },
      {
        id:2,
        location: "Walmart, 220 Salem Tpk., Norwich", 
        link: "https://www.google.com/maps/place/220+Salem+Turnpike,+Norwich,+CT+06360/@41.5048024,-72.1251538,17z/data=!3m1!4b1!4m6!3m5!1s0x89e672693bc6169b:0xdc4ebc36f167367e!8m2!3d41.5047984!4d-72.1225789!16s%2Fg%2F11c3q3cj0p?entry=ttu",
        img: map2
      },
      {
        id: 3,
        location: "Meadows Shopping Center, 47 Town St, Norwich",
        link: "https://www.google.com/maps/place/47+Town+St,+Norwich,+CT+06360/@41.547753,-72.0935371,17z/data=!4m6!3m5!1s0x89e6710a5472aebb:0x1821917540c61dd9!8m2!3d41.547717!4d-72.0915415!16s%2Fg%2F11b8v4dwvv?entry=ttu",
        img: map3
      },
      {
        id:4,
        location: "Dime Savings Bank, 630 Norwich Ave., Taftville.",
        link: "https://www.google.com/maps/place/630+Norwich+Ave,+Taftville,+CT+06380/@41.5709595,-72.0512075,17z/data=!4m6!3m5!1s0x89e670cc94f69507:0xc94a9d5b2bdc8dce!8m2!3d41.5709555!4d-72.0486326!16s%2Fg%2F11b8v7xlgc?entry=ttu",
        img: map4
      },
    ] 
  }
]
export const loan_policy = [
  {
    id: 1,
    title: "Loan Periods",
    subtitle: "Items are limited to 3 per author, subject, or series.",
    contents: [
      {
        id: 1,
        label: "New Adult books, New YA books, and all Magazines:",
        content: "14 days"
      },
      {
        id: 2,
        label: "All other books:",
        content: "21 days"
      },
      {
        id: 3,
        label: "Audiobooks, CDs, Playaways:",
        content: "21 days"
      },
      {
        id: 4,
        label: "DVDS:",
        content: "7 days"
      },
      {
        id: 5,
        label: "TV Series:",
        content: "14 days"
      },
      {
        id: 6,
        label: "Museum Passes:",
        content: "3 days"
      },
      {
        id: 7,
        label: "Kull set from Smithsonian Museum:",
        content: "See attached policy"
      }
    ]
  },
]
export const fee_policy = [
  {
    id: 2,
    title: "Fees",
    contents: [
      {
        id: 1,
        label: "Museum Passes:",
        content: "$2.00/day (max. $20.00)"
      },
      {
        id: 2,
        label: "Lost card replacement:",
        content: "$1.00"
      },
       {
        id: 3,
        label: "Lost/Damaged Item:", 
        content: "Replacement cost plus $2 processing fee"
       },
       {
        id: 4,
        label: "Photocopies and printing",
        content: "$.15 page for B&W"
       },
       {
        id: 6,
        content: "$.50 page for Color"
       },
       {
        id: 7,
        content: "$.25/double-sided page for B&W"
       },
       {
        id: 8, 
        content: "$.75/double-sided page for Color"
       }
    ]
  }
]
export const additional_policy = [
  {
    id: 3,
    title: "Additional Policies",
    contents: [
      {
        id: 1,
        content: "Bulletin Board Policy",
        link: "/Bulletin+Board+Postings.pdf"
      },
      {
        id: 2,
        content: "Circulation Policy in Full",
        link: "/Circulation+Policy.pdf"
      },
      {
        id: 3,
        content: "Confidentiality of Patron Records",
        link: "/Confidentiality+of+patron+records.pdf"
      },
      {
        id: 4,
        content: "Donation Policy",
        link: "/Donation+Policy.pdf"
      },
      {
        id: 5,
        content: "Early Human Skull Replicas Policy",
        link: "/Early+Human+Skull+Replicas+Circulation+and+Use+Policy.pdf"
      },
      {
        id: 6,
        content: "Exhibit Policy",
        link: "/Exhibit+Policy.pdf"
      },
      {
        id: 7,
        content: "Internet and Computer Use Policy",
        link: "/Internet+and+Computer+Use.pdf"
      },
      {
        id: 8,
        content: "Public Access to Computers Policy",
        link: "/Policy+on+Public+Access+Computers.pdf"
      },
      {
        id: 9,
        content: "Material Selection Policy",
        link: "/Material+Selection+Policy+approved+2022.pdf"
      },
      {
        id: 10,
        content: "Room Use Policy",
        link: "/Policy+for+Use+of+Rooms.pdf"
      },
      {
        id: 11,
        content: "Displays Policy",
        link: "/Policy+on+Displays+approved+11.18.20.pdf"
      },
      {
        id: 12,
        content: "Rules of Conduct",
        link: "/Rules+of+Conduct.pdf"
      },
      {
        id: 13,
        content: "Health Insurance Compliance",
        link: "https://www.anthem.com/machine-readable-file"
      }
    ]
  }
]
export const home_delivery = [
  {
    id: 1,
    title: "Here's how it works:",
    contents: [
      {
        id: 1,
        content: "Staff will help you pick out materials or complete lists that you provide. Materials come from all departments and can include but are not limited to audiobooks, magazines, DVDs, CDs, graphic novels, toys, and, of course, books! When your items are due back at the library, staff will pick them up at a mutually agreed upon time."
      },
      {
        id:2,
        content: "This service is available to individuals and families."
      },
      {
        id: 3,
        content: "Please call the library with any questions and we are happy to help! Call 860-889-2365, and press 0."
      }
    ]
  }

]
export const home_delivery_benefits = [
  {
  id: 1,
  title: "Benefits of Home Delivery:",
  benefits: [
    {
      id: 1,
      label: "Convenient access:",
      content: "Read to your heart's content without leaving your home."
    },
    {
      id:2,
      label: "Discover new reads:",
      content: "Get personalized recommendations from our friendly staff."
    },
    {
      id: 3,
      label: "Expand your horizons:",
      content: "Access audiobooks, DVDs, and even unique items from our Library of Things."
    },
    {
      id: 4,
      label: "Stay connected:",
      content: "Feel part of the library community even when you can't visit in person."
    }
  ]
  }
  
]
export const text_notifications = [
  {
    id: 1,
    contents: [
      {
        id:1,
        content: "Sign up for text message notifications with Shoutbomb. Keep up to date with your library account on your mobile phone using the library's Shoutbomb text messaging service.",
      },
      {
        id:2,
        content: "Receive text notices about items ready for pickup, items due soon, overdue items and fines. Send a text to request a renewal and receive a text back with the result of your request. Send a text to see your account's expiration date. Set up multiple library accounts (barcodes) on the same phone.",
    
      },
      {
        id:3,
        content: "For more information, and to learn how to sign up for Shoutbomb, subscribe below.",
  
      }
    ],
    links: [
      {
        id: 1,
        link: "https://lioninc.org/wp-content/uploads/board/PUBLIC-DOCS/Shoutbomb_230613.pdf"
      }
    ]
  }
]
export const passport_whys = [
  {
    id:1,
    title:"Why choose Otis Library for your passport needs?",
    sections: [
      {
        id: 1,
        label: "Convenience:",
        content: "Skip the long lines and appointments at government offices. We offer a relaxed and welcoming environment to complete your application."
      },
      {
        id: 2,
        label: "Expertise:",
        content: "Our trained staff can guide you through the process, answer your questions, and ensure your application is accurate and complete."
      },
      {
        id: 3,
        label: "Accessibility:",
        content: "We're open  and located in the heart of Norwich, making it easy to fit your passport application into your schedule."
      },
      {
        id: 4, 
        label: "One-stop shop:",
        content: "Take advantage of our other library resources while you're here! Grab travel guides, browse language learning materials, or check out some international documentaries to get in the travel spirit."
      }
    ]
  }
]
export const passport_info = [
  {
    id: 1,
    link: "http://travel.state.gov",
    contents: [
      {
        id:1,
        content: "Otis Library is accepting passport applications on behalf of the U.S. Department of State. United States citizens may apply for their passports by appointment only by calling (860) 889-2365 ext. 106 or 125."
      },
      {
        id: 2,
        content: "For application forms, information on documentation requirements, fees, and a wealth of other passport and international travel information, please visit the only official website for passport information."
      }
    ],
    contactInfo: [
      {
        id:1, 
        title: "Contact Information",
        name: "Deana Eager",
        phone: "860-889-2365 ext. 106"
      }
    ]
  }
]
export const passport_renew = [
  {
    id: 1,
    title: "Renew a Passport",
    label: "If your passport was issued after you were 16 years old and/or expired less than 5 years ago, you can renew your passport on your own.",
    renewal: "The renewal form is available online or you can pick up a form at the library or any Passport Acceptance Agency. Use black ink only.",
    link: "https://travel.state.gov/content/travel/en/passports.html",
    fee: "The application fee is the same and there is no acceptance fee. Renewals can not be submitted through the library; they must be mailed directly to the U.S. Department of State. The Library is happy to review your renewal paperwork before mailing. Please make an appointment with a passport agent by calling 860-889-2365 ext. 106 or 125.",
    faq: "For all other questions and more information, please visit the State Department website."
  }
]
export const passport_apply = [
  {
    id: 1,
    title: "Apply for a Passport",
    label: "You need to apply in person if: this is your first passport, your passport was issued before you were 16 years old, or your passport expired more than 5 years ago.",
    sections: [
      {
        id: 1,
        title: "What do I need to apply?",
        subsections: [
          {
            id:1,
            title: "A Completed Application",
            contents: [
              {
              id: 1,
              content: "Passport applications are available online or you can pick up a form at the library or any Passport Acceptance Agency. Use black ink only. DO NOT SIGN the application before your appointment"
            }
            ]
          },
          {
            id: 2,
            title: "Proof of Citizenship",
            contents: [
              {
                id:1, 
                content: "US-born individuals: a certified birth certificate with a seal (not a photocopy), showing the full name of the parent(s), signature of the registrar, and filing date within one year of the birth issued from the Bureau of Vital Statistics or the city of birth. Children under the age of 16 must submit a birth certificate even if previously issued a passport"
              },
              {
                id:2,
                content: "Foreign-born individuals: a Certificate of Naturalization, Certificate of Citizenship, Consular Report of Birth, or a Certification Report of Birth Abroad (no photocopies). Foreign-born children of naturalized parents may apply for a U.S. passport if the child was under the age of 18 when the parents became naturalized. "
              },
              {
                id: 3,
                content: "You are required to submit these documents with your application. The documents will be returned to you with your newly issued passport in a separate mailing. "
              },
              {
                id: 4,
                content: "For children under the age of 16, both parents or the child’s legal guardian(s) must appear, along with the child, when submitting a passport application. If only one parent appears, you must also submit one of the following:",
                items: [
                  {
                    id: 1,
                    item: "Second parent’s notarized written statement consenting to passport issuance for the child, or"
                  },
                  {
                    id: 2,
                    item: "Primary evidence of sole authority to apply, or" 
                  },
                  {
                    id: 3,
                    item: "A written statement (made under penalty of perjury) explaining the second parent’s unavailability."
                  },
                  {
                    id: 4,
                    item: "Proof of Identity"
                  },
                  {
                    id: 5,
                    item: "Prior U.S. Passport"
                  },
                  {
                    id: 6,
                    item: "Valid driver’s license"
                  },
                  {
                    id: 7, 
                    item: "Government photo ID: city, state or federal"
                  },
                  {
                    id: 8,
                    item: "Military photo ID: military and dependents, etc."
                  },
                  {
                    id: 9,
                    item: "Naturalization Certificate"
                  }
                ]
              }
            ] 
          },
          {
            id:3,
            title: "Proof of Identity",
            contents: [
              {
                id: 1,
                content: "In addition to proof of citizenship, you must provide a photo ID. Acceptable forms of ID include a current or expired passport, a valid driver's license or official state ID, or a certificate of naturalization/certificate of citizenship. See travel.state.gov for a complete list of acceptable IDs. Children under 16 may use parents' ID, but the child must still appear in person with the parents.",
              }
            ]
          },
          {
            id: 4,
            title: "One Passport Photo",
            contents: [
              {
                id: 1,
                content: "You must bring this picture with you. The library does not provide passport photo service. Your photo must be:",
                items: [
                  {
                    id: 1, 
                    item: "Whole-face view taken within the last 6 months"
                  },
                  {
                    id: 2,
                    item: "In color"
                  },
                  {
                    id: 3,
                    item: "2\" x 2\" size"
                  },
                  {
                    id: 4,
                    item: "Taken against a plain white or light background"
                  },
                  {
                    id: 5,
                    item: "Only the applicant can appear in the photo – this includes photos for infants"
                  },
                  {
                    id: 6,
                    item: "Should represent applicant’s normal appearance"
                  },
                  {
                    id: 7,
                    item: "No glasses can be worn"
                  },
                  {
                    id: 8,
                    item: "Normal street clothes: no camouflage, uniforms, hats, or head covering (head coverings for religious or medical reasons are allowed, but full face must still be shown)"
                  }
                ]
              }
            ]
          },
          {
            id: 5,
            title: "Passport Fees (effective 1/22/2023)",
            contents: [
              {
                id: 1,
                content: "A check or money order, payable to the U.S. Department of State, is required. Separate checks are required for each application."
              },
              {
                id: 2, 
                content: "Passport Book Fee (Routine Processing)",
                items: [
                  {
                    id: 1,
                    item: "Applicants age 16 & over: $130"
                  },
                  {
                    id: 2, 
                    item: "Applicants under age 16: $100"
                  }
                ]
              },
              {
                id: 3,
                content: "Passport Card Fee (Routine Processing)",
                items: [
                  {
                    id: 1,
                    item: "Applicants age 16 & over: $30"
                  },
                  {
                    id: 2,
                    item: "Applicants under age 16: $15"
                  },
                ]
              },
              {
                id: 4,
                content: "Expedited processing is available at an additional cost of $60 per passport card or book. (See \"Processing Times\" for more details.)"
              },
              {
                id: 5,
                content: "Passport Book Overnight Delivery is available at an additional cost of $19.53. (Overnight Delivery is not available for passport cards)."
              },
              {
                id: 6,
                content: "Fees are subject to change. The most current fee schedule is available at travel.state.gov."
              }
   
            ]
          },
          {
            id: 6,
            title: "Acceptance Fee",
            contents: [
              {
                id: 1,
                content: "The $35 acceptance fee may be paid by cash, check, or money order payable to Otis Library. You may combine multiple payments of the acceptance fee on one check or money order. The acceptance fee (to the library) cannot be combined on a check with the passport fee (to U.S. Dept. of State). "
              }
            ]
          },
          {
            id: 7,
            title: "Processing Times",
            contents: [
              {
                id: 1,
                content: "Please visit the travel.state.gov for current processing times. It is important to note that processing times may be impacted by mail delays. Note that processing times are based on when your application is received at the passport processing center, not on the day you apply."
              }
            ]
          },
          {
            id: 8,
            title: "Emergency or Urgent Travel",
            contents: [
              {
                id: 1,
                content: "For life-or-death emergencies and other urgent travel, visit travel.state.gov for more information or 1-877-487-2778."
              }
            ]
          }
        ]
      }
    ]
  }
]
export const meeting_rooms = [
  {
    id: 1,
    heading: "Need a space to brainstorm, collaborate, or dive into deep study? Look no further than Otis Library's diverse selection of meeting and study rooms – your sanctuary for productive gatherings and solo pursuits. Whether you're planning a club meeting, hosting a book discussion, or prepping for exams, we have the perfect nook to ignite your ideas and fuel your focus.",
    description: "Please review the room use policy and complete the online application form. The application form is to be completed by the contact person for your organization. If you have any questions please call (860) 889-2365, ext. 124."
  }
]
export const community_room_details = [
  {
    id: 1,
    title: "Community Room",
    description: "Available to nonprofit organizations and community groups for meetings or programs that are cultural, educational, recreational or civic in nature. Certain restrictions apply.",
    items: [
      {
        id: 1,
        title: "Capacity:",
        value: "128"
      },
      {
        id: 2,
        title: "Location:",
        value: "2nd Floor"
      }
    ]
  }
]
export const meeting_room_details = [
  {
    id: 1,
    title: "Meeting Room",
    description: "Available to nonprofit organizations and community groups for meetings or programs that are cultural, educational, recreational or civic in nature. Certain restrictions apply.",
    items: [
      {
        id: 1,
        title: "Capacity:",
        value: "18"
      },
      {
        id: 2,
        title: "Location:",
        value: "2nd Floor"
      }
    ]
  }
]
export const study_room_a_details = [
  {
    id: 1,
    title: "Study Room A",
    description: "To reserve a Study Rooms, please call the Front Desk at (860) 889-2365 and press 0.",
    items: [
      {
        id: 1,
        title: "Capacity:",
        value: "4"
      },
      {
        id: 2,
        title: "Location:",
        value: "1st Floor"
      }
    ]
  }
]
export const study_room_b_details = [
  {
    id: 1,
    title: "Study Room B",
    description: "To reserve a Study Rooms, please call the Front Desk at (860) 889-2365 and press 0.",
    items: [
      {
        id: 1,
        title: "Capacity:",
        value: "4"
      },
      {
        id: 2,
        title: "Location:",
        value: "1st Floor"
      }
    ]
  }
]
export const countries = [
    {
        "country": "United States"
    },
    {
        "country": "Afghanistan"
    },
    {
        "country": "Albania"
    },
    {
        "country": "Algeria"
    },
    {
        "country": "American Samoa"
    },
    {
        "country": "Andorra"
    },
    {
        "country": "Angola"
    },
    {
        "country": "Anguilla"
    },
    {
        "country": "Antarctica"
    },
    {
        "country": "Antigua and Barbuda"
    },
    {
        "country": "Argentina"
    },
    {
        "country": "Armenia"
    },
    {
        "country": "Aruba"
    },
    {
        "country": "Australia"
    },
    {
        "country": "Austria"
    },
    {
        "country": "Azerbaijan"
    },
    {
        "country": "Bahamas"
    },
    {
        "country": "Bahrain"
    },
    {
        "country": "Bangladesh"
    },
    {
        "country": "Barbados"
    },
    {
        "country": "Belarus"
    },
    {
        "country": "Belgium"
    },
    {
        "country": "Belize"
    },
    {
        "country": "Benin"
    },
    {
        "country": "Bermuda"
    },
    {
        "country": "Bhutan"
    },
    {
        "country": "Bolivia"
    },
    {
        "country": "Bosnia and Herzegovina"
    },
    {
        "country": "Botswana"
    },
    {
        "country": "Bouvet Island"
    },
    {
        "country": "Brazil"
    },
    {
        "country": "British Indian Ocean Territory"
    },
    {
        "country": "Brunei"
    },
    {
        "country": "Bulgaria"
    },
    {
        "country": "Burkina Faso"
    },
    {
        "country": "Burundi"
    },
    {
        "country": "Cambodia"
    },
    {
        "country": "Cameroon"
    },
    {
        "country": "Canada"
    },
    {
        "country": "Cape Verde"
    },
    {
        "country": "Cayman Islands"
    },
    {
        "country": "Central African Republic"
    },
    {
        "country": "Chad"
    },
    {
        "country": "Chile"
    },
    {
        "country": "China"
    },
    {
        "country": "Christmas Island"
    },
    {
        "country": "Cocos (Keeling) Islands"
    },
    {
        "country": "Colombia"
    },
    {
        "country": "Comoros"
    },
    {
        "country": "Congo"
    },
    {
        "country": "The Democratic Republic of Congo"
    },
    {
        "country": "Cook Islands"
    },
    {
        "country": "Costa Rica"
    },
    {
        "country": "Ivory Coast"
    },
    {
        "country": "Croatia"
    },
    {
        "country": "Cuba"
    },
    {
        "country": "Cyprus"
    },
    {
        "country": "Czech Republic"
    },
    {
        "country": "Denmark"
    },
    {
        "country": "Djibouti"
    },
    {
        "country": "Dominica"
    },
    {
        "country": "Dominican Republic"
    },
    {
        "country": "East Timor"
    },
    {
        "country": "Ecuador"
    },
    {
        "country": "Egypt"
    },
    {
        "country": "England"
    },
    {
        "country": "El Salvador"
    },
    {
        "country": "Equatorial Guinea"
    },
    {
        "country": "Eritrea"
    },
    {
        "country": "Estonia"
    },
    {
        "country": "Ethiopia"
    },
    {
        "country": "Falkland Islands"
    },
    {
        "country": "Faroe Islands"
    },
    {
        "country": "Fiji Islands"
    },
    {
        "country": "Finland"
    },
    {
        "country": "France"
    },
    {
        "country": "French Guiana"
    },
    {
        "country": "French Polynesia"
    },
    {
        "country": "French Southern territories"
    },
    {
        "country": "Gabon"
    },
    {
        "country": "Gambia"
    },
    {
        "country": "Georgia"
    },
    {
        "country": "Germany"
    },
    {
        "country": "Ghana"
    },
    {
        "country": "Gibraltar"
    },
    {
        "country": "Greece"
    },
    {
        "country": "Greenland"
    },
    {
        "country": "Grenada"
    },
    {
        "country": "Guadeloupe"
    },
    {
        "country": "Guam"
    },
    {
        "country": "Guatemala"
    },
    {
        "country": "Guernsey"
    },
    {
        "country": "Guinea"
    },
    {
        "country": "Guinea-Bissau"
    },
    {
        "country": "Guyana"
    },
    {
        "country": "Haiti"
    },
    {
        "country": "Heard Island and McDonald Islands"
    },
    {
        "country": "Holy See (Vatican City State)"
    },
    {
        "country": "Honduras"
    },
    {
        "country": "Hong Kong"
    },
    {
        "country": "Hungary"
    },
    {
        "country": "Iceland"
    },
    {
        "country": "India"
    },
    {
        "country": "Indonesia"
    },
    {
        "country": "Iran"
    },
    {
        "country": "Iraq"
    },
    {
        "country": "Ireland"
    },
    {
        "country": "Israel"
    },
    {
        "country": "Isle of Man"
    },
    {
        "country": "Italy"
    },
    {
        "country": "Jamaica"
    },
    {
        "country": "Japan"
    },
    {
        "country": "Jersey"
    },
    {
        "country": "Jordan"
    },
    {
        "country": "Kazakhstan"
    },
    {
        "country": "Kenya"
    },
    {
        "country": "Kiribati"
    },
    {
        "country": "Kuwait"
    },
    {
        "country": "Kyrgyzstan"
    },
    {
        "country": "Laos"
    },
    {
        "country": "Latvia"
    },
    {
        "country": "Lebanon"
    },
    {
        "country": "Lesotho"
    },
    {
        "country": "Liberia"
    },
    {
        "country": "Libyan Arab Jamahiriya"
    },
    {
        "country": "Liechtenstein"
    },
    {
        "country": "Lithuania"
    },
    {
        "country": "Luxembourg"
    },
    {
        "country": "Macao"
    },
    {
        "country": "North Macedonia"
    },
    {
        "country": "Madagascar"
    },
    {
        "country": "Malawi"
    },
    {
        "country": "Malaysia"
    },
    {
        "country": "Maldives"
    },
    {
        "country": "Mali"
    },
    {
        "country": "Malta"
    },
    {
        "country": "Marshall Islands"
    },
    {
        "country": "Martinique"
    },
    {
        "country": "Mauritania"
    },
    {
        "country": "Mauritius"
    },
    {
        "country": "Mayotte"
    },
    {
        "country": "Mexico"
    },
    {
        "country": "Micronesia, Federated States of"
    },
    {
        "country": "Moldova"
    },
    {
        "country": "Monaco"
    },
    {
        "country": "Mongolia"
    },
    {
        "country": "Montserrat"
    },
    {
        "country": "Montenegro"
    },
    {
        "country": "Morocco"
    },
    {
        "country": "Mozambique"
    },
    {
        "country": "Myanmar"
    },
    {
        "country": "Namibia"
    },
    {
        "country": "Nauru"
    },
    {
        "country": "Nepal"
    },
    {
        "country": "Netherlands"
    },
    {
        "country": "Netherlands Antilles"
    },
    {
        "country": "New Caledonia"
    },
    {
        "country": "New Zealand"
    },
    {
        "country": "Nicaragua"
    },
    {
        "country": "Niger"
    },
    {
        "country": "Nigeria"
    },
    {
        "country": "Niue"
    },
    {
        "country": "Norfolk Island"
    },
    {
        "country": "North Korea"
    },
    {
        "country": "Northern Ireland"
    },
    {
        "country": "Northern Mariana Islands"
    },
    {
        "country": "Norway"
    },
    {
        "country": "Oman"
    },
    {
        "country": "Pakistan"
    },
    {
        "country": "Palau"
    },
    {
        "country": "Palestine"
    },
    {
        "country": "Panama"
    },
    {
        "country": "Papua New Guinea"
    },
    {
        "country": "Paraguay"
    },
    {
        "country": "Peru"
    },
    {
        "country": "Philippines"
    },
    {
        "country": "Pitcairn"
    },
    {
        "country": "Poland"
    },
    {
        "country": "Portugal"
    },
    {
        "country": "Puerto Rico"
    },
    {
        "country": "Qatar"
    },
    {
        "country": "Reunion"
    },
    {
        "country": "Romania"
    },
    {
        "country": "Russian Federation"
    },
    {
        "country": "Rwanda"
    },
    {
        "country": "Saint Helena"
    },
    {
        "country": "Saint Kitts and Nevis"
    },
    {
        "country": "Saint Lucia"
    },
    {
        "country": "Saint Pierre and Miquelon"
    },
    {
        "country": "Saint Vincent and the Grenadines"
    },
    {
        "country": "Samoa"
    },
    {
        "country": "San Marino"
    },
    {
        "country": "Sao Tome and Principe"
    },
    {
        "country": "Saudi Arabia"
    },
    {
        "country": "Scotland"
    },
    {
        "country": "Senegal"
    },
    {
        "country": "Serbia"
    },
    {
        "country": "Seychelles"
    },
    {
        "country": "Sierra Leone"
    },
    {
        "country": "Singapore"
    },
    {
        "country": "Slovakia"
    },
    {
        "country": "Slovenia"
    },
    {
        "country": "Solomon Islands"
    },
    {
        "country": "Somalia"
    },
    {
        "country": "South Africa"
    },
    {
        "country": "South Georgia and the South Sandwich Islands"
    },
    {
        "country": "South Korea"
    },
    {
        "country": "South Sudan"
    },
    {
        "country": "Spain"
    },
    {
        "country": "Sri Lanka"
    },
    {
        "country": "Sudan"
    },
    {
        "country": "Suriname"
    },
    {
        "country": "Svalbard and Jan Mayen"
    },
    {
        "country": "Swaziland"
    },
    {
        "country": "Sweden"
    },
    {
        "country": "Switzerland"
    },
    {
        "country": "Syria"
    },
    {
        "country": "Tajikistan"
    },
    {
        "country": "Tanzania"
    },
    {
        "country": "Thailand"
    },
    {
        "country": "Timor-Leste"
    },
    {
        "country": "Togo"
    },
    {
        "country": "Tokelau"
    },
    {
        "country": "Tonga"
    },
    {
        "country": "Trinidad and Tobago"
    },
    {
        "country": "Tunisia"
    },
    {
        "country": "Turkey"
    },
    {
        "country": "Turkmenistan"
    },
    {
        "country": "Turks and Caicos Islands"
    },
    {
        "country": "Tuvalu"
    },
    {
        "country": "Uganda"
    },
    {
        "country": "Ukraine"
    },
    {
        "country": "United Arab Emirates"
    },
    {
        "country": "United Kingdom"
    },
    {
        "country": "United States Minor Outlying Islands"
    },
    {
        "country": "Uruguay"
    },
    {
        "country": "Uzbekistan"
    },
    {
        "country": "Vanuatu"
    },
    {
        "country": "Venezuela"
    },
    {
        "country": "Vietnam"
    },
    {
        "country": "Virgin Islands, British"
    },
    {
        "country": "Virgin Islands, U.S."
    },
    {
        "country": "Wales"
    },
    {
        "country": "Wallis and Futuna"
    },
    {
        "country": "Western Sahara"
    },
    {
        "country": "Yemen"
    },
    {
        "country": "Zambia"
    },
    {
        "country": "Zimbabwe"
    }
]
export const startTime = [
  {
    id: 1,
    time: "9:00 AM"
  },
  {
    id: 2,
    time: "9:30 AM"
  },
  {
    id: 3,
    time: "10:00 AM"
  },
  {
    id: 4,
    time: "10:30 AM"
  },
  {
    id: 5,
    time: "11:00 AM"
  },
  {
    id: 6,
    time: "11:30 AM"
  },
  {
    id: 7,
    time: "12:00 PM (Noon)"
  },
  {
    id: 8,
    time: "12:30 PM"
  },
  {
    id: 9,
    time: "1:00 PM"
  },
  {
    id: 10,
    time: "1:30 PM"
  },
  {
    id: 11,
    time: "2:00 PM"
  },
  {
    id: 12,
    time: "2:30 PM"
  },
  {
    id: 13,
    time: "3:00 PM"
  },
  {
    id: 14,
    time: "3:30 PM"
  },
  {
    id: 15,
    time: "4:00 PM"
  },
  {
    id: 16,
    time: "4:30 PM"
  },
  {
    id: 17,
    time: "5:00 PM"
  },
  {
    id: 18,
    time: "5:30 PM"
  },
  {
    id: 19,
    time: "6:00 PM"
  },
  {
    id: 20,
    time: "6:30 PM"
  },
]
export const endTime = [
  {
    id: 1,
    time: "9:00 AM"
  },
  {
    id: 2,
    time: "9:30 AM"
  },
  {
    id: 3,
    time: "10:00 AM"
  },
  {
    id: 4,
    time: "10:30 AM"
  },
  {
    id: 5,
    time: "11:00 AM"
  },
  {
    id: 6,
    time: "11:30 AM"
  },
  {
    id: 7,
    time: "12:00 PM (Noon)"
  },
  {
    id: 8,
    time: "12:30 PM"
  },
  {
    id: 9,
    time: "1:00 PM"
  },
  {
    id: 10,
    time: "1:30 PM"
  },
  {
    id: 11,
    time: "2:00 PM"
  },
  {
    id: 12,
    time: "2:30 PM"
  },
  {
    id: 13,
    time: "3:00 PM"
  },
  {
    id: 14,
    time: "3:30 PM"
  },
  {
    id: 15,
    time: "4:00 PM"
  },
  {
    id: 16,
    time: "4:30 PM"
  },
  {
    id: 17,
    time: "5:00 PM"
  },
  {
    id: 18,
    time: "5:30 PM"
  },
  {
    id: 19,
    time: "6:00 PM"
  },
  {
    id: 20,
    time: "6:30 PM"
  },
]
export const literacy = [
  {
    id: 1,
    title: "LVEC",
    button: [
      {
        id:1,
        title: "LVEC",
        link: "https://www.englishhelpect.com/",
        content: "Otis Library provides space to Literacy Volunteers of Eastern Connecticut (LVEC) to assure access to their programs and services for Norwich and Norwich-area residents. LVEC engages volunteers to assist adult New Americans to learn English as another language. LVEC offers conversation groups to serve its enrolled learners at the LVEC office in Otis Library.",
      }
    ],
  },
  {
    id: 2,
    title: "Learning English",
    button: [
      {
        id: 1,
        title: "Pronunciator",
        content: "Our Learning English collection is located next to the Business Center Desk. The collection includes grammar, vocabulary, dictionaries, reading and writing, and conversation materials.",
        link: "/learn-a-language"
      },
      {
        id: 2,
        title: "USA Learns",
        content: "",
        link: "http://www.usalearns.org/"
      }
    ]
  }
]
export const temp_card = [
  {
    id: 1,
    title: "Need immediate access to our incredible resources but don't have a permanent library card yet?",
    content: "No worries! Otis Library is pleased to offer temporary library cards, designed to bridge the gap and get you exploring our world of knowledge right away."
  },
  {
    id: 2,
    title: "Here's how it works:",
    content: "Your online card will expire in three months and is only valid for Otis Library's online resources. Before the expiration date, please visit Otis Library to receive your physical card, which will provide access to materials and resources at Otis Library and at libraries throughout the state. Please bring valid ID (not expired) and proof of Norwich residency. If you are experiencing difficulties in coming into the library, call 860-889-2365, press 0, and we will be happy to help you.",
  }
]
export const museum_passes = [
  {
    id: 1,
    title: "Here's how it works:",
    sections: [
      {
        id: 1,
        title: "Eligibility:",
        items: [
          {
            id: 1,
            content: "Must be 18 years or over with an Adult Library card."
          },
          {
            id: 2,
            content: "Must have a valid library card at the time of check out."
          }
        ]

      },
      {
        id: 2,
        title: "Process:",
        items: [
          {
            id: 1,
            content: "Day 1: Pick up Pass"
          },
          {
            id: 2,
            content: "Day 2: Use Pass (may also be picked up this day before noon)"
          },
          {
            id: 3,
            content: "Day 3: Return Pass to Otis Library prior to closing"
          }
        ]
      },
      {
        id: 3,
        title: "Cancellations, Replacements, and Fines:",
        items: [
          {
            id: 1,
            content: "If it is necessary to cancel a reservation, please do so by no later  than 10:00 AM (day of scheduled use)."
          },
          {
            id: 2,
            content: "Replacement costs will be charged to patron for lost pass (prices vary)."
          },
          {
            id: 3,
            content: "Overdue fine for late passes is $2.00 per day."
          }
        ]
      },
      {
        id: 4,
        title: "Access:",
        items: [
          {
            id: 1,
            content: "Passes are for free or reduced admission."
          }
        ]
      }
    ]
  }
]
export const attractions = [
  {
      id: 1,
      title: "Wadsworth Atheneum Museum of Art",
      link: "https://www.thewadsworth.org/",
      address: "600 Main St, Hartford, CT 06103",
      phone: "(860) 278-2670",
      img: wadsworth
  },
  {
      id: 2,
      title: "The Slater Memorial Museum",
      link: "http://www.slatermuseum.org",
      address: "108 Cresent Street, Norwich, CT 06360",
      phone: "(860) 887-2506",
      img: slater
  },
  {
      id: 3,
      title: "Florence Griswold Museum",
      link: "https://florencegriswoldmuseum.org/",
      address: "96 Lyme St., Old Lyme, CT 06371",
      phone: "(860) 434-5542",
      img: florence
  },
  {
      id: 4,
      title: "Denison Pequotsepos Nature Center ",
      link: "http://www.dpnc.org",
      address: "109 Pequotsepos Rd. Mystic, CT 06355",
      phone: "(203) 557-4400",
      img: dpnc
  },
  {
      id: 5,
      title: "Custom House Maritime Museum ",
      link: "http://www.nlmaritimesociety.org ",
      address: "150 Bank St., New London, CT 06320",
      phone: "(860) 447-2501",
      img: nlms
  },
  {
      id: 6,
      title: "Connecticut's Old State House",
      link: "http://ctoldstatehouse.org",
      address: "800 Main Street, Hartford, CT 06103",
      phone: "(860) 522-6766",
      img: oldstate
  },
  {
      id: 7,
      title: "Children's Museum of Southeastern Connecticut",
      link: "http://childrensmuseumsect.org",
      address: "409 Main Street, Niantic, CT 06357",
      phone: "(860) 691-1111",
      img: childrens
  }
]
export const notary_documents = [
  {
    id: 1,
    sections: [
      {
        id: 1,
        title: "Documents We Cannot Notarize:",
        items: [
          {
            id: 1,
            title: "Wills:", 
            content: "As the legal complexity of wills requires specialized expertise, we recommend seeking the guidance of an attorney for their creation and execution."

          },
          {
            id: 2,
            title: "Powers of attorney:",
            content: "We happily notarize powers of attorney documents granting legal authority to act on your behalf."
          },
          {
            id: 3,
            title: "Adoptions:",
            content: "While we understand the significance of adoptions, due to the sensitive nature and legal complexities involved, we cannot notarize adoption papers."          
          },
          {
            id: 4,
            title: "Child custody agreements:",
            content: "We recognize the importance of legal agreements for child custody, but unfortunately, we cannot handle the notarization of these documents."
          },
          {
            id: 5,
            title: "I-9 forms:",
            content: "Though we offer general notary services, verifying identity and eligibility for USCIS through I-9 forms falls outside our scope."
          },
          {
            id: 7,
            title: "Blank forms:",
            content: "Our services apply to completed and signed documents. We cannot notarize blank forms."
          }
        ]
      },
    ],
  }
]
export const notary_misc = [
  {
    id: 1,
    title: "Identification Requirements:",
    items: [
      {
        id: 1,
        content: "To ensure the validity of the notarization, the signer must provide two forms of government-issued photo identification, at least one of which must contain the signer's physical description."
      }
    ]
  },
  {
    id: 2,
    title: "Witness Requirements:",
    items: [
      {
        id: 1,
        content: "Some documents may require witnesses in addition to the notary. You are responsible for providing the necessary witnesses for these occasions."
      }
    ]
  },
  {
    id: 3,
    title: "Signing and Witnessing:",
    items: [
      {
        id: 1,
        content: "The notary will witness your signature on the document and complete the necessary paperwork to certify it."          }
    ]
  }
]
export const notary_questions = [
  {
    id: 1,
    content: "Notaries Public do not provide legal advice. If you have questions regarding your document's content, form, preparation, adequacy, and process, please contact an attorney before requesting notarization. If a Notary is not comfortable notarizing the document, they are not required to notarize it."
  },
  {
    id: 2,
    content: "To make an appointment, please e-mail Deana at deager@otislibrarynorwich.org or leave a message at 860-889-2365 x106."
  }

]
export const nfaexhibit = [
  {
      thumbnail: nfa1,
      exhibitImage: nfa1,
  },
  {
      thumbnail: nfa2,
      exhibitImage: nfa2,
  },
  {
      thumbnail: nfa3,
      exhibitImage: nfa3,
  },
  {
      thumbnail: nfa4,
      exhibitImage: nfa4
  }
];

export const genres_desc = [
  {
    title: "Arts and Crafts",
    id:"crafts",
  },
  {
    title: "Biography",
    id:"biography",
  },
  {
    title: "Christian Fiction",
    id:"christian",
  },
  {
    title: "Cooking",
    id:"cooking",
  },
  {
    title: "Fantasy",
    id:"fantasy",
  },
  {
    title: "Graphic Novels",
    id:"novels",
  },
  {
    title: "Historical Fiction",
    id:"historcial",
  },
  {
    title: "Literary Fiction",
    id:"literary",
  },
  {
    title: "Music",
    id:"music",
  },
  {
    title: "Mystery", 
    id:"mystery",
  },
  {
    title: "Outer Space",
    id:"space",
  },
  {
    title: "Paranormal",
    id:"paranormal",
  },
  {
    title: "Parenting",
    id:"parenting",
  },
  {
    title: "Poetry",
    id:"poetry",
  },
  {
    title: "Romance",
    id:"romance",
  },
  {
    title: "Science Fiction",
    id:"science",
  },
  {
    title: "Self Help",
    id:"help",
  },
  {
    title: "Sports",
    id:"sports",
  },
  {
    title: "Thriller",
    id:"thriller",
  },
  {
    title: "True Crime",
    id:"crime",
  },
  {
    title: "Western",
    id:"western",
  }
]
export const liked_topics = [
  {
    title: "Animals",
    id:"animals",
  },
  {
    title: "Coming of Age",
    id:"comingofage",
  },
  {
    title: "Crime",
    id:"crime",
  },
  {
    title: "Dark or Cynical Humor",
    id:"dark",
  },
  {
    title: "Death",
    id:"death",
  },
  {
    title: "Disasters",
    id:"disasters",
  },
  {
    title: "Disease",
    id:"disease",
  },
  {
    title: "Family",
    id:"family",
  },
  {
    title: "History",
    id:"history",
  },
  {
    title: "LGBTQ+", 
    id:"lgbtq",
  },
  {
    title: "Medicine",
    id:"medicine",
  },
  {
    title: "Military",
    id:"military",
  },
  {
    title: "Politics",
    id:"politics",
  },
  {
    title: "Religion",
    id:"religion",
  },
  {
    title: "Romance",
    id:"romance",
  },
  {
    title: "Social Justice",
    id:"socialjustice",
  },
  {
    title: "Technology",
    id:"technology",
  },
  {
    title: "War",
    id:"war",
  }
]
export const dislikes = [
  {
    id: "language",
    title: "Obscene Language"
  },
  {
    id: "violence",
    title: "Graphic Violence"
  },
  {
    id: "sex",
    title: "Graphic Sexual Scenes"
  },
  {
    id: "trauma",
    title: "Trauma Sensitive Issues"
  },
  {
    id: "substance",
    title: "Substance Abuse"
  },
  {
    id: "other",
    title: "Other"
  }
]
export const format = [
  {
    id: "audiobook",
    title: "Audiobook"
  },
  {
    id: "hardcover",
    title: "Hard Cover"
  },
  {
    id: "largeprint",
    title: "Large Print"
  },
  {
    id: "paperback",
    title: "Paperback"
  },
  {
    id: "DVD",
    title: "DVD's"
  }
]
export const donorspotlight = [
  {
      id: 1,
      sections: [
          {
              id: 1,
              title: "Marianne Juber ",
              img: marianne,
              contents: [
                  {
                      id: 1,
                      content: "Marianne Juber has been visiting Otis Library for more than 40 years.  She remembers that as a Saint Joseph School student, she would walk downtown to the Library and be in awe of the abundance of books and resources.  Later, she experienced this with her husband and three children, then as a teacher accompanying her students, and now with her five grandchildren.  "
                  },
                  {
                      id: 2,
                      content: "As an educator, Marianne knows the Library’s impact on her students.  “Throughout the years, Otis has offered my students a safe place to work on both their strengths and weaknesses. Students have attended programs that have not only opened up their awareness to different topics, cultures, and traditions but the Library has also served as a space to develop their creativity, social skills and build relationships.”"
                  },
                  {
                      id: 3,
                      content: "Marianne feels that Otis Library provides a comfort zone for all.  “It’s a community space where everyone can learn and ask questions.  I’ve watched the staff provide programs, materials, resources, and internet access, all with a friendly face, welcoming spirit, and, most importantly, genuine respect. If the staff doesn’t know the answer, they will work to find it!”"
                  },
                  {
                      id: 4,
                      content: "When asked what she would want all patrons to know about Otis Library, Marianne shared, “I encourage everyone to visit Otis Library.  Yes, read the newsletters, visit the website, and follow the social media accounts but also visit the building! Wander through the stacks.  You have to see it. You have to experience it!  Additionally, consider supporting the Library. Don’t wait until the end of the year.  Give what you can, when you can.”"
                  }
              ]
          },
          {
              id: 2,
              title: "The Rows City Knitters!",
              img: knittersgroup,
              contents: [
                  {
                      id: 1,
                      content: "The Rows City Knitters are celebrating their 10-year knit-iversary!  Otis Library has served as home base for this “sit & knit” group for the past 10 years.  If you have ever visited the Library on a Friday morning around 10am, you’ve heard the laughter and have felt the energy of this special group of community knitters!"
                  },
                  {
                      id: 2,
                      content: "This adult knitting group is free and open to all.  It’s a place where knitters can bring a personal project, ask questions, and get peer-to-peer hands-on help with a knitting technique.  John Andriso said, “The group is wonderful and absolutely nonjudgmental! We only judge when a member holds up a completed creation and we all oooh and ahhh, gushing over how beautiful it is!”  ”"
                  },
                  {
                      id: 3,
                      content: "The knitters are also a group that works to give back to the community. The 20+ members create community projects using their knitting closet housed at the Library. The knitting closet is magical, composed of donated acrylic yarn. The closet serves as the supply chain for all of the handmade donated projects.  The list of organizations that have benefited from this crafty work is long and includes St. Vincent DePaul Place, Madonna Place, Hospice, Catholic Charities, Thames River House, Saint Mary’s, The United Way, and the Family Resource Centers in the Norwich Public Schools.  Additionally, scarf and hat giveaways are staged around town a few times a year. The group also has participated in special campaigns such as ‘Little Hats for Big Hearts’ and ‘Hat not Hate.’"
                  },
                  {
                      id: 4,
                      content: "The Rows City Knitters knitted on Zoom during the pandemic and moved to the Norwichtown Green during good weather when the Library was not yet open for in-person programs.  The outdoor location allowed for the group to be visible beyond the walls of the Library.  The group can be found on the Green from July to September.   This change of space serves as a great spot to drop off a yarn donation and lets the membership talk about the Library to all those who stop by.  The membership is happy to call Otis home and Otis is happy to have served as home to this vibrant group for 10 years!  Feel free to drop in and knit with this lovely, welcoming group every Friday at 10am in the Meeting Room.  This adult program is free and requires no registration."
                  }
              ]
          },
          {
            id: 3,
            title: "Attorney Bart Sayet and Lori Lindfors",
            img: bartandlori,
            contents: [
              {
                id: 1,
                content: "Bart and Lori have been connected to Otis Library since childhood. They visited Otis Library as kids, regularly took their children to the Library, and now share the library with their grandchildren. They love to read so much so that Lori is known to read a book a day when she is vacationing, and Bart shared that when was young driver, a neighbor called his parents to disclose that they saw Bart reading while driving!  "
              },
              {
                id: 2,
                content: "It’s not just reading that connects Bart and Lori to Otis Library. While they are appreciative of the traditional services that are offered, they believe Otis Library provides so much more. “Otis is our Community Center. The programs and services offered to the public go far beyond books. It’s vital programs such as the summer lunch program, personal computer access, and connection to employment and health resources are key components to making our community stronger,” said Lori. "
              },
              {
                id: 3,
                content: "Bart and Lori are involved in many nonprofits and community organizations. They are founders of the Laura B. Seder Tennis Camp which has introduced the game of tennis to hundreds of children since it began in 2011. Bart proudly serves as an Otis Library Trustee, and together they have sponsored countless programs and events for the children and families of Norwich. “We can all do something—participate, give time, share talents, donate, it’s important that we all do what we can,” said Bart.  When asked what they hope to achieve with their philanthropy? “To leave the world a little bit better,” they said in unison."
              }
            ]
          },
          {
            id: 4,
            title: "The Norwich Bookies",
            img: norwichbookies,
            contents: [
              {
                id: 1,
                content: "The “Norwich Bookies” have been meeting every month for as long as they can remember. The Norwich based book club has read more than 235 books. Through their shared love of reading, they have supported one another throughout every passage of life: milestone birthdays, weddings, bar mitzvahs, births, deaths, and illnesses. No matter what heavy heart or light heart they have shared, they always return to the book at hand, prepared and ready to discuss. It’s a friendship that started with a love of reading and is tended to each month."
              },
              {
                id: 2,
                content: "Recently, members Joan Gordon, Flossie Betten, Claire Warren, Jane Shea, Judy Foley and Diane Stockton gathered for their monthly book club while remembering their longtime fellow “Bookie,” Betsy Rosenberg. Betsy passed away several months ago."
              },
              {
                id: 3,
                content: "The Norwich Bookies all identified Betsy as the “guiding star” of the group. Describing her as a seasoned librarian who loved research and learning. Betsy was a dedicated member and would travel from New York each month to attend the discussion.  Betsy loved to read.  "
              },
              {
                id: 4,
                content: "Over the past few months, the Norwich Bookies have considered how they should honor Betsy’s memory. Simply put, they knew books had to play a role. Otis Library serves as a community touchstone for the love of learning and reading for all, and the group wanted to be sure that that never ends. Together, they made a donation to Otis Library in memory of Betsy Rosenberg. This generous gift first serves to provide a few of Betsy’s favorite book club selections and additionally will sponsor a storytime program. The Norwich Bookies value connection, community, learning, exploring and reading! Together, we remember their dear friend, gifted librarian, lover of books and knowledge, Betsy Rosenberg. "
              }
            ]
          }
      ]
  }
]
export const flickrcontent = [
  {
      id: 1,
      title: "Unveil the Past.",
      subtitle: "Dive into Otis Library's Historical Photo Collection on Flickr!",
      content: "Otis Library holds not just books, but stories etched in time. Our online collection of historical photographs on Flickr invites you to unveil the vibrant layers of Norwich and Taftville's past from the 19th and early 20th centuries.",
      photoTitle: "Flickr Photos",
      link: "https://www.flickr.com/photos/otis_library_collections/",
      links: [
          {
            id: 2,
            title: "18th Regiment CT Volunteer Infantry",
            link: "https://flic.kr/p/2jeijWQ"
          },
          {
            id: 3,
            title: "The Art of Advertising - 19th Century",
            link: "https://flic.kr/p/2kD75rw"
          },
          {
            id: 4,
            title: "Daniel Wadsworth Coit - Sketches of Norwich",
            link: "https://flic.kr/p/2iZZjqd"
          },
          {
            id: 5,
            title: "Ned Hanlon: Father of Modern Baseball",
            link: "https://flic.kr/p/2krPaMM"
          },
          {
            id: 6,
            title: "Norwich - 19th Century",
            link: "https://flic.kr/p/2kJbdTn"
          },
          {
            id: 7,
            title: "Norwich Banks",
            link: "https://flic.kr/p/2kwRnaD"
          },
          {
            id: 8,
            title: "Norwich Public Schools",
            link: "https://flic.kr/p/2jct9La"
          },
          {
            id: 9,
            title: "Norwich State Hospital",
            link: "https://flic.kr/p/BNAde3"
          },
          {
            id: 10,
            title: "Norwich - November 1940",
            link: "https://flic.kr/p/2jjiBAL"
          },
          {
            id: 11,
            title: "Otis Library - 19th Century",
            link: "https://flic.kr/p/2kyPEBv"
          },
          {
            id: 12,
            title: "Ponemah Mills",
            link: "https://flic.kr/p/2kpEneS"
          },
          {
            id: 13,
            title: "Steamships - Norwich, CT",
            link: "https://flic.kr/p/2kAYPMQ"
          },
          {
            id: 14,
            title: "Streetcars - Norwich",
            link: "https://flic.kr/p/2j8vJmB"
          },
          {
            id: 15,
            title: "Yantic, CT - Early 20th Century",
            link: "https://flic.kr/p/2kuwn7P"
          }
      ]
  }
]
export const months = [
  {
    id: 0,
    title: "Main",
    link: "/misinformation"
  },
  {
    id: 1,
    title: 'January',
    link: "/misinformation/jan"
  },
  {
    id: 2,
    title: 'February',
    link: "/misinformation/feb"
  },
  {
    id: 3,
    title: 'March',
    link: "/misinformation/march"
  },
  {
    id: 4,
    title: 'April',
    link: "/misinformation/april"
  },
  {
    id: 5,
    title: 'May',
    link: "/misinformation/may"
  },
  {
    id: 6,
    title: 'June',
    link: "/misinformation/june"
  },
  {
    id: 7,
    title: 'July',
    link: "/misinformation/july"
  },
  {
    id: 8,
    title: 'August',
    link: "/misinformation/aug"
  },
  {
    id: 9,
    title: 'September',
    link: "/misinformation/sept"
  },
  {
    id: 10,
    title: 'October',
    link: "/misinformation/oct"
  },
  {
    id: 11,
    title: 'November',
    link: "/misinformation/nov"
  },
  {
    id: 12,
    title: 'December',
    link: "/misinformation/dec"
  }
];