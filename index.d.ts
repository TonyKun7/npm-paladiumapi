declare module 'paladiumapi' {
    export function checkPlayerUsername(username: string): Promise<{ status: number; data: { id: string; name: string } }>;
    export function status(): Promise<{
        status: number;
        data: {
            java: {
                global: {
                    status: string;
                    players: number;
                };
                factions: {
                    Soleratl: string;
                    Muzdan: string;
                    Manashino: string;
                    Event: string;
                    Luccento: string;
                    Imbali: string;
                    Keltis: string;
                    Neolith: string;
                    Untaa: string;
                };
            };
            launcher: {
                status: string;
            };
        };
    }>;
    export function getPlayer(username: string): Promise<{
        status: number;
        data: {
            faction: string;
            firstJoin: number;
            friends: { name: string }[];
            jobs: {
                alchemist: { level: number; xp: number };
                farmer: { level: number; xp: number };
                hunter: { level: number; xp: number };
                miner: { level: number; xp: number };
            };
            money: number;
            timePlayed: number;
            username: string;
            rank: string;
            uuid: string;
        };
    }>;
    export function getPlayerByUUID(uuid: string): Promise<{
        status: number;
        data: {
            faction: string;
            firstJoin: number;
            friends: { name: string }[];
            jobs: {
                alchemist: { level: number; xp: number };
                farmer: { level: number; xp: number };
                hunter: { level: number; xp: number };
                miner: { level: number; xp: number };
            };
            money: number;
            timePlayed: number;
            username: string;
            rank: string;
            uuid: string;
        };
    }>;
    export function getPlayerClicker(uuid: string): Promise<{
        status: number;
        data: {
            uuid: string;
            buildings: {
                name: string;
                production: number;
                quantity: number;
            }[];
            upgrades: string[];
        };
    }>;
    export function getPlayerGames(uuid: string): Promise<{
        status: number;
        data: {
            uuid: string;
            coins: number;
            xp: number;
            gameXp: {
                bedwars: number;
                paintwars: number;
            };
        };
    }>;
    export function factionLeaderboard(): Promise<{
        status: number;
        data: {
            diff: number;
            elo: number;
            emblem: {
                backgroundColor: number;
                backgroundId: number;
                borderColor: number;
                foregroundColor: number;
                foregroundId: number;
                iconBorderColor: number;
                iconColor: number;
                iconId: number;
            };
            name: string;
            position: number;
            trend: string;
        }[][];
    }>;
    export function factionQuest(): Promise<{
        status: number;
        data: {
            item: string;
            quantity: number;
            start: number;
            end: number;
            earningXp: number;
            earningMoney: number;
        };
    }>;
    export function factionOnYourMarks(): Promise<{
        status: number;
        data: {
            goalType: string;
            extra: string;
            amount: number;
            rewardElo: number;
            serverType: string;
            start: number;
            end: number;
            state: string;
        };
    }>;
    export function getFactionByName(name: string): Promise<{
        status: number;
        data: {
            access: string;
            createdAt: number;
            description: string;
            emblem: {
                backgroundColor: number;
                backgroundId: number;
                borderColor: number;
                foregroundColor: number;
                foregroundId: number;
                iconBorderColor: number;
                iconColor: number;
                iconId: number;
            };
            level: {
                level: number;
                xp: number;
            };
            name: string;
            players: {
                group: string;
                joinedAt: number;
                username: string;
                uuid: string;
            }[];
            uuid: string;
        };
    }>;
    export function rankingLeaderboardByIdAndPage(id: string, page: number): Promise<{
        status: number;
        data: {
            factionName: string;
            position: number;
            username: string;
            uuid: string;
            value: number;
        }[];
    }>;
    export function rankingPositionPlayer(uuid: string): Promise<{
        status: number;
        data: {
            'job-hunter': number;
            'job-farmer': number;
            'job-miner': number;
            'job-alchemist': number;
            boss: number;
            money: number;
            end: number;
            koth: number;
            chorus: number;
            egghunt: number;
            clicker: number;
        };
    }>;
    export function rankingPositionPlayerById(uuid: string, id: string): Promise<{
        status: number;
        data: {
            leaderboard: string;
            position: number;
            ranked: boolean;
            uuid: string;
        };
    }>;
    export function rankingTrixiumPlayerLeaderboard(): Promise<{
        status: number;
        data: {
            data: {
                position: number;
                username: string;
                uuid: string;
                value: number;
            }[];
            totalCount: number;
        };
    }>;
    export function rankingTrixiumPlayer(uuid: string): Promise<{
        status: number;
        data: {
            position: number;
            username: string;
            uuid: string;
            value: number;
        };
    }>;
    export function rankingTrixiumFactionLeaderboard(): Promise<{
        status: number;
        data: {
            data: {
                position: number;
                uuid: string;
                value: number;
            }[];
            totalCount: number;
        }
    }>;
    export function rankingPositionFaction(uuid: string): Promise<{
        status: number;
        data: {
            position: number;
            uuid: string;
            value: number;
        };
    }>;
    export function shopAdminItems(offset: number, limit: number): Promise<{
        status: number;
        data: {
            totalCount: number;
            data: {
                buyPrice: number;
                canSell: boolean;
                name: string;
                sellPrice: number;
                canBuy: boolean;
                category: string;
            }[];
        };
    }>;
    export function shopAdminItemsByName(name: string): Promise<{
        status: number;
        data: {
            buyPrice: number;
            canSell: boolean;
            name: string;
            sellPrice: number;
            canBuy: boolean;
            category: string;
        };
    }>;
    export function shopMarketCategories(offset: number, limit: number): Promise<{
        status: number;
        data: {
            totalCount: number;
            data: string[];
        };
    }>;
    export function shopMarketItems(offset: number, limit: number): Promise<{
        status: number;
        data: {
            totalCount: number;
            data: {
                quantitySoldTotal: number;
                quantityAvailable: number;
                priceAverage: number;
                name: string;
                priceSum: number;
                countListing: number;
            }[];
        };
    }>;
    export function shopMarketItemsByName(name: string): Promise<{
        status: number;
        data: {
            quantitySoldTotal: number;
            quantityAvailable: number;
            priceAverage: number;
            name: string;
            priceSum: number;
            countListing: number;
        };
    }>;
    export function shopMarketItemsByNameHistory(name: string, offset: number, limit: number): Promise<{
        status: number;
        data: {
            totalCount: number;
            data: {
                date: string;
                name: string;
                price: number;
                pricePb: number;
                quantity: number;
                sells: number;
                sellsPb: number;
            }[];
        };
    }>;
    export function shopMarketItemsListingByPlayer(uuid: string): Promise<{
        status: number;
        data: {
            totalCount: number;
            data: {
                type: string;
                category: string;
                createdAt: number;
                expireAt: number;
                durability: number;
                item: {
                    name: string;
                    quantity: number;
                    meta: number;
                };
                price: number;
                pricePb: number;
                renamed: boolean;
                skin: number;
                slot: number;
            }[];
        };
    }>;
    export function achievements(offset: number, limit: number): Promise<{
        status: number;
        data: {
            totalCount: number;
            data: {
                amount: number;
                category: string;
                description: string;
                icon: string;
                id: string;
                name: string;
            }[];
        };
    }>;
    export function events(offset: number, limit: number): Promise<{
        status: number;
        data: {
            totalCount: number;
            data: {
                name: string;
                description: string;
                urlWiki: string;
                urlImage: string;
                colorBackground: string;
                color: string;
            }[];
        };
    }>;
    export function eventsUpcoming(offset: number, limit: number): Promise<{
        status: number;
        data: {
            totalCount: number;
            data: {
                name: string;
                server : string[];
                start: number;
                end: number;
            }[];
        };
    }>;
}