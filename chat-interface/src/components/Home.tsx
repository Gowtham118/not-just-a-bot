// import {
//   Chatbot,
//   Config,
//   ActionProvider,
//   MessageParser,
//   useChatContext,
// } from "react-chatbot-kit";

// const yourActionProvider: ActionProvider = {
//   greet: () => {
//     console.log("Hello!");
//   },
//   // Add more methods as needed
// };

// // Define your message parser
// class YourMessageParser implements MessageParser {
//   // Implement the methods from the MessageParser interface
//   // For example:
//   parse(message: string) {
//     return {
//       content: message,
//       type: "text",
//     };
//   }
// }

// // Define your chatbot config
// const yourChatbotConfig: Config = {
//   botName: "YourBotName",
//   initialMessages: [
//     {
//       type: "text",
//       content: "Hello! How can I help you?",
//     },
//   ],
// };

// export const Home = () => {
//   const actionProvider = new YourActionProvider();
//   const messageParser = new YourMessageParser();

//   return (
//     <div>
//       <div>Home</div>
//       <Chatbot
//         config={yourChatbotConfig}
//         actionProvider={actionProvider}
//         messageParser={messageParser}
//       />
//     </div>
//   );
// };
