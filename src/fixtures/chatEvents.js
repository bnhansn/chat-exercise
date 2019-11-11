const alice = {
  id: 1,
  username: 'alice',
  avatar: 'https://api.adorable.io/avatars/200/alice.png'
}

const bob = {
  id: 2,
  username: 'bob',
  avatar: 'https://api.adorable.io/avatars/200/bob.png'
}

const charlie = {
  id: 3,
  username: 'charlie',
  avatar: 'https://api.adorable.io/avatars/200/charlie.png'
}

const dan = {
  id: 4,
  username: 'dan',
  avatar: 'https://api.adorable.io/avatars/200/dan.png'
}

const erin = {
  id: 5,
  username: 'erin',
  avatar: 'https://api.adorable.io/avatars/200/erin.png'
}

const events = [
  {
    type: 'chat_created',
    user: alice,
    chat: {
      id: 1,
      name: 'Chat 1'
    }
  },
  {
    type: 'chat_joined',
    chat_id: 1,
    user: alice
  },
  {
    type: 'message_sent',
    chat_id: 1,
    message: {
      id: 1,
      text: 'Hello world',
      user: alice
    }
  },
  {
    type: 'message_sent',
    chat_id: 1,
    message: {
      id: 2,
      text: 'Welcome to Chat 1',
      user: alice
    }
  },
  {
    type: 'chat_joined',
    chat_id: 1,
    user: bob
  },
  {
    type: 'chat_joined',
    chat_id: 1,
    user: charlie
  },
  {
    type: 'chat_created',
    user: bob,
    chat: {
      id: 2,
      name: 'Chat 2'
    }
  },
  {
    type: 'message_liked',
    chat_id: 1,
    message_id: 2
  },
  {
    type: 'chat_joined',
    chat_id: 2,
    user: dan
  },
  {
    type: 'chat_joined',
    chat_id: 2,
    user: erin
  }
]

export default events
