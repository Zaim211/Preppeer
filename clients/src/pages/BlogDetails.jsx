import bloghero1 from "../assets/images/bloghero1.png";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <div className="w-full p-2" style={{ backgroundColor: "#060724" }}>
      <div className="px-8 py-2">
        <Link to={'/'} className="lg:text-5xl text-4xl text-white font-bold">
          Ins<span className="text-secondary">i</span>ghts
        </Link>
      </div>
      <div className="flex-1 px-8 justify-center w-full">
      <img
        src={bloghero1}
        alt="Blog"
        className="mt-4 object-contain rounded-t-lg"
      />
        <h1 className="text-white text-xl lg:text-3xl font-bold mt-8">
          Navigating Pre-College Summers: A Guide for Parents and Students
        </h1>
        <h1 className="text-secondary mt-2 font-bold text-xl lg:text-2xl">Zebo Furqatzoda</h1>
      </div>
        

      <div className="flex mt-12 justify-center items-center min-h-screen">
        <div className="text-white px-8 max-w-12xl mx-auto">

          <p className="text-white text-lg lg:text-2xl leading-12">
            {`College summers can be stressful for both parents and high school
            students, particularly since there's no one definitive way to gain
            admission to your target universities. We've all heard that the
            college admissions process is holistic, but often we're left
            wondering how to stand out among thousands of other applicants.`}
          </p>

          <p className="text-white text-lg w-max-auto lg:w-full lg:text-2xl leading-12 mt-12">
            {`It's never too early to start thinking about university admissions,
            as your profile is built over years, not just months. The stories
            you can tell are typically developed through sustained effort and
            experiences over time.`}
          </p>

          <p className="text-white text-lg lg:text-2xl leading-12 mt-12">
            {`If you're a parent looking to guide your child towards a meaningful
            summer or a student aiming for a productive break, this is for you.`}
          </p>

          <h1 className="text-secondary mb-4 text-3xl font-bold text-start mt-12">
            Why This Summer?
          </h1>

          <p className="text-white text-lg lg:text-2xl leading-12 mt-2">
            Summer holidays offer students a unique opportunity: there are no
            obligatory deadlines or school assignments to complete. This makes
            summer the <span className="font-bold">perfect time to develop your unique strengths</span> and
            showcase what makes you special.
          </p>

          <div className="mt-14">
            <h3 className="mb-4 text-lg lg:text-2xl">
              {`Here's a snapshot of my pre-college summer in 2021 and the lessons
              I learned from it:`}
            </h3>
            <h1 className="text-3xl font-bold mb-4 mt-12">2021 Summer</h1>
            <ul className="list-disc pl-12 space-y-2 text-lg">
              <li className="lg:text-xl ">
                Got into{" "}
                <span className=" text-secondary  ">
                  Yale Young Global Scholars
                </span>
                : A competitive 2-week program at <span className="text-secondary">Yale University</span> for talented
                high schoolers worldwide.
              </li>
              <li className="lg:text-xl ">
                Selected for <span className="text-secondary">TechGirls</span>: {' '}
                {`Took a class at Virginia Tech on "How to Tell a Story with
                Data."`}
              </li>
              <li className="lg:text-xl ">
                Applied for{" "}
                <span className="text-secondary ">
                  TEDxUWCSEAEast Organizer License
                </span>
                : Aiming to organize TEDx events.
              </li>
              <li className="text-xl ">
                Launched <span className="text-secondary">Writerama</span>: A
                social enterprise helping students tell their stories through
                writing.
              </li>
              <li className="lg:text-xl ">
                Completed a{" "}
                <span className="text-secondary">Coursera Class</span>: Took an
                online class from <span className="text-secondary">Yale University</span>  on the Science of Well-Being.
              </li>
              <li className="lg:text-xl ">
                Accepted into{" "}
                <span className="text-secondary">Lumiere Education</span>:
                Received mentorship from Harvard alum <span className="text-secondary">
                Stephen Turban. </span>
              </li>
              <li className="lg:text-xl ">
                Spent Time in <span className="font-semibold text-xl ">Singapore</span>:
                Stayed with a host family and friends.
              </li>
              <li className="text-lg lg:text-xl ">
                Learned to <span className="font-semibold text-xl ">Cycle</span>:
                Acquired cycling skills.
              </li>
            </ul>
          </div>

          <div className="p-6  mt-12">
            <h1 className="lg:text-3xl text-xl font-bold mb-6">
              Key Takeaways from My Summer
            </h1>
            <div className="space-y-6">
              <div>
                <h2 className="lg:text-2xl font-semibold mb-4">
                  1. Sit down with your thoughts in the early days of summer and
                  reflect on your values
                </h2>
                <p className="lg:text-xl  mb-4">
                  {`There is no secret formula to get into your dream university.
                  My summer activities reflect my values and what's meaningful
                  to me.`}
                </p>
                <p className="lg:text-2xl font-semibold mb-4 mt-12">
                  Admissions officers want to read stories—your stories. They
                  want to know about your experiences, your reactions, your
                  learning, and your new perspectives on the world from those
                  experiences.
                </p>
                <p className="lg:text-2xl text-lg  mb-4 font-semibold mt-12">
                  Here are the values I identified after my reflection:
                </p>
                <ul className="list-disc pl-12 space-y-2 text-xl ">
                  <li className="lg:text-xl text-lg">a. Learning and challenging myself academically</li>
                  <li className="lg:text-xl text-lg">b. Doing what gives me energy and having fun</li>
                  <li className="lg:text-xl text-lg">
                    c. Spending time with like-minded people and having new
                    experiences
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="lg:text-2xl text-lg font-semibold mb-4 mt-12">
                  2. Next, for each value category you have, come up with a list of activities that align with them
                </h2>
                <p className="lg:text-xl text-lg mb-4">
                  {`Here's how my summer activities fit into my value categories:`}
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="lg:text-2xl  font-semibold mb-2">
                      a. Learning and Challenging Myself Academically:
                    </h3>
                    <ul className="list-disc pl-12 space-y-2 lg:text-xl ">
                      <li className="text-secondary">Yale Young Global Scholars</li>
                      <li className="text-secondary">TechGirls & Virginia Tech</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="lg:text-2xl font-semibold mb-2 mt-12">
                      b. Doing What Gives Me Energy and Having Fun:
                    </h3>
                    <ul className="list-disc pl-12 space-y-2 text-xl ">
                      <li className="lg:text-xl text-lg">Applying to become a <span className="text-secondary">TEDxUWCSEAEast</span>  Organizer</li>
                      <li className="lg:text-xl text-lg">Launching Writerama</li>
                      <li className="lg:text-xl text-lg">
                        Online class on <span className="text-secondary">Coursera</span>  on the Science of Well-Being
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="lg:text-2xl  font-semibold mb-2 mt-12">
                      c. Spending Time with Like-Minded People and Having New
                      Experiences:
                    </h3>
                    <ul className="list-disc pl-12 space-y-2 lg:text-lg">
                      <li className="lg:text-xl ">
                        Spent time with a host family and friends in Singapore
                      </li>
                      <li>Learned to cycle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 mt-12">
          <div>
            <p className="lg:text-2xl text-xl font-bold mb-6">
              You might ask, "Zebo, what should I do if I don’t know which
              activities to pick?"
            </p>
            <p className="lg:text-lg mt-6 mb-4">
              It's okay if you don't know which activities to pick at first. I
              didn't either. I used my internal compass to choose activities:
              {' '} <span className="font-bold">I leaned into my strengths.</span>
            </p>
            <p className="lg:text-lg mt-6 mb-4">
              Instead of trying to be a well-rounded student,<span className="font-bold">
              {' '}I focused on what
              energized me</span>  and what I was passionate about.
            </p>
            <p className="lg:text-2xl text-xl font-bold mt-8 mb-2">
              Ask yourself these questions:
            </p>
            <ul className="list-disc text-xl pl-8">
              <li className="lg:text-xl text-lg">What gives me energy?</li>
              <li className="lg:text-xl text-lg">What helps me lose track of time?</li>
              <li className="lg:text-xl text-lg">What motivates me to jump out of bed in the morning?</li>
              <li className="lg:text-xl text-lg">What can I talk about for hours?</li>
              <li className="lg:text-xl text-lg">When do my eyes shine?</li>
              <li className="lg:text-xl text-lg">What do I do in my free time?</li>
              <li className="lg:text-xl text-lg">
                What kind of movies/activities do I like, and what do they hint
                about my interests?
              </li>
            </ul>
          </div>

          <div>
            <h3 className="lg:text-2xl text-xl font-bold mt-10 mb-2">The Challenge that I Faced</h3>
            <p className="lg:text-lg">
              Before doing the activities on my list, seeing the common thread
              among my different activities. I spent a lot of time thinking
              about my unique "spike." Looking back, I learned that <span className="font-bold">
              <span className="font-bold">it's hard to identify a common thread without experiencing the activities
              first.</span>
              </span>
            </p>
            <p className="lg:text-lg mt-4">
              I suggest answering the questions above and jumping headfirst into
              your chosen activities. Afterward, reflect on your experiences.
              You'll be able to connect the dots and see the patterns.
            </p>
          </div>

          <div>
            <h3 className="lg:text-2xl text-xl mt-10 font-semibold mb-2">
              Connect the Dots & Summer Experiences
            </h3>
            <div className="p-4 gap-4">
            <p className="lg:text-lg mb-4">
              <strong>1.</strong> I <span className="font-bold">love storytelling</span>, which is why I applied
              to be a TEDx Organizer and founded Writerama, where we helped
              students develop their writing and storytelling skills.
            </p>

            <p className="lg:text-lg mb-4">
              <strong>2.</strong> I enjoy <span className="font-bold"></span> challenging myself in areas where I
              believe learning a new skill can enhance the meaning of what I
              love doing, such as storytelling. The course I took at Virginia
              Tech University on storytelling with data showed me that to deepen
              my passion for storytelling, I’m willing to step out of my comfort
              zone and learn about data.
            </p>

            <p className="lg:text-lg">
              <strong>3.</strong> <span className="font-bold">Having fun and building relationships</span> are
              important to me. That’s why I spent time with friends and host
              families while exploring Singapore. I realized the crucial role
              that having fun plays while pursuing other academic and
              professional goals. I noticed that I tend to learn more about
              myself, my thoughts, and my actions when interacting with others.
              Engaging in group activities helped me be fully present. Later on,
              <span className="font-bold"> I could ask friends and family more questions about my strengths
              and what sets me apart.</span> This reflection also helped me decide
              which stories to share with the admissions officer.
            </p>
            </div>
            <p className="lg:text-2xl text-xl mb-4 font-bold mt-8">
              Remember, stories and learning can come from various sources, also
              from ordinary activities in life.
            </p>
            <p className="text-lg mb-4">
              Amazing stories don't only come from academic settings, summer
              camps, and classes. They can also stem from <span className="font-bold">
              ordinary activities in
              your life,</span> such as cooking with your mom, helping your sibling, or,
              in my case, cycling.
            </p>
            <p className="text-lg">
              For example, when I was writing my CommonApp personal statement
              for <span className="text-secondary">New York University Abu Dhabi</span>, I shared the example of trying
              to learn cycling, falling many times, and reflecting on what it
              meant to me about having a sense of fun while pursuing challenges
              and my perspective on failure.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 mt-4">Call to Action</h3>
            <p className="text-lg mt-4 mb-4">
              My call to action for you is <span className="font-bold">
              to get out there and experience</span>, as
              you never know which stories would be a good addition to build
              your narrative.
            </p>
            <p className="text-lg">
              It is important to <span className="font-bold">lean into your strengths</span>, experience activities
              where you find passion, and, most importantly, <span className="font-bold">
              reflect on them deeply so that you develop unique insights</span> about yourself and/or
              the way you see the world. After all, two people can experience
              the same thing but have very <span className="font-bold">different insights.</span>  It is those
              insights and perspectives that you develop through experiences
              that set you apart.
            </p>
          </div>

        </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
