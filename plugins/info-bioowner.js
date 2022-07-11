let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : 𝐻𝑒𝑛𝑑𝑟𝑎-ᴍᴅ᭄࿐
*✉️ Nama RL* : 𝐻𝑒𝑛𝑑𝑟𝑎
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 6 Juni 2006
*🎨 Umur* : 16
*🧮 Kelas* : 2 SMA
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, jabar, Cirebon, Hss
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak ml, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @Hendra_mllv
*🇫  Facebook* : Hendraa
*🏮 Chanel Youtube* : HendrBotz
*🐈 Github:* Hendraa

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
