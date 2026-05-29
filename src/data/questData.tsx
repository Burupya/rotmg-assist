import { QuestItemProps } from "../components/questItem"

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

const StandardSnakeQueen: QuestItemProps = {
    name: "The Snake Queen",
    requirements: [
        {amount: 8, src:marks.Stheno},
    ],
    rewards: [
        {amount: 1, src:rewards.standardChest}
    ]
}