//modified @ fasweeh

const Prince = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Prince.addCommand({ pattern: 'number ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by princerudh
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN: inrlbot [BOT OWNER]\n' // full name
            + 'ORG:₢fasweeh;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid= '+Config.NU+' :+91 9895809960\n' // 
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "inrlbot [BOT OWNER]", vcard: vcard}, MessageType.contact , {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "inrlbot(fasweeh)", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('inrl3.jpg')}}}});
}))
