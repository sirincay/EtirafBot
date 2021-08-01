const { Telegraf } = require('telegraf')

const bot = new Telegraf('1842730159:AAFr_LAxQCS445V2LW18oTRJeXjiPIk2uug')


bot.start((ctx) => ctx.reply(`Salam ${ctx.from.id}. mənə gizli və ya açıq etiraf edirsən məndə onu öz kanalımda paylaşıram. Etirafını yazdıqdan sonra Gizli və ya Açıq paylaşacağım barədə soruşacam. Buyur etirafını et 🤎`))



bot.command("admin", ctx => {
	if(ctx.from.id===CREATOR_ID){
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
		
		[{text: 'Açıq☠️ ', callback_data: 'Açıq☠️ '}],
		[{text: 'Gizli☠️ ', callback_data: 'Gizli☠️ '}]
		
		]
	}
})
	

})

bot.action("Açıq☠️ ", ctx => {
	let aciqetiraf= `Etiraf edən şəxs ☠️ : ${ctx.from.first_name}\n\n\n`
	let kanalid = -1001424334391
	var seliqe = `Etdiyi etiraf ✍️ : ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün ☂️ : @MyEtirafBot-a yazın.'
	ctx.telegram.sendMessage(kanalid, `${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi. Yoxlanıldıqdan sonra @MenimEtirafim kanalında paylaşılacaq.')
})



bot.action("Gizli☠️ ", ctx => {
	let eden = ctx.from.first_name 
	let aciqetiraf= `Etiraf edən şəxs ☠️ : Anonim\n\n\n`
	let kanalid = -1001424334391
	var seliqe = `Etdiyi etiraf ✍️ : ${metn}\n\n\n`
	var sonda = 'Etiraf etmək üçün ☂️ : @MyEtirafBot-a yazın.'
	ctx.telegram.sendMessage(kanalid, `${eden}\n\n\n${aciqetiraf+seliqe+sonda}`)
	ctx.reply('Etirafınız göndərildi. Yoxlanıldıqdan sonra @MenimEtirafim kanalında paylaşılacaq.')
})





console.log('Aktif Oldu')

bot.launch()
