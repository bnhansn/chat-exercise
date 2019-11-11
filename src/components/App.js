import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import api from 'api'
import Navbar from 'components/Navbar'
import Home from 'components/Home'
import Chat from 'components/Chat'
import NotFound from 'components/NotFound'
import Sidebar from 'components/Sidebar'

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
            {({ match: { params } }) => <Chat chatId={params.chatId} />}
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
