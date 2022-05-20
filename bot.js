const { Telegraf,Telegram  } = require('telegraf')
const config = require("./config")
const telegram = new Telegram(config.token)
const bot = new Telegraf(config.token)


bot.command('start', (ctx) => { 
if (ctx.chat.type !== 'private') return null;
	ctx.chat.id,
	ctx.replyWithHTML(`Salam <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a> , bota etiraf etmək istədiyin mesajı yazırsan və kanalda paylaşılır.\n\nEtirafınızı yazdıxdan sonra Anonim(gizli) yoxsa Açıx paylaşım soruşacam ✅\n\nBuyur Bir Etiraf Et 💁🏼‍♀️`,
	{
		reply_markup:{
			inline_keyboard:[
				[{text: "Etiraf Kanalı 📣", url: "https://t.me/confessaz"}]
		}
	})
})





bot.command("admin", ctx => {
	if(ctx.from.id===1108583389){
		ctx.reply("Giriş uğurludur.")
	}else{
		ctx.reply("Giriş uğursuzdur.")
	
	}
})



let etiraf;

bot.on("text", ctx => {
	 if (ctx.chat.type !== 'private') return null;
	let kanalid = `${config.kanalid}` //Gönderilmesi istenilen kanalın ID
	metn = ctx.message.text
ctx.telegram.sendMessage(ctx.from.id, 'Etirafınız necə paylaşılsın?',{
	reply_markup: {
		inline_keyboard: [
		
		[{text: 'Anonim 👤 ', callback_data: 'anonim'}],
		[{text: 'Açıq 💃 ', callback_data: 'aciq'}]
		
		]
	}
})
	

})

bot.action("aciq", ctx => {
	let aciqetiraf= `${config.aciqetirafeden} ${ctx.from.first_name}\n\n\n`
	let kanalid = `${config.kanalid}` 
	var seliqe = `${config.aciqyazdigietiraf} ${etiraf}\n\n\n`
	var sonda = `${config.sonluq}`
	ctx.telegram.sendMessage(kanalid, `${aciqetiraf+seliqe+sonda}`)
	ctx.reply(`Etirafınız göndərildi❕\nAdmin Tərəfindən Yoxlanılıb ${config.etirafkanal} Kanalında Paylaşılacaq 🧞‍♀️`)
})



bot.action("anonim", ctx => {
	let aciqetiraf= `${config.anonimetirafeden} Anonim\n\n\n`
	let kanalid = `${config.kanalid}`
	var seliqe = `${config.anonimyazdigietiraf} ${etiraf}\n\n\n`
	var sonda = `${config.sonluq}`
	ctx.telegram.sendMessage(kanalid, `\${aciqetiraf+seliqe+sonda}`)
	ctx.reply(`Etirafınız göndərildi❕\nAdmin Tərəfindən Yoxlanılıb ${config.etirafkanal} Kanalında Paylaşılacaq 🧞‍♀️`)
})

// Kiçik xətalar olduğu halda bot davam edəcək
bot.catch((err) => {
    console.log('Error: ', err)
})

// Botun nickname alan kod
bot.telegram.getMe().then(botInfo => {
    bot.options.username = botInfo.username
    console.log(`Bot Aktif Oldu => ${bot.options.username}`)
})

bot.launch()
