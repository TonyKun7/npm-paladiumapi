const axios = require('axios');
const { eventsUpcoming } = require('paladiumapi');
const base_url = 'https://api.paladium.games/v1/'

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
        try {
            const response = await axios.get(base_url + 'status');
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
    },
    getPlayer: async (username) => {
        try {
            const response = await axios.get(base_url + 'paladium/player/profile/' + username);
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
    },
    getPlayerByUUID: async (uuid) => {
        try {
            const response = await axios.get(base_url + 'paladium/player/profile/' + uuid);
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
    },
    getPlayerClicker: async (uuid) => {
        try {
            const response = await axios.get(base_url + 'paladium/player/profile/' + uuid + '/clicker');
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
    },
    getPlayerGames: async (uuid) => {
        try {
            const response = await axios.get(base_url + 'paladium/player/profile/' + uuid + '/games');
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
    },
    factionLeaderboard: async () => {
        try {
            const response = await axios.get(base_url + 'paladium/faction/leaderboard');
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
    },
    factionQuest: async () => {
        try {
            const response = await axios.get(base_url + 'paladium/faction/quest');
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
    },
    factionOnYourMarks: async () => {
        try {
            const response = await axios.get(base_url + 'paladium/faction/onyourmarks');
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
    },
    getFactionByName: async (name) => {
        try {
            const response = await axios.get(base_url + 'paladium/faction/profile/' + name);
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
    },
    rankingLeaderboardByIdAndPage: async (id, page) => {
        try {
            const response = await axios.get(base_url + 'paladium/ranking/leaderboard/' + id + '/' + page);
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
    },
    rankingPositionPlayer: async (uuid) => {
        try {
            const response = await axios.get(base_url + 'paladium/ranking/position/' + uuid);
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
    },
    rankingPositionPlayerById: async (uuid, id) => {
        try {
            const response = await axios.get(base_url + 'paladium/ranking/position/' + uuid + '/' + id);
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
    },
    rankingTrixiumPlayerLeaderboard: async () => {
        try {
            const response = await axios.get(base_url + 'paladium/ranking/trixium/player');
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
    },
    rankingTrixiumPlayer: async (uuid) => {
        try {
            const response = await axios.get(base_url + 'paladium/ranking/trixium/player/' + uuid);
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
    },
    rankingTrixiumFactionLeaderboard: async () => {
        try {
            const response = await axios.get(base_url + 'paladium/ranking/trixium/faction');
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
    },
    rankingPositionFaction: async (uuid) => {
        try {
            const response = await axios.get(base_url + 'paladium/ranking/faction/' + uuid);
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
    },
    shopAdminItems: async (offset, limit) => {
        try {
            const response = await axios.get(base_url + 'paladium/shop/admin/items?offset=' + offset + '&limit=' + limit);
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
    },
    shopAdminItemsByName: async (name) => {
        try {
            const response = await axios.get(base_url + 'paladium/shop/admin/items/' + name);
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
    },
    shopMarketCategories: async (offset, limit) => {
        try {
            const response = await axios.get(base_url + 'paladium/shop/market/categories?offset=' + offset + '&limit=' + limit);
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
    },
    shopMarketItems: async (offset, limit) => {
        try {
            const response = await axios.get(base_url + 'paladium/shop/market/items?offset=' + offset + '&limit=' + limit);
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
    },
    shopMarketItemsByName: async (name) => {
        try {
            const response = await axios.get(base_url + 'paladium/shop/market/items/' + name);
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
    },
    shopMarketItemsByNameHistory: async (name, offset, limit) => {
        try {
            const response = await axios.get(base_url + 'paladium/shop/market/items/' + name + '/history?offset=' + offset + '&limit=' + limit);
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
    },
    shopMarketItemsListingByPlayer: async (uuid) => {
        try {
            const response = await axios.get(base_url + 'paladium/shop/market/players/' + uuid + '/items');
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
    },
    achievements: async (offset, limit) => {
        try {
            const response = await axios.get(base_url + 'paladium/achievements?offset=' + offset + '&limit=' + limit);
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
    },
    events: async (offset, limit) => {
        try {
            const response = await axios.get(base_url + 'paladium/events?offset=' + offset + '&limit=' + limit);
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
    },
    eventsUpcoming: async (offset, limit) => {
        try {
            const response = await axios.get(base_url + 'paladium/events/upcoming?offset=' + offset + '&limit=' + limit);
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

}