"use client"

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

//COMPONENTS
import SegmentHeader from "../components/segmentHeader";
import TabList from "../components/tabList";
import QuestItem, {QuestItemProps} from "../components/questItem";

//DATA INJECTION
import * as QuestData from "../data/questData";
import { CompendiumTabList } from "../data/menuTabsData";
import { MenuTabsData } from "../data/menuTabsData";

export default function Home() {

  const BeginnerHive1: QuestItemProps = {
  name: "Quest",
  requirements: [{amount: 5, src:"/marks/QueenBeeMark.png"}],
  rewards: [{amount: 1, src:"/misc/beginnerChest.png"}],
  }

  const BeginnerHive2: QuestItemProps = {
  name: "The Queen Bee",
  requirements: [{amount: 8, src:"/marks/QueenBeeMark.png"}],
  rewards: [{amount: 1, src:"/misc/beginnerChest.png"}],
  }

  const EmptyQuest: QuestItemProps = {
  name: "Empty",
  requirements: [{amount: 0, src:""}],
  rewards: [{amount: 0, src:""}],
  }

  /*
  interface ActiveQuestList {
    activeQuests: [QuestItemProps, QuestItemProps]
  }*/

  const [activeQuestList, setActiveQuestList] = useState<QuestItemProps[]>([BeginnerHive1, BeginnerHive2]);

  const handleQuestClick = () => {
    setActiveQuestList((prevList) =>
        prevList.map((isDimmed, i) => (i === 0 ? isDimmed=EmptyQuest : isDimmed))
    )
  }

  const handleCompendiumClick = (props: QuestItemProps) => {
    setActiveQuestList((prevList) =>
        prevList.map((isDimmed, i) => (i === 0 ? isDimmed=props : isDimmed))
    )
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-row items-center justify-between p-8 space-x-4 bg-white dark:bg-black sm:items-stretch">
        <div className="flex flex-1 max-w-1/3 flex-col items-center bg-white dark:bg-gray-800 rounded-xl">

          <SegmentHeader {...{name: "Compendium"}} />

          {/*COMPENDIUM TABS*/}
          <Tabs.Root defaultValue="quest" orientation="vertical" 
            className="flex flex-1 flex-col w-full h-full bg-gray-900 border-black">
		        <Tabs.List aria-label="compendium tabs" className="flex w-full border-b-4 border-black space-x-1">
              {CompendiumTabList.map((tab, index) => (
                <Tabs.Trigger 
                  key={index} 
                  value={tab.value}
                  className={"p-4 w-full bg-gray-600 data-[state=active]:bg-gray-500 data-[state=active]:ring-1 hover:bg-gray-500 transition-colors duration-200 font-comfortaa font-semibold text-m"}>
                  {tab.name}
                </Tabs.Trigger>
              ))}
		        </Tabs.List>

            {/*QUEST TABS*/}
            <Tabs.Content value="quest" className="h-full bg-gray-800">
              <Tabs.Root defaultValue="scout" orientation="vertical" className="bg-gray-900">
                <TabList {...MenuTabsData.Quests} />

                <Tabs.Content value="scout" className="flex flex-1 h-full flex-col items-center justify-between p-3 space-y-2 bg-gray-800">
                  {QuestData.ScoutQuests.map((quest, index) => (<QuestItem key={index} {...quest}/>))}
                </Tabs.Content>

                <Tabs.Content value="beginner" className="flex flex-1 h-full flex-col items-center justify-between p-3 space-y-2 bg-gray-800">
                  {QuestData.BeginnerQuests.map((quest, index) => (<QuestItem key={index} {...quest} onNotifyParent={handleCompendiumClick}/>))}
                </Tabs.Content>

              </Tabs.Root>
            </Tabs.Content>

            {/*WEAPON TABS*/}
            <Tabs.Content 
              value="weapon"
              className="h-full bg-gray-800">
              <Tabs.Root defaultValue="main" orientation="vertical" className="bg-gray-900">
                <TabList {...MenuTabsData.WeaponCategory} />
                
                <Tabs.Content
                  value="main">
                  <Tabs.Root defaultValue="dagger" orientation="vertical" className="bg-gray-900">
                    <TabList {...MenuTabsData.MainWeapons} />
                    
                    <Tabs.Content
                      value="dagger">
                    </Tabs.Content>
                  </Tabs.Root>
                </Tabs.Content>

                <Tabs.Content
                  value="alt">
                  <Tabs.Root defaultValue="dualBlade" orientation="vertical" className="bg-gray-900">
                    <TabList {...MenuTabsData.AltWeapons} />
                    
                    <Tabs.Content
                      value="dualBlade">
                    </Tabs.Content>
                  </Tabs.Root>
                </Tabs.Content>
              </Tabs.Root>
            </Tabs.Content>

            {/*ABILITY TABS*/}
            <Tabs.Content value="ability" className="h-full bg-gray-800">
              <Tabs.Root defaultValue="leather" orientation="vertical" className="bg-gray-900">
                <TabList {...MenuTabsData.ArmourClasses} />
                
                <Tabs.Content value="leather" className="h-full bg-gray-800">
                    <Tabs.Root defaultValue="cloak" orientation="vertical" className="bg-gray-900">
                      <TabList {...MenuTabsData.LeatherAbilities} />
                    </Tabs.Root>
                </Tabs.Content>

                <Tabs.Content value="robe" className="h-full bg-gray-800">
                    <Tabs.Root defaultValue="cloak" orientation="vertical" className="bg-gray-900">
                      <TabList {...MenuTabsData.RobeAbilities} />
                    </Tabs.Root>
                </Tabs.Content>

                <Tabs.Content value="heavy" className="h-full bg-gray-800">
                    <Tabs.Root defaultValue="cloak" orientation="vertical" className="bg-gray-900">
                      <TabList {...MenuTabsData.HeavyAbilities} />
                    </Tabs.Root>
                </Tabs.Content>

              </Tabs.Root>
            </Tabs.Content>

            {/*ARMOUR TABS*/}
            <Tabs.Content value="armour" className="h-full bg-gray-800">
              <Tabs.Root defaultValue="leather" orientation="vertical" className="bg-gray-900">
                <TabList {...MenuTabsData.Armours} />
              </Tabs.Root>
            </Tabs.Content>

            {/*RING TAB*/}
            <Tabs.Content value="ring" className="h-full bg-gray-800">

            </Tabs.Content>

	        </Tabs.Root>

        </div>
        <div className="flex flex-1 flex-col items-center justify-between bg-white space-y-4 dark:bg-black">
          <div className="flex flex-1 w-full flex-row items-center justify-between bg-white space-x-4 dark:bg-black">
            <div className="flex flex-1 h-full flex-col items-center justify-between bg-white dark:bg-gray-800 rounded-xl">

              <SegmentHeader {...{name: "Questbook"}} />
              <div className="flex flex-1 min-w-97/100 max-h-1/8 flex-row items-center justify-center p-2 bg-gray-900 m-4 rounded-xl ring-4 ring-black">
                {activeQuestList[0].name !== "Empty" ? (
                  <QuestItem {...activeQuestList[0]} onNotifyParent={handleQuestClick}/>
                ) : (
                  <p className="font-comfortaa font-semibold text-xl text-gray-500">Beginner Quest Slot</p>
                )}
              </div>

            </div>
            <div className="flex flex-1 h-full max-w-1/4 flex-col items-center justify-between bg-white dark:bg-gray-800 rounded-xl">
              
              <SegmentHeader {...{name: "Wishlist"}} />

            </div>
          </div>
          <div className="flex flex-1 w-full max-h-1/3 flex-col items-center justify-between bg-white dark:bg-gray-800 rounded-xl">
            
            <SegmentHeader {...{name: "Focus"}} />

          </div>
        </div>
      </main>
    </div>
  );
}