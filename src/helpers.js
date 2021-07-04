export function getContacts(conversations = [], currentUser = {}, users = []) {
    const relevantConversations = conversations.filter(conversation=>conversation.userId===currentUser.id||conversation.participantId===currentUser.id)
  
    let contactIds = []
  
    for (const conversation of relevantConversations) {
      contactIds = [...contactIds, conversation.userId, conversation.participantId]
    }
  
    contactIds = contactIds.filter(contact=>contact!==currentUser.id)
  
    let contacts = []
  
    for (const contact of contactIds) {
      contacts = [...contacts, users.find(user=>user.id===contact)]
    }

    return contacts
  }