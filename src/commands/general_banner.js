import { ContextMenuCommandBuilder, ApplicationCommandType } from "discord.js";

export default {
    data: new ContextMenuCommandBuilder().setName("User Banner").setType(ApplicationCommandType.User),
    run: async (client, interaction) => {
        let user = client.users.fetch(interaction.targetId, { force: true });
        user.then(async function (res) {
            var imgURL = res.bannerURL({ size: 4096, dynamic: true });
            if (imgURL == null) {
                await interaction.reply({
                    content: ">>> This user doesn't have a banner.",
                    ephemeral: true,
                });
            } else {
                await interaction.reply({
                    content: `>>> ${imgURL}`,
                    ephemeral: true,
                });
            }
        });
    },
};