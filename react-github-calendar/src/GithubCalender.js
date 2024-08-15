import React from 'react'
import GitHubCalendar from 'react-github-calendar';

export default function GithubCalender() {
    return (
        <div>
            <GitHubCalendar
                username="mohan7401647399"
                blockSize={15}
                blockMargin={2}
                color="#7030a0"
                fontSize={16}
            />
        </div>
    )
}



// import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { Tooltip } from "react-tooltip";
// import GitHubCalendar from "react-github-calendar";
// import "./styles.css";

// export default function App() {
//     const colorTheme = {
//         level4: "#2f3ea2",
//         level3: "#2f4ea2",
//         level2: "#2f5da2",
//         level1: "#2f6ca2",
//         level0: "#2f8ba2"
//     };

//     return (
//         <div className="container">
//             <ChakraProvider>
//                 <GitHubCalendar
//                     username="mohan7401647399"
//                     blockSize={20}
//                     fontSize={24}
//                     showWeekdayLabels
//                     theme={colorTheme}
//                 >
//                     <Tooltip delayShow={1} />
//                 </GitHubCalendar>
//             </ChakraProvider>
//         </div>
//     );
// }