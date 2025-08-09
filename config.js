const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUx5VlNNNXB2Y2hvaCt6YlM0cHZmQlhBNWtVcW84WXRIdGx2cHZrVmdtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajd1VTZqZEk4YzF6UStWZHNuK0lRRlhNcng2SHN4S05MSnlHdGlEM0RpYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTUZWaTJxcmNsYlRTN296NnVoQWtNVy96UzBMY1hCdDRIYTk5aW83MFhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZmpKbUh6LzUyMHlvYk9NVEcrRThwcGIzSUN4eW4vVW5VRCt2aE00QlRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdLNEVJNUlGbkw0U2QvZ1kzT2VaRHhCeG04NVFYRkdhNE1Kai9WNFl4MHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBWOUxHOUp6QjNBUy9BbnFyOUFnNFNRL1V5N0lFcWJLdnhIY3FMNTNQMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hVY0ZqeCtIaGpDQ3hCVzBXbUlmdGhxZThnRlhUdmRyM2Nxdmx6bW9YWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURWM0s3cWorUkZYQTF6Q0VCSmV1RllPa0F0a1lUUTFHekNzcStVT1F5Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN5cDRldzZoMW43SkRmQkU2WGd0cXNvV21ETTlsVUVEd2N1c01iaGVVS3NEZFBsdmU4QW5GNmdJVnN5Zi9qQ0pQMXNYZDRWS0ZLUm1lUkJObHhtbGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IkJXa1FvbGhQQVZtejNFa3UwVmcrNzRDQ29nMWZyWjVvQTRDemtla21PenM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTA4MzY5MDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUzN0ZFNEY5QzA0N0U0RUUwMjNFNjlCODYyQUFEMUFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ3Mjk0Njh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEwODM2OTA3OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDODgxREUyMzUyNTcyOTM1QkVDRTQ2RDkwNzhCQUNENyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NzI5NDY4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJEUlNYQzIxQSIsIm1lIjp7ImlkIjoiOTIzMTA4MzY5MDc4OjYzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTYxNTk4NjgxNDAzNTQ5OjYzQGxpZCIsIm5hbWUiOiJCYW5kIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOL1N6K1FFRVBhWDNNUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2WTl2STRiTEo3L0JJQitCTHMzdVgwQW1Ca0FTSUMvZFJicUljZ0ozTGhvPSIsImFjY291bnRTaWduYXR1cmUiOiJBQnlnRi9LdFdFdjE4N3ZNeEQ5ZWtrelM1WVovTkFjWDZRWVRJeHNHanp0K1Qxd3g2eHJDVlk4cnB6c2hCaDBUanZwd1JLbDJFWmVRLzZ6VEg4alBDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMStxWDRRZFdtVmFHZWhrNWxrclJYMVZxQXBJMzZVckdrK244cnlNbjlGZXhTZlJSMkFDdE9naVRPZEU4VzhRNzFvMDZ1c241L0NCcHdYeDRCdXRjakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMDgzNjkwNzg6NjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjJQYnlPR3l5ZS93U0FmZ1M3TjdsOUFKZ1pBRWlBdjNVVzZpSElDZHk0YSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NzI5NDY1LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBPbCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SALEEM Bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/wzdxwt.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Saleem Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Saleem Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923491221845",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SALEEM-BOT- Pathan*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SALEEM-BOT- Pathan ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923491221845",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
