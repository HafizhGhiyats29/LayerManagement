import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import ModalAfterAction from './ModalAfterAction';

function ModalSuccess({
  messageDescription, buttonDescription, isShow, onClose,
}) {
  return (
    <ModalAfterAction
      buttonDescription={buttonDescription}
      messageDescription={messageDescription}
      icon={<BsCheckLg />}
      isShow={isShow}
      iconColorInHex="#44C4A1"
      onCloseModal={onClose}
    />
  );
}

export default ModalSuccess;
