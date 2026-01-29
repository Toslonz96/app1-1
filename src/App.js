import React from 'react';

import Content from './context-content';
import { UserContext } from './context';
import Content2 from './context-content2';
import Header2 from './context-header2';
function App() {
  let [user,setUser]=React.useState(null)
  return (
    <UserContext.Provider value={[user,setUser]}>
      <Header2 />
      <Content2 />
    </UserContext.Provider>
  )
}   
export default App;