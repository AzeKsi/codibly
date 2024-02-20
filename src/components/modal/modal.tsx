import { useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "./modal.effect";
import { ModalProps } from "./modal.types";

export const Modal = ({ opened, onClose, children, preventScroll = true }: ModalProps) => {
  const { setModalOpen, targetRef, targetElement, mounted } = useModal(preventScroll);

  useEffect(() => {
    setModalOpen(opened);
  }, [opened, setModalOpen]);

  return mounted
    ? ReactDOM.createPortal(
        <>
          {opened && (
            <>
              <div className="modal-overlay">
                <div ref={targetElement} className="modal-dialog" data-testid="pw-modal">
                  <div className="modal-content">
                    <button className="modal-close-btn" onClick={onClose}>
                      <AiOutlineClose size={24} />
                    </button>
                    <div className="modal-body">{children}</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        targetRef.current
      )
    : null;
};
