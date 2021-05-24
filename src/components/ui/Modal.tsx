import React, { ReactElement, useRef } from "react";
import ReactDOM from "react-dom";

interface Props {
  visible: boolean;
  onClose: Function;
  header?: ReactElement;
  body?: ReactElement;
  footer?: ReactElement;
}

export const Modal: React.FC<Props> = ({
  visible,
  onClose,
  header,
  body,
  footer,
}) => {
  const root = useRef<HTMLElement>(document.getElementById("root"));

  const handleModalWrapperClick = (event: any) => {
    const target = event.target;
    if (target.getAttribute("class").indexOf("modal-wrapper") !== -1) {
      onClose();
    }
  };

  if (root.current) {
    return ReactDOM.createPortal(
      <>
        {visible && (
          <>
            <div
              className="modal-mask fixed inset-0 h-full box-border bg-overlay-color"
              style={{
                zIndex: 1000,
              }}
            ></div>
            <div
              className="modal-wrapper fixed inset-0 overflow-auto box-border flex items-center justify-center"
              style={{ zIndex: 1000 }}
              onClick={handleModalWrapperClick}
            >
              <div
                className={`modal relative bg-main shadow-lg rounded-xl flex flex-col box-border`}
              >
                {header && (
                  <div className="modal-header p-4 flex items-center box-border ">
                    {header}
                  </div>
                )}
                {body && (
                  <div className="modal-body p-4 flex items-center box-border border-t border-weak">
                    {body}
                  </div>
                )}
                {footer && (
                  <div className="modal-footer p-4 flex items-center box-border border-t border-weak">
                    {footer}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </>,
      root.current
    );
  }
  return null;
};
