import React from 'react'

export const Newsletter = () => {
  return (
  
         <div>

      
      <div className="flex justify-center px-4 py-16">
        <div className="w-full max-w-4xl bg-white text-black rounded-2xl p-10 shadow-xl relative overflow-hidden">

          {/* background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-white to-orange-200 opacity-60"></div>

          <div className="relative text-center space-y-4">
            <h2 className="text-2xl font-bold">
              Subscribe to our Newsletter
            </h2>

            <p className="text-gray-600">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
              />

              <button className="btn bg-gradient-to-r from-pink-500 to-orange-400 text-white border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
