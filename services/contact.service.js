
export async function sendMessage(message) {
    console.log(message);
    const newMessage = JSON.stringify(message)
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: newMessage,
        headers: {
            'content-type': 'application/json'
        }
    })
}