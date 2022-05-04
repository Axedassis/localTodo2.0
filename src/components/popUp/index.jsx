import React, { useState } from "react";

import "./style.css";

import { useMain } from "../../context/mainContentx";

export default function PopUp({
  taskName,
  handleClosePopUp,
  id,
  completed,
  di,
}) {
  const { handleRename } = useMain();
  const [inputValue, setInputValue] = useState(taskName);

  const handleOk = () => {
    const text = inputValue;
    handleRename(id, text, completed, di);
    handleClosePopUp();
  };
  return (
    <>
      <div className="container-popUp">
        <div className="popUp">
          <div className="top-side-popUp">
            <label>Editando Tarefa</label>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="bottom-side-popUp">
            <button onClick={handleOk}>Ok</button>
            <button onClick={() => handleClosePopUp()}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
