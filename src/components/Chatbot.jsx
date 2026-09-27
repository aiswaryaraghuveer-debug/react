import React,{ useEffect, useRef, useState } from "react";
import "./Chatbot.css";
import AppHeader from "./AppHeader";

import ChatHeader from "./ChatHeader";
import WelcomeCard from "./WelcomeCard";
import MessageList from "./MessageList";
import Suggestions from "./Suggestions";
import ChatInput from "./ChatInput";

import { processCommand } from "./commands.js";
import portfolioData from "./data.js";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      type: "text",
      text: `Hey! 👋 I'm ${portfolioData.name}'s portfolio assistant.

Ask me anything about Ash — skills, experience, projects, or try a fun command like rolling a dice.`
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, isTyping]);

  const sendMessage = (messageText) => {
    if (!messageText.trim()) return;

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        sender: "user",
        text: messageText
      }
    ]);

    setIsTyping(true);

    setTimeout(() => {
      const response = processCommand(messageText);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: "bot",
          ...response
        }
      ]);

      setIsTyping(false);
    }, 500);
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        type: "text",
        text: `Chat cleared. 👋

What would you like to know about ${portfolioData.name}?`
      }
    ]);
  };

  return (
    <>
      <AppHeader />
    <div className="app">
        <div className="background-grid" />

      <main className="chat-container">

        <ChatHeader onClear={clearChat} />

        <section className="chat-body">

          <WelcomeCard />

          <MessageList
            messages={messages}
            isTyping={isTyping}
            messagesEndRef={messagesEndRef}
          />

        </section>

        <Suggestions onSelect={sendMessage} />

        <ChatInput onSend={sendMessage} />

        <div className="footer">
          Built with React · No API · Runs entirely in the browser
        </div>

      </main>
      </div>
    </>
  );
}

export default Chatbot;