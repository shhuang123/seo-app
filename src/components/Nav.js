import React from 'react';

class Nav extends React.Component {
 render() {
   return (
     <div className="nav-container">
       <div className="nav-logo">SEO Tools</div>
       <div className="nav-button">
          + Google Search Console Analysis
        </div>
        <div className="nav-button">
           + Metadata
         </div>
     </div>
   );
 }
}

export default Nav;
