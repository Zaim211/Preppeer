import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { useEffect, useState } from "react"

function CheckoutForm({amount, consultantId, studentId, appointmentDate, appointmentTime, duration}) {

    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret,setClientSecret] = useState("")
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    // Write a function that creates gets payment intent from the server
    useEffect(()=>{
        (
            async function(){
                try{
                    const response = await axios.post("/api/payment/createIntent",{
                            amount:amount,
                            currency:"usd",
                            appointmentDate,
                            appointmentTime,
                            duration,
                            studentId,
                            consultantId
                        },
                        {
                        headers:{
                            "Content-Type":"application/json"
                        },
                    })
                    if(response.status === 201){
                        setClientSecret(response.data.clientSecret)
                    }
                }catch(error){
                    console.error("Error creating payment intent:",error)
                    setError(error.message)
                }
            }
        )()
    },[])

    // Write a function that handles form submission
    const handlePaymentSubmit = async () => {
        setIsLoading(true)
        try{
            if(!stripe || !elements){
            return
        }
        const {error: submitError} = await elements.submit()
        if(submitError){
            setError(submitError.message)
            setIsLoading(false)
            return
        }
        const {error} = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams:{
                return_url: 'http://localhost:5173/booking-confirmed'
            }
        })
        if(error){
            setError(error.message)
            setIsLoading(false)
        }
        }catch(error){
            console.error("Error confirming payment:",error)
            setError(error.message)
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }

    
  return (
    <div className="flex-1 flex flex-col gap-4 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Card Payment</h2>
            <PaymentElement />
            <button
              type="submit"
              onClick={handlePaymentSubmit}
              disabled={!stripe || !clientSecret ||  isLoading}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full shadow-md hover:bg-blue-600 transition duration-300"
            >
              Complete Payment
            </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
  )
}

export default CheckoutForm