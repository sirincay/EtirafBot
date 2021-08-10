const { Telegraf } = require('telegraf')

const bot = new Telegraf('1925679701:AAErqvG0NeLMWAJa1QhNnExI6fBmDcE2EmA')


bot.start((ctx) => ctx.reply(`Salam ${ctx.from.username}. mənə gizli və ya açıq etraf edirsən məndə onu öz kanalımda paylaşıram. Etirafını yazdıqdan sonra Gizli və ya Açıq paylaşacağım barədə soruşacam. Buyur etirafını et 🤎`))



bot.command("admin", ctx => {
	if(ctx.from.id===1799203251){
		ctx.reply("Giriş uğurludur.")
	}else{
		ctx.reply("Giriş uğursuzdur.")
	
	}
	
let metn;

bot.on("text", ctx => {
  let kanalid = -1001580366831
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

	
	bot.command('ad', async (ctx, next) => {
    await ctx.telegram.sendMessage(ctx.chat.id, `<b>${ctx.from.first_name}</b>`, { parse_mode: 'HTML' })
    return next();
});

	
// Botun adını alan kod
bot.telegram.getMe().then(botInfo => {
    bot.options.username = botInfo.username
    console.log(`Bot Başlatıldı! => ${bot.options.username}`)
})

// Kodlarda bir səhv varsa, bunun sayəsində işləməyə davam edər.
bot.catch((err) => {
    console.log('Error: ', err)
})
	

bot.launch()
