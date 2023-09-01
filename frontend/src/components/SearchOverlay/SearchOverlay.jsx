import "./SearchOverlay.css";

function SearchOverlay({ searchIsOpen, onClose, children }) {
  return (
    <>
      {searchIsOpen && (
        <div>
          <div className="search-overlay-background" onClick={onClose} />
          <div className="search-overlay-container">
            <div className="search-overlay-controls">
              <div className="search-overlay-content">{children}</div>
              <button
                className="search-overlay-close"
                type="button"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchOverlay;
