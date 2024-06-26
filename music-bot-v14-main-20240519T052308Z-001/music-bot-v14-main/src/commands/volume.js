
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("volume")
    .setDescription("🎵 | Müzik sesini ayarlayın!")
    .addStringOption(option => option.setName("number").setDescription("1-100").setRequired(true)),
    run: async (client, interaction, track) => {
      await interaction.deferReply()
      const string = interaction.options.getString("number")
      const volume = parseInt(string)
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
  const queue = client.distube.getQueue(interaction);
     if (!queue) return interaction.followUp(`Listede henüz şarkı yok.`)
     if (isNaN(volume)) return interaction.followUp("Bana sayı ver!")
     if (volume < 1) return interaction.followUp("Sayı 1'den az olmamalıdır.")
     if (volume > 100) return interaction.followUp("Sayı 100'ü geçmemelidir.")
     client.distube.setVolume(interaction, volume);
     interaction.followUp("Müziğin ses seviyesi başarıyla **ayarlandı"+volume+"**")
       }
      
 }
}
