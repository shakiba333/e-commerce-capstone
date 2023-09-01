import "./Overlay.css";

function Overlay({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <div>
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Overlay;
