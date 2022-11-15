import React from 'react';

const Modal = ({ children, state, setState }) => {
  return (
    <>

      {state === true &&
        < div className='modal' onClick={() => setState(false)}>
          {children}
          <button>X</button>

        </div>
      }
    </>
  );
};

export default Modal;