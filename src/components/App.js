import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import api from 'api'
import Navbar from 'components/Navbar'
import Home from 'components/Home'
import Chat from 'components/Chat'
import NotFound from 'components/NotFound'
import Sidebar from 'components/Sidebar'

// 1. Show a list of chats in the sidebar, each linking to a Chat view
// 2. Show a list of messages in the Chat view
// 3. Put an input in the Chat that adds the message to list on submit
// 4. Show a list of members for each chat
// 5. Show the number of likes each message has
// 6. Show the last message for each chat in the Sidebar

// Event types

// chat_created:
//   user: Object
//   chat: Object
//
// chat_joined:
//   chat_id: String,
//   user: Object
//
// message_created:
//   chat_id: String,
//   message: Object
//
// message_liked:
//   chat_id: String,
//   message_id: String

function App() {
  useEffect(() => {
    async function fetchEvents() {
      const { events } = await api.fetchChatEvents()
      console.log(events)
    }
    fetchEvents()
  }, [])

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/chat/:chatId">
            {({ match: { params } }) => {
              return <Chat chatId={params.chatId} />
            }}
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
