/*import fetch from 'node-fetch'
import yts from 'yt-search';

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, '*Ingresa el nombre del video que quieres buscar*', m)
let resultados = await yts(text);
let info = resultados.all[0]
let { title, thumbnail, timestamp, views, ago, url } = info;
let txt = `_${title}_

*Duracion :* _${timestamp}_
*Visitas :* _${views}_
*subido :* ${ago}
*Link :* _${url}_`

let api = await fetch(`https://api.ssateam.my.id/api/aio?query=${url}`)
let data = await api.json() 
let audio = `${data.data.response.url}`
await conn.sendMessage(m.chat, { audio: { url: audio }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
await m.react('✅')
}
handler.help = ['playaudio']
handler.tags = ['dl']
handler.command = /^(playaudio|play)$/i

export default handler

import fetch from 'node-fetch'
import yts from 'yt-search';

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, '*Ingresa el nombre del video que quieres buscar*', m)
let resultados = await yts(text);
let info = resultados.all[0]
let { title, thumbnail, timestamp, views, ago, url } = info;
let txt = `_${title}_

*Duracion :* _${timestamp}_
*Visitas :* _${views}_
*subido :* ${ago}
*Link :* _${url}_`

let api = await fetch(`https://api.ssateam.my.id/api/aio?query=${url}`)
let data = await api.json() 
let video = `${data.data.response.url}`
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `${title}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })

}
handler.help = ['playvideo']
handler.tags = ['dl']
handler.command = /^(playvideo|play2)$/i

export default handler/*
