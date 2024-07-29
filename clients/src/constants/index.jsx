import { FaCalendar, FaRegDotCircle  } from "react-icons/fa";

export const features = [
  {
    title: "Offer multiple call durations",
    description:
      "Pick & choose which call durations make sense for you. Offer sessions ranging from 15 min to 3 hours",
    details: (
      <div className="p-4 border bg-slate-100 rounded-md justify-center flex flex-col space-y-4 items-center h-full">
        <h1 className="text-xl font-bold mb-2">Available Session Lengths</h1>
        <p className="mb-4 text-md p-16-regular text-gray-600">Caller can book you for 15, 30, & 50 min slots</p>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-1 mb-4">
          <div className="border border-gray-300 bg-blue-700 text-white font-bold p-2 text-lg rounded-lg">
            Regular - 15min
          </div>
          <div className="border border-gray-300 bg-blue-700 text-white font-bold p-2 text-lg rounded-lg">
            Popular - 30min
          </div>
          <div className="border border-gray-300 bg-blue-700 text-white font-bold p-2 text-lg rounded-lg">
            Extra - 45min
          </div>
          <div className="border  bg-gray-300 p-2 text-md font-bold rounded-lg">
            All access - 60min
          </div>
          <div className="border bg-gray-300 p-2 text-md font-bold rounded-lg">
            1.5hr
          </div>
          <div className="border bg-gray-300 p-2 text-md  font-bold rounded-lg">
            2hr
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Sync with your calendar",
    description:
      "Connect your Google calendar & as you update it, Intro will block off those times",
    details: (
      <div className="p-4 border bg-slate-100 rounded-md justify-center flex flex-col space-y-4 items-center h-full">
        <div className="flex items-center gap-2 ">
          <FaCalendar className="text-blue-500 text-2xl" />
          <p className="text-lg font-bold">Google Calendar</p>
        </div>
        <div className="bg-blue-500 text-white text-center p-2 rounded-lg cursor-pointer">
          Connect
        </div>
      </div>
    ),
  },
  {
    title: "Support a charity",
    description:
      "Let consumers know that you’re donating 50% of proceeds to the charity of your choice",
    details: (
      <div className="p-4 border bg-slate-100 rounded-md justify-center flex flex-col space-y-4 items-center h-full">
        <p className="text-center p-4 text-black font-bold border bg-slate-100 rounded-md shadow-lg">
          50% of proceeds will be <br /> donated to homeless peoples
        </p>
      </div>
    ),
  },
  {
    title: "Automated reminders",
    description:
      "Preppeer will remind you & the caller to join the session via notifications or text reminders",
    details: (
      <div className="p-4 border bg-slate-100 rounded-md justify-center flex flex-col space-y-4 items-center h-full">
        <p className="text-center text-gray-600 font-bold">
          Reminder: Your upcoming Preppeer session with students starts in 10
          minutes at 2:00 PM. To join the session.
        </p>
      </div>
    ),
  },
  {
    title: "Offer call extensions",
    description:
      "Intro will ask the customer if they would like to pay to extend the session & help you earn more",
    details: (
      <div className="p-4 border bg-slate-100 rounded-md justify-center flex flex-col space-y-1 items-center h-full">
        <p className="text-center text-gray-600 mt-24">
          <span className="text-lg text-black font-bold">
            Caller would like to:
          </span>{" "}
          <br />
          <span className="text-md text-gray-700">extend call by 15 min</span>
        </p>
        <div className="flex flex-col items-center mt-2 p-4">
          <div className="bg-blue-500 text-white font-bold p-6 rounded-lg cursor-pointer mb-2">
            Tap to Accept
            <p className="text-white text-center">Earn $20</p>
          </div>

          <div className=" text-red-600 p-2 cursor-pointer mb-2">
            Decline request
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Automatic payouts",
    description:
      "Connect your bank account & get automated payouts. Powered by Stripe & Intro",
    details: (
      <div className="p-10 border bg-slate-100 rounded-md flex flex-row items-center justify-center h-full">
        <div className="flex-1 items-center">
          <h1 className="text-lg font-bold">Direct Deposit</h1>
          <p className=" text-blue-500">Enable</p>
        </div>
        <div className="flex mb-2">
          <FaRegDotCircle className="text-blue-500 text-2xl" />
        </div>
      </div>
    ),
  },
];

export const details = [
    {
      title: "Offer multiple call durations",
     
      details: (
        <div className="p-4 border bg-slate-100 rounded-md justify-center flex flex-col space-y-4 items-center h-full">
          <h1 className="text-xl font-bold mb-2">Available Session Lengths</h1>
          <p className="mb-4 text-md p-16-regular text-gray-600">Caller can book you for 15, 30, & 50 min slots</p>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-1 mb-4">
            <div className="border border-gray-300 bg-blue-700 text-white font-bold p-2 text-lg rounded-lg">
              Regular - 15min
            </div>
            <div className="border border-gray-300 bg-blue-700 text-white font-bold p-2 text-lg rounded-lg">
              Popular - 30min
            </div>
            <div className="border border-gray-300 bg-blue-700 text-white font-bold p-2 text-lg rounded-lg">
              Extra - 45min
            </div>
            <div className="border  bg-gray-300 p-2 text-md font-bold rounded-lg">
              All access - 60min
            </div>
            <div className="border bg-gray-300 p-2 text-md font-bold rounded-lg">
              1.5hr
            </div>
            <div className="border bg-gray-300 p-2 text-md  font-bold rounded-lg">
              2hr
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sync with your calendar",
   
      details: (
        <div className="p-4 border bg-slate-100 rounded-md justify-center flex flex-col space-y-4 items-center h-full">
          <div className="flex items-center gap-2 ">
            <FaCalendar className="text-blue-500 text-2xl" />
            <p className="text-lg font-bold">Google Calendar</p>
          </div>
          <div className="bg-blue-500 text-white text-center p-2 rounded-lg cursor-pointer">
            Connect
          </div>
        </div>
      ),
    }

]

export const faqs = [
  {
    question: "How much can I make?",
    answer: (
      <>
        We have some experts that sell out within a few minutes and some that
        get a few bookings each month. Based on our math, we believe that
        experts will have the opportunity to generate $500k+ in additional
        yearly revenue.
      </>
    ),
  },
  {
    question: "Is there a minimum time commitment?",
    answer: (
      <>
        You can add as many sessions as you'd like. There are no minimums or
        maximums. We have some experts that offer one hour per month and others
        that offer 50+ hours per month. To make things even easier, Intro will
        integrate with your primary calendar to avoid scheduling conflicts.
      </>
    ),
  },
  {
    question: "How long are the sessions?",
    answer: (
      <>
        Experts can choose to offer sessions ranging from 15 minutes to 3 hours.
        Most experts choose to offer between 15-60 minutes. All video sessions
        have a timer feature preventing your calls from going over the booked
        duration.
      </>
    ),
  },
  {
    question: "How much should I charge?",
    answer: (
      <>
        We recommend taking your hourly rate and adding a 20% premium to it. We
        have experts that charge anywhere from $100 to $2000 per hour ($35 to
        $500 per 15 minute session).
      </>
    ),
  },
  {
    question: "Do I have to prepare for these sessions?",
    answer: (
      <>
        No. Just join the video call, listen to the caller's questions, and help
        them out. It's free form and does not require any work before or after
        the session. Experts can always choose to ask the caller pre-session
        questions to better prepare for the consultation.
      </>
    ),
  },
  {
    question: "Do I have to pay a subscription fee to join Preppeer?",
    answer: (
      <>
        Prepeer is free to join. We only make money when our experts do and also
        believe in a fair pricing model. For bookings through our marketplace,
        we ask for a 30% commission. For bookings that our experts produce, we
        ask for a 10% commission.
      </>
    ),
  },
];


export const uniqueFilters = [
  {
    name: "Essays",
    value: "Essays",
    subcategories: [
      { name: "Essay Writing", value: "Essay Writing"},
      { name: "Essay Review", value: "Essay Review" }
    ]
  },
  {
    name: "Extracurricular Activities",
    value: "Extracurricular Activities",
    subcategories: []
  },
  {
    name: "Research / Publications",
    value: "Research / Publications",
    subcategories: []
  },
  {
    name: "High School Internships",
    value: "High School Internships",
    subcategories: [
      { name: "college", value: "college" },
      { name: "in-person", value: "in-person" },
      { name: "hybrid", value: "hybrid" },
    ]
  },
  {
    name: "Self-initiated projects",
    value: "Self-initiated projects",
    subcategories: []
  },
  {
    name: "Competitions & Awards",
    value: "Competitions & Awards",
    subcategories: []
  },
  {
    name: "Public speaking",
    value: "Public speaking",
    subcategories: [
      { name: "debate", value: "debate" },
      { name: "MUN", value: "MUN" }
    ]
  },
  {
    name: "Summer Schools",
    value: "Summer Schools",
    subcategories: []
  },
  {
    name: "University Reality/Fit Check ",
    value: "University Reality/Fit Check ",
    subcategories: []
  },
  {
    name: "Sports Admission",
    value: "Sports Admission",
    subcategories: []
  },
  {
    name: "Tests",
    value: "Tests",
    subcategories: [
      { name: "Language tests", value: "Language tests" },
      { name: "SAT/ACT", value: "SAT/ACT" },
      { name: "LSAT", value: "LSAT" },
      { name: "BMAT", value: "BMAT" },
    ]
  },
  {
    name: "Scholarships",
    value: "Scholarships",
    subcategories: [
      { name: "Merit-based", value: "Merit-based" },
      { name: "CSS profile", value: "CSS profile" },
    ]
  },
  {
    name: "Volunteering",
    value: "Volunteering",
    subcategories: []
  },
];

  // Define categories and subcategories
  export const categories = [
    "Essays",
    "Extracurricular Activities",
    "Research / Publications",
    "High School Internships",
    "Self-initiated projects",
    "Competitions & Awards",
    "Public speaking",
    "Summer Schools",
    "University Reality/Fit Check",
    "Sports Admission",
    "Tests",
    "Scholarships",
    "Volunteering",
  ];

  export const subcategoriesMap = {
    "Essays": ["Essay Writing", "Essay Review"],
    "Research / Publications": [],
    "High School Internships": ['college', "in-person", "hybrid"],
    "Self-initiated projects": [],
    "Competitions & Awards": [],
    "Public speaking": ["debate", "MUN"],
    "Summer Schools": [],
    "University Reality/Fit Check": [],
    "Sports Admission": [],
    "Tests": ["Language tests", "SAT/ACT", "LSAT", "BMAT"],
    "Scholarships": ["Merit-based", "CSS profile"],
    "Volunteering": [],
  };

  export const majors = [
    "Architecture",
    "Biology",
    "Business and Management",
    "Communications & Media Studies",
    "Journalism",
    "Cultural & Gender Studies",
    "Computer Science",
    "Education",
    "Engineering",
    "Language & Literature",
    "Medicine & Public Health",
    "History",
    "Law",
    "Legal Studies",
    "Liberal Arts & Humanities",
    "Mathematics & Statistics",
    "Interdisciplinary Studies",
    "Environmental Studies",
    "Philosophy",
    "Theology & Religious Studies",
    "Physics",
    "Astrophysics",
    "Chemistry",
    "Psychology",
    "Anthropology",
    "Criminology",
    "Economics",
    "Geography",
    "International Relations",
    "Political Science",
    "Sociology",
    "STEM",
    "Social Sciences",
    "Humanities",
    "Electrical and Information Engineering"
  ];

  export const admissions = [
    "Music Admissions",
    "Art Admissions",
    "Film Admissions"
  ];

  export const priceOptions = [
    { value: 20, label: "$20/15min" },
    { value: 30, label: "$30/30min" },
    { value: 40, label: "$40/1h" },
  ];

export const languages = [
  "English", "Spanish", "Mandarin", "French", "German", "Russian", "Arabic",
  "Hindi", "Bengali", "Portuguese", "Urdu", "Japanese", "Turkish", "Korean",
  "Italian", "Vietnamese", "Telugu", "Tamil", "Marathi", "Gujarati", "Polish",
  "Ukrainian", "Dutch", "Persian", "Thai", "Romanian", "Swedish", "Czech",
  "Greek", "Bulgarian", "Danish", "Finnish", "Norwegian", "Hungarian",
  "Hebrew", "Croatian", "Indonesian", "Malay", "Slovak", "Slovenian",
  "Lithuanian", "Latvian", "Estonian", "Maltese", "Icelandic", "Albanian",
  "Serbian", "Macedonian", "Montenegrin", "Bosnian", "Kurdish", "Georgian",
  "Armenian", "Azerbaijani", "Kazakh", "Turkmen", "Uzbek", "Tajik", "Kyrgyz",
  "Tatar", "Bashkir", "Mongolian", "Chinese", "Korean", "Japanese", "Vietnamese", 
 
];


