import { Link } from "react-router-dom"
import useStore from "../hooks/useStore"

function LoginPage() {

  const users = useStore(store=>store.users)

    return <div className="main-wrapper login">
    <section className="login-section">
      <h2>Choose your user!</h2>
      <ul>
       {users.map(user=><Link to={`/logged-in/${user.firstName}_${user.lastName}`}><li>
          <button className="user-selection">
            <img
              className="avatar"
              width="50"
              height="50"
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
          </button>
          </li></Link>)}
        <li>
          <button className="user-selection"><h3>+ Add a new user</h3></button>
        </li>
      </ul>
    </section>
  </div> 
}

export default LoginPage