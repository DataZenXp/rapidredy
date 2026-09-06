
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, MessageSquare, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'model', text: "SYSTEM ONLINE. I'm PyZip. Ask me about RapidRedy's services or tech stack." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize Gemini Chat
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (!chatSessionRef.current) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatSessionRef.current = ai.chats.create({
                model: 'gemini-3-pro-preview',
                config: {
                    systemInstruction: "You are PyZip, the AI support bot for RapidRedy, a high-voltage digital agency. Your persona is professional, slightly edgy, tech-savvy, and confident (matching a neo-brutalist agency vibe). You answer questions about Web Development, Mobile Apps, Digital Marketing, and UI/UX Design. Keep responses concise, punchy, and helpful. Use uppercase for emphasis occasionally.",
                },
            });
        } catch (error) {
            console.error("Failed to initialize AI", error);
        }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || !chatSessionRef.current) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const responseStream = await chatSessionRef.current.sendMessageStream({ message: userMsg.text });
      
      let fullResponse = '';
      const botMsgId = (Date.now() + 1).toString();
      
      // Add placeholder message
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        const text = chunk.text;
        if (text) {
            fullResponse += text;
            setMessages(prev => 
                prev.map(msg => msg.id === botMsgId ? { ...msg, text: fullResponse } : msg)
            );
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "ERROR: CONNECTION INTERRUPTED. PLEASE TRY AGAIN." 
      }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-toon-yellow border-4 border-toon-dark shadow-hard p-4 rounded-full flex items-center justify-center transition-colors hover:bg-yellow-300"
      >
        {isOpen ? <X size={32} className="text-toon-dark" /> : <Bot size={32} className="text-toon-dark" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[500px] flex flex-col bg-white border-4 border-toon-dark shadow-hard-xl rounded-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-toon-dark p-4 flex items-center justify-between border-b-4 border-toon-dark">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-toon-purple border-2 border-white flex items-center justify-center rounded-md">
                  <Bot className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg leading-none">PYZIP</h3>
                  <span className="text-toon-green text-xs font-mono font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-toon-green rounded-full animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-toon-bg space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-lg border-2 border-toon-dark shadow-hard-sm font-body text-sm font-medium ${
                      msg.role === 'user' 
                        ? 'bg-toon-blue text-white rounded-br-none' 
                        : 'bg-white text-toon-dark rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isThinking && (
                <div className="flex justify-start">
                  <div className="bg-white text-toon-dark p-3 rounded-lg rounded-bl-none border-2 border-toon-dark shadow-hard-sm flex items-center gap-2">
                    <Sparkles size={16} className="text-toon-purple animate-spin" />
                    <span className="font-mono text-xs font-bold">PROCESSING...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t-4 border-toon-dark">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask PyZip..."
                  className="flex-1 bg-gray-100 border-2 border-toon-dark p-2 rounded-lg font-bold text-toon-dark focus:outline-none focus:bg-white focus:shadow-hard-sm transition-all placeholder:text-gray-400 font-body"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  disabled={!inputValue.trim() || isThinking}
                  className="bg-toon-purple text-white p-2 rounded-lg border-2 border-toon-dark shadow-hard-sm disabled:opacity-50 disabled:shadow-none transition-all"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
