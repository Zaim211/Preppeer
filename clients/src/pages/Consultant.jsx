import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Input } from "../components/ui/input";
import FaqAccordion from "../components/FaqAccordion";
import BookingModal from "../components/modals/BookingModal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

function Consultant() {
  const { id } = useParams();

  const [consultant, setConsultant] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressEmail, setAddressEmail] = useState('');
  const [theirName, setTheirName] = useState('');
  const [theirAddressEmail, setTheirAddressEmail] = useState('');
  const [selectRole, setSelectRole] = useState([]);
  const [errors, setErrors] = useState({});

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

  const parseBio = (bio) => {
    // Split sections by double line breaks for separating different titles
    const sections = bio.split("\n\n");

    // Function to format lines based on the presence of "•"
    const formatContent = (content) => {
      return content.map((line, index) => {
        const hasBullet = line.includes("•");
        return hasBullet ? (
          <span key={index} className="text-base">
            {line}
          </span>
        ) : (
          <strong key={index}>{line}</strong>
        );
      });
    };

    // Format each section
    const formattedSections = sections.map((section, index) => {
      const [title, ...content] = section.split("\n");

      return (
        <div key={index} className="flex flex-col">
          {/* Always bold the section title */}
          <h3 className="lg:text-lg text-sm font-bold">{title}</h3>
          <p className="lg:text-lg text-sm">
            {formatContent(content).map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </p>
        </div>
      );
    });

    return formattedSections;
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = "required";
    }
    if (!lastName.trim()) {
      errors.lastName = "required";
    }
    if (!addressEmail.trim()) {
      errors.addressEmail = "Email must contain @";
    } else if (!addressEmail.includes("@")) {
      errors.addressEmail = "Email must contain @";
    }
    if (!theirName.trim()) {
      errors.theirName = "required";
    }
    if (!theirAddressEmail.trim()) {
      errors.theirAddressEmail = "Email must contain @";
    } else if (!theirAddressEmail.includes("@")) {
      errors.theirAddressEmail = "Email must contain @";
    }
    if (!selectRole) {
      errors.selectRole = "Please select a role";
    }

    return errors;
  };

  async function handleSendRefer(ev) {
    ev.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('/api/refer', {
        firstName,
        lastName,
        addressEmail,
        theirName,
        theirAddressEmail,
        selectRole
      });
      if (response.status === 201) {
        alert('Your referral has been sent successfully.');
        setFirstName("");
        setLastName("");
        setAddressEmail("");
        setTheirName("");
        setTheirAddressEmail("");
        setSelectRole("");
      }
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col py-12 px-6 md:py-24 md:px-24 w-screen">
      <section className="grid gap-12 md:gap-24 md:grid-cols-[auto,1fr]">
        <div className="flex flex-col">
          <img
            src={consultant.profilePicture}
            alt={consultant.name}
            className="object-contain rounded-lg w-[300px] h-42 max-w-xs md:max-w-none"
          />
          <h2 className="text-3xl md:text-2xl mt-2 font-bold">{consultant.name}</h2>
          <h2 className="lg:text-xl  text-2xl font-semibold break-words">
                  {consultant.country}
          </h2>
          <div className="max-w-xs">
                <BookingModal
                  consultantName={consultant.name}
                  consultantId={id}
                />
              </div>
            
          <div className="flex flex-col gap-4 md:gap-8">
            <div>
             
              <p className="text-lg mt-4 text-black font-semibold">
                Major: {consultant.major.join(", ")}
              </p>
              <p className="text-lg text-black font-semibold">
                Country of Origin: {consultant.universityCountry}
              </p>
              <p className="text-lg text-black font-semibold">
                Languages: {consultant.language.join(", ")}
              </p>
                <p className="lg:text-lg text-black font-semibold mb-4">
  Price: <br />
  ${consultant.price[0]} / 15mins <br />
  ${consultant.price[1]} / 30mins <br />
  ${consultant.price[2]} / 1h
</p>
              
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-4 md:gap-8">
            {/* Bio Section */}
            {parseBio(consultant.bio)}
          </div>
        </div>
      </section>

<div className="justify-center flex mt-12">
        <section className="flex flex-col md:flex-row mt-12 justify-center border w-[100%] p-8 lg:w-[70%] rounded-lg bg-gray-300 mb-6 gap-8 md:gap-24">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl font-bold">
              Refer us and gain access to{" "}
              <span className="text-secondary">exclusive discounts</span>.
            </h2>
            <div className="flex md:flex-row gap-4">
            
             <div className="relative">
             <Input
                placeholder="First Name*"
                className="rounded-xl"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm top-1 left-2">{errors.firstName}</p>
              )}
             </div>
              <div className="relative">
              <Input
                placeholder="Last Name*"
                className="rounded-xl"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
               {errors.firstName && (
                <p className="text-red-500 text-sm top-1 left-2">{errors.firstName}</p>
              )}
              </div>
            </div>
            <div className="relative">
            <Input
              placeholder="Email Address*"
              className="rounded-xl"
              value={addressEmail}
              onChange={(e) => setAddressEmail(e.target.value)}
            />
            {errors.addressEmail && (
              <p className="text-red-500  top-1 left-2 text-sm">{errors.addressEmail}</p>
            )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold md:text-lg">
              Would you like to refer{" "}
              <strong className="text-secondary">PrepPeer</strong> to someone?
            </h2>
            <div className="flex md:flex-row gap-4">
            <div className="relative">
            <Input
                placeholder="Their Name*"
                className="rounded-xl"
                value={theirName}
                onChange={(e) => setTheirName(e.target.value)}
              />
               {errors.theirName && (
                <p className="text-red-500 text-sm">{errors.theirName}</p>
              )}
            </div>
            <div className="relative">
            <Input
                placeholder="Email Address*"
                className="rounded-xl"
                value={theirAddressEmail}
                onChange={(e) => setTheirAddressEmail(e.target.value)}
              />
              {errors.theirAddressEmail && (
                <p className="text-red-500 text-sm top-1 left-2">
                  {errors.theirAddressEmail}
                </p>
              )}
            </div>
              
            </div>
             
            <Select
         
              onValueChange={(value) => setSelectRole(value)}
              placeholder="Select roles*"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select roles*" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="mentor">As a mentor</SelectItem>
                  <SelectItem value="mentee">As a mentee</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.selectRole && (
              <p className="text-red-500 top-1 left-2 text-sm">{errors.selectRole}</p>
            )}
            <button
              onClick={handleSendRefer}
              className="bg-secondary text-white font-bold rounded-xl p-2 mt-4"
            >
              Send
            </button>
          </div>
        </section>
      </div>



      <section className="flex flex-col my-12 md:my-24 gap-4 md:gap-8">
        <h2 className="text-4xl text-center underline md:text-4xl font-bold">FAQs</h2>
        <FaqAccordion
          title={"Why did we build PrepPeer?"}
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
    </div>
  );
}

export default Consultant;
