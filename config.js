//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUd2NHJTNmh2UG4ySUNjdnJKUzE1cnRCL3M4QmMrc3dIa2lVMzZmQmxGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzR4d2RxVm9FcFphbk9SOHZuTWFwMFdMY2J1WExvRi8zMzJES3YxNVcwcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTnJoOFowWjhOQTE5N1BPdG5VK01MUkIzUE1hL0pOd01FRm03bFNqOVZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyUzZHVlJ2NDk3ZUR2UmE3RGRBU2JlbHlCc0h3R1Zub0FEMVJpbGdMdHh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BNTBVZDZUVGhtZHJicFV3YVJDWUg4c1RqbUc4QmlxeUhZQk5zbzBuRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9sRC8yUFVjUlRYczlha3ZWZElNV1hnTERIM1IrVStCSHhEb3Fnc2ZJM289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0Nvdmdna29zcjFpTWJVUE8zY0xtbVQrZ3JVeFA2RzNXdlN5UVBiNFBIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmNoeFlqQUJhenhOaGp2UWVmeHlubzNsUzZsZE9rdGVaS3ZudWt1eDVoRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBXK2JpekNEMzZoNGJHc1pna2lqZXN3UFFyRnFUUlNBSzFnUDAzV3J0dUc1blA0RG5HTlhaamNCc0ZnWitybVd2dlZBeFRub2wxVkNtWnB5STR6VGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJtUEJZaExhcmlORUx3WnlRZUluVElDMEp4U1krcHp6UktFTmdGMjF1azBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5MFJPNHduWFE1cVZjY0lLUnhHamVBIiwicGhvbmVJZCI6IjZiNzYxNGI2LTEyOGYtNDFjNC05NDViLTI2NDBhNDRkYWY5ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkMEZzU1pOZlZ4WXE2UEdxM0JnVjFicHpydk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNW5ZRlp2SUpHaGhkampPMnhIeTcwL2tkTUFNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc3Uk1YQVM0IiwibWUiOnsiaWQiOiI5MjM0Mzc0MDc2Njk6MjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2YvSDwnZmHIPCdmLwg8J2YviDwnZmGICDwnZmHIPCdmYQg8J2ZgSDwnZmAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSGJ6YlVIRVBEZmlyUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxbHM1eDN6dWE0ak1QcUhDZTc4U0kyWFgzQkpIMG85Y3ZkK3lURjlNTDJzPSIsImFjY291bnRTaWduYXR1cmUiOiJpQThSa21JVnZzSTdZb0NBMUFCMzMxblZBcE92QlJrVndseTJjZHJEenpUNkwzdDE4SmxtK2JCTElzZnZ1SjVsaXdydzhLK1lmWGlpSzN3U3BoaW5DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidWpYT1A3NER3cWE4d0RiSGtBamllOXhna3VpRDltQkowQmthZWwwTWYrVVUzZlpwbi9wNkYreExJajZFTEdoYmgxYnExbU9ZWkJLRXlrMzFxaXpEalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0Mzc0MDc2Njk6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFpiT2NkODdtdUl6RDZod251L0VpTmwxOXdTUjlLUFhMM2Zza3hmVEM5ciJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTg0MDc2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMN0kifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "USMAN IRSHAD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
