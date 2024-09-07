 
import fg from 'api-dylux'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    
        if (!args[0]) throw `✳️ ${mssg.noLink('TikTok')}\n\n 📌 ${mssg.example} : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`
        if (!args[0].match(/tiktok/gi)) throw `❎ ${mssg.noLink('TikTok')}`
        m.react(rwait)
      
        try {
        let res = await fetch(global.API('fgmods', '/api/downloader/tiktok', { url: args[0] }, 'apikey'))
        let data = await res.json()

        if (!data.result.images) {
            let txt = '`乂  T I K T O K  -  D O W N L O A D`\n\n'
    txt += `	✩  *Título* : ${title}\n`
    txt += `	✩  *Autor* : ${author}\n`
    txt += `	✩  *Duración* : ${duration} segundos\n`
    txt += `	✩  *Vistas* : ${views}\n`
    txt += `	✩  *Likes* : ${likes}\n`
    txt += `	✩  *Comentarios* : ${comment}\n`
    txt += `	✩  *Compartidos* : ${share}\n`
    txt += `	✩  *Publicado* : ${published}\n`
    txt += `	✩  *Descargas* : ${downloads}\n\n`
    txt += `> 🚩 *${textbot}*`
`
            conn.sendFile(m.chat, data.result.play, 'tiktok.mp4', tex, m, null, rcanl);
            m.react(done)
        } else {
            let cap = `
▢ *Likes:* ${data.result.digg_count}
▢ *${mssg.desc}:* ${data.result.title}
`
            for (let ttdl of data.result.images) {
                conn.sendMessage(m.chat, { image: { url: ttdl }, caption: cap }, { quoted: m })
            }
            conn.sendFile(m.chat, data.result.play, 'tiktok.mp3', '', m, null, { mimetype: 'audio/mp4' })
            m.react(done)
        }

      } catch (error) {
        m.reply(`❎ ${mssg.error}`)
    }
   
}

handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = ['tiktok', 'tt', 'tiktokimg', 'tiktokslide']
handler.diamond = true

export default handler
