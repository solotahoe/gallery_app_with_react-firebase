import React, { useState } from 'react';
import Title from './comps/Title';
import Uploadform from './comps/uploadform';
import Imagegrid from './comps/imagegrid';
import Modal from './comps/Modal';




function App() {

  const [selectedImg, setselectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <Uploadform />
      <Imagegrid setselectedImg={setselectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setselectedImg={setselectedImg} />
      )}
    </div>
  );
}

export default App;
