import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

import fs from 'fs'

global.owner = [
  ['5219981156963', 'Starligts', true],
  ['']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['5219981156963', '']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'jFC2wbXQ' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = ' 🚩 Starlights' 
global.author = 'Team' 
global.fs = fs

//--info Kiyo
global.botName = 'Ai'
global.fgig = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S' 
global.fgsc = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S' 
global.fgyt = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'
global.fgpyp = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'
global.fglog = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S' 
global.canal1 = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'
global.namechannel = '【 ✯ Starlights Team - Oficial Chanel ✰ 】'


//--- Grupos WA
global.id_canal = '140282221838468@lid' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'
global.bgp = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'
global.bgp2 = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'
global.bgp3 = 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.miniurl = fs.readFileSync('./src/catalogo.png')

global.multiplier = 69 
global.maxwarn = '1' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
