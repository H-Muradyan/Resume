import { Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { selectMode } from "../redux/features/modeSlice";

const CustomModal = ({ handleClose, open, project }) => {
  const mode = useSelector(selectMode);

  const { title, video } = project;
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <div
        className={`${
          mode ? "bg-darkMode text-white" : "bg-lightMode text-black"
        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 px-8`}
      >
        <h4 className="font-bold text-2xl text-center pb-4">{title}</h4>

        <video src={video} controls />
        <CloseIcon onClick={handleClose} className="absolute top-2 right-2 cursor-pointer" />
      </div>
    </Modal>
  );
};

export default CustomModal;
