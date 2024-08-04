import { Input } from "../components/ui/input"
import FaqAccordion from "../components/FaqAccordion"
import DescriptionWithTitle from "../components/ui/DescriptionWithTitle"
import { useParams } from "react-router-dom"

function Consultant() {

    const {id} = useParams()

    console.log(id)

  return (
    <div className="flex flex-col py-24 px-24 w-scree">
        {/* Hero section with consultant details */}
        <section className="grid gap-24 grid-cols-[auto,1fr]">
            <div className="flex flex-col gap-12" >
                <img src="/src/assets/images/mentors/img13.png" width={'320px'} alt="Consultant" />
                {/* Consultant profile */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-5xl font-bold" >Zebo Furqatzoda</h2>
                    <p className="bg-orange-400 rounded-lg w-fit px-2 py-2">Next available 7.25</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-3xl font-bold">NYU Abu Dhabi</p>
                        <p className="text-3xl font-bold">Philosophy & Economics</p>
                    </div>
                    <div>
                    <p className="text-lg" >Country of Origin: Tajikistan</p>
                    <p className="text-lg" >Languages: English, Russian, Tajiki, Persian</p>

                    </div>
                </div>
            </div>
            {/* Consultant details */}
            <div className="flex flex-col gap-16">
                {/* Booking section */}
                <div className="flex gap-4">
                    <img src="/src/assets/logo.png" width={'120px'} alt="Consultant" />
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <p className="text-3xl font-bold text-orange-400">Book a call</p>
                            <button className="text-white bg-orange-400 font-bold text-lg py-1 px-2 rounded-lg">See Availability</button>
                        </div>
                        <div className="flex gap-2">
                            <p className="bg-white shadow-md p-2 rounded-lg">$30/30 mins</p>
                            <p className="bg-white shadow-md p-2 rounded-lg">$50/60 mins</p>
                        </div>
                    </div>
                </div>
                {/* Description section */}
                <div className="flex flex-col gap-8">
                    <DescriptionWithTitle title='Scholarship' description={[`Recipient of a $320,000 scholarship at New York University
Abu Dhabi and a $125,000 scholarship at United World
College Singapore.`]} />
                    <DescriptionWithTitle title='Summer School' description={['Yale Young Global Scholars alum.',`TechGirls finalist and participant in the Virginia Tech
Summer Program.`]} />
                    <DescriptionWithTitle title='Internship' description={[`Interned at venture capital firms such as Antler and
Shorooq Partners.`]} />
                    <DescriptionWithTitle title='Research' description={[`Collaborated with Stephen Turban from Harvard University
on my research project.`]} />
                    <DescriptionWithTitle title='Self-initiated Project' description={[`Co-founded Writerama, worked with over 350 students on
essay writing and storytelling.`,`Organized TEDx Singapore, leading a team of over 30
members.`,`Co-organized Slush’D Abu Dhabi, the largest event for
young entrepreneurs in the Middle East.`]} />

                </div>
            </div>
        </section>
        {/* FAQ section */}
        <section className="flex flex-col my-24 gap-8">
            <h2 className="text-4xl font-bold">FAQs</h2>
            <FaqAccordion title={'What is the main benefit of talking to current students through your service?'} content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `} />
            <FaqAccordion title={'How do I book a call with a current student?'} content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `} />
            <FaqAccordion title={'What kind of questions can I ask during the call?'} content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `} />
            <FaqAccordion title={'How are the students selected for the calls?'} content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `} />
            <FaqAccordion title={'How long is each call and what is the cost?'} content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `} />
            <FaqAccordion title={`Can I book multiple calls with students from different universities?`} content={`Absolutely! You can book calls with students from as many universities as you
wish, helping you gather a broad range of perspectives to make an informed
decision.`} />
        </section>
        {/* Forms for lead capture */}
        <section className="flex justify-center gap-24">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Refer us and gain access to <span className="text-orange-400">exclusive discounts</span>.</h2>
                    <div className="flex gap-4">
                        <Input placeholder='Full Name*' className='rounded-xl' />
                        <Input placeholder='Last Name*'  className='rounded-xl' />
                    </div>
                    <Input placeholder='Email*'  className='rounded-xl' />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg">Would you like to refer <strong>PrepPeer</strong> to someone?</h2>
                    <Input placeholder='Their Name*' className='rounded-xl' />
                    <Input placeholder='Email*'  className='rounded-xl' />
                </div>
        </section>
        {/* Footer feedback form */}
    </div>
  )
}

export default Consultant