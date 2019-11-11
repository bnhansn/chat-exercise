import chatEvents from 'fixtures/chatEvents'

async function fetchChatEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ events: chatEvents })
    }, 1000)
  })
}

export default {
  fetchChatEvents
}
