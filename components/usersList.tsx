import { user } from "../models/user"
const UsersList : React.FC<{user:user}> =({user})=>{

    return <><p>{user.name}</p><p>{user.email}</p><p>{user.address.zipcode}</p></>
}
export default UsersList