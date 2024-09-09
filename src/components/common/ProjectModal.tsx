"use client";

import { Button, Modal } from "flowbite-react";
import { FC, useState } from "react";

interface IModalProps {
  open: boolean;
  onHandleClose: () => void;
  handleRedirect: () => void;
}

export const ProjectModal: FC<IModalProps> = ({
  open,
  onHandleClose,
  handleRedirect,
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleContinue = () => {
    if (value === "muskaan@123") {
      handleRedirect();
      onHandleClose();
    } else {
      setError(true);
    }
  };

  const handleChange = (val: string) => {
    setValue(val);
    setError(false);
  };
  return (
    <Modal show={open} onClose={onHandleClose} size="md">
      <Modal.Body>
        <div className="space-y-6 mb-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Please enter password <span className="text-red-500">*</span>
          </p>
          <div className="relative">
            <input
              autoFocus
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full h-10 rounded-md px-4 outline-0 font-sans"
            />
            {error && (
              <p className="text-red-500 font-sans text-sm absolute -bottom-2 left-0 transform translate-y-full">
                Incorrect Password
              </p>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleContinue}>I accept</Button>
        <Button color="gray" onClick={onHandleClose}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
