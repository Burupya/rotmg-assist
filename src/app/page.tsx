"use client"

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";

//COMPONENTS
import SegmentHeader from "../components/segmentHeader";
import TabList from "../components/tabList";
import QuestItem, {QuestItemProps} from "../components/questItem";
import QuestBookSlot from "../components/questBookSlot";

//DATA INJECTION
import * as QuestData from "../data/questData";
import { CompendiumTabList } from "../data/menuTabsData";
import { MenuTabsData } from "../data/menuTabsData";

export default function Home() {
  
  const EmptyQuest: QuestItemProps = {
    name: "Empty",
    requirements: [{amount: 0, src:""}],
    rewards: [{amount: 0, src:""}],
  }

  type Questbook = {
    scoutQuest: QuestItemProps,
    beginnerQuest: QuestItemProps,
    standardQuest1: QuestItemProps,
    standardQuest2: QuestItemProps,
    mightyQuest1: QuestItemProps,
    mightyQuest2: QuestItemProps,
    epicQuest: QuestItemProps,
    potionQuest: QuestItemProps,
  }

  const [questBook, setQuestBook] = useState<Questbook>({
    scoutQuest: EmptyQuest,
    beginnerQuest: EmptyQuest,
    standardQuest1: EmptyQuest,
    standardQuest2: EmptyQuest,
    mightyQuest1: EmptyQuest,
    mightyQuest2: EmptyQuest,
    epicQuest: EmptyQuest,
    potionQuest: EmptyQuest,
  })

  const emptyQuestbook = (slot: string) => {
    setQuestBook((prevQuestbook) => ({
      ...prevQuestbook,
      [slot]: EmptyQuest,
    }))
  }

  const addToQuestbook = <Questkey extends keyof Questbook>(slot: Questkey, quest: QuestItemProps) => {
    if(questBook[slot].name === "Empty"){
      setQuestBook((prevQuestbook) => ({
        ...prevQuestbook,
        [slot]: quest,
      }))
    } else if (slot === "standardQuest1" && questBook.standardQuest1.name === "Empty"){
      setQuestBook((prevQuestbook) => ({
        ...prevQuestbook,
        standardQuest2: quest,
      }))
    } else if (slot === "mightyQuest1" && questBook.mightyQuest2.name === "Empty"){
      setQuestBook((prevQuestbook) => ({
        ...prevQuestbook,
        mightyQuest2: quest,
      }))
    }
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
              <Tabs.Root defaultValue="scout" orientation="vertical" className="bg-gray-900 h-full">
                <TabList {...MenuTabsData.Quests} />

                <Tabs.Content value="scout" className="flex flex-1 h-full flex-col items-center justify-start p-3 space-y-2 bg-gray-800">
                  {QuestData.ScoutQuests.map((quest, index) => (<QuestItem key={index} {...quest} onClickButton={() => addToQuestbook("scoutQuest", quest)}/>))}
                </Tabs.Content>

                <Tabs.Content value="beginner" className="flex flex-1 h-full flex-col items-center justify-start p-3 space-y-2 bg-gray-800">
                  {QuestData.BeginnerQuests.map((quest, index) => (<QuestItem key={index} {...quest} onClickButton={() => addToQuestbook("beginnerQuest", quest)}/>))}
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
            <div className="flex flex-1 h-full flex-col items-center justify-between pb-4 bg-white dark:bg-gray-800 rounded-xl ">

              <SegmentHeader {...{name: "Questbook"}} />


              <QuestBookSlot emptyString="Scout Quest Slot" quest={questBook.scoutQuest} onClickSlot={() => emptyQuestbook("scoutQuest")}/>
              <QuestBookSlot emptyString="Beginner Quest Slot" quest={questBook.beginnerQuest} onClickSlot={() => emptyQuestbook("beginnerQuest")} />
              <QuestBookSlot emptyString="Standard Quest Slot" quest={questBook.standardQuest1} onClickSlot={() => emptyQuestbook("standardQuest1")} />
              <QuestBookSlot emptyString="Standard Quest Slot" quest={questBook.standardQuest2} onClickSlot={() => emptyQuestbook("standardQuest2")} />
              <QuestBookSlot emptyString="Mighty Quest Slot" quest={questBook.mightyQuest1} onClickSlot={() => emptyQuestbook("mightyQuest1")} />
              <QuestBookSlot emptyString="Mighty Quest Slot" quest={questBook.mightyQuest2} onClickSlot={() => emptyQuestbook("mightyQuest2")} />
              <QuestBookSlot emptyString="Epic Quest Slot" quest={questBook.epicQuest} onClickSlot={() => emptyQuestbook("epicQuest")} />
              <QuestBookSlot emptyString="Potion Quest Slot" quest={questBook.potionQuest} onClickSlot={() => emptyQuestbook("potionQuest")} />

              {/*
              <div className="flex flex-1 min-w-97/100 max-h-1/8 flex-row items-center justify-center p-2 bg-gray-900 m-4 rounded-xl ring-4 ring-black">
                {activeQuestList[0].name !== "Empty" ? (
                  <QuestItem {...activeQuestList[0]} onClickButton={emptyQuestbook}/>
                ) : (
                  <p className="font-comfortaa font-semibold text-xl text-gray-500">Beginner Quest Slot</p>
                )}
              </div>
              */}

            </div>
            <div className="flex flex-1 h-full max-w-1/4 flex-col items-center justify-between bg-white dark:bg-gray-800 rounded-xl">
              
              <SegmentHeader {...{name: "Wishlist"}} />

            </div>
          </div>
          <div className="flex flex-1 w-full max-h-2/7 flex-col items-center justify-between bg-white dark:bg-gray-800 rounded-xl">
            
            <SegmentHeader {...{name: "Focus"}} />

          </div>
        </div>
      </main>
    </div>
  );
}