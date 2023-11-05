import React, {useState } from 'react'
import CircleOne from '../assets/CircleOne.png'
import CircleTwo from '../assets/CircleTwo.png'
import axios from 'axios'

export const PayForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        address: '',
        city: '',
        zip_code: '',
        security_code: '',
        name_on_card: '',
        card_number: '',
        expiration_month: '', 
        expiration_year: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const [error, setError] = useState('');
      const handleSubmit = (e) => {
        e.preventDefault();
        // End point 
        axios.post('/api/login', formData)
        .then((response) => {
        })
        .catch((error) => {
          setError('Something went wrong');
        });
    };
  return (
    <div class="min-w-screen min-h-screen bg-[#FEFAF0] flex items-center justify-center px-5 pb-10 pt-16">
        <div class="w-[50rem] rounded-lg bg-[#403F2B12]  p-16 text-gray-700" >
      
        <div class="mb-10">
            <h1 class="text-[#403F2B] text-center font-semibold text-[1.5rem] ">Choose a payment method</h1>
        </div>
        {/* Payment Methods  */}
        <div class="mb-3 flex -mx-2">
            <div class="px-2">
                <label for="type1" class="flex items-center cursor-pointer">
                    <input type="radio" class="form-radio h-5 w-5 text-[#403F2B]" name="type" id="type1" checked/>
                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3"/>
                </label>
            </div>
            <div class="px-2">
                <label for="type2" class="flex items-center cursor-pointer">
                    <input type="radio" class="form-radio h-5 w-5 text-[#403F2B]" name="type" id="type2"/>
                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="h-8 ml-3"/>
                </label>
            </div>
        </div>
        {/* Payment Forms  */}
        <form >
            <div className='flex flex-row gap-32'>
            {/* Billing info  */}
            <div className='mt-12 w-[16rem]'>
                <div class="font-medium text-md  ml-1 text-[#403F2B] flex flex-row gap-4"> <img src={CircleOne} className='w-6 h-6' />   Billing info </div>
                <div class="mt-12 mb-4">
                    <label class="font-medium text-md  ml-1 text-[#403F2B]">Full Name</label>
                    <div>
                        <input onChange={handleChange} name="full_name" 
                    value={formData.full_name} required class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70]  rounded-md  focus:outline-none focus:border-[#403F2B] " placeholder="John Smith" type="text"/>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="font-medium text-md  ml-1 text-[#403F2B]">Address</label>
                    <div>
                    <input onChange={handleChange} required  name="address"
                    value={formData.address} class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70] rounded-md  focus:outline-none focus:border-[#403F2B] " placeholder="Amman" type="text"/>
                    </div>
                </div>
                <div class="mb-3 -mx-2 flex items-end">
                    <div class="px-2 w-1/2">
                        <label class="font-medium text-md  ml-1 text-[#403F2B]">City</label>
                        <div>
                            <input name="city"  value={formData.city} onChange={handleChange} required  class="w-full px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70] rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"></input>
                        </div>
                    </div>
                    <div class="px-2 w-1/2">
                        <label class="font-medium text-md  ml-1 text-[#403F2B]">Zip code</label>
                        <div>
                            <input name="zip_code" value={formData.zip_code}  onChange={handleChange} required  class="w-full px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70] rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"></input>
                        </div>
                    </div>
                </div>
                <div class="mb-10">
                    <label class="font-medium text-md  ml-1 text-[#403F2B]">Security code</label>
                    <div>
                        <input name="security_code"  value={formData.security_code}  onChange={handleChange} required  class="w-32 px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70] rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                    </div>
                </div>
            </div>
            {/* Credit card info  */}
            <div className='mt-12'>
            <div class="font-medium text-md  ml-1 text-[#403F2B] flex flex-row gap-4"> <img src={CircleTwo} className='w-6 h-6' /> Credit card info</div>
                <div class="mt-12 mb-4">
                    <label class="font-medium text-md  ml-1 text-[#403F2B]">Name on card</label>
                    <div>
                        <input name="name_on_card"  value={formData.name_on_card}  onChange={handleChange} required  class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70]  rounded-md  focus:outline-none focus:border-[#403F2B] " placeholder="John Smith" type="text"/>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="font-medium text-md  ml-1 text-[#403F2B]">Card number</label>
                    <div>
                    <input name="card_number"  value={formData.card_number}  onChange={handleChange} required  class="bg-[#403F2B10] w-full mt-1 px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70] rounded-md  focus:outline-none focus:border-[#403F2B] " placeholder="0000 0000 0000 0000" type="text"/>
                    </div>
                </div>
                <div class="mb-3 -mx-2 flex items-end">
                    <div class="px-2 w-1/2">
                        <label class="font-medium text-md w-4 ml-1 text-[#403F2B]">Expiration date</label>
                        <div>
                            <select name="expiration_month"  value={formData.expiration_month}  onChange={handleChange} required  class="form-select w-full px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70] rounded-md focus:outline-none  cursor-pointer">
                                <option value="01">Jan</option>
                                <option value="02">Feb</option>
                                <option value="03">Mar</option>
                                <option value="04">Apr</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">Aug</option>
                                <option value="09">Sep</option>
                                <option value="10">Oct</option>
                                <option value="12">Dec</option>
                                <option value="11">Nov</option>
                            </select>
                        </div>
                    </div>
                    <div class="px-2 w-1/2">
                        <select name="expiration_year"  value={formData.expiration_year}  class="form-select w-full px-3 py-2 mb-1 border border-[#403F2B70] bg-transparent rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                        </select>
                    </div>
                </div>
                <div class="mb-10">
                    <label class="font-medium text-md  ml-1 text-[#403F2B]">Security code</label>
                    <div>
                        <input onChange={handleChange} required  class="w-32 px-3 py-2 mb-1 border bg-transparent placeholder-[#403F2B80] border-[#403F2B70] rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                    </div>
                </div>
            </div>
            </div>
            <button class="block w-full max-w-xs mx-auto bg-[#403F2B] hover:bg-[#403F2B90] text-[#FEFAF0] rounded-lg px-3 py-3 font-medium"><i class="mdi mdi-lock-outline mr-1"></i>Approve payment</button>
        </form>
            
        
    </div>
    
</div>

  )
}
