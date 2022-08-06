import React, { useEffect, useRef } from "react";
import * as style from './modal.module.css'


/* Usage

import { useState } from "react";
import DialogModal from '../../../components/modal/modal';

export default function MyPage() {

		const [isOpened, setIsOpened] = useState(false);
	  
		const onProceed = () => {
		  console.log("Proceed clicked");
		};

	return (
	  	<Layout>

            <div>
                <button onClick={() => setIsOpened(true)}>Open "dialog" modal</button>

                <DialogModal
                    title="Dialog modal example"
                    isOpened={isOpened}
                    onProceed={onProceed}
                    onClose={() => setIsOpened(false)}
                >
                    <!-- CHILDREN -->
                    <p>To close: click Close, press Escape, or click outside.</p>

                </DialogModal>
            </div>   
*/

const DialogModal = ({ title, isOpened, onProceed, onClose, children, } ) => {
 
    const ref = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  const proceedAndClose = () => {
    onProceed();
    onClose();
  };

  const preventAutoClose = (e) => e.stopPropagation();

  return (
    <dialog className={style.dialog} ref={ref} onCancel={onClose} onClick={onClose}>
      <div onClick={preventAutoClose}>
        <h3>{title}</h3>

        {children}

        <div className={style.buttons}>
          <button onClick={proceedAndClose}>Proceed</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </dialog>
  );
};

export default DialogModal;
