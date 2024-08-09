import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'


const formDataSchema = z.object({
  consultantId: z.string().min(1,"Consultant ID is required"),
  firstName: z.string().min(1,"First name is required"),
  lastName: z.string(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1,"Phone number is required")
});

function BookingModal({consultantName,consultantId}) {

    const [isOpen,setIsOpen] = useState(false)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [formData,setFormData] = useState({
        consultantId: consultantId,
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
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
        <InputBox title={'First Name'} isRequired={true} placeholder={'Enter first name'} value={formData.firstName} onChange={e => setFormData({...formData,firstName: e.target.value}) } error={errors.firstName} />
        <InputBox title={'Last Name'} isRequired={false} placeholder={'Enter last name'} value={formData.lastName} onChange={e => setFormData({...formData,lastName: e.target.value}) } error={errors.lastName} />
        <InputBox title={'Email'} isRequired={true} placeholder={'Enter email'} value={formData.email} onChange={e => setFormData({...formData,email: e.target.value}) } error={errors.email} />
        <InputBox title={'Phone Number'} isRequired={true} placeholder={'Enter phone number'} value={formData.phone} onChange={e => setFormData({...formData,phone: e.target.value}) } error={errors.phone} />
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
            <p className='text-md font-semibold'>{title}{isRequired ? '*' : ''}</p>
            <Input placeholder={placeholder} value={value} onChange={onChange} />
            {error && <p className='text-red-500 text-sm'>{error}</p>}
        </div>
    )
}