module.exports = async (client) => {
    const guild = client.guilds.cache.get('498266318676426764');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('862699600418570280');
        channel.setName(`👪 | Membres: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}
