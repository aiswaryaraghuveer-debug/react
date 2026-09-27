import portfolioData from "./data";

const randomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export function rollDice(count = 1) {
  const rolls = Array.from(
    { length: count },
    () => Math.floor(Math.random() * 6) + 1
  );

  const total = rolls.reduce((sum, value) => sum + value, 0);

  if (count === 1) {
    return {
      type: "dice",
      text: `🎲 You rolled **${rolls[0]}**!`
    };
  }

  return {
    type: "dice",
    text: `🎲 You rolled **${count} dice**: ${rolls.join(
      ", "
    )}\n\nTotal: **${total}**`
  };
}

export function flipCoin() {
  const result = Math.random() < 0.5 ? "HEADS" : "TAILS";

  return {
    type: "coin",
    text: `🪙 **${result}**`
  };
}

export function randomNumber(min = 1, max = 100) {
  min = Number(min);
  max = Number(max);

  if (Number.isNaN(min) || Number.isNaN(max)) {
    return {
      type: "error",
      text: "Please give me valid numbers. Example: `random number 1 50`"
    };
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  const result =
    Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    type: "random",
    text: `🔢 Your random number is **${result}**`
  };
}

export function randomColor() {
  const letters = "0123456789ABCDEF";

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return {
    type: "color",
    text: `🎨 Your random color is **${color}**`,
    color
  };
}

function aboutResponse() {
  return {
    type: "text",
    text: portfolioData.about
  };
}

function skillsResponse() {
  return {
    type: "text",
    text: `💻 **My skills**

${portfolioData.skills.map((skill) => `• ${skill}`).join("\n")}`
  };
}

function experienceResponse() {
  return {
    type: "text",
    text: `💼 **Experience**

${portfolioData.experience
      .map(
        (item) =>
          `**${item.role}** — ${item.company}
${item.period}

${item.description}`
      )
      .join("\n\n")}`
  };
}

function projectsResponse() {
  return {
    type: "text",
    text: `🚀 **Projects**

${portfolioData.projects
      .map(
        (project) =>
          `### ${project.name}

${project.description}

Tech: ${project.tech.join(", ")}`
      )
      .join("\n\n")}`
  };
}

function interestsResponse() {
  return {
    type: "text",
    text: `✨ **Things I enjoy**

${portfolioData.interests.map((item) => `• ${item}`).join("\n")}`
  };
}

function contactResponse() {
  return {
    type: "text",
    text: `📬 **Let's connect**

Email: ${portfolioData.contact.email}

GitHub:
${portfolioData.contact.github}

LinkedIn:
${portfolioData.contact.linkedin}`
  };
}

export function processCommand(message) {
  const text = message.trim().toLowerCase();

  if (!text) {
    return {
      type: "text",
      text: "Type something and I'll try to help."
    };
  }

  // Dice
  if (
    text.includes("dice") ||
    text.includes("roll dice") ||
    text.includes("roll a dice")
  ) {
    const match = text.match(/(\d+)\s*dice/);

    const count = match ? Math.min(Number(match[1]), 20) : 1;

    return rollDice(count);
  }

  // Coin
  if (
    text.includes("coin") ||
    text.includes("flip coin") ||
    text.includes("flip a coin")
  ) {
    return flipCoin();
  }

  // Random number
  if (
    text.includes("random number") ||
    text.includes("random no") ||
    text.includes("generate number")
  ) {
    const numbers = text.match(/\d+/g);

    if (numbers?.length >= 2) {
      return randomNumber(numbers[0], numbers[1]);
    }

    return randomNumber();
  }

  // Random color
  if (
    text.includes("random color") ||
    text.includes("random colour")
  ) {
    return randomColor();
  }

  // About
  if (
    text.includes("who are you") ||
    text.includes("who is ash") ||
    text.includes("about ash") ||
    text.includes("about you") ||
    text.includes("tell me about")
  ) {
    return aboutResponse();
  }

  // Skills
  if (
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("technologies") ||
    text.includes("tech stack")
  ) {
    return skillsResponse();
  }

  // Experience
  if (
    text.includes("experience") ||
    text.includes("work") ||
    text.includes("career") ||
    text.includes("job")
  ) {
    return experienceResponse();
  }

  // Projects
  if (
    text.includes("project") ||
    text.includes("projects") ||
    text.includes("built")
  ) {
    return projectsResponse();
  }

  // Interests
  if (
    text.includes("interest") ||
    text.includes("hobby") ||
    text.includes("hobbies")
  ) {
    return interestsResponse();
  }

  // Contact
  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("github") ||
    text.includes("linkedin")
  ) {
    return contactResponse();
  }

  // Greetings
  if (
    text === "hi" ||
    text === "hello" ||
    text === "hey" ||
    text.startsWith("hi ")
  ) {
    return {
      type: "text",
      text: `Hey! 👋 I'm ${portfolioData.name}'s portfolio assistant.

Ask me anything about Ash, or try one of the fun commands below.`
    };
  }

  // Help
  if (
    text === "help" ||
    text.includes("what can you do") ||
    text.includes("commands")
  ) {
    return {
      type: "text",
      text: `🤖 **Here's what I can do**

**About Ash**
• Who is Ash?
• Tell me about Ash
• What are Ash's skills?
• Tell me about the experience
• Show projects
• What are Ash's interests?
• How can I contact Ash?

**Fun stuff**
• Roll a dice
• Roll 3 dice
• Flip a coin
• Random number
• Random number 1 50
• Random color`
    };
  }

  // Thanks
  if (
    text.includes("thank") ||
    text === "thanks"
  ) {
    return {
      type: "text",
      text: "You're welcome! 😎"
    };
  }

  return {
    type: "text",
    text: `Hmm... I don't know that one yet. 🤔

Try asking:
• "Tell me about Ash"
• "What are your skills?"
• "Show me your projects"
• "Roll a dice"
• "Flip a coin"
• "Random number 1 100"

Type **help** to see everything I can do.`
  };
}