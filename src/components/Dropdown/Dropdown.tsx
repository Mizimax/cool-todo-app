import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  handleEdit: () => void;
  handleDelete: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ handleEdit, handleDelete }) => {
  const [isActionShowed, setIsActionShowed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActionShowed(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropbtn"
        onClick={() => setIsActionShowed(!isActionShowed)}
      >
        <img src="/images/svg/dots.svg" alt="actions" />
      </button>
      <div className={`dropdown-content ${isActionShowed ? "active" : ""}`}>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete} style={{ color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
