import { TabListProps } from "../components/tabList";

export const CompendiumTabList = [
    {value:"quest",name:"Quest"},
    {value:"weapon",name:"Weapon"},
    {value:"ability",name:"Ability"},
    {value:"armour",name:"Armour"},
    {value:"ring",name:"Ring"},
];

const QuestTabList: TabListProps = {
    tabNames: [
        {value:"scout",name:"Scout"},
        {value:"beginner",name:"Beginner"},
        {value:"standard",name:"Standard"},
        {value:"mighty",name:"Mighty"},
        {value:"epic",name:"Epic"},
        {value:"potion",name:"Potion"},
    ]
}

const WeaponCategoryList: TabListProps = {
    tabNames: [
        {value:"main",name:"Standard"},
        {value:"alt",name:"Alternate"},
    ]
}

const MainWeaponTabList: TabListProps = {
    tabNames: [
        {value:"dagger",name:"Dagger"},
        {value:"bow",name:"Bow"},
        {value:"staff",name:"Staff"},
        {value:"wand",name:"Wand"},
        {value:"sword",name:"Sword"},
        {value:"katana",name:"Katana"},
    ]
}

const AltWeaponTabList: TabListProps = {
    tabNames: [
        {value:"dualBlade",name:"Dual Blade"},
        {value:"longBow",name:"Long Bow"},
        {value:"spellBlade",name:"Spellblade"},
        {value:"morningStar",name:"Morning Star"},
        {value:"flail",name:"Flail"},
        {value:"tachi",name:"Tachi"},
    ]
}

const ArmourTabList: TabListProps = {
    tabNames: [
        {value:"leather",name:"Leather Armour"},
        {value:"robe",name:"Robe"},
        {value:"heavy",name:"Heavy Armour"},
    ]
}

const ArmourClassTabList: TabListProps = {
    tabNames: [
        {value:"leather",name:"Leather Classes"},
        {value:"robe",name:"Robe Classes"},
        {value:"heavy",name:"Heavy Classes"},
    ]
}

const LeatherClassTabList: TabListProps = {
    tabNames: [
        {value:"cloak",name:"Cloak"},
        {value:"quiver",name:"Quiver"},
        {value:"poison",name:"Poison"},
        {value:"trap",name:"Trap"},
        {value:"prism",name:"Prism"},
        {value:"star",name:"Star"},
        {value:"sigil",name:"Sigil"},
    ]
}

const RobeClassTabList: TabListProps = {
    tabNames: [
        {value:"spell",name:"Spell"},
        {value:"tome",name:"Tome"},
        {value:"skull",name:"Skull"},
        {value:"orb",name:"Orb"},
        {value:"scepter",name:"Scepter"},
        {value:"lute",name:"Lute"},
        {value:"mace",name:"Mace"},
    ]
}

const HeavyClassTabList: TabListProps = {
    tabNames: [
        {value:"helm",name:"Helm"},
        {value:"shield",name:"Shield"},
        {value:"seal",name:"Seal"},
        {value:"wakizashi",name:"Wakizashi"},
        {value:"sheath",name:"Sheath"},
    ]
}

export const MenuTabsData = {
    Quests: QuestTabList, 
    WeaponCategory: WeaponCategoryList, 
    MainWeapons: MainWeaponTabList, 
    AltWeapons: AltWeaponTabList, 
    Armours: ArmourTabList, 
    ArmourClasses: ArmourClassTabList, 
    LeatherAbilities: LeatherClassTabList, 
    RobeAbilities: RobeClassTabList, 
    HeavyAbilities: HeavyClassTabList,
}