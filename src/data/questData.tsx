import { QuestItemProps } from "../components/questItem"

const ScoutPit: QuestItemProps = {
name: "Scout the Pit",
requirements: [{amount: 1, src:"/marks/SthenoMark.png"}],
rewards: [{amount: 2, src:"/potions/speedPotion.png"}],
}

const ScoutSewers: QuestItemProps = {
name: "Scout the Sewers",
requirements: [{amount: 1, src:"/marks/GulpordMark.png"}],
rewards: [{amount: 2, src:"/potions/defensePotion.png"}],
}

const ScoutAbyss: QuestItemProps = {
name: "Scout the Abyss",
requirements: [{amount: 1, src:"/marks/MalphasMark.png"}],
rewards: [{amount: 2, src:"/potions/vitalityPotion.png"}],
}

const ScoutSprites: QuestItemProps = {
name: "Scout the Sprites",
requirements: [{amount: 1, src:"/marks/LimonMark.png"}],
rewards: [{amount: 2, src:"/potions/dexterityPotion.png"}],
}

const ScoutLair: QuestItemProps = {
name: "Scout the Lair",
requirements: [{amount: 1, src:"/marks/SeptaviusMark.png"}],
rewards: [{amount: 2, src:"/potions/wisdomPotion.png"}],
}

const ScoutTheatre: QuestItemProps = {
name: "Scout the Theatre",
requirements: [{amount: 1, src:"/marks/PuppetMasterMark.png"}],
rewards: [{amount: 2, src:"/potions/attackPotion.png"}],
}

const ScoutWoods: QuestItemProps = {
name: "Scout the Woods",
requirements: [{amount: 1, src:"/marks/FountainMark.png"}],
rewards: [{amount: 1, src:"/potions/speedPotion.png"},{amount: 1, src:"/potions/dexterityPotion.png"}],
}

const ScoutLibrary: QuestItemProps = {
name: "Scout the Library",
requirements: [{amount: 1, src:"/marks/ArchivistMark.png"}],
rewards: [{amount: 1, src:"/potions/vitalityPotion.png"},{amount: 1, src:"/potions/wisdomPotion.png"}],
}

export const ScoutQuests: QuestItemProps[] = [ScoutPit, ScoutSewers, ScoutAbyss, ScoutSprites, ScoutLair, ScoutTheatre, ScoutWoods, ScoutLibrary]

const BeginnerPirateCave: QuestItemProps = {
name: "The Pirate King",
requirements: [{amount: 4, src:"/marks/DreadstumpMark.png"}],
rewards: [{amount: 1, src:"/misc/beginnerChest.png"}],
}

const BeginnerForestMaze: QuestItemProps = {
name: "The Mama",
requirements: [{amount: 4, src:"/marks/MamaMegamothMark.png"}],
rewards: [{amount: 1, src:"/misc/beginnerChest.png"}],
}

const BeginnerSpiderDen: QuestItemProps = {
name: "The Spider Queen",
requirements: [{amount: 4, src:"/marks/ArachnaMark.png"}],
rewards: [{amount: 1, src:"/misc/beginnerChest.png"}],
}

const BeginnerForbiddenJungle: QuestItemProps = {
name: "The Masked God",
requirements: [{amount: 4, src:"/marks/MixcoatlMark.png"}],
rewards: [{amount: 1, src:"/misc/beginnerChest.png"}],
}

const BeginnerHive: QuestItemProps = {
name: "The Queen Bee",
requirements: [{amount: 4, src:"/marks/QueenBeeMark.png"}],
rewards: [{amount: 1, src:"/misc/beginnerChest.png"}],
}

const BeginnerTable: QuestItemProps = {
name: "Run the Table",
requirements: [
    {amount: 1, src:"/marks/DreadstumpMark.png"},
    {amount: 1, src:"/marks/MamaMegamothMark.png"},
    {amount: 1, src:"/marks/ArachnaMark.png"},
    {amount: 1, src:"/marks/MixcoatlMark.png"},
    {amount: 1, src:"/marks/QueenBeeMark.png"},
],
rewards: [
    {amount: 1, src:"/misc/beginnerChest.png"},
    {amount: 1, src:"/misc/treasureMap.png"},
],
}

const BeginnerExample: QuestItemProps = {
name: "Run the Table",
requirements: [
    {amount: 2, src:"/marks/DreadstumpMark.png"},
    {amount: 3, src:"/marks/MamaMegamothMark.png"},
    {amount: 2, src:"/marks/ArachnaMark.png"},
],
rewards: [
    {amount: 1, src:"/misc/beginnerChest.png"},
    {amount: 1, src:"/misc/treasureMap.png"},
],
}

export const BeginnerQuests: QuestItemProps[] = [BeginnerPirateCave, BeginnerForestMaze, BeginnerSpiderDen, BeginnerForbiddenJungle, BeginnerHive, BeginnerTable, BeginnerExample]