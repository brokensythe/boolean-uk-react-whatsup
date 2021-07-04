// - When a user clicks on a chat from the side list, display all the chat messages in the messages section
// - The logged-in user messages should appear on the right-hand side, while the other user's messages should appear on the left-hand side
// - Render a message box 
// - When a user submits a message, it should appear on the messages panel above
// - If you change users, the new messages should appear as well in their chat

import { useParams } from "react-router-dom"
import SideChatList from "./SideChatList"
import useStore from "../hooks/useStore"
import MessageList from "./MessageList"

function MainPage() {

  let { chatId } = useParams()
  
  const users = useStore(store=>store.users)
  
  const firstName = chatId.split('_')[0]
  
  const lastName = chatId.split('_')[1]
  
  const currentUser = users.find(user=>user.firstName===firstName && user.lastName===lastName)
  
  if(!users.length) return <h1>Loading Info...</h1>
    
    return <div className="main-wrapper">
    {/* <!-- Side Panel --> */}
    <aside>
      {/* <!-- Side Header --> */}
      <header className="panel">
        <img
          className="avatar"
          width="50"
          height="50"
          src={currentUser.avatar}
          alt={`${firstName} ${lastName}`}
        />
        <h3>{`${firstName} ${lastName}`}</h3>
      </header>
  
      {/* <!-- Search form --> */}
  
      {/* <!--  */}
  
  <SideChatList currentUser={currentUser} users={users} />
  
   {/* --> */}
      {/* <!--  --> */}
    </aside>
  
    {/* <!-- Main Chat Section --> */}
    <main className="conversation">
      {/* <!-- Chat header --> */}
      <header className="panel"></header>

        <MessageList />

      <footer>
        <form className="panel conversation__message-box">
          <input
            type="text"
            placeholder="Type a message"
            rows="1"
            value=""
          /><button type="submit">
            {/* <!-- This is the send button --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
              ></path>
            </svg>
          </button>
        </form>
      </footer>
    </main>
  </div>
  
}

export default MainPage