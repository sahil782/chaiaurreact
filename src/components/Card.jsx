

function Card(){
    return (
        <>
                <div className="relative max-w-lg p-8 border bg-black border-gray-100 shadow-xl rounded-xl">
          <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
            4.3
          </span>
    
          <div className="mt-4 text-gray-200 sm:pr-8">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
             
            </svg>
    
            <h5 className="mt-4 text-xl font-bold text-gray-300">Science of Chemstry</h5>
    
            <p className="mt-2 text-sm">
              You can manage phone, email and chat conversations all from a single mailbox.
            </p>
          </div>
        </div>
          
        </>
    )
}

export default Card;