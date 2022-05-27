import { Link } from "react-router-dom";
function UserItem() {
  return (
    <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src="" alt="avater" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title"> User Name</h2>
                <Link to="/user/username" className="text-base-content text-opacity-40"> View Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem