/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUllTGJ4c0xTQmFFSk9pSzdVcm03Z3VvcWhYNGUxTVpRUlJzSktKYytYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU9zUi9nWjE1RVRJL21YYmVOZDFVbmpnOHhmM0xzY1c0UEZqR1dTS1NSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTFRlaGcwZG5mbVpiemh4KzJ5UzRTbm5uZTZZR0lYS2hXYlNKMzlxUjJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFdDVvZGZIVGx0Z1FJVEljU2lpOGtBSW04M3EwRERzOHhPR1FncG05M25RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHWjdXT2VuMk5vM1IvcldVdzdYQ2U1MDhhVTZsUTErcVZsWjNUbnZ2bEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRDcnZDUFRacGlONm5FNmVISjRTUGgzcTBjNWd1cG14eW1EVXlaQ1FlM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5HTWxEYVBURjZFZElqTm56ZjgwWHJtWHlFSm14ckZlRGhhZzdxUkNsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkhzbGJVQzJPcEVUdG8vUlY0QkNoK0FPWW5obDM1M1hadVYvbkNNdHVXaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR3c0ltaXh1TXFlTllDbEI5NkJOa3BQRy9TSVQ0NHppcWEvUERuNzhoSkZKa0hmMXY1aDhOTmR5aTlFTzdvejY2UmJmR3ZkYVh6TlFGYmxwcllHR2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiIrWWp6VDhLVEtVNTRneDJZOVlXWFl2TjVLcVpxWnNWVEtkNC90YW9BbmJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzU0NTk4NDQ2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOTY4OEFGRERCRjlGMTQyNjEwOUVBNUY3N0U0OUEwNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxMTExNDc4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTc1NDU5ODQ0NjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTlBNEE0MEREMDlDOEUzQzdENTRFQzMzOTk2NEIyRTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTExMTQ3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3NTQ1OTg0NDY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVDMDhERjA5RjFDRjM4ODRCOEUyNDBCQzJDMTE4ODY3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTExMTE0OTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjRaVk1ZN1pXIiwibWUiOnsiaWQiOiI5MTc1NDU5ODQ0NjU6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJjaG9wIiwibGlkIjoiNTk3NjA4MjkzMTMwNzA6NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BpRW5ua1FwYTcvd2dZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5uMXVPY2NmNW1LdWx0VWNxTlJaQmxXbmVqa1d4YTUrcWNzaDV5anMvaVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9XemdIdlFGMmVGTU1ZK1BJdGhvcUpTT3piNnJjNExHb0k2TkN3M1dxcHpGNVRpUTY0V3d0NXpIS01seHlTdU54N0ZnV1NSRWVndjZGRGVRU2xkOERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSQmpsWTlFWm9VUzRRTEcrQTloanZxOXZxSVlZeEtuaEljdzRpQWJ0azRkbVVPMSt5T1NzQndwVlhDYmNJdnBjNFhOaG5hd1RQTEhDeHBrVVBnUG5pUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxNzU0NTk4NDQ2NTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRaOWJqbkhIK1ppcnBiVkhLalVXUVpWcDNvNUZzV3VmcW5MSWVjbzdQNG0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTExMTQ3NSwibGFzdFByb3BIYXNoIjoiMk1GS1BRIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJMDkifQ==';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'TRUE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '917545984465';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '91';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
