const Discord = require("discord.js");

const client = new Discord.Client;

const fs = require('fs');


var sss = fs.readFileSync('sss.txt').toString().split("\n");
var rrr = fs.readFileSync('rrr.txt').toString().split("\n");
is = parseInt(fs.readFileSync('save_s.txt'));
ir = parseInt(fs.readFileSync('save_r.txt'));


client.on('ready', () => {

 console.log("sssrrr... est opérationel !");
});

setInterval(() => {
    const date = new Date(); // today
     if (date.getHours() === 21 && date.getMinutes() === 3 && date.getSeconds() === 0) {
         console.log("c'est l'heur !");
         client.channels.cache.get("820235504926326816").send("ssssex");
         
            if(sss[is].startsWith("Docteur"))
                {
                    client.channels.cache.get("826531192919949352").send("**" + sss[is] + "**");
                }
            else{  client.channels.cache.get("826531192919949352").send("**ssss" + sss[is] + "**") }
            is = is + 1;
            varS = "" + is;
            fs.writeFile('save_s.txt', varS, function (err) {
                if (err) throw err;
                console.log('save_s.txt mis à jours');
             });

             client.channels.cache.get("826531252797440031").send("**rrrr" + rrr[ir] + "**");
        ir = ir + 1;
        varR = "" + ir;
        fs.writeFile('save_r.txt', varR, function (err) {
            if (err) throw err;
            console.log('save_r.txt mis à jours');
         });
        

        }
     }, 900); 

client.on("message", message => {
if (message.author.username == "BENJAMIN.D" & message.content == '!')
{
    message.channel.send("@everyone \n" + "Hey tout le monde!! je suis sssrrr... le nouveau bot crée par " + message.author.username + ". Je génére des mots en ssss... et en rrrr... tout les jours à 19h et quand vous me le demadé via les commandes 'sss...' et 'rrr...' dans les salons correspondants.");
   
}

if (message.channel.name == "ssssss")
{
    if(message.content.startsWith("sss") & message.content.endsWith("...") | message.content.startsWith("Sss") & message.content.endsWith("...")){
        if(sss[is].startsWith("Docteur"))
            {
                message.channel.send("**" + sss[is] + "**");
            }
        else{ message.channel.send("**ssss" + sss[is] + "**") }
        is = is + 1;
        varS = "" + is;
        fs.writeFile('save_s.txt', varS, function (err) {
            if (err) throw err;
            console.log('save_s.txt mis à jours');
         });
    }
}

if (message.channel.name == "rrrrrr")
{
    if(message.content.startsWith("rrr") & message.content.endsWith("...") | message.content.startsWith("Rrr") & message.content.endsWith("...")){
        message.channel.send("**rrrr" + rrr[ir] + "**");
        ir = ir + 1;
        varR = "" + ir;
        fs.writeFile('save_r.txt', varR, function (err) {
            if (err) throw err;
            console.log('save_r.txt mis à jours');
         });
    }
}

});

client.login(process.env.TOKEN);