import { FaCalendar, FaRegDotCircle } from "react-icons/fa";

export const features = [
  {
    title: "Offer multiple call durations",
    description:
      "Pick & choose which call durations make sense for you. Offer sessions ranging from 15 min to 3 hours",
    details: (
      <div className="p-4 border bg-slate-100 rounded-md justify-center flex flex-col space-y-4 items-center h-full">
        <h1 className="text-xl font-bold mb-2">Available Session Lengths</h1>
        <p className="mb-4 text-md p-16-regular text-gray-600">
          Caller can book you for 15, 30, & 50 min slots
        </p>
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
        <p className="mb-4 text-md p-16-regular text-gray-600">
          Caller can book you for 15, 30, & 50 min slots
        </p>
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
  },
];

export const faqs = [
  {
    question:
      "What is the main benefit of talking to current students through your service?",
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
    question: "How do I book a call with a current student?",
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
    question: "What kind of questions can I ask during the call?",
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
    question: "How are the students selected for the calls?",
    answer: (
      <>
        We recommend taking your hourly rate and adding a 20% premium to it. We
        have experts that charge anywhere from $100 to $2000 per hour ($35 to
        $500 per 15 minute session).
      </>
    ),
  },
  {
    question: "How long is each call and what is the cost?",
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
    question:
      "Can I book multiple calls with students from different universities?",
    answer: (
      <>
        Absolutely! You can book calls with students from as many universities
        as you wish, helping you gather a broad range of perspectives to make an
        informed decision.
      </>
    ),
  },
];

export const uniqueFilters = [
  {
    name: "Scholarships",
    value: "Scholarships",
    subcategories: [],
  },
  {
    name: "University Fit Check",
    value: "University Fit Check",
    subcategories: [],
  },
  {
    name: "Essays",
    value: "Essays",
    subcategories: [],
  },
  {
    name: "High School Internships",
    value: "High School Internships",
    subcategories: [],
  },
  {
    name: "Summer Schools",
    value: "Summer Schools",
    subcategories: [],
  },
  {
    name: "Research / Publications",
    value: "Research / Publications",
    subcategories: [],
  },
  {
    name: "Self-initiated Projects",
    value: "Self-initiated projects",
    subcategories: [],
  },
  {
    name: "Volunteering",
    value: "Volunteering",
    subcategories: [],
  },
  {
    name: "Sports Admission",
    value: "Sports Admission",
    subcategories: [],
  },
  {
    name: "Competitions & Awards",
    value: "Competitions & Awards",
    subcategories: [],
  },
  {
    name: "Public speaking",
    value: "Public speaking",
    subcategories: [],
  },
  {
    name: "Tests",
    value: "Tests",
    subcategories: [
      { name: "Language tests", value: "Language tests" },
      { name: "SAT/ACT", value: "SAT/ACT" },
      { name: "LSAT", value: "LSAT" },
      { name: "BMAT", value: "BMAT" },
    ],
  },
];

// Define categories and subcategories
export const categories = [
  "Scholarships",
  "University Fit Check",
  "Essays",
  "High School Internships",
  "Summer Schools",
  "Research / Publications",
  "Public speaking",
  "Self-initiated Projects",
  "Sports Admission",
  "Tests",
  "Volunteering",
  "Competitions & Awards",
];

export const subcategoriesMap = {
  Essays: [],
  "Research / Publications": [],
  "High School Internships": [],
  "Self-initiated projects": [],
  "Competitions & Awards": [],
  "Public speaking": [],
  "Summer Schools": [],
  "University Reality/Fit Check": [],
  "Sports Admission": [],
  Tests: ["SAT/ACT", "LSAT", "BMAT"],
  Scholarships: [],
  Volunteering: [],
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
  "Electrical and Information Engineering",
  "Music & Arts",
];

export const titles = [
  "Scholarships",
  "University Fit Check",
  "Essays",
  "High School Internships",
  "Summer Schools",
  "Research / Publications",
  "Public speaking",
  "Summer Schools",
  "Self-initiated Projects",
  "Sports Admission",
  "Tests",
  "Volunteering",
  "Competitions & Awards",
];

export const priceOptions = [
  { value: 30, label: "$30/30min" },
  { value: 25, label: "$25/30min" },

  { value: 35, label: "$35/30min" },

  { value: 45, label: "$45/30min" },

  { value: 60, label: "$60/60min" },
  { value: 51, label: "$51/60min" },
  { value: 80, label: "$80/60min" },
  { value: 81, label: "$81/60min" },
  { value: 50, label: "$50/60min" },
  { value: 40, label: "$40/60min" },
];
export const UniversityOptions = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const languages = [
  "English",
  "Spanish",
  "Mandarin",
  "French",
  "German",
  "Russian",
  "Arabic",
  "Hindi",
  "Bengali",
  "Portuguese",
  "Urdu",
  "Japanese",
  "Turkish",
  "Korean",
  "Italian",
  "Vietnamese",
  "Telugu",
  "Tamil",
  "Marathi",
  "Gujarati",
  "Polish",
  "Ukrainian",
  "Dutch",
  "Persian",
  "Thai",
  "Romanian",
  "Swedish",
  "Czech",
  "Greek",
  "Bulgarian",
  "Danish",
  "Finnish",
  "Norwegian",
  "Hungarian",
  "Hebrew",
  "Croatian",
  "Indonesian",
  "Malay",
  "Slovak",
  "Slovenian",
  "Lithuanian",
  "Latvian",
  "Estonian",
  "Maltese",
  "Icelandic",
  "Albanian",
  "Serbian",
  "Macedonian",
  "Montenegrin",
  "Bosnian",
  "Kurdish",
  "Georgian",
  "Armenian",
  "Azerbaijani",
  "Kazakh",
  "Turkmen",
  "Uzbek",
  "Tajik",
  "Kyrgyz",
  "Tatar",
  "Bashkir",
  "Mongolian",
  "Chinese",
 
];

export const NameUniv = [
  "Dartmouth",
  "Oxford",
  "Cambridge",
  "NYU Abu Dhabi",
  "Cornell"
];
