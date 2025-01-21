import React, { useState } from 'react';
import ModalButton from '../buttons/ModalButton';
import Modal1 from '../modals/ModalAccount';
import Modal2 from '../modals/Modal2';

const Testing = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null); // null khi không có modal nào được mở

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div>
      {/* Button mở Modal1 */}
      <ModalButton onClick={() => openModal('modal1')}>Open modal 1</ModalButton>
      {/* Button mở Modal2 */}
      <ModalButton onClick={() => openModal('modal2')}>Open modal 2</ModalButton>

      {/* Hiển thị Modal1 nếu activeModal là 'modal1' */}
      {activeModal === 'modal1' && <Modal1 onClose={closeModal} />}
      {/* Hiển thị Modal2 nếu activeModal là 'modal2' */}
      {activeModal === 'modal2' && <Modal2 onClose={closeModal} />}
    </div>
  );
};

export default Testing;
