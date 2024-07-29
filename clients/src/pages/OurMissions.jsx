import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const OurMissions = () => {
  return (
    <div className="p-8 md:p-16 bg-gradient-to-br from-blue-100 via-gray-100 to-white">
      {/* Header Section */}
      <header className="text-center mb-16">
        <Link to='/' className="flex items-center justify-between gap-6">
        <h1 className="text-2xl underline md:text-6xl font-extrabold text-gray-800 mb-6">
          Our Mission
        </h1>
     
              <img src={logo} alt="logo" className="w-32 h-22 mb-6 object-cover" />
        </Link>
        <p className="text-xl mt-6 md:text-2xl text-black max-w-3xl mx-auto">
          To give everyone access to anyone, empowering each other to build a
          better world. Intro is a fast-growing startup that deeply cares about
          our mission, our culture, and going above & beyond in everything we
          do.
        </p>
      </header>

      {/* Investors Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-10 text-center text-gray-800">
          Our Investors
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "Andreessen Horowitz",
            "Alexis Ohanian - Founder, Reddit",
            "Michael Ovitz - Founder, CAA",
            "David Soloman, CEO - Goldman Sachs",
            "Tiffany Haddish - Actor & Comedian",
            "Kevin Durant - NBA All-Star",
            "Kevin Hart - Actor & Comedian",
            "Anne Wojcicki - CEO, 23 & Me",
            "Heidi Zak - CEO, Thirdlove",
          ].map((investor, index) => (
            <div
              key={index}
              className="flex-1 max-w-xs bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex items-center justify-center text-gray-800 font-semibold hover:shadow-xl transition-shadow duration-300"
            >
              {investor}
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-10 text-center text-gray-800">
          Our Story
        </h2>
        <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-6">
          <p>
            “When I was younger, I was walking down the street with a friend. My
            friend pointed out that the person across the street was none other
            than Paul Orfalea, the founder of Kinko’s.
          </p>
          <p>
            I went right up to Paul, tapped him on the shoulder, and said, ‘Mr.
            Orfalea, I heard you’re the founder of Kinko’s. I’m a young aspiring
            entrepreneur and would like to ask you some questions.’
          </p>
          <p>
            He invited me to sit down and in 15 minutes, I learned more about
            entrepreneurship than I had ever before, and I was inspired to take
            action. I felt like he believed in me and in that moment, I decided
            to become an entrepreneur.
          </p>
          <p className="font-bold text-gray-800">
            Raad Mobrem - Cofounder & CEO, Intro
          </p>
          <p>
            Fast forward to finding success: “At the age of 27, Intuit bought my
            company and our product became foundational to the new QuickBooks
            Online, which is now used by eight million businesses globally,
            generating $1.5B in yearly revenue.
          </p>
          <p>
            Once I found success, I gained access to other people who were great
            at their craft, such as actors, musicians, artists, and more. I
            would always ask them how they became great at what they do and
            although their stories were different, there was one common theme
            that I noticed: they all had access to someone or a group of people
            that helped guide them to their greatness, and those people were
            also great.
          </p>
          <p>
            A pandemic hits: “We were forced to stay at home and not see our
            family, friends, and coworkers. In a matter of weeks, we became
            comfortable with video calls and many of us started working on new
            hobbies, projects, and more.
          </p>
          <p>
            While working on my home, I wished that I could jump on a video call
            with a world-class interior designer, show them my project, and get
            their quick advice.
          </p>
          <p>
            In that moment, I figured out that there was an opportunity to give
            people access to all types of in-demand experts while helping the
            experts earn for their time and knowledge. We would unlock access to
            these people & change the world.”
          </p>
          <p className="font-bold text-gray-800">
            Raad Mobrem - Cofounder & CEO, Intro
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-16">
        <h2 className="text-4xl font-semibold mb-8 text-gray-800">
          Join Us Today
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Ready to take the next step in your learning journey? Sign up now and
          connect with a mentor who can help you achieve your goals.
        </p>
        <a
          href="/signup"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Sign Up
        </a>
      </section>
    </div>
  );
};

export default OurMissions;
