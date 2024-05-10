const axios = require('axios');
const base_url = 'https://api.paladium.games/v1'

module.exports = {
    checkPlayerUsername: async (username) => {
        try {
            const response = await axios.get('https://api.mojang.com/users/profiles/minecraft/' + username)

            const uuid = response.data.id;
            const formattedUUID = uuid.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');

            return {
                status: response.status,
                data: {
                    id: formattedUUID,
                    name: response.data.name
                }
            }
        } catch (error) {
            return {
                status: error.response.status,
                data: error.response.data
            }
        }
    },
    status: async () => {
        const url = `${base_url}/status`
        return makeRequest(url)
    },
    getPlayer: async (username) => {
        const url = `${base_url}/paladium/player/profile/${username}`
        return makeRequest(url)
    },
    getPlayerByUUID: async (uuid) => {
        const url = `${base_url}/paladium/player/profile/${uuid}`
        return makeRequest(url)
    },
    getPlayerClicker: async (uuid) => {
        const url = `${base_url}/paladium/player/profile/${uuid}/clicker`
        return makeRequest(url)
    },
    getPlayerGames: async (uuid) => {
        const url = `${base_url}/paladium/player/profile/${uuid}/games`
        return makeRequest(url)
    },
    factionLeaderboard: async () => {
        const url = `${base_url}/paladium/faction/leaderboard`
        return makeRequest(url)
    },
    factionQuest: async () => {
        const url = `${base_url}/paladium/faction/quest`
        return makeRequest(url)
    },
    factionOnYourMarks: async () => {
        const url = `${base_url}/paladium/faction/onyourmarks`
        return makeRequest(url)
    },
    getFactionByName: async (name) => {
        const url = `${base_url}/paladium/faction/profile/${name}`
        return makeRequest(url)
    },
    rankingLeaderboardByIdAndPage: async (id, page) => {
        const url = `${base_url}/paladium/ranking/leaderboard/${id}/${page}`
        return makeRequest(url)
    },
    rankingPositionPlayer: async (uuid) => {
        const url = `${base_url}/paladium/ranking/position/${uuid}`
        return makeRequest(url)
    },
    rankingPositionPlayerById: async (uuid, id) => {
        const url = `${base_url}/paladium/ranking/position/${uuid}/${id}`
        return makeRequest(url)
    },
    rankingTrixiumPlayerLeaderboard: async () => {
        const url = `${base_url}/paladium/ranking/trixium/player`
        return makeRequest(url)
    },
    rankingTrixiumPlayer: async (uuid) => {
        const url = `${base_url}/paladium/ranking/trixium/player/${uuid}`
        return makeRequest(url)
    },
    rankingTrixiumFactionLeaderboard: async () => {
        const url = `${base_url}/paladium/ranking/trixium/faction`
        return makeRequest(url)
    },
    shopAdminItems: async (offset, limit) => {
        const url = `${base_url}/paladium/shop/admin/items?offset=${offset}&limit=${limit}`
        return makeRequest(url)
    },
    shopAdminItemsByName: async (name) => {
        const url = `${base_url}/paladium/shop/admin/items/${name}`
        return makeRequest(url)
    },
    shopMarketCategories: async (offset, limit) => {
        const url = `${base_url}/paladium/shop/market/categories?offset=${offset}&limit=${limit}`
        return makeRequest(url)
    },
    shopMarketItems: async (offset, limit) => {
        const url = `${base_url}/paladium/shop/market/items?offset=${offset}&limit=${limit}`
        return makeRequest(url)
    },
    shopMarketItemsByName: async (name) => {
        const url = `${base_url}/paladium/shop/market/items/${name}`
        return makeRequest(url)
    },
    shopMarketItemsByNameHistory: async (name, offset, limit) => {
        const url = `${base_url}/paladium/shop/market/items/${name}/history?offset=${offset}&limit=${limit}`
        return makeRequest(url)
    },
    shopMarketItemsListingByPlayer: async (uuid) => {
        const url = `${base_url}/paladium/shop/market/players/${uuid}/items`
        return makeRequest(url)
    },
    achievements: async (offset, limit) => {
        const url = `${base_url}/paladium/achievements?offset=${offset}&limit=${limit}`
        return makeRequest(url)
    },
    events: async (offset, limit) => {
        const url = `${base_url}/paladium/events?offset=${offset}&limit=${limit}`
        return makeRequest(url)
    },
    eventsUpcoming: async (offset, limit) => {
        const url = `${base_url}/paladium/events/upcoming?offset=${offset}&limit=${limit}`
        return makeRequest(url)
    },
    getPlayerAchievements: async (uuid, offset, limit) => {
        const url = `${base_url}/paladium/player/profile/${uuid}/achievements?offset=${offset}&limit=${limit}`
        return makeRequest(url)
    }

}

// La fonction ici n'est pas eexportée (donc pas nécessaire de faire ses defs typescript)
const makeRequest = async (url) => {
    try {
        const response = await axios.get(url);
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        return {
            status: error.response.status,
            data: error.response.data
        }
    }
}
