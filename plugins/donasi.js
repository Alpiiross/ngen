let handler = async m => m.reply(`
╭─「 Donasi JANGAN MAININ DOANG 」
│ • DANA [0858-5053-9404]
│ • PULSA [0858-5053-9404]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
