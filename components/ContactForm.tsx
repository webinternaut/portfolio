import React, { useState, FormEvent } from "react";
import { Input, Textarea } from "@material-tailwind/react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setIsLoading(true);
  
    try {
      // Send the form data to the server-side route
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        setIsSent(true);
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center ">
      {isSent ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg min-w-sm">
          <div className=" gap-4 ">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="name" placeholder="youremail@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Message
                </label>
                <Textarea className="appearance-none block w-full bg-gray-100 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <button type="submit" className="mt-5 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
           </button>
           </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
