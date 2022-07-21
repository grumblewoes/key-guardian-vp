const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");
const { MessageAttachment } = require("discord.js");
const fs = require('fs');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

require('dotenv').config();

let task1;
let help = false;
let won = false;
let taskList = {
  done1: false,
  done2: false,
  done3: false,
  done4: false
}

var task1Buffer = fs.readFile("task1.txt", function(err, data) {
  task1 = data;
});


client.on("ready", () => 
  console.log("Oh, did I hear \"key\"?"));


//for prompts
client.on("messageCreate", (message) => {
  text = message.content;

  switch(text) {
    case "I want a key":
      message.channel.send("Oh? Did I hear talk of a key?");
      message.channel.send("    8  8  8  8                    		                  ,ooo\.\n8a8  8a8                    		              oP   	?b\nd888a888zzzzzzzzzzzzzzzzzzzz8     	  8b\n`\"\"^\"\"'                   	 		              ?o___oP'\n");
      message.channel.send("Greetings! I am the key guardian. I guard the keys. I'll give you access to wherever you please! My keys don't come for free, though — my keys come at a fee: some cyber-knowledge you must show! Take in my challenge, and when you're done, just send me a text that reads out \"task one\".");
      break;

    case "task one":
      if (!taskList.done1 && !taskList.done2 && !taskList.done3 && !taskList.done4) {
        message.channel.send("This step proves you are able to follow instructions. Good! After this, we are past introductions. To get your next task, you'll have to do something for me. In this file, you must find me the string that I seek! Be warned, though, I'm picky with the phrase. Each end will be lined with 2 uppercase As! And that's not all there is to this trial— the parts of the string are scattered *throughout* the file. \n\nThe best of luck to you. Before I forget, don\'t stress about response format— I\'ll take just the string you get.");
        message.channel.send({files: [new MessageAttachment(task1, "task1.txt")]});
      }
      break;

    case "task two":
      if (taskList.done1 && !taskList.done2 && !taskList.done3 && !taskList.done4) {
        message.channel.send("This site I'll post here has a certain page that has the code to unlock the next stage. It's hard to _see_… there's LOTS of pages. To _look_ at each one would take you ages! The photos are links to give you a lead. It gives you a tiny bit less to read. :sunglasses:");
        message.channel.send("grumblewoes.github.io");
      }
      break;

    case "task three":
      if (taskList.done1 && taskList.done2 && !taskList.done3 && !taskList.done4) {
        message.channel.send("This audio file sounds like a boatload of jargon. But there’s more to this file than the code-file bargain. You can’t get a code from sound… can you? Or, do you have a workaround? If you listen to it, your ears will bleed, but is hearing really what you need?");
        message.channel.send({files: [new MessageAttachment("cipher.wav")]});
      }
      break;

    case "task four":
      if (taskList.done1 && taskList.done2 && taskList.done3 && !taskList.done4) {
        message.channel.send("The true importance in security is knowing the essential circuitry. The future of encryption is going to be focused on quantum technology. Worry not about needing a physics degree, your mind and your patience is all that you need.\n** **\nThe picture I’ve sent here shows a four qubit circuit. It’s got quite a few interesting gates applied to it. For this one, you won’t give me the key - you’ll send the |ket> notation of the final states to me.");
        message.channel.send({files: [new MessageAttachment("circuit.png")]});
      }
      break;
    }
    console.log(text);
});

//for answers
client.on("messageCreate", (message) => {
  text = message.content;

  switch(text)
  {
    case "https://docs.google.com/":
      message.channel.send("Well done! But, you are not done yet. There's more information that I would like to get. I have a great many things in store for you. When you think you're ready, simply text me \“task two\”.");
      taskList.done1 = true;
      break;
    case "document/d/1cQ3Xznn4-":
      message.channel.send("Good job! Who needs sight when you’ve got smarts? You’ve smashed the previous two parts. For this next one, I’ll give you back your ability to see. When you’re up for it, simply text me \“task three\”.");
      taskList.done2 = true;
      break;
    case "hDoBfiDbbpafUHLqEm":
      message.channel.send("Congrats again, you superstar. I’m glad you’re able to get this far! A test of sorting, sound, and sight were not enough to best your might. I wanna see how far you can go— how much cyber-knowledge you have to show. The next one’s tough, but there’s only one more. To get going, just send me \“task four\”.");
      taskList.done3 = true;
      break;
    case "|11+->":
      message.channel.send("Quite a memory jogger. Wasn’t that fun? In regards to tasks, that was the last one. You’ve proven yourself as worthy to me. I’ll give you the last of the keys for free.\n```WWNnKsm_yeqevsO0/edit?usp=sharing```");
      won = true;
      taskList.done4 = true;
    }
  if (won) {
    message.channel.send("Congratulations! At this point, you likely expect a reward. Well, the reward is the keys you've collected before! Combine them together, and you'll get a link. A neat little path to a letter, I think.\n** **\nMy job here is done. Thank you for playing! You're really _are_ just as clever as Anna's been saying. :brain:");
    won = false;
  }
});
//for help
client.on("messageCreate", (message) => {
  text = message.content;

  if (text == "help" && !help) {
    help = true;
    message.channel.send("Very well. With which task? Type the number for which you ask.");
  }
        
  if (text == "1" || text == "2" || text == "3" || text == "4") {
    switch(text) {
      case "1":
        message.channel.send("In a file so big, specific strings are hard to find. Did `grep` and `regex` cross your mind?");
        help = false;
        break;
      case "2":
        message.channel.send("There’s more to the site than meets the eye. Inspect Element is on your side. Is there a picture that you missed? All that’s there is on the list. But take care to keep track of where you snoop - not all the pictures are in one group.");
        help = false;
        break;
      case "3":
        message.channel.send("You can’t hear a picture, you know that. But audio’s not the only format. To know the art of sounds you see :eyes:, you should research audio steganography.");
        help = false;
        break;
      case "4":
        message.channel.send("Some of the gates might look like they’re new. Wikipedia pages can surely help you! I want to remind you, when typing |ket> notation, there’s a tiny confusing qubit rotation. Qubits are read right to left, not left to right. I hope it won’t be too hard to write!");
        help = false;
        break;
      }
  }
});

client.login(process.env.BOTTOKEN);