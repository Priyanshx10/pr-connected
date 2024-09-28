'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, Paperclip, Calendar } from 'lucide-react'
import { useSession } from "next-auth/react"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [input, setInput] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { data: session } = useSession()

  const handleSend = useCallback(async () => {
    if (input.trim() === '') return

    setMessages(prev => [...prev, { text: input, isUser: true }])
    setInput('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input, userId: session?.user?.id ?? 'unknown' }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response from chatbot')
      }

      const data = await response.json()
      setMessages(prev => [...prev, { text: data.reply, isUser: false }])
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble responding right now. Please try again later.", isUser: false }])
    }
  }, [input, session?.user?.id])

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to upload file')
      }

      const data = await response.json()
      setMessages(prev => [...prev, { text: `File uploaded successfully: ${data.filename}`, isUser: false }])
    } catch (error) {
      console.error('Error uploading file:', error)
      setMessages(prev => [...prev, { text: "Sorry, I couldn't upload the file. Please try again.", isUser: false }])
    } finally {
      setIsUploading(false)
    }
  }, [])

  const handleScheduleAppointment = useCallback(() => {
    setMessages(prev => [...prev, { text: "To schedule an appointment, please provide a date (YYYY-MM-DD) and time (HH:MM).", isUser: false }])
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }, [])

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }, [handleSend])

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-teal-500 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-teal-500 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">PR-Connect Chat</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.isUser ? 'ml-auto bg-teal-100' : 'mr-auto bg-gray-100'
                  } p-2 rounded-lg max-w-[80%]`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2 mb-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-teal-500 hover:bg-teal-100 rounded-full"
                  disabled={isUploading}
                >
                  <Paperclip size={20} />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={handleScheduleAppointment}
                  className="p-2 text-teal-500 hover:bg-teal-100 rounded-full"
                >
                  <Calendar size={20} />
                </button>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                  onClick={handleSend}
                  className="bg-teal-500 text-white p-2 rounded-r-md"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}