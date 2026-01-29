const Contact = () => {
  return (
    <div className="flex justify-center  items-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-lg  bg-white shadow-lg rounded-xl border-2 border-red-300 p-8 ">
        <h2 className="text-3xl font-semibold mb-8 border-b pb-4 text-red-500  ">
          Get in Touch
        </h2>
        
        <form className="flex flex-col gap-6">
          {/* Row: Name */}
          <div className="flex flex-row items-center">
            <label className="w-auto  text-sm font-semibold text-gray-600 uppercase tracking-wide shadow h-8 p-1.5 rounded-sm">
              Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="flex-1 ml-14 border border-gray-300 rounded-lg h-11 px-4 py-2 text-base transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
            />
          </div>

          {/* Row: Email */}
          <div className="flex flex-row items-center">
            <label className="w-auto shadow text-sm font-semibold text-gray-600 uppercase tracking-wide h-8 p-1.5 rounded-sm">
              Email
            </label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 border ml-14 border-gray-300 rounded-lg h-11 px-4 py-2 text-base transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" 
            />
          </div>

          {/* Row: Message */}
          <div className="flex flex-row items-start">
            <label className="w-auto shadow text-sm font-semibold text-gray-600 uppercase tracking-wide pt-3 p-1">
              Message
            </label>
            <textarea 
              placeholder="How can we help you?" 
              className="flex-1  ml-10.5 border border-gray-300  text-base transition-all duration-200 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none h-32 p-1.5 rounded-sm"
            />
          </div>

          {/* Action Button */}
          <div className="flex justify-end mt-4">
            <h3 className="font-light mr-2.5"> *Average response in 12 working hours</h3>
            <button 
              type="submit" 
              className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition-colors shadow-md active:transform active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;