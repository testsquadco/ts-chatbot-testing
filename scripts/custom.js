module.exports = {
  onBotPrepare: async (container) => {
    console.log('Bot preparation started...');
    // Add any custom preparation logic here
  },

  onBotStart: async (container) => {
    console.log('Bot started...');
  },

  beforeInput: async (container, msg) => {
    console.log(`Processing user input: ${msg.messageText}`);
  },

  afterOutput: async (container, msg) => {
    console.log(`Bot response received: ${msg.messageText}`);
    // Add custom validation or logging here
  }
}; 