import {FaLink, FaEye, FaStar, FaInfo, FaUtensils} from "react-icons/fa"
function RepoItem() {
  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <div className='card-body'>
            <h3 className='mb-2 text-xl font-semibold'>
                <a href="#" target="_blank" rel='noreferrer'>
                    <FaLink className='inline mr-1' /> Link Goes Here
                </a>
            </h3>
            <p className='mb-3'> Repo Description </p>
            <div>
                <div className='mr-2 badge badge-info badge-lg'>
                    <FaEye className='mr-2' /> Watcher Count
                </div>
                <div className='mr-2 badge badge-success badge-lg'>
                    <FaStar className='mr-2' /> Stargazers Count
                </div>
                <div className='mr-2 badge badge-error badge-lg'>
                    <FaInfo className='mr-2' /> Open Issues
                </div>
                <div className='mr-2 badge badge-warning badge-lg'>
                    <FaUtensils className='mr-2' /> Forks Count
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepoItem