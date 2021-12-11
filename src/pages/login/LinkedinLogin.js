// import React, { useState } from 'react';


// // You can use provided image shipped by this package or using your own
// import linkedin from '../../assets/linkedin.jpg';
// import {useHistory} from 'react-router-dom';


// function LinkedInPage() {
//     const history = useHistory();
//   return (
//     <LinkedIn
//       clientId="78zhucqbv4n6iz"
//       redirectUri={`${window.location.origin}/linkedin`}
//       onSuccess={(code) => {
//         console.log(code);
//         history.push('/home');
//       }}
//       onError={(error) => {
//         console.log(error);
//       }}
//     >
//       {({ linkedInLogin }) => (
//         <img
//           onClick={linkedInLogin}
//           src={linkedin}
//           alt="Sign in with Linked In"
//           style={{ maxWidth: '180px', cursor: 'pointer', marginRight: '2rem' }}
//         />
//       )}
//     </LinkedIn>
//   );
// }
// export default LinkedInPage; 
