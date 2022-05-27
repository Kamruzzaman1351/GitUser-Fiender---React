
function Alert() {
    const alert = false;
  return alert && (
        <div className={`flex items-start mb-4 space-x-2 px-4 py-2 rounded bg-red-600`}>
            <p className='flex-1 text-base font-semibold leading-7 text-white'>
                <strong>Something went worng</strong>
            </p> 
        </div>
    )
    
  
}

export default Alert