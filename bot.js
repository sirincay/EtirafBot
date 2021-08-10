const { Telegraf } = require('telegraf')

const bot = new Telegraf('1925679701:AAGiMYFVD027JCRyIhzqGjZLyu8wario2C0')


bot.start(ctx => {
    ctx.telegram.sendMessage(
        ctx.chat.id,
        `${String.fromCodePoint(0x1F48E)} "Random Quote" botuna xoş gəldin.\n\n${String.fromCodePoint(0x2753)} Botu necə işlətməli olduğunu öyrənmək üçün /help yaz.`,
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Saytımız", url: "https://lucifer25x.ml"}, {text: "Github", url: "https://github.com/Lucifer25x"}],
                    [{ text: "Kanalımız", url: "https://t.me/lucifer25x1"}]
                ]
            }
        }
    )
});




bot.command("admin", ctx => {
	if(ctx.from.id===1816126399){
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





console.log('Aktif')

bot.launch()
