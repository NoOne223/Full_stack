import React, { useState } from 'react';

type ModalName = 'modal1' | 'modal2' | null;

const App = () => {
  const [activeModal, setActiveModal] = useState<ModalName>(null);

  const openModal = (modalName: ModalName): void => {
    setActiveModal(modalName);
  };

  const closeModal = (): void => {
    setActiveModal(null);
  };

  return (
    <div>
      <button onClick={() => openModal('modal1')}>Open Modal 1</button>
      <button onClick={() => openModal('modal2')}>Open Modal 2</button>

      {activeModal === 'modal1' && (
        <div>
          <p>This is Modal 1</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
      {activeModal === 'modal2' && (
        <div>
          <p>This is Modal 2</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;