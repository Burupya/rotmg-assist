import { QuestItemProps } from "../components/questItem"

//Dictionary
const marks: Record<string, string> = {
    Stheno: "/marks/SthenoMark.png",
    Gulpord: "/marks/GulpordMark.png",
    Malphas: "/marks/MalphasMark.png",
    Limon: "/marks/LimonMark.png",
    Septavius: "/marks/SeptaviusMark.png",
    PuppetMaster: "/marks/PuppetMasterMark.png",
    Fountain: "/marks/FountainMark.png",
    Archivist: "/marks/ArchivistMark.png",

    Dreadstump: "/marks/DreadstumpMark.png",
    MamaMegamoth: "/marks/MamaMegamothMark.png",
    Arachna: "/marks/ArachnaMark.png",
    Mixcoatl: "/marks/MixcoatlMark.png",
    QueenBee: "/marks/QueenBeeMark.png",

    Titan: "/marks/TitanMark.png",
    Skuld: "/marks/SkuldMark.png",
    Ruthven: "/marks/RuthvenMark.png",
    Terrible: "/marks/TerribleMark.png",

    Effigy: "/marks/EffigyMark.png",
    Heart: "/marks/HeartMark.png",
    Megamoth: "/marks/MegamothMark.png",
    Bilgewater: "/marks/BilgewaterMark.png",
    SonArachna: "/marks/SonArachnaMark.png",
    Bradley: "/marks/BradleyMark.png",
    Thessal: "/marks/ThessalMark.png",
    Parasite: "/marks/ParasiteMark.png",
    Davy: "/marks/DavyMark.png",
    Wyvern: "/marks/WyvernMark.png",
    Daichi: "/marks/DaichiMark.png",
    Esben: "/marks/EsbenMark.png",
    Geb: "/marks/GebMark.png",
    Tesseract: "/marks/TesseractMark.png",
    Oryx: "/marks/OryxMark.png",
    Janus: "/marks/JanusMark.png",

    KillerBee: "/marks/KillerBeeMark.png",
    King: "/marks/KingMark.png",
    Colossus: "/marks/ColossusMark.png",
    Cultist: "/marks/CultistMark.png",
    VoidEntity: "/marks/VoidEntityMark.png",
    Crystal: "/marks/CrystalMark.png",
    Kogbold: "/marks/KogboldMark.png",
    Moonlight: "/marks/MoonlightMark.png",
    AdvKogbold: "/marks/AdvKogboldMark.png",
    PlaguedKillerBee: "/marks/PlaguedKillerBeeMark.png",
    Murcian: "/marks/MurcianMark.png",
}

const pots: Record<string, string> = {
    Spd: "/potions/speedPotion.png",
    Def: "/potions/defensePotion.png",
    Vit: "/potions/vitalityPotion.png",
    Dex: "/potions/dexterityPotion.png",
    Wis: "/potions/wisdomPotion.png",
    Atk: "/potions/attackPotion.png",
    Mana: "/potions/manaPotion.png",
    Life: "/potions/lifePotion.png",

    gSpd: "/potions/greaterSpeedPotion.png",
    gDef: "/potions/greaterDefensePotion.png",
    gVit: "/potions/greaterVitalityPotion.png",
    gDex: "/potions/greaterDexterityPotion.png",
    gWis: "/potions/greaterWisdomPotion.png",
    gAtk: "/potions/greaterAttackPotion.png",
    gMana: "/potions/greaterManaPotion.png",
    gLife: "/potions/greaterLifePotion.png",
}

const rewards: Record<string, string> = {
    beginnerChest: "/misc/BeginnerChest.png",
    standardChest: "/misc/StandardChest.png",
    mightyChest: "/misc/MightyChest.png",

    honeyChest: "/misc/HoneyEpicChest.png",
    royalChest: "/misc/RoyalEpicChest.png",
    marbleChest: "/misc/MarbleEpicChest.png",
    cultistChest: "/misc/CultistEpicChest.png",
    voidChest: "/misc/VoidEpicChest.png",
    crystalChest: "/misc/CrystalEpicChest.png",
    steamChest: "/misc/SteamEpicChest.png",
    moonlightChest: "/misc/MoonlightEpicChest.png",
    spectralChest: "/misc/SpectralEpicChest.png",

    cubicJelly: "/misc/CubicJelly.png",
    speedSprout: "/misc/SpeedSprout.png",

    treasureMap: "/misc/TreasureMap.png",
    luckyClover: "/misc/LuckyClover.png",

    lootDropPotion: "/misc/LootDropPotion.png",
    lootTierPotion: "/misc/LootTierPotion.png",
}

//Scout Quests
const ScoutPit: QuestItemProps = {
name: "Scout the Pit",
requirements: [{amount: 1, src:marks.Stheno}],
rewards: [{amount: 2, src:pots.Spd}],
}

const ScoutSewers: QuestItemProps = {
name: "Scout the Sewers",
requirements: [{amount: 1, src:marks.Gulpord}],
rewards: [{amount: 2, src:pots.Def}],
}

const ScoutAbyss: QuestItemProps = {
name: "Scout the Abyss",
requirements: [{amount: 1, src:marks.Malphas}],
rewards: [{amount: 2, src:pots.Vit}],
}

const ScoutSprites: QuestItemProps = {
name: "Scout the Sprites",
requirements: [{amount: 1, src:marks.Limon}],
rewards: [{amount: 2, src:pots.Dex}],
}

const ScoutLair: QuestItemProps = {
name: "Scout the Lair",
requirements: [{amount: 1, src:marks.Septavius}],
rewards: [{amount: 2, src:pots.Wis}],
}

const ScoutTheatre: QuestItemProps = {
name: "Scout the Theatre",
requirements: [{amount: 1, src:marks.PuppetMaster}],
rewards: [{amount: 2, src:pots.Atk}],
}

const ScoutWoods: QuestItemProps = {
name: "Scout the Woods",
requirements: [{amount: 1, src:marks.Fountain}],
rewards: [{amount: 1, src:pots.Spd},{amount: 1, src:pots.Dex}],
}

const ScoutLibrary: QuestItemProps = {
name: "Scout the Library",
requirements: [{amount: 1, src:marks.Archivist}],
rewards: [{amount: 1, src:pots.Vit},{amount: 1, src:pots.Wis}],
}
export const ScoutQuests: QuestItemProps[] = [ScoutPit, ScoutSewers, ScoutAbyss, ScoutSprites, ScoutLair, ScoutTheatre, ScoutWoods, ScoutLibrary]

//Beginner Quests
const BeginnerPirateCave: QuestItemProps = {
name: "The Pirate King",
requirements: [{amount: 4, src:marks.Dreadstump}],
rewards: [{amount: 1, src:rewards.beginnerChest}],
}

const BeginnerForestMaze: QuestItemProps = {
name: "The Mama",
requirements: [{amount: 4, src:marks.MamaMegamoth}],
rewards: [{amount: 1, src:rewards.beginnerChest}],
}

const BeginnerSpiderDen: QuestItemProps = {
name: "The Spider Queen",
requirements: [{amount: 4, src:marks.Arachna}],
rewards: [{amount: 1, src:rewards.beginnerChest}],
}

const BeginnerForbiddenJungle: QuestItemProps = {
name: "The Masked God",
requirements: [{amount: 4, src:marks.Mixcoatl}],
rewards: [{amount: 1, src:rewards.beginnerChest}],
}

const BeginnerHive: QuestItemProps = {
name: "The Queen Bee",
requirements: [{amount: 4, src:marks.QueenBee}],
rewards: [{amount: 1, src:rewards.beginnerChest}],
}

const BeginnerTable: QuestItemProps = {
name: "Run the Table",
requirements: [
    {amount: 1, src:marks.Dreadstump},
    {amount: 1, src:marks.MamaMegamoth},
    {amount: 1, src:marks.Arachna},
    {amount: 1, src:marks.Mixcoatl},
    {amount: 1, src:marks.QueenBee},
],
rewards: [
    {amount: 1, src:rewards.beginnerChest},
    {amount: 1, src:rewards.treasureMap},
],
}
export const BeginnerQuests: QuestItemProps[] = [BeginnerPirateCave, BeginnerForestMaze, BeginnerSpiderDen, BeginnerForbiddenJungle, BeginnerHive, BeginnerTable]

//Standard Quests
const StandardSnakeQueen: QuestItemProps = {
    name: "The Snake Queen",
    requirements: [{amount: 8, src:marks.Stheno},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardSprite: QuestItemProps = {
    name: "The Sprite Goddess",
    requirements: [{amount: 8, src:marks.Limon},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardTitan: QuestItemProps = {
    name: "The Titan",
    requirements: [{amount: 6, src:marks.Titan},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardGhost: QuestItemProps = {
    name: "The Ghost God",
    requirements: [{amount: 8, src:marks.Septavius},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardArchdemon: QuestItemProps = {
    name: "The Archdemon",
    requirements: [{amount: 8, src:marks.Malphas},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardSlime: QuestItemProps = {
    name: "The Slime God",
    requirements: [{amount: 6, src:marks.Gulpord},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardPuppet: QuestItemProps = {
    name: "The Puppet Master",
    requirements: [{amount: 6, src:marks.PuppetMaster},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardFountain: QuestItemProps = {
    name: "The Fountain Spirit",
    requirements: [{amount: 5, src:marks.Fountain},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardArchivist: QuestItemProps = {
    name: "The Archivist",
    requirements: [{amount: 5, src:marks.Archivist},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardSkuld: QuestItemProps = {
    name: "The Apparition",
    requirements: [{amount: 3, src:marks.Skuld},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardVampire: QuestItemProps = {
    name: "The Vampire Lord",
    requirements: [{amount: 4, src:marks.Ruthven},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardScientist: QuestItemProps = {
    name: "The Mad Scientist",
    requirements: [{amount: 4, src:marks.Terrible},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardMountains: QuestItemProps = {
    name: "To the Mountains!",
    requirements: [
        {amount: 1, src:marks.Septavius},
        {amount: 1, src:marks.Limon},
        {amount: 1, src:marks.Gulpord},
        {amount: 1, src:marks.Malphas},
        {amount: 1, src:marks.Terrible},
        {amount: 1, src:marks.PuppetMaster},
        {amount: 1, src:marks.Skuld},
    ],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardUndead: QuestItemProps = {
    name: "Smite the Undead!",
    requirements: [{amount: 2, src:marks.Septavius},{amount: 2, src:marks.Skuld},{amount: 2, src:marks.Ruthven},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardAboveBelow: QuestItemProps = {
    name: "As Above, So Below",
    requirements: [{amount: 3, src:marks.Limon},{amount: 3, src:marks.Gulpord},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardBlessingCurse: QuestItemProps = {
    name: "Blessings and Curses",
    requirements: [{amount: 3, src:marks.Fountain},{amount: 2, src:marks.Archivist},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardDemonHunter: QuestItemProps = {
    name: "Demonhunter",
    requirements: [{amount: 3, src:marks.Malphas},{amount: 2, src:marks.Daichi},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardSpirit: QuestItemProps = {
    name: "That’s the Spirit",
    requirements: [
        {amount: 1, src:marks.Limon},
        {amount: 1, src:marks.Septavius},
        {amount: 1, src:marks.Fountain},
        {amount: 1, src:marks.Skuld},
    ],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardRainbow: QuestItemProps = {
    name: "Rainbow Road",
    requirements: [
        {amount: 1, src:marks.Septavius},
        {amount: 1, src:marks.Limon},
        {amount: 1, src:marks.Gulpord},
        {amount: 1, src:marks.Malphas},
    ],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardWisdom: QuestItemProps = {
    name: "The Cost of Wisdom",
    requirements: [{amount: 2, src:marks.Terrible},{amount: 2, src:marks.Archivist},],
    rewards: [{amount: 1, src:rewards.standardChest}]
}

const StandardDimensional: QuestItemProps = {
    name: "Dimensional Foes",
    requirements: [{amount: 4, src:marks.Limon},{amount: 2, src:marks.Tesseract},],
    rewards: [{amount: 1, src:rewards.standardChest},{amount: 1, src:rewards.cubicJelly}]
}
export const StandardQuests: QuestItemProps[] = [StandardSnakeQueen, StandardSprite, StandardTitan, StandardGhost, StandardArchdemon, StandardSlime, StandardPuppet, StandardFountain, StandardArchivist, StandardSkuld, StandardVampire, StandardScientist, StandardMountains, StandardUndead, StandardAboveBelow, StandardBlessingCurse, StandardDemonHunter, StandardSpirit, StandardRainbow, StandardWisdom, StandardDimensional]

//Mighty Quests
const MightyEffigy: QuestItemProps = {
    name: "The Effigy",
    requirements: [{amount: 1, src:marks.Effigy},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyArboreal: QuestItemProps = {
    name: "Arboreal Adventurer",
    requirements: [{amount: 2, src:marks.Heart},{amount: 1, src:marks.Fountain},{amount: 2, src:marks.Megamoth},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyDocks: QuestItemProps = {
    name: "The New King",
    requirements: [{amount: 4, src:marks.Bilgewater},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyMegamoth: QuestItemProps = {
    name: "The Megamoth",
    requirements: [{amount: 4, src:marks.Megamoth},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightySonArachna: QuestItemProps = {
    name: "The Prodigal Son",
    requirements: [{amount: 4, src:marks.SonArachna},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyHeart: QuestItemProps = {
    name: "The Cursed Heart",
    requirements: [{amount: 4, src:marks.Heart},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyPub: QuestItemProps = {
    name: "Pub Crawl",
    requirements: [{amount: 4, src:marks.Bradley},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyMermaid: QuestItemProps = {
    name: "The Mermaid Goddess",
    requirements: [{amount: 4, src:marks.Thessal},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyParasite: QuestItemProps = {
    name: "The Nightmare",
    requirements: [{amount: 4, src:marks.Parasite},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyDavy: QuestItemProps = {
    name: "The Ghost Pirate",
    requirements: [{amount: 4, src:marks.Davy},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyWyvern: QuestItemProps = {
    name: "The Elemental Wyvern",
    requirements: [{amount: 4, src:marks.Wyvern},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyFallen: QuestItemProps = {
    name: "The Fallen",
    requirements: [{amount: 4, src:marks.Daichi},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyEsben: QuestItemProps = {
    name: "The Unwilling",
    requirements: [{amount: 4, src:marks.Esben},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyGeb: QuestItemProps = {
    name: "The Ancients",
    requirements: [{amount: 4, src:marks.Geb},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyTesseract: QuestItemProps = {
    name: "The Goddess",
    requirements: [{amount: 4, src:marks.Tesseract},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyOryx: QuestItemProps = {
    name: "The Mad God",
    requirements: [{amount: 4, src:marks.Oryx},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyJanus: QuestItemProps = {
    name: "The Doorwarden",
    requirements: [{amount: 4, src:marks.Janus},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyCastle: QuestItemProps = {
    name: "Double Trouble",
    requirements: [{amount: 3, src:marks.Oryx},{amount: 3, src:marks.Janus},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyShowdown: QuestItemProps = {
    name: "Epic Showdown",
    requirements: [{amount: 2, src:marks.Bilgewater},{amount: 2, src:marks.SonArachna},{amount: 2, src:marks.Megamoth},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyBugs: QuestItemProps = {
    name: "Exterminate!",
    requirements: [{amount: 2, src:marks.SonArachna},{amount: 2, src:marks.Megamoth},{amount: 1, src:marks.KillerBee},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyUnsettling: QuestItemProps = {
    name: "Unsettling Foes",
    requirements: [{amount: 2, src:marks.Parasite},{amount: 1, src:marks.Esben},{amount: 1, src:marks.Davy},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyForgotten: QuestItemProps = {
    name: "Long Forgotten",
    requirements: [{amount: 2, src:marks.Esben},{amount: 2, src:marks.Geb},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyPirate: QuestItemProps = {
    name: "Thar be Pirates!",
    requirements: [{amount: 2, src:marks.Bilgewater},{amount: 2, src:marks.Davy},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyAncient: QuestItemProps = {
    name: "Lost and Found",
    requirements: [
        {amount: 1, src:marks.Parasite},
        {amount: 1, src:marks.Wyvern},
        {amount: 1, src:marks.Davy},
        {amount: 1, src:marks.Geb},
    ],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}

const MightyOcean: QuestItemProps = {
    name: "Ocean Man",
    requirements: [{amount: 2, src:marks.Thessal},{amount: 1, src:marks.Davy},{amount: 1, src:marks.Bilgewater},],
    rewards: [{amount: 1, src:rewards.mightyChest}]
}
export const MightyQuests: QuestItemProps[] = [MightyEffigy, MightyArboreal, MightyDocks, MightyMegamoth, MightySonArachna, MightyHeart, MightyPub, MightyMermaid, MightyParasite, MightyDavy, MightyWyvern, MightyFallen, MightyEsben, MightyTesseract, MightyOryx, MightyJanus, MightyCastle, MightyShowdown, MightyBugs, MightyUnsettling, MightyForgotten, MightyPirate, MightyAncient, MightyOcean]

//Epic Quests
const EpicKillerQueen: QuestItemProps = {
    name: "The Killer Queen",
    requirements: [{amount: 3, src:marks.KillerBee},],
    rewards: [{amount: 1, src:rewards.honeyChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicKing: QuestItemProps = {
    name: "The King",
    requirements: [{amount: 3, src:marks.King},],
    rewards: [{amount: 1, src:rewards.royalChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicColossus: QuestItemProps = {
    name: "The Colossus",
    requirements: [{amount: 3, src:marks.Colossus},],
    rewards: [{amount: 1, src:rewards.marbleChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicCultist: QuestItemProps = {
    name: "The Cultist",
    requirements: [{amount: 3, src:marks.Cultist},],
    rewards: [{amount: 1, src:rewards.cultistChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicEnd: QuestItemProps = {
    name: "The End",
    requirements: [{amount: 3, src:marks.VoidEntity},],
    rewards: [{amount: 1, src:rewards.voidChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicCrystal: QuestItemProps = {
    name: "The Crystal",
    requirements: [{amount: 3, src:marks.Crystal},],
    rewards: [{amount: 1, src:rewards.crystalChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicHavoc: QuestItemProps = {
    name: "Havoc in the Halls",
    requirements: [{amount: 2, src:marks.Colossus},{amount: 2, src:marks.Cultist},],
    rewards: [{amount: 1, src:rewards.voidChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicKogbold: QuestItemProps = {
    name: "Kogboldian Treasure",
    requirements: [{amount: 3, src:marks.Kogbold},],
    rewards: [{amount: 1, src:rewards.steamChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicMoonlight: QuestItemProps = {
    name: "Moonlight Festival",
    requirements: [{amount: 3, src:marks.Moonlight},],
    rewards: [{amount: 1, src:rewards.moonlightChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicAdvKogbold: QuestItemProps = {
    name: "Advanced Kogbold Steamworks",
    requirements: [{amount: 3, src:marks.AdvKogbold},],
    rewards: [{amount: 2, src:rewards.steamChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicPlaguedNest: QuestItemProps = {
    name: "Plagued Nest",
    requirements: [{amount: 3, src:marks.PlaguedKillerBee},],
    rewards: [{amount: 2, src:rewards.honeyChest},{amount: 1, src:rewards.luckyClover},]
}

const EpicWarden: QuestItemProps = {
    name: "The Warden",
    requirements: [{amount: 3, src:marks.Murcian},],
    rewards: [{amount: 1, src:rewards.spectralChest},{amount: 1, src:rewards.luckyClover},]
}
export const EpicQuests: QuestItemProps[] = [EpicKillerQueen, EpicKing, EpicColossus, EpicCultist, EpicEnd, EpicCrystal, EpicHavoc, EpicKogbold, EpicMoonlight, EpicAdvKogbold, EpicPlaguedNest, EpicWarden,]

//Potion Fusion Quests
const PotionAttackQuest: QuestItemProps = {
    name: "Potion Fusion: Att",
    requirements: [{amount: 3, src:pots.Atk},],
    rewards: [{amount: 1, src:pots.gAtk}]
}

const PotionDefenseQuest: QuestItemProps = {
    name: "Potion Fusion: Def",
    requirements: [{amount: 3, src:pots.Def},],
    rewards: [{amount: 1, src:pots.gDef}]
}

const PotionSpeedQuest: QuestItemProps = {
    name: "Potion Fusion: Spd",
    requirements: [{amount: 3, src:pots.Spd},],
    rewards: [{amount: 1, src:pots.gSpd}]
}

const PotionDexterityQuest: QuestItemProps = {
    name: "Potion Fusion: Dex",
    requirements: [{amount: 3, src:pots.Dex},],
    rewards: [{amount: 1, src:pots.gDex}]
}

const PotionVitalityQuest: QuestItemProps = {
    name: "Potion Fusion: Vit",
    requirements: [{amount: 3, src:pots.Vit},],
    rewards: [{amount: 1, src:pots.gVit}]
}

const PotionWisdomQuest: QuestItemProps = {
    name: "Potion Fusion: Wis",
    requirements: [{amount: 3, src:pots.Wis},],
    rewards: [{amount: 1, src:pots.gWis}]
}

const PotionLifeQuest: QuestItemProps = {
    name: "Potion Fusion: Life",
    requirements: [{amount: 3, src:pots.Life},],
    rewards: [{amount: 1, src:pots.gLife}]
}

const PotionManaQuest: QuestItemProps = {
    name: "Potion Fusion: Mana",
    requirements: [{amount: 3, src:pots.Mana},],
    rewards: [{amount: 1, src:pots.gMana}]
}

export const PotionQuests: QuestItemProps[] = [PotionAttackQuest, PotionDefenseQuest, PotionSpeedQuest, PotionDexterityQuest, PotionVitalityQuest, PotionWisdomQuest, PotionLifeQuest, PotionManaQuest]