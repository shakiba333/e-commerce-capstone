import { Fragment } from "react";
import "./FormOverlay.css";

export function FormOverlay({ signupIsOpen, onClose, children }) {
  return (
    <Fragment>
      {signupIsOpen && (
        <div>
          <div className="form-overlay-background" onClick={onClose} />
          <div className="form-overlay-container">
            <div className="form-overlay-controls">
              <button
                className="form-overlay-close"
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default FormOverlay;
