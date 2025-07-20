"use client";

import React, { useState, useEffect } from "react";
import { XMarkIcon, ArrowPathIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Reset loading state when opening
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleChat = () => {
    if (isOpen && isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const minimizeChat = () => setIsMinimized(true);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      {!isOpen && (
        <motion.button
          onClick={toggleChat}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open PR-Bot"
        >
          <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
          <span className="font-semibold">Brand Assistant</span>
        </motion.button>
      )}

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: isMinimized ? 300 : 0,
              height: isMinimized ? 60 : "80vh",
              width: isMinimized ? 200 : "100%"
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            className={`fixed ${isMinimized ? 'bottom-6 right-6' : 'inset-0 flex items-center justify-center'} bg-black bg-opacity-50 z-50`}
          >
            <div className={`relative ${isMinimized ? 'w-[200px] h-[60px]' : 'w-full max-w-3xl h-[80vh]'} bg-white rounded-lg shadow-2xl overflow-hidden`}>
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                  <h3 className="font-bold">PR-Brand Assistant</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={minimizeChat}
                    className="p-1 rounded hover:bg-white/10 transition"
                    aria-label="Minimize chat"
                  >
                    <span className="text-xs">_</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded hover:bg-white/10 transition"
                    aria-label="Close chat"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <ArrowPathIcon className="w-8 h-8 text-blue-600 animate-spin" />
                    <p className="text-gray-600">Loading brand assistant...</p>
                  </div>
                </div>
              )}

              {/* Chatbot Iframe */}
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/w54BM4ejp4E7-gCZSj55f"
                className={`w-full ${isMinimized ? 'h-0' : 'h-[calc(100%-56px)]'} border-0`}
                title="PR-Brand Assistant Chatbot"
                onLoad={() => setIsLoading(false)}
                allow="microphone"
              />

              {/* Minimized State */}
              {isMinimized && (
                <button
                  onClick={toggleChat}
                  className="absolute inset-0 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2"
                >
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                  <span className="font-medium text-sm">Restore Chat</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}