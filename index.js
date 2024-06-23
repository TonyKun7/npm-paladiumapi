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
    shopAdminItems: async (options = null) => {
        const url = `${base_url}/paladium/shop/admin/items`
        return makeRequest(url, options)
    },
    shopAdminItemsByName: async (name) => {
        const url = `${base_url}/paladium/shop/admin/items/${name}`
        return makeRequest(url)
    },
    shopMarketCategories: async (options = null) => {
        const url = `${base_url}/paladium/shop/market/categories`
        return makeRequest(url, options)
    },
    shopMarketItems: async (options = null) => {
        const url = `${base_url}/paladium/shop/market/items`
        return makeRequest(url, options)
    },
    shopMarketItemsByName: async (name) => {
        const url = `${base_url}/paladium/shop/market/items/${name}`
        return makeRequest(url)
    },
    shopMarketItemsByNameHistory: async (name, options = null) => {
        const url = `${base_url}/paladium/shop/market/items/${name}/history`
        return makeRequest(url, options)
    },
    shopMarketItemsListingByPlayer: async (uuid) => {
        const url = `${base_url}/paladium/shop/market/players/${uuid}/items`
        return makeRequest(url)
    },
    achievements: async (options = null) => {
        const url = `${base_url}/paladium/achievements`
        return makeRequest(url, options)
    },
    events: async (options = null) => {
        const url = `${base_url}/paladium/events`
        return makeRequest(url, options)
    },
    eventsUpcoming: async (options = null) => {
        const url = `${base_url}/paladium/events/upcoming`
        return makeRequest(url, options)
    },
    getPlayerAchievements: async (uuid, options = null) => {
        const url = `${base_url}/paladium/player/profile/${uuid}/achievements`
        return makeRequest(url, options)
    }

}

const makeRequest = async (url, opt = null) => {
    try {

        const response = await axios.get(url + (opt ? '?' + new URLSearchParams(opt): ''));
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
