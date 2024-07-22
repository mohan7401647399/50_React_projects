// import React from 'react';

// const Home = () => {
//   return (
//     <main>
//       <h1>Home</h1>
//     </main>
//   );
// }

// export default Home;

// import React from 'react';
// import Feeds from './Feeds';

// const Home = ({ posts }) => {
//     return (
//         <main className="Home">
//             {posts.length ? (<Feeds posts={posts}/>) : (<p style={{ marginTop: "2rem" }}>No posts to display.</p>)}
//         </main>
//     )
// }

// export default Home


//              Custom Hooks

import React, { useContext } from 'react';
import Feeds from './Feeds';
import DataContext from './Context/DataContext';

const Home = () => {
    const {searchResults, fetchError, isLoading} = useContext(DataContext);

    return (
        <main className="Home">
            {isLoading && <p>Loading Posts.....</p>}
            {!isLoading && fetchError && <p className='statusMsg' style={{color: 'red'}}>{fetchError}</p> }
            { !isLoading && !fetchError && (searchResults.length ? (<Feeds posts={searchResults}/>) : (<p style={{ marginTop: "2rem" }}>No posts to display.</p>))}
        </main>
    )
}

export default Home