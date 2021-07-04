import create from "zustand";

const useStore = create((set, get) => ({
    users: [],
    setUsers: (array) => {set(state=>({users: array}))},
    conversations: [],
    setConversations: (array) => {set(state=>({conversations: array}))},
    currentConversation: {},
    setCurrentConversation: (object) => {set(state=>({currentConversation: object}))},
    messages: [],
    setMessages: (array) => {set(state=>({messages: array}))}
}) )

export default useStore