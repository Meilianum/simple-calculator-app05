// // 

// import React from 'react';

// interface LableProps {
//     children: React.ReactNode; // This allows any React node as children
//     htmlFor: string; // This allows a string for the htmlFor attribute
// }

// const Lable: React.FC<LableProps> = ({ children, htmlFor }) => {
//     return <label htmlFor={htmlFor}>{children}</label>;
// };

import React from 'react';

interface LableProps {
    children: React.ReactNode; // Allows any React node as children
    htmlFor: string; // Allows a string for the htmlFor attribute
}

const Lable: React.FC<LableProps> = ({ children, htmlFor }) => {
    return <label htmlFor={htmlFor}>{children}</label>;
};

// Exporting the Lable component as the default export
export default Lable;