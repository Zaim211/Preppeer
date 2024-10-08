import { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Textarea } from '../ui/textarea';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const formDataSchema = z.object({
  consultantId: z.string().min(1, "Consultant ID is required"),
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  currentGrade: z.string().min(1, 'Current grade is required'),
  language: z.string().optional(),
  questions: z.string().min(1, 'Questions are required'),
  package: z.string().min(1, 'Package selection is required')
});

function BookingModal({ consultantName, consultantId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    consultantId: consultantId,
    fullName: '',
    currentGrade: '',
    language: '',
    email: '',
    phone: '',
    questions: '',
    package: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validateForm() {
    try {
      formDataSchema.parse(formData);
      setErrors({});
      return true;
    } catch (e) {
      const formattedErrors = e.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setErrors(formattedErrors);
      setIsSubmitting(false);
      return false;
    }
  }

  async function submitBookingHandler() {
    setIsSubmitting(true);
    try {
      const isFormValidated = validateForm();
      if (!isFormValidated) return;
      const response = await axios.post('/api/bookMeeting', formData);
      console.log("response", response);
      if (response.status === 201) {
        navigate('/booking-confirmed');
        setIsOpen(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={(val) => setIsOpen(val)}>
  <DialogTrigger>
    <Button className='text-white bg-orange-400 w-full text-lg hover:bg-orange-500 shadow-lg'>Book a Call</Button>
  </DialogTrigger>
  <DialogContent className="lg:max-h-[80vh] max-h-[80vh] overflow-y-auto lg:p-4">
    <DialogHeader>
      <DialogTitle className="lg:text-lg text-md lg:mt-0 mt-4">Please fill out the form to book a call with {consultantName}</DialogTitle>
      <div className='flex flex-col gap-4 py-4'>
      <div className='grid grid-cols-2  md:grid-cols-2 gap-4'>
              <InputBox title={'Full Name'} isRequired={true} placeholder={'Enter full name'} value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} error={errors.fullName} />
              <InputBox title={'Email'} isRequired={true} placeholder={'Enter email'} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} error={errors.email} />
            </div>
        <div className='grid grid-cols-2 gap-2'>
          <InputBox title={'Current Grade'} isRequired={true} placeholder={'Enter current grade'} value={formData.currentGrade} onChange={e => setFormData({ ...formData, currentGrade: e.target.value })} error={errors.currentGrade} />
          <InputBox title={'Fluent in Languages'} isRequired={true} placeholder={'Enter your languages'} value={formData.language} onChange={e => setFormData({ ...formData, language: e.target.value })} error={errors.language} />
        </div>
        <PhoneInputBox title={'Whatsapp/WeChat Number'} isRequired={true} placeholder={'Enter whatsapp/wechat number'} value={formData.phone} onChange={phone => setFormData({ ...formData, phone })} error={errors.phone} />
        <DropdownBox title={'Which package are you choosing?'} isRequired={true} value={formData.package} onChange={e => setFormData({ ...formData, package: e.target.value })} error={errors.package} />
        <TextAreaBox title={''} isRequired={false} placeholder={'Answers (no word limit)'} value={formData.questions} onChange={e => setFormData({ ...formData, questions: e.target.value })} error={errors.questions} />
        <Button onClick={submitBookingHandler} disabled={isSubmitting} className='text-white disabled:bg-orange-700 bg-orange-400 w-full text-lg hover:bg-orange-500 shadow-md'>
          {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking</> : 'Book'}
        </Button>
      </div>
      <DialogDescription className="text-sm">
        Once you submit this form, you will receive an email from PrepPeer to confirm your submission and mentor’s time availability.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  );
}

export default BookingModal;

export function InputBox({ title, value, placeholder, onChange, isRequired, error }) {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-sm font-semibold'>{title}{isRequired ? '*' : ''}</p>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
}

export function TextAreaBox({ value, placeholder, onChange, title, isRequired, error }) {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-md'>
        To personalize the session and maximize its value, let us know your questions for the mentor.<span className='font-bold'>*</span>
      </p>
      <p className='text-sm font-semibold'>{title}{isRequired ? '*' : ''}</p>
      <Textarea placeholder={placeholder} value={value} onChange={onChange} />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
}

export function PhoneInputBox({ title, value, placeholder, onChange, isRequired, error }) {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-sm font-semibold'>{title}{isRequired ? '*' : ''}</p>
      <PhoneInput
        country={'us'}
        value={value}
        onChange={phone => onChange(phone)}
        placeholder={placeholder}
        countryCodeEditable={false}
        buttonStyle={{
          backgroundColor: 'transparent',
          borderRadius: '0.25rem',
          border: '1px solid #e2e8f0',
          outline: 'none'
        }}
        inputStyle={{
          width: '100%',
          borderRadius: '0.25rem',
          border: '1px solid #e2e8f0',
          outline: 'none'
        }}
      />
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  );
}

export function DropdownBox({ title, value, onChange, isRequired, error }) {
  return (
    <div className='flex flex-col gap-2 w-full'>
    <p className='text-sm font-semibold'>
      {title}
      {isRequired ? '*' : ''}
    </p>
    <select
      value={value} 
      onChange={onChange} 
      className='border border-gray-300 p-2 rounded-lg lg:w-full  items-center text-sm max-h-40 overflow-y-auto'
      style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }} // Optional: To remove the default arrow in some browsers
    >
      <option value="">Select a package</option>
      <option value="30-mins">30 mins</option>
      <option value="1-hour">1 hour</option>
    </select>
    {error && <p className='text-red-500 text-sm'>{error}</p>}
  </div>
  

  );
}
