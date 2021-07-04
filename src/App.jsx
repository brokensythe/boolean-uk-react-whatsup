// - Render the login page, with the route /login
// - Render the main app page with the route /logged-in
// - Render the messages panel within the main app with the route /logged-in/:chatId
// - When you land on the app, you should be taken to the login page
// - If you navigate to /logged-in without choosing a user, you should be redirected to /login

import { Switch, Route, Redirect } from "react-router"
import LoginPage from "./components/LoginPage"
import MainPage from "./components/MainPage"
import useStore from "./hooks/useStore"
import { useEffect } from "react"

export default function App() {

  const setUsers = useStore(store=>store.setUsers)
  const setConversations = useStore(store=>store.setConversations)
  const setMessages = useStore(store=>store.setMessages)

  useEffect(()=>{
    fetch("http://localhost:4000/users")
    .then(resp=>resp.json())
    .then(setUsers)
}, [setUsers])

  useEffect(()=>{
    fetch("http://localhost:4000/conversations")
    .then(resp=>resp.json())
    .then(setConversations)
  }, [setConversations])

  useEffect(()=>{
    fetch("http://localhost:4000/conversations")
    .then(resp=>resp.json())
    .then(setMessages)
  }, [setMessages])

  return <Switch>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/logged-in/:chatId">
      <MainPage />
    </Route>
    <Route path="/logged-in">
      <MainPage />
    </Route>
    <Route path="/">
      <Redirect to="/login" />
    </Route>
  </Switch>
}
