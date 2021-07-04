// - On the main app, render the side panel with a list of all the chats the user is on
// - Each item of the chats list should display the name of the other user in the chat, and a preview of the last message of the chat
// - Render a search bar on the top of the side panel that search through the chats

import useStore from "../hooks/useStore"
import { getContacts } from "../helpers"

function SideChatList({currentUser, users}) {

  const setCurrentConversation = useStore(store=>store.setCurrentConversation)

  const conversations = useStore(store=>store.conversations)

  const contacts = getContacts(conversations, currentUser, users)

    return <>
    <form className="aside__search-container">
      <input
        type="search"
        name="messagesSearch"
        placeholder="Search chats"
        value=""
      />
    </form>
    <ul>
      {/* <!-- This first item should always be present --> */}
      <li>
        <button className="chat-button">
          <div><h3>+ Start a new Chat</h3></div>
        </button>
      </li>
      {contacts.map(contact=><li>
        <button onClick={()=>{
          const relevantConversations = conversations.filter(conversation=>conversation.userId===currentUser.id||conversation.participantId===currentUser.id)
          const currentConversation = relevantConversations.find(conversation=>conversation.userId===contact.id||conversation.participantId===contact.id)
          setCurrentConversation(currentConversation)
        }} className="chat-button">
          <img
            className="avatar"
            height="50"
            width="50"
            alt={`${contact.firstName} ${contact.lastName}`}
            src={contact.avatar}
          />
          <div>
            <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
            <p>Last message</p>
          </div>
        </button>
        </li>)}
    </ul>
    </>
    
  
}

export default SideChatList

{/* <li>
<button className="chat-button">
  <img
    className="avatar"
    height="50"
    width="50"
    alt=""
    src="https://robohash.org/3"
  />
  <div>
    <h3>Carl T-800</h3>
    <p>Last message</p>
  </div>
</button>
</li> */}