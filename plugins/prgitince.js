//modified @ fasweeh
	

const Rudh = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Rudh.addCommand({pattern: 'git', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '𝗚𝗜𝗧 \n\n\n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n      ☆ ~ɪᴛsᴍᴇ inrlbot~ ☆ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟ *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : fasweeh \n ┣⍟ \n ┣⍟ *ɴᴜᴍʙᴇʀ* : wa.me/917025099161 \n ┣⍟ \n ┣⍟ *ʙᴏᴛ ɢʀᴏᴜᴘ* https://chat.whatsapp.com/BsR6V1ltRUdK5zV5azILU5 \n ┣⍟ \n ┣⍟ *ɪɴsᴛᴀ* :https://instagram.com/mhd_fasweeh \n ┣⍟ \n ┣⍟ *ʏᴛ* :https://youtube.com/c/vapova \n ┣⍟ \n ┣⍟ *ʙᴏᴛ ᴠɪᴅᴇᴏ* :unknown \n ┣⍟ \n ┣⍟ *ɢɪᴛ* :https://github.com/fasweeh-mvr/inrlbots \n ┣⍟ \n ┣⍟ *ɢɪᴛ* : https://github.com/fasweeh-mvr/media  \n ┣⍟ \n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎\n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎ \n ┣⍟         fasweeh \n ┣⍟ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟        ◩ *inrlbot* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛'}, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ʜʏ ᴅᴜᴅᴇ....👋🏻\n\n         ☆ *ʙᴏᴛ ɪɴғᴏ* ☆\n\n👾 ɴᴀᴍᴇ  : ' + Config.BOTV2 + '\n👾 sᴛᴀᴛᴇs : ᴘᴜʙʟɪᴄ\n👾 ᴛɪᴍᴇ   : ```' + plk_say + '```\n👾 ᴅᴀᴛᴇ : ```' + plk_here + '```\n👾 ᴘᴇʀғɪx : [ . ]\n\n         ☆ *ᴄʀᴇᴀᴛᴇʀ* ☆\n\n👨🏻‍💻 *fasweeh* \n\n          ☆ *ᴛʜᴀɴᴋ ʏᴏᴜ* ☆\n\n👾 ᴄʟɪᴄᴋ ᴍᴇɴᴜ ᴀɴᴅ ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴏᴛ\n',
          footerText: 'fasweeh',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('inrl3.jpg'), surface: 200, message: Config.BOTV2, orderTitle: Config.BOTV2, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTV2 + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('inrl3.jpg')}}}});
	
}));
