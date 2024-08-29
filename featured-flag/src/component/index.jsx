import React, { useContext } from "react";
import GithubProfileFinder from "./githubComponent/GithubProfileFinder";
import AutoCompleteSearchAPI from "./searchComponent/AutoCompleteSearchAPI";
import TicTacToe from "./tictactoeComponent/TicTacToe";
import { FeatureFlagsContext } from "./context";

const FeaturedFlag = () => {
  const { loading, enabledFlag } = useContext(FeatureFlagsContext);

  const componentFlag = [
    {
      key: "showGitHubProfileFinder",
      component: <GithubProfileFinder />,
    },
    {
      key: "showSearchAutoCompleteApi",
      component: <AutoCompleteSearchAPI />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlag[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Featured Flag</h1>
      {componentFlag.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeaturedFlag;
