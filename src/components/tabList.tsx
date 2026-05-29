import * as Tabs from "@radix-ui/react-tabs";

interface TabName {
    value: string;
    name: string;
}

export type TabListProps = {
    tabNames: TabName[];
};

export default function TabList(props: TabListProps){
    return (
        <Tabs.List aria-label="compendium tabs" className="flex w-full border-b-4 border-black space-x-1">
            {props.tabNames.map((tab, index) => (
            <Tabs.Trigger 
            key={index} 
            value={tab.value}
            className={"p-2 w-full bg-gray-700 data-[state=active]:bg-gray-500 data-[state=active]:ring-1 hover:bg-gray-500 transition-colors duration-200 font-comfortaa font-semibold text-m"}>
            {tab.name}
            </Tabs.Trigger>
            ))}
        </Tabs.List>
    );
};