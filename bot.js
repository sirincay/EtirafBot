const { Telegraf } = require('telegraf')

const bot = new Telegraf('1925679701:AAGiMYFVD027JCRyIhzqGjZLyu8wario2C0')


bot.start(async (ctx) => {
    await ctx.replyWithMarkdown(getGreetMessage(ctx.update.message.chat.id < 0),{
        reply_markup:{
            inline_keyboard:[
                [{text:'Botu Grupa Ekle ✅', url:'https://t.me/TeslaGameBot?startgroup=true'}],
                [{text:'Resmi Kanalımız 📣', url:'t.me/TeslaResmi'},{text:'Bot Geliştirici 👨🏼‍💼', callback_data:'button2'}],
                [{text:'VİP Gruplar💎', callback_data:'button1'}]
            ]
        }
    })
})


bot.action('start', ctx=>{
    ctx.deleteMessage()
    ctx.replyWithMarkdown(`*Merhaba,Ben TeslaGameBot Tahmin Oyunu Zamanınızı eğlenceli hale getirimek için\nTelegram oyun botuyum🤖\n**Temel komutların listesi için /yardim*
        `,{
        reply_markup:{
            inline_keyboard:[
                [{text:'Botu Grupa Ekle ✅', url:'https://t.me/TeslaGameBot?startgroup=true'}],
                [{text:'Resmi Kanalımız 📣', url:'t.me/TeslaResmi'},{text:'Bot Geliştirici 👨🏼‍💼', callback_data:'button2'}],
                [{text:'VİP Gruplar 💎', callback_data:'button1'}]
            ]
        }
    })
})


bot.action('button2', ctx=>{
    ctx.deleteMessage()
    ctx.replyWithMarkdown(`*Geliştiriciler 👨🏼‍💻*`,{
        reply_markup:{
            inline_keyboard:[
                [{text:'𝙷𝚄̈𝚂𝙽𝚄̈ 𝙴𝙷𝙴𝙳𝙾𝚅🇦🇿 ⁪⁬⁮⁮⁮', url:'t.me/husnuehedov'}],
                [{text:'Erkut🇹🇷',url:'t.me/erkutorenk'}],
                [{text:'◀️ Geri', callback_data:'start'}]
            ]
        }
    })
})

bot.action('button1', ctx=>{
    ctx.deleteMessage()
    ctx.replyWithMarkdown(`*🌍 Ülkeler*`,{
        reply_markup:{
            inline_keyboard:[
                [{text:'🇦🇿 Azərbaycan', callback_data:'AZ'}],
                [{text:'🇹🇷 Türkiye', callback_data:'TR'}],
                [{text:'🔙 Geri', callback_data:'start'}]
            ]
        }
    })
})

// AZƏRBAYCAN GRUP DÜYMƏLƏRİ
bot.action('AZ', ctx=>{
    ctx.deleteMessage()
    ctx.replyWithMarkdown(`*🇦🇿 VİP Gruplar 🏆*`,{
        reply_markup:{
            inline_keyboard:[
                [{text:'1) Lʏᴜᴋꜱ Söʜʙəᴛ/OYUN 🇦🇿', url:'t.me/sohbet_lyuks'}],
                [{text:'2) 𝐀𝐊𝐌 ~ 𝐒ö𝐡𝐛ə𝐭 𝐐𝐫𝐮𝐩𝐮 🎲', url:'t.me/sohbet_akm'}],
                [{text:'🔙 Geri', callback_data:'button1'}]
            ]
        }
    })
})

// TÜRK GRUP DÜYMƏLƏRİ
bot.action('TR', ctx=>{
    ctx.deleteMessage()
    ctx.replyWithMarkdown(`
*🇹🇷 VİP Gruplar 🏆*
        `,{
        reply_markup:{
            inline_keyboard:[
                [{text:'𝑺𝒐𝒉𝒃𝒆𝒕 𝑶𝒏𝒍𝒊𝒏𝒆🇹🇷', url:'t.me/sohbet10line'}],
                [{text:'♔ ƓΛИƓSƬƐŔ ♔', url:'t.me/GNSagain'}],
                [{text:'🔙 Geri', callback_data:'button1'}]
            ]
        }
    })
})



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
