import {useState, useContext} from 'react';
import AlertContext from '../../context/alert/AlertContect';

function UserSearchForm() {
    const [text, setText] = useState('');
    const { showAlert } = useContext(AlertContext)
    const handelFormSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            showAlert("Input Field is Empty", "error")
        } else {
            // Send requist
        }
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <form onSubmit={handelFormSubmit}>
            <div className='form-control'>
                <div className='relative'>
                    <input 
                        type="text"
                        className="w-full pr-40 bg-gray-200 input input-lg text-black"
                        placeholder="Search Users..."
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    <button 
                        className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                        type="submit"
                    >GO</button>
                </div>
            </div>
        </form>
        <div>
            <button className='btn btn-ghost btn-lg'>Clear</button>
        </div>
    </div>
  )
}

export default UserSearchForm