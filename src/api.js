import chatEvents from 'fixtures/chatEvents'

async function fetchChatEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ events: chatEvents })
    }, 500)
  })
}

export default {
  fetchChatEvents
}
