import { user } from "../models/user"
import UsersList from "../components/usersList"
const Users : React.FC<{users : Array<user>}> =({users})=>{

    return <><h1>Users Page</h1>
    {users.map((user)=>{
        return (
        <div key={user.id}>
        <UsersList user={user}/>
        </div>
        )
    })}
    
    </>
}

export default Users

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users : Array<user>= await response.json();

    console.log(users)

    return {
        props : {
            users: users
        }
    }
}