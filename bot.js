const { Telegraf } = require('telegraf')

const bot = new Telegraf('1925679701:AAErqvG0NeLMWAJa1QhNnExI6fBmDcE2EmA')


bot.start((ctx) => ctx.reply(`Salam ${ctx.from.username}. mənə gizli və ya açıq etraf edirsən məndə onu öz kanalımda paylaşıram. Etirafını yazdıqdan sonra Gizli və ya Açıq paylaşacağım barədə soruşacam. Buyur etirafını et 🤎`))



bot.command("admin", ctx => {
	if(ctx.from.id===1799203251){
		ctx.reply("Giriş uğurludur.")
	}else{
		ctx.reply("Giriş uğursuzdur.")
	
	}
})



let metn;
	

})

bot.action("Açıq☠️ ", ctx => {
	let aciqetiraf= `Etiraf edən şəxs ☠️ : ${ctx.from.id}\n\n\n`
	let kanalid = -1001424334391
	var seliqe = `Etdiyi etiraf ✍️ : ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün ☂️ : @ConfessTrBot-a yazın.'
	ctx.telegram.sendMessage(kanalid, `${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi. Yoxlanıldıqdan sonra @ConfessTr kanalında paylaşılacaq.')
})



bot.action("Gizli☠️ ", ctx => {
	let eden = ctx.from.first_name 
	let aciqetiraf= `Etiraf edən şəxs ☠️ : Anonim\n\n\n`
	let kanalid = -1001424334391
	var seliqe = `Etdiyi etiraf ✍️ : ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün ☂️ : @ConfessTrBot -a yazın.'
	ctx.telegram.sendMessage(kanalid, `${eden}\n\n\n${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi. Yoxlanıldıqdan sonra @ConfessTr kanalında paylaşılacaq.')
})





console.log('Aktif Oldu')

bot.launch()
