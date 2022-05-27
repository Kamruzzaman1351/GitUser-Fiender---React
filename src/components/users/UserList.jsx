import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
function UserList() {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
    </div>
  )
}

export default UserList