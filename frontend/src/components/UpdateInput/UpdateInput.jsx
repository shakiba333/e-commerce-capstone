import React from "react";

function UpdateInput({ label, type, name, value, onChangeSetter }) {
  return (
    <div class="full-input">
      <label className="edit-label" for={name}>
        {label}
      </label>
      <input
        className="edit-input"
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChangeSetter(e.target.value)}
      />
    </div>
  );
}

export default UpdateInput;
