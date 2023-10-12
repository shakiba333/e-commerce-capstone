import React from "react";

function UpdateForm({ children, submitHandler }) {
  return (
    <>
      <div>
        <form action="">
          {children}
          <br />
          <button className="cancel-btn" type="cancel">
            Cancel
          </button>
          <button className="save-btn" type="submit" onClick={submitHandler}>
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateForm;
