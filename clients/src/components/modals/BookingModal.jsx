import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { Textarea } from '../ui/textarea'


const formDataSchema = z.object({
  consultantId: z.string().min(1,"Consultant ID is required"),
  fullName: z.string().min(1,"Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  currentGrade: z.string().optional(),
  language: z.string().optional(),
  questions: z.string().optional()
});

function BookingModal({consultantName,consultantId}) {

    const [isOpen,setIsOpen] = useState(false)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [formData,setFormData] = useState({
        consultantId: consultantId,
        fullName: '',
        currentGrade: '',
        language: '',
        email:'',
        phone:'',
        questions:''

    })
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    function validateForm(){
        try {
            formDataSchema.parse(formData);
            setErrors({});
            return true
        } catch (e) {
            const formattedErrors = e.errors.reduce((acc, error) => {
                acc[error.path[0]] = error.message;
                return acc;
            }, {});
            setErrors(formattedErrors);
            setIsSubmitting(false)
            return false
        }
    }

    async function submitBookingHandler(){
        setIsSubmitting(true)
        try{
            const isFormValidated = validateForm()
            if(!isFormValidated) return
            const response = await axios.post('/api/bookMeeting', formData)
            if(response.status === 201){
                navigate('/booking-confirmed')
                setIsOpen(false)
            }
        } catch (error) {
            if(axios.isAxiosError(error)){
                console.error(error.response.data)
            }
        } finally {
            setIsSubmitting(false)
        }
    }

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={(val)=>setIsOpen(val)} >
  <DialogTrigger>
    <Button className='text-white bg-orange-400 w-full text-lg hover:bg-orange-500 shadow-lg' >Book a Call</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader >
      <DialogTitle>Please Fill the form to book a call with {consultantName}</DialogTitle>
      <div className='flex flex-col gap-4 py-8'>
        <InputBox title={'Full Name'} isRequired={true} placeholder={'Enter full name'} value={formData.fullName} onChange={e => setFormData({...formData,fullName: e.target.value}) } error={errors.fullName} />
        <InputBox title={'Email'} isRequired={true} placeholder={'Enter email'} value={formData.email} onChange={e => setFormData({...formData,email: e.target.value}) } error={errors.email} />
        <div className='grid grid-cols-2 gap-2'>
          <InputBox title={'Current Grade'} isRequired={false} placeholder={'Enter current grade'} value={formData.currentGrade} onChange={e => setFormData({...formData,currentGrade: e.target.value}) } error={errors.currentGrade} />
          <InputBox title={'Language'} isRequired={false} placeholder={'Enter your language'} value={formData.language} onChange={e => setFormData({...formData,language: e.target.value}) } error={errors.language} />
        </div>
        <InputBox title={'Whatsapp/WeChat Number (Optional)'} isRequired={false} placeholder={'Enter whatsapp/wechat number'} value={formData.phone} onChange={e => setFormData({...formData,phone: e.target.value}) } error={errors.phone} />
        <TextAreaBox title={``} isRequired={false} placeholder={'Answers (no word limit)'} value={formData.questions} onChange={e => setFormData({...formData,questions: e.target.value}) } error={errors.questions} />
        <Button onClick={submitBookingHandler} disabled={isSubmitting} className='text-white disabled:bg-orange-700 bg-orange-400 w-full text-lg hover:bg-orange-500 shadow-md' >{ isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking</>  : 'Book'}</Button>
      </div>
      <DialogDescription>
        Once submitted, our team will reach out to you to confirm the availability and schedule the call.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default BookingModal


export function InputBox({title,value,placeholder,onChange, isRequired, error}) {
    return (
        <div className='flex flex-col gap-2'>
            <p className='text-sm font-semibold'>{title}{isRequired ? '*' : ''}</p>
            <Input placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className='text-red-500 text-sm'>{error}</p>}
        </div>
    )
}

export function TextAreaBox({value,placeholder,onChange, error}) {
    return (
        <div className='flex flex-col gap-2'>
            <p className='text-md'>To personalize the session and maximize its value, 
please let us know <strong>the questions you want to discuss with the mentor</strong>.
We aim to deliver the most value for you.</p>
            <Textarea placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className='text-red-500 text-sm'>{error}</p>}
        </div>
    )
}