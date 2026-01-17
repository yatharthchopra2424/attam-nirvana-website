import { NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json')

interface ContactSubmission {
  name: string
  email: string
  phone?: string
  message: string
  timestamp: string
  id: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create data directory if it doesn't exist
    if (!existsSync(DATA_DIR)) {
      await mkdir(DATA_DIR, { recursive: true })
    }

    // Read existing contacts or initialize empty array
    let contacts: ContactSubmission[] = []
    if (existsSync(CONTACTS_FILE)) {
      const fileContent = await readFile(CONTACTS_FILE, 'utf-8')
      contacts = JSON.parse(fileContent)
    }

    // Create new contact submission
    const newContact: ContactSubmission = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      message,
      timestamp: new Date().toISOString()
    }

    // Add to contacts array
    contacts.push(newContact)

    // Save to file
    await writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2))

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving contact form:', error)
    return NextResponse.json(
      { error: 'Failed to save contact form' },
      { status: 500 }
    )
  }
}
