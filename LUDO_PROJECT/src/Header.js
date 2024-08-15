// import React from 'react';

// const Header = () => {
//     const headerStyle = {backgroundColor: 'mediumblue', color: 'white'}
//   return (
//     <header style={headerStyle}>
//         <h1>To do list</h1>
//     </header>
//   );
// }

// export default Header;


// import React from 'react';

// const Header = () => {
//   return (
//     <header>
//         <h1>To do list</h1>
//     </header>
//   );
// }

// export default Header;

//          Props & Prop Drilling
import React from 'react';

const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: 'To do List'
}
export default Header;