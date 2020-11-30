const  Discord = require("discord.js")

const client = new Discord.Client

const Bot__name = "Jarvis"
const prefix = "Hey Jarvis "
function getRandomValue(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


client.on("ready", () => {
    console.log("Bot connected")
    client.user.setActivity("🌺 Visual Studio Code", {type: "PLAYING"}).catch(console.error)
});

client.on("guildMemberAdd", (member) => {
    console.log("Un membre nous a rejoint")
    console.log(member)
    let random = getRandomValue(2)
    let myEmbedAdd1 = new Discord.MessageEmbed()
    .setDescription("<@" + member.id + "> a rejoins l'Aventure !\nNous sommes désormais " + member.guild.memberCount + " 😍")
    .setImage("https://media1.tenor.com/images/f898731211184dca06f52005d7d0a166/tenor.gif")

    let myEmbedAdd2 = new Discord.MessageEmbed()
    .setDescription("<@" + member.id + "> à embarquer sur le navire LunaSky\nNous sommes désormais " + member.guild.memberCount + " 🥳")
    .setImage("https://media1.tenor.com/images/f898731211184dca06f52005d7d0a166/tenor.gif")
        switch (random) {
            case 0 : 
                member.guild.channels.cache.find(channel => channel.id == /* "769855474870386688" */"769131339093377036").send(myEmbedAdd1)
                break
            case 1 :   
                member.guild.channels.cache.find(channel => channel.id == /* "769855474870386688" */"769131339093377036").send(myEmbedAdd2)
                break
        }
    member.roles.add("769131307568595007")
});

client.on("guildMemberRemove", (member) => {
    console.log("Un membre nous a quitté")
    console.log(member)
    let random = getRandomValue(2)
    let myEmbedRemove1 = new Discord.MessageEmbed()
    .setDescription("<@" + member.id + "> nous a quitté\nNous sommes désormais " + member.guild.memberCount + " 😢")
    .setImage("https://media1.tenor.com/images/7a787426ba16f0023e37cd1931a6c6f2/tenor.gif?itemid=14304356")

    let myEmbedRemove2 = new Discord.MessageEmbed()
    .setDescription("<@" + member.id + "> à décider de faire ses valises\nNous sommes désormais " + member.guild.memberCount + " 😢")
    .setImage("https://media1.tenor.com/images/7a787426ba16f0023e37cd1931a6c6f2/tenor.gif?itemid=14304356")
        switch (random) {
            case 0 : 
                
                member.guild.channels.cache.find(channel => channel.id == /* "769855474870386688" */"769131339093377036").send(myEmbedRemove1)
                break
            case 1 :
                member.guild.channels.cache.find(channel => channel.id == /* "769855474870386688" */"769131339093377036").send(myEmbedRemove2)
                break
        }
});

client.on("message", (message) => {
    if (message.author.bot) return

    if(message.content == "Jarvis send") {
        let myEmbed = new Discord.MessageEmbed()
        .setDescription("XX Nous a quitté")
        .setImage("https://media1.tenor.com/images/7a787426ba16f0023e37cd1931a6c6f2/tenor.gif?itemid=14304356")
        message.channel.send(myEmbed)
    }

    if (message.content == "Salut Jarvis") {
        let random = getRandomValue(2)
        switch (random) {
            case 0 : 
                message.channel.send("Bonjour " + message.author.username)
                break
            case 1 :
                message.channel.send("Bonjour " + message.author.username + ". Comment allez-vous ?")
                break
        }
        
    }  
    if (message.content == prefix + "site") {
        message.channel.send("Le site internet est en cours de développement, voici le lien : https://lunasky-dev.web.app/")
    } 
    if (message.content == prefix + "je suis fier de toi" && message.author.username === "Royjon94") {
        message.channel.send("Merci Monsieur, j'essaie de faire de mon mieux")
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {

        if(message.content.startsWith(prefix + "clear")) {
            message.delete()
            let args = message.content.split(" ")
            let parsedArg = parseInt(args[3])
            console.log(parsedArg)
            if (parsedArg == NaN || parsedArg == undefined || parsedArg == null) {parsedArg = 1}
            else if (parsedArg > 100) message.channel.send("Euhhh je ne peux pas supprimer plus de 100 messages d'un coup 😕 tu as défini " + parsedArg + " messages.")
            else if (parsedArg < 1) message.channel.send("Euhhh va falloir définir un nombre de message a supprimer 🤔 tu as défini " + parsedArg + " messages.")
            else if (parsedArg == NaN) {
                message.channel.send("Erreur de Syntaxe, vérifiez votre syntaxe 😕") 
            }
            else {
                message.channel.bulkDelete(parsedArg).then(() => {
                    console.log(parsedArg + " Message on été supprimer")
                })
            }
        }


        if (message.content.startsWith(prefix + "ban")) {
            
            let mention = message.mentions.members.first()
            if (mention == undefined) {
                message.reply("Error 404 : Joueur non ou mal mentionné.")
            }
            else {
                if (mention.bannable) {
                    mention.ban()
                    message.channel.send(mention.displayName + " à été ban de Lunasky.")
                }
                else {
                    message.reply("Ce membre ne peut être ban.")
                }
            }
            message.delete()
        }

        else if (message.content.startsWith(prefix + "kick")) {
            let mention = message.mentions.members.first()
            if (mention == undefined) {
                message.reply("Error 404 : Joueur non ou mal mentionné.")
            }
            else {
                if (mention.kickable) {
                    mention.kick()
                    message.channel.send(mention.displayName + " à été kick de Lunasky.")
                }
                else {
                    message.reply("Ce membre ne peut être kick.")
                }
            }
            message.delete()
        }

        else if (message.content.startsWith(prefix + "mute")) {
            let mention = message.mentions.members.first()
            if (mention == undefined) {
                message.reply("Error 404 : Joueur non ou mal mentionné.")
            }
            else {
                mention.roles.add("769823858906759178")
                message.channel.send(mention.displayName + " à été mute sur Lunasky.")
            }
            message.delete()
        }

        else if (message.content.startsWith(prefix + "tempmute")) {
            let mention = message.mentions.members.first()
            if (mention == undefined) {
                message.reply("Error 404 : Joueur non ou mal mentionné.")
            }
            else {
                let args = message.content.split(" ")
                if (args[4] == undefined) {
                    message.reply("Veuillez définir une durée pour le Mute !")
                }
                else {
                    mention.roles.add("769823858906759178")
                    message.channel.send(mention.displayName + " à été mute sur Lunasky.")
                    setTimeout(() => {
                        mention.roles.remove("769823858906759178")
                        message.channel.send("<@" + mention.id + "> ton mute est expiré")
                    }, args[4] * 1000 * 60)
                }
            }
            message.delete()
        }

        else if (message.content.startsWith(prefix + "demute")) {
            let mention = message.mentions.members.first()
            if (mention == undefined) {
                message.reply("Joueur non ou mal mentionné.")
            }
            else {
                mention.roles.remove("769823858906759178")
                message.channel.send(mention.displayName + " à été unmute sur Lunasky.")
            }

        }

        else if (message.content.startsWith(prefix + "help")) {
            let embed = new Discord.MessageEmbed()
            .setColor("#99b3ff")
            .setTitle("**Bonjour Bienvenue dans le terminal de Jarvis.exe ⚡**")
            .setAuthor("Royjon94", 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('Description de toutes les commandes\n[lien vers site internet Lunasky](https://lunasky-dev.web.app/)')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addField("\u200B", "**__Indispensable__**", true)
            .addField("➡️  Hey Jarvis ban @pseudo", "Permet de ban un joueur", false)
            .addField("➡️  Hey Jarvis kick @pseudo", "Permet de kick un joueur du server", false)
            .addField("➡️  Hey Jarvis mute @pseudo", "Permet de mute un joueur sur le server", false)
            .addField("➡️  Hey Jarvis tempmute @pseudo <delai>", "Permet de mute temporairement un joueur sur le server", false)
            .addField("\u200B", "**__Multimédia__**", true)
            .addField("➡️  Hey Jarvis annonce : <message>", "Permet de faire une annonce dans le channel Annonce", false)
            .addField("➡️  Hey Jarvis staff : <message>", "Permet de faire une annonce dans le channel Annonce pour les membres du Staff", false)
            .addField("➡️  Hey Jarvis site", "Permet d'avoir un lien vers le site web LunaSky", false)
            .addField("\u200B", "**__Events__**", true)
            .addField("➡️  Hey Jarvis bingo <entier> <durée>", "Permet de réaliser un Event",false)
            .addField("\u200B", "**__Text__**", true)
            .addField("➡️  Hey Jarvis clear <entier> ⚠️ ne pas mettre de chaine de caractère ⚠️", "Permet de supprimer un certain nombre de messages", false)
            .addField("\u200B", "\u200B", true)
            .setTimestamp()
            .setFooter(message.author.username + " a fait appel à Javis.exe")
    
             message.channel.send(embed)
        }
        
        else if (message.content.startsWith(prefix + "annonce")) {
            let args = message.content.split(":")
            message.guild.channels.cache.find(channel => channel.id == "769131343803711488").send("@everyone\n"  + args[1])
            message.channel.send("Message envoyer avec succès !")
        }

        else if (message.content.startsWith(prefix + "say") && message.author.username === "Royjon94") {
            message.delete()
            let args = message.content.split(":")
            console.log(args)
            message.guild.channels.cache.find(channel => channel.id == args[1]).send(args[2])
        }

        else if (message.content.startsWith(prefix + "staff")) {
            let args = message.content.split(":")
            message.guild.channels.cache.find(channel => channel.id == "769131356265119794").send("@here\n"  + args[1])
            message.channel.send("Message envoyer avec succès !")
        }

        else if (message.content.startsWith(prefix + "bingo")) {
            let bingo = true
            let args = message.content.split(" ")
            let valeur__2 = args[args.length - 1] // valeur 2 --> Temps
            let valeur__1 = args[args.length - 2] // valeur 1
            message.reply("Le Bingo vien de commencer Bonne chance a vous 🍀")
            let x = getRandomValue(parseInt(valeur__1))
            console.log(x)
            setTimeout(() => {
                if (bingo == true) {
                    message.channel.send("Malheureusement le Temps est écoulé personne n'as gagné 😕, la réponse était " + x)
                    bingo = false
                }
            }, valeur__2 * 1000)
            client.on("message", (message) => {
                if (message.author.bot) return
                if (message.content == x && bingo == true) {
                    message.channel.send("Nous avons un gagnant <@" + message.author.id + "> 🥳")
                    bingo = false
                    setTimeout(() => {
                        message.channel.send("Le bingo est terminé veuillez attendre pour une nouvelle session")
                    }, 2000)
                }
            })

        }

    }
    

});

client.login("Nzc0MjU5NDY5NjE3NzI1NDUx.X6VLUg.9rtlY8-xaDM35vvvOXxNfMTalLU")