// import React from 'react';

// const Footer = () => {
//     const year = new Date();
//   return (
//     <div>
//       <footer> Copyright &copy; {year.getFullYear()} </footer>
//     </div>
//   );
// }

// export default Footer;



//                Props & Prop Drilling
import React from 'react';

const Footer = ({length}) => {
      return (
    <div>
      <footer> {length} List {length === 1 ? 'List' : 'Lists'} </footer>
    </div>
  );
}

export default Footer;
