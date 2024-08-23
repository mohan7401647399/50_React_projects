import React from "react";
import Tabs from "./Tabs";

function RandomContent() {
  return <h1>Some Random Content</h1>;
}

const TabContent = () => {
  const tabs = [
    {
      label: "Tab-1",
      content: <div>This is tab-1 content</div>,
    },
    {
      label: "Tab-2",
      content: <div>This is tab-2 content</div>,
    },
    {
      label: "Tab-3",
      content: <RandomContent />,
    },
  ];

  function handleChange(currentIndex) {
    console.log(currentIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabContent;
