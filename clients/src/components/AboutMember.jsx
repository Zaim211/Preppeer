// import React, { useState } from 'react';

// const defaultImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

// const testimonials = [
//   {
//     quote: "I absolutely love Intro! Being able to pop in really quickly and help someone pick an outfit for a date, an event, or even answer questions about how to break into the Fashion world are all things I truly love and wish I could do more of!",
//     name: "Rachel Zoe",
//   },
//   {
//     quote: "We’ve laughed, we’ve cried, and to be honest - more times than not, my Intro calls can be the highlight of my day. To be able to help someone, even just for 15 min, is truly gratifying.",
//     name: "Jason Gorskie",
//   },
//   {
//     quote: "After my modeling career, I started sharing my passion for food and wellness with my followers. Being able to share that passion with my fans and give healthy tips is my favorite!",
//     name: "Sanne Vloet",
//   }
// ];

// const AboutMember = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const handleNext = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="px-4 py-8 mx-auto max-w-screen-lg">
//       <div className="flex justify-between items-center mb-12">
//         <div className="w-1/2 pr-8">
//           <p className="text-lg text-gray-700">
//             Our mission is to give everyone access to anyone, empowering each other to make our world better. By unlocking this type of access, more people from all over the world will have the same opportunities to connect, learn, and take action.
//           </p>
//         </div>
//         <div className="w-1/2 pl-8 text-right">
//           <h1 className="text-2xl font-bold mb-4">Give everyone access to anyone</h1>
//         </div>
//       </div>

//       {/* Testimonials Card */}
//       <div className="relative p-6 border border-gray-300 rounded-lg shadow-md flex flex-col items-center">
//         <img src={defaultImage} alt="Default" className="w-24 h-24 object-cover rounded-full mb-4" />
        
//         <div className="mb-4">
//           <span className="text-yellow-500">★★★★★</span>
//         </div>

//         <p className="text-lg italic text-gray-600 text-center mb-4">{testimonials[currentTestimonial].quote}</p>
//         <p className="font-bold text-center">{testimonials[currentTestimonial].name}</p>

//         <div className="flex justify-between w-full absolute bottom-4 px-8">
//           <button onClick={handlePrev} className="text-blue-500">&lt;</button>
//           <button onClick={handleNext} className="text-blue-500">&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutMember;

import React, { useState } from 'react';

const defaultImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

const testimonials = [
  {
    quote: "I absolutely love Intro! Being able to pop in really quickly and help someone pick an outfit for a date, an event, or even answer questions about how to break into the Fashion world are all things I truly love and wish I could do more of!",
    name: "Rachel Zoe",
  },
  {
    quote: "We’ve laughed, we’ve cried, and to be honest - more times than not, my Intro calls can be the highlight of my day. To be able to help someone, even just for 15 min, is truly gratifying.",
    name: "Jason Gorskie",
  },
  {
    quote: "After my modeling career, I started sharing my passion for food and wellness with my followers. Being able to share that passion with my fans and give healthy tips is my favorite!",
    name: "Sanne Vloet",
  }
];

const AboutMember = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-lg mt-6">
      <div className="flex justify-between items-center mb-12">
        <div className="w-1/2 pl-8 text-left"> {/* Changed from text-right to text-left */}
          <h1 className="text-2xl font-bold mb-4">Give everyone access to anyone</h1>
        </div>
        <div className="w-1/2 pr-8"> {/* Changed from pr-8 to pl-8 */}
          <p className="text-lg text-gray-700">
            Our mission is to give everyone access to anyone, empowering each other to make our world better. By unlocking this type of access, more people from all over the world will have the same opportunities to connect, learn, and take action.
          </p>
        </div>
      </div>

  
      <div className="relative p-6 border border-gray-300 rounded-lg shadow-md flex flex-col items-center">
        <img src={defaultImage} alt="Default" className="w-24 h-24 object-cover rounded-full mb-4" />
        
        <div className="mb-4">
          <span className="text-yellow-500 text-full">★★★★★</span> {/* Larger star rating */}
        </div>

        <p className="text-md italic text-gray-600 font-bold text-center mb-4">{testimonials[currentTestimonial].quote}</p>
        <p className="font-bold text-center">{testimonials[currentTestimonial].name}</p>

        <div className="absolute bottom-36 left-0 right-0 flex justify-between px-4">
          <button onClick={handlePrev} className="text-black text-2xl">&lt;</button> {/* Larger arrow */}
          <button onClick={handleNext} className="text-black text-2xl">&gt;</button> {/* Larger arrow */}
        </div>
      </div>
    </div>
  );
}

export default AboutMember;
