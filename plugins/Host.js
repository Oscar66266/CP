let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `*¿Tu Nokia es muy lento y necesitas que tu bot esté activo 24/7?* 📱⏳

¡Tenemos la solución perfecta para ti! 🎉 Mantén tu bot funcionando sin interrupciones con nuestros servidores, Ofrecemos servidores gratuitos y de pago a precios súper accesibles, al alcance de todos. 💸 

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://www.infinity-wa.xyz/

*🟢 Dashboard:*
https://dashboard.infinitywa.xyz

⚙️ *Panel*
https://dashboard.infinitywa.xyz

💥 *Grupo Support whatsapp:*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

*🟣 Discord:*
https://discord.com/invite/vgfpe4Nwd8

🧡 *Canal de WhatsApp:*
${canal1}

🗣📲 *Contacto:*
• https://www.facebook.com/elrebelde21
• wa.me/573147616444

No esperes más y lleva tu bot al siguiente nivel con nuestro servicio de alojamiento. ¡Es fácil, rápido y económico! 💪🚀` 

await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": false,
"containsAutoReply": true,
title: `🚩 Starlights`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/esoV.jpg', 
sourceUrl: 'https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S'}}},
{ quoted: m})
}
handler.command = /^(infohost|hosting|infinitywa|infinity)$/i
export default handler
