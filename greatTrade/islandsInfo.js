const ISLAND_NAMES = {
    GREAT_DESSERT: "大砂漠",
    MANY_GODS_ISLANDS: "八百万の島",
    DRAGBERG: "ドラグベルク",
    FIRE_DRAGON_DANGEON: "火竜のダンジョン",
    DRAGON_MOUNTAIN: "ドラゴンの山",
    MONSTER_FOREST: "魔物の森",
    ELF_FOREST: "エルフの森",
    OASIS_CITY: "オアシスシティ",
    OLD_CAPITAL_RUIN: "旧都遺跡",
    SAND_CASTLE_SACTUARY: "砂の城の聖域",
    ICE_CONTINENTAL: "氷海大陸",
    ALWAYS_WINTER_ICE_FIELD: "常冬の氷原",
    DRAGON_NEST: "龍の巣",
    NORTH_SNOWY_MOUNTAIN: "北の雪山",
    DARK_FOREST: "暗黒の森",
    GRAVEYARD: "墓地",
    UNDERGROUND_CASTLE: "地下城",
    UNDERGROUND_VOLCANO: "地下火山",
    CHERRY_BLOSSOM_ISLAND: "桜花の島",
    WHIRLPOOL_ISLANDS: "渦潮列島",
    OGRE_ISLAND: "鬼ヶ島",
    CORAL_AREA: "珊瑚エリア",
    SHIPWRECK_AREA: "沈没船エリア",
    STORM_AREA: "大嵐エリア",
    SILENT_SEA: "静寂の海"
}

export const TRADE_GOOD_NAMES = {
    SHELL: "こだま貝",
    SPIDER_WEB: "蜘蛛の糸",
    CHERRY: "桜",
    CACTUS: "熱砂のサボテン",
    SPROUT: "冬の木の新芽",
    WIND_CHIME: "風の風鈴",
    CRAB_CLAW: "船蟹のハサミ",
    BONE: "スケルトンの骨",
    FEATHER: "ピヨピヨ鳥の両面羽",
    PRISM: "守護プリズム第一型",
    AMBER: "クジラの琥珀",
    FANG: "オオキバオロチの毒牙",
    ORB: "河童の宝玉",
    SCALE: "アイスドラゴンのウロコ",
    FRUIT: "砂ワニの実",
    TENTACLE: "クラーケンの触手",
    CUP: "鬼の杯",
    HELLFIRE: "地獄の火種",
    HORN: "王者の角",
    BANDAGE: "封魔包帯"
}

export class Island {
    name;
    speciality;
    shortage;
    nextIslands;
    constructor(name, speciality, shortage) {
        this.name = name;
        this.speciality = speciality;
        this.shortage = shortage;
    }
}

export const islands = [
    new Island(ISLAND_NAMES.DRAGBERG, TRADE_GOOD_NAMES.CHERRY),
    new Island(ISLAND_NAMES.FIRE_DRAGON_DANGEON, TRADE_GOOD_NAMES.SPROUT),
    new Island(ISLAND_NAMES.DRAGON_MOUNTAIN, TRADE_GOOD_NAMES.CACTUS),
    new Island(ISLAND_NAMES.MONSTER_FOREST, TRADE_GOOD_NAMES.SPIDER_WEB),
    new Island(ISLAND_NAMES.ELF_FOREST, TRADE_GOOD_NAMES.SHELL),
    new Island(ISLAND_NAMES.OASIS_CITY, TRADE_GOOD_NAMES.CACTUS),
    new Island(ISLAND_NAMES.OLD_CAPITAL_RUIN, TRADE_GOOD_NAMES.PRISM),
    new Island(ISLAND_NAMES.GREAT_DESSERT, TRADE_GOOD_NAMES.FRUIT),
    new Island(ISLAND_NAMES.SAND_CASTLE_SACTUARY, TRADE_GOOD_NAMES.BANDAGE),
    new Island(ISLAND_NAMES.ICE_CONTINENTAL, TRADE_GOOD_NAMES.SPROUT),
    new Island(ISLAND_NAMES.ALWAYS_WINTER_ICE_FIELD, TRADE_GOOD_NAMES.FEATHER),
    new Island(ISLAND_NAMES.DRAGON_NEST, TRADE_GOOD_NAMES.SCALE),
    new Island(ISLAND_NAMES.NORTH_SNOWY_MOUNTAIN, TRADE_GOOD_NAMES.HORN),
    new Island(ISLAND_NAMES.DARK_FOREST, TRADE_GOOD_NAMES.SPIDER_WEB),
    new Island(ISLAND_NAMES.GRAVEYARD, TRADE_GOOD_NAMES.BONE),
    new Island(ISLAND_NAMES.UNDERGROUND_CASTLE, TRADE_GOOD_NAMES.FANG),
    new Island(ISLAND_NAMES.UNDERGROUND_VOLCANO, TRADE_GOOD_NAMES.HELLFIRE),
    new Island(ISLAND_NAMES.CHERRY_BLOSSOM_ISLAND, TRADE_GOOD_NAMES.CHERRY),
    new Island(ISLAND_NAMES.MANY_GODS_ISLANDS, TRADE_GOOD_NAMES.WIND_CHIME),
    new Island(ISLAND_NAMES.WHIRLPOOL_ISLANDS, TRADE_GOOD_NAMES.ORB),
    new Island(ISLAND_NAMES.OGRE_ISLAND, TRADE_GOOD_NAMES.CUP),
    new Island(ISLAND_NAMES.CORAL_AREA, TRADE_GOOD_NAMES.SHELL),
    new Island(ISLAND_NAMES.SHIPWRECK_AREA, TRADE_GOOD_NAMES.CRAB_CLAW),
    new Island(ISLAND_NAMES.STORM_AREA, TRADE_GOOD_NAMES.AMBER),
    new Island(ISLAND_NAMES.SILENT_SEA, TRADE_GOOD_NAMES.TENTACLE)
]