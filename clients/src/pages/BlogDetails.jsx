import React from "react";
import img4 from "../assets/images/img4.png";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <div className="w-full p-12" style={{ backgroundColor: "#060724" }}>
      <div className="p-8">
        <Link to={'/'} className="text-6xl text-white font-bold mb-2">
          Ins<span className="text-secondary">i</span>ghts
        </Link>
      </div>
      <div className="flex-1 p-6 justify-center">
      
        <h1 className="text-white text-4xl font-bold mt-8">
          Navigating Pre-College Summers: A Guide for Parents and Students
        </h1>
      </div>

<div className="flex gap-6 p-6">
       
       <div className="flex-1">
       <img src={img4} alt="img4" className="w-32 h-32 object-cover" /> 
         <h1 className="text-secondary font-bold text-2xl">Zebo Furqatzoda</h1>
         <p className="text-white text-xl">University + 2 liner</p>
       </div>
</div>


  
      

      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white p-12 max-w-12xl mx-auto">
        <p className="text-white text-xl  mb-6">June 4, 2024</p>
          <p className="text-white text-2xl leading-12">
            College summers can be stressful for both parents and high school
            students, particularly since there's no one definitive way to gain
            admission to your target universities. We've all heard that the
            college admissions process is holistic, but often we're left
            wondering how to stand out among thousands of other applicants.
          </p>

          <p className="text-white text-2xl leading-12 mt-12">
            It's never too early to start thinking about university admissions,
            as your profile is built over years, not just months. The stories
            you can tell are typically developed through sustained effort and
            experiences over time.
          </p>

          <p className="text-white text-2xl leading-12 mt-12">
            If you're a parent looking to guide your child towards a meaningful
            summer or a student aiming for a productive break, this is for you.
          </p>

          <h1 className="text-secondary mb-4 text-3xl font-bold text-start mt-12">
            Why This Summer?
          </h1>

          <p className="text-white text-2xl leading-12 mt-2">
            Summer holidays offer students a unique opportunity: there are no
            obligatory deadlines or school assignments to complete. This makes
            summer the perfect time to develop your unique strengths and
            showcase what makes you special.
          </p>

          <div className="mt-14">
            <h3 className="mb-4 text-2xl">
              Here's a snapshot of my pre-college summer in 2021 and the lessons
              I learned from it:
            </h3>
            <h1 className="text-3xl font-bold mb-4 mt-12">2021 Summer</h1>
            <ul className="list-disc pl-12 space-y-2 text-lg">
              <li className="text-xl ">
                Got into{" "}
                <span className="font-semibold text-xl ">
                  Yale Young Global Scholars
                </span>
                : A competitive 2-week program at Yale University for talented
                high schoolers worldwide.
              </li>
              <li className="text-xl ">
                Selected for <span className="font-semibold text-xl ">TechGirls</span>:
                Took a class at Virginia Tech on "How to Tell a Story with
                Data."
              </li>
              <li className="text-xl ">
                Applied for{" "}
                <span className="font-semibold text-xl ">
                  TEDxUWCSEAEast Organizer License
                </span>
                : Aiming to organize TEDx events.
              </li>
              <li className="text-xl ">
                Launched <span className="font-semibold text-xl ">Writerama</span>: A
                social enterprise helping students tell their stories through
                writing.
              </li>
              <li className="text-xl ">
                Completed a{" "}
                <span className="font-semibold">Coursera Class</span>: Took an
                online class from Yale University on the Science of Well-Being.
              </li>
              <li className="text-xl ">
                Accepted into{" "}
                <span className="font-semibold text-xl ">Lumiere Education</span>:
                Received mentorship from Harvard alum Stephen Turban.
              </li>
              <li className="text-xl ">
                Spent Time in <span className="font-semibold text-xl ">Singapore</span>:
                Stayed with a host family and friends.
              </li>
              <li className="text-xl ">
                Learned to <span className="font-semibold text-xl ">Cycle</span>:
                Acquired cycling skills.
              </li>
            </ul>
          </div>

          <div className="p-6  mt-12">
            <h1 className="text-3xl font-bold mb-6">
              Key Takeaways from My Summer
            </h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  1. Sit down with your thoughts in the early days of summer and
                  reflect on your values
                </h2>
                <p className="text-xl  mb-4">
                  There is no secret formula to get into your dream university.
                  My summer activities reflect my values and what's meaningful
                  to me.
                </p>
                <p className="text-2xl font-semibold mb-4 mt-12">
                  Admissions officers want to read stories—your stories. They
                  want to know about your experiences, your reactions, your
                  learning, and your new perspectives on the world from those
                  experiences.
                </p>
                <p className="text-2xl  mb-4 font-semibold mt-12">
                  Here are the values I identified after my reflection:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-xl ">
                  <li className="text-xl ">Learning and challenging myself academically</li>
                  <li>Doing what gives me energy and having fun</li>
                  <li>
                    Spending time with like-minded people and having new
                    experiences
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 mt-12">
                  2. Align Activities with Values
                </h2>
                <p className="text-xl  mb-4">
                  Here's how my summer activities fit into my value categories:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      a. Learning and Challenging Myself Academically:
                    </h3>
                    <ul className="list-disc pl-12 space-y-2 text-xl ">
                      <li>Yale Young Global Scholars</li>
                      <li>TechGirls & Virginia Tech</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 mt-12">
                      b. Doing What Gives Me Energy and Having Fun:
                    </h3>
                    <ul className="list-disc pl-12 space-y-2 text-xl ">
                      <li>Applying to become a TEDxUWCSEAEast Organizer</li>
                      <li>Launching Writerama</li>
                      <li>
                        Online class on Coursera on the Science of Well-Being
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 mt-12">
                      c. Spending Time with Like-Minded People and Having New
                      Experiences:
                    </h3>
                    <ul className="list-disc pl-12 space-y-2 text-lg">
                      <li className="text-xl ">
                        Spent time with a host family and friends in Singapore
                      </li>
                      <li>Learned to cycle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
