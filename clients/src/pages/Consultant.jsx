import { Input } from "../components/ui/input";
import FaqAccordion from "../components/FaqAccordion";
import DescriptionWithTitle from "../components/ui/DescriptionWithTitle";
import { useParams } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";
import AvailabilityModal from "../components/AvailabilityModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
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
      {/* Hero section with consultant details */}
      <section className="grid gap-12 md:gap-24 md:grid-cols-[auto,1fr]">
        <div className="flex flex-col gap-8 md:gap-12">
          <img
            src={consultant.profilePicture}
            alt={consultant.name}
            className="w-full max-w-xs md:max-w-none"
          />
          {/* Consultant profile */}
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
        {/* Consultant details */}
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Booking section */}
          <div className="flex flex-col md:flex-row gap-4">
            <img src="/src/assets/logo.png" className="w-24 md:w-32" alt="Consultant" />
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <p className="text-xl md:text-3xl font-bold text-secondary">Book a call</p>
                
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <p className="bg-white shadow-md p-2 rounded-lg">$30/30 mins</p>
                <p className="bg-white shadow-md p-2 rounded-lg">$50/60 mins</p>
              </div>
            </div>
          </div>
          {/* Description section */}
          <div className="flex flex-col gap-4 md:gap-8">
            <DescriptionWithTitle
              title="Scholarship"
              description={[
                `Recipient of a $320,000 scholarship at New York University
Abu Dhabi and a $125,000 scholarship at United World
College Singapore.`,
              ]}
            />
            <DescriptionWithTitle
              title="Summer School"
              description={[
                "Yale Young Global Scholars alum.",
                `TechGirls finalist and participant in the Virginia Tech
Summer Program.`,
              ]}
            />
            <DescriptionWithTitle
              title="Internship"
              description={[
                `Interned at venture capital firms such as Antler and
Shorooq Partners.`,
              ]}
            />
            <DescriptionWithTitle
              title="Research"
              description={[
                `Collaborated with Stephen Turban from Harvard University
on my research project.`,
              ]}
            />
            <DescriptionWithTitle
              title="Self-initiated Project"
              description={[
                `Co-founded Writerama, worked with over 350 students on
essay writing and storytelling.`,
                `Organized TEDx Singapore, leading a team of over 30
members.`,
                `Co-organized Slush’D Abu Dhabi, the largest event for
young entrepreneurs in the Middle East.`,
              ]}
            />
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="flex flex-col my-12 md:my-24 gap-4 md:gap-8">
        <h2 className="text-2xl md:text-4xl font-bold">FAQs</h2>
        <FaqAccordion
          title={
            "What is the main benefit of talking to current students through your service?"
          }
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}
        />
        <FaqAccordion
          title={"How do I book a call with a current student?"}
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}
        />
        <FaqAccordion
          title={"What kind of questions can I ask during the call?"}
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}
        />
        <FaqAccordion
          title={"How are the students selected for the calls?"}
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}
        />
        <FaqAccordion
          title={"How long is each call and what is the cost?"}
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}
        />
        <FaqAccordion
          title={`Can I book multiple calls with students from different universities?`}
          content={`Absolutely! You can book calls with students from as many universities as you
wish, helping you gather a broad range of perspectives to make an informed
decision.`}
        />
      </section>
      {/* Forms for lead capture */}
      <section className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg md:text-xl font-bold">
            Refer us and gain access to{" "}
            <span className="text-secondary">exclusive discounts</span>.
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Full Name*" className="rounded-xl" />
            <Input placeholder="Last Name*" className="rounded-xl" />
          </div>
          <Input placeholder="Email*" className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base md:text-lg">
            Would you like to refer <strong>PrepPeer</strong> to someone?
          </h2>
          <Input placeholder="Their Name*" className="rounded-xl" />
          <Input placeholder="Email*" className="rounded-xl" />
        </div>
      </section>
      {/* Footer feedback form */}
      <div className="mt-8 md:mt-16">
        <FeedbackForm />
      </div>
      <AvailabilityModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default Consultant;
