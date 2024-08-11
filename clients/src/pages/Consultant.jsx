import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Input } from "../components/ui/input";
import FaqAccordion from "../components/FaqAccordion";
import DescriptionWithTitle from "../components/ui/DescriptionWithTitle";
import FeedbackForm from "../components/FeedbackForm";
import AvailabilityModal from "../components/AvailabilityModal";
import BookingModal from "../components/modals/BookingModal";

function Consultant() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultant, setConsultant] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchConsultant = async () => {
      try {
        const response = await axios.get(`/api/registerConsultant/${id}`);
        setConsultant(response.data.consultant);
      } catch (error) {
        console.error("Error fetching consultant:", error);
      }
    };
    fetchConsultant();
  }, [id]);

  if (!consultant) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col py-12 px-6 md:py-24 md:px-24 w-screen">
      <section className="grid gap-12 md:gap-24 md:grid-cols-[auto,1fr]">
        <div className="flex flex-col gap-8 md:gap-12">
          <img
            src={consultant.profilePicture}
            alt={consultant.name}
            className="w-full max-w-xs md:max-w-none"
          />
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-3xl md:text-5xl font-bold">{consultant.name}</h2>
    
            <BookingModal consultantName={consultant.name} consultantId={id} />
            <div className="flex flex-col gap-1 md:gap-2">
              <p className="text-xl md:text-3xl font-bold">{consultant.country}</p>
              <p className="text-xl md:text-3xl font-bold">{consultant.major}</p>
            </div>
            <div>
              <p className="text-base md:text-lg">Country of Origin: {consultant.universityCountry}</p>
              <p className="text-base md:text-lg">
                Languages: {consultant.language.join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col md:flex-row gap-4">
            <img src="/src/assets/logo.png" className="w-24 md:w-32" alt="Consultant" />
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <p className="text-xl md:text-3xl font-bold text-secondary">Book a call</p>
                <button 
                   className="text-white bg-secondary font-bold 
                   text-lg py-1 px-2 rounded-lg"
                  onClick={openModal}
                 >
                  See Availability
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <p className="bg-white shadow-md p-2 rounded-lg">$30/30 mins</p>
                <p className="bg-white shadow-md p-2 rounded-lg">$50/60 mins</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <DescriptionWithTitle
              title="Scholarship"
              description={[
                `Recipient of a $320,000 scholarship at New York University Abu Dhabi and a $125,000 scholarship at United World College Singapore.`,
              ]}
            />
            <DescriptionWithTitle
              title="Summer School"
              description={[
                "Yale Young Global Scholars alum.",
                `TechGirls finalist and participant in the Virginia Tech Summer Program.`,
              ]}
            />
            <DescriptionWithTitle
              title="Internship"
              description={[
                `Interned at venture capital firms such as Antler and Shorooq Partners.`,
              ]}
            />
            <DescriptionWithTitle
              title="Research"
              description={[
                `Collaborated with Stephen Turban from Harvard University on my research project.`,
              ]}
            />
            <DescriptionWithTitle
              title="Self-initiated Project"
              description={[
                `Co-founded Writerama, worked with over 350 students on essay writing and storytelling.`,
                `Organized TEDx Singapore, leading a team of over 30 members.`,
                `Co-organized Slush’D Abu Dhabi, the largest event for young entrepreneurs in the Middle East.`,
              ]}
            />
          </div>
        </div>
      </section>
      <div className="justify-center flex">
  <section className="flex flex-col md:flex-row mt-12 justify-center border p-8 w-[70%] rounded-lg bg-gray-300 mb-6 gap-16 md:gap-24">
    <div className="flex flex-col gap-4">
      <h2 className="text-lg md:text-xl font-bold">
        Refer us and gain access to{" "}
        <span className="text-secondary">exclusive discounts</span>.
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Input placeholder="First Name*" className="rounded-xl" />
        <Input placeholder="Last Name*" className="rounded-xl" />
      </div>
      <Input placeholder="Email Address*" className="rounded-xl" />
    </div>
    <div className="flex flex-col gap-4">
      <h2 className="font-bold md:text-lg">
        Would you like to refer <strong className="text-secondary">PrepPeer</strong> to someone?
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
      <Input placeholder="Their Name*" className="rounded-xl" />
      <Input placeholder="Email Address*" className="rounded-xl" />
      </div>
      <select className="rounded-lg p-2  border-gray-300">
  <option value="" disabled selected hidden>Select roles*</option>
  <option value="mentor">As a mentor</option>
  <option value="mentee">As a mentee</option>
</select>
<button className="bg-secondary text-white font-bold rounded-xl p-2 mt-4">
        Send
      </button>
    </div>
  </section>
</div>
      <section className="flex flex-col my-12 md:my-24 gap-4 md:gap-8">
        <h2 className="text-2xl md:text-4xl font-bold">FAQs</h2>
        <FaqAccordion
          title={"Why did you build PrepPeer?"}
          content={`Choosing the right university is tough without inside knowledge. PrepPeer provides prospective students with insights from current college students, which can be crucial for admissions and decision-making. We created PrepPeer to offer the resource we wished we had in high school. `}
        />
        <FaqAccordion
          title={"How does a 1:1 video consultation on PrepPeer work?"}
          content={`Use filters to find the right insider for you. Once you book a call, we'll email you to coordinate the meeting time. Then, you'll have a 1:1 video consultation with the insider you selected.`}
        />
        <FaqAccordion
          title={"How long are the sessions?"}
          content={`Sessions are available in 30 or 60-minute durations, depending on your chosen package. We are exploring package options for multiple sessions. If you’re interested in packages of 3 to 5 sessions, please submit feedback via the form below.`}
        />
        <FaqAccordion
          title={"Can I book the same expert multiple times on PrepPeer?"}
          content={`Yes, you can rebook the same insider if you found the previous session helpful. Alternatively, you can explore other insiders for different perspectives.`}
        />
        <FaqAccordion
          title={`How much can I accomplish during a virtual session?`}
          content={`To maximize your session, submit your questions in advance during the booking process so we can pass them on to the insider. You can also ask additional questions during the call.`}
        />
        <FaqAccordion
          title={`I’m a parent wanting to book a call with a current student. Can I do that?`}
          content={`Absolutely! We encourage parents to book calls with current students to gain insights about universities their child is considering. This can help with the admissions process, building a university list, writing essays, and making the final decision.`}
        />
        <FaqAccordion
          title={`Do you support international and U.S. domestic high schoolers?`}
          content={`Yes, we support both international and U.S. domestic high schoolers. We have insiders from various backgrounds to provide valuable insights for all students.`}
        />
         <FaqAccordion
          title={`Can I reschedule or cancel my session?`}
          content={`Yes, you can reschedule at least 48 hours before the session. Cancellations or reschedules within 48 hours incur a fee to compensate the expert for the last-minute change. It’s important to manage these changes responsibly to ensure a smooth experience for everyone.`}
        />
         <FaqAccordion
          title={`What if I’m not satisfied with the PrepPeer session?`}
          content={`We aim to provide valuable experiences, but if you’re not satisfied, please let us know and we will work to make things right.`}
        />
      </section>
     
      <div className="mt-8 md:mt-16">
        <FeedbackForm />
      </div>
      <AvailabilityModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default Consultant;
