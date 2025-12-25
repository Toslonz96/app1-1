import React from 'react';
import { Header } from './func-components';
import { Content } from './func-components';
import { Footer } from './func-components';
import Calendar from './class-components';
function App() {
  return (
    <>
      <Header />
      <p><center><Calendar /> </center></p>
      <Content />
      <Footer />
    </>
  )
}
export default App;