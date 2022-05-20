const { Telegraf,Telegram  } = require('telegraf')
const config = require("./config")
const telegram = new Telegram(config.token)
const bot = new Telegraf(config.token)


bot.start(ctx => {
    ctx.telegram.sendMessage(
        ctx.chat.id,
	 `Salam $(ctx.username) , bota etiraf etmək istədiyin mesajı yazırsan və kanalda paylaşılır.\n\nEtirafınızı yazdıxdan sonra Anonim(gizli) yoxsa Açıx paylaşım soruşacam ✅\n\nBuyur Bir Etiraf Et 💁🏼‍♀️`,
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Etiraf Et 📌", url: "https://t.me/husnuehedov" }, {text: "Etiraf Kanalı 📣", url: "https://t.me/confessaz"}]
                ]
            }
       }
    )
});




bot.command("admin", ctx => {
	if(ctx.from.id===1108583389){
		ctx.reply("Giriş uğurludur.")
	}else{
		ctx.reply("Giriş uğursuzdur.")
	
	}
})



let metn;

bot.on("text", ctx => {
	let kanalid = -1001424334391
	metn = ctx.message.text
ctx.telegram.sendMessage(ctx.from.id, 'Etirafınız necə paylaşılsın?',{
	reply_markup: {
		inline_keyboard: [
		
		[{text: 'Anonim 👤 ', callback_data: 'Anonim 👤 '}],
		[{text: 'Açıq 💃 ', callback_data: 'Açıq 💃🏻 '}]
		
		]
	}
})
	

})

bot.action("Açıq 💃🏻 ", ctx => {
	let aciqetiraf= `👤Etiraf edən istifadəçi: ${ctx.from.first_name}\n\n\n`
	let kanalid = -1001424334391
	var seliqe = `✏️Yazdığı Etiraf: ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün ☂️ : @ConfessAzBot -a yazın.'
	ctx.telegram.sendMessage(kanalid, `${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi❕\nAdmin Tərəfindən Yoxlanılıb @ConfessAz Kanalında Paylaşılacaq 🧞‍♀️')
})



bot.action("Anonim 👤 ", ctx => {
	let aciqetiraf= `👤Etiraf edən istifadəçi: Anonim\n\n\n`
	let kanalid = -1001424334391
	var seliqe = `✏️Yazdığı Etiraf: ${metn}\n\n\n`
	var sonda = '💁Etiraf Etmək Üçün: @ConfessAzBot -a yazın.'
	ctx.telegram.sendMessage(kanalid, `${eden}\n\n\n${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi❕\nAdmin Tərəfindən Yoxlanılıb @ConfessAz Kanalında Paylaşılacaq 🧞‍♀️')
})

bot.catch((err) => {
    console.log('Error: ', err)
})

// Botun nickname alan kod
bot.telegram.getMe().then(botInfo => {
    bot.options.username = botInfo.username
    console.log(`Bot Aktif Oldu => ${bot.options.username}`)
})

bot.launch()
