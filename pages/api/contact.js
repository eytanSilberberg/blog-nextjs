import { MongoClient } from 'mongodb'

async function handler(req, res) {
    console.log(req.body);
    if (req.method === 'POST') {
        const { name, email, message } = req.body
        if (!email.includes('@') || name.trim() === '' || message.trim() === '' || !name || !email || !message) {
            res.status(422).json({ message: 'Invalid values' })
            return
        }
        const newMessage = {
            name, email, message
        }

        let client
        try {
            client = await MongoClient.connect(process.env.mongodb_connection)
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'Had an issue with connecting to mongo' })
            return
        }

        const db = client.db('nexjs-e2e-db')
        try {
            await db.collection('contact').insertOne(newMessage)
            res.status(201).json({ message: 'Message added', newMessage })
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'Had an issue with writing in to the collection' })
            return
        }

        res.status(201).json({ message: 'successfully stored new message', message: newMessage })
        client.close()
        return
    }
}
export default handler