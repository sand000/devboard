import React, { useRef, useState } from "react";

function StatusUpdater() {
  const inputRef = useRef(null);
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!status === "") {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
      setStatus("");
    }
  };

  const handleEditStatus = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ margin: "100px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <input
            style={{ height: "30px", width: "300px" }}
            ref={inputRef}
            type='text'
            value={status}
            placeholder='Enter Status'
            onChange={(e) => setStatus(e.target.value)}
          />
          <button type='submit'>Update Status</button>
          <button onClick={handleEditStatus}>Edit Status</button>
        </div>
      </form>

      {showToast && <div>Status Updated</div>}
    </div>
  );
}

export default StatusUpdater;
