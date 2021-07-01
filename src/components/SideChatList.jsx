// - On the main app, render the side panel with a list of all the chats the user is on
// - Each item of the chats list should display the name of the other user in the chat, and a preview of the last message of the chat
// - Render a search bar on the top of the side panel that search through the chats

function SideChatList() {
    return <ul>
    {/* <!-- This first item should always be present --> */}
    <li>
      <button className="chat-button">
        <div><h3>+ Start a new Chat</h3></div>
      </button>
    </li>
    {/* <!--  --> */}
    <li>
      <button className="chat-button">
        <img
          className="avatar"
          height="50"
          width="50"
          alt=""
          src="https://robohash.org/2"
        />
        <div>
          <h3>Tin Man</h3>
          <p>Last message</p>
        </div>
      </button>
    </li>
    <li>
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
    </li>
  </ul>
  
}

export default SideChatList