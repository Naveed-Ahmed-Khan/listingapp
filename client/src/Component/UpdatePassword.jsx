import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Swal from "sweetalert2";
import { callApi } from "../Utitlies/callAPI";
export default function UpdatePassword(props) {
  const [saveModal, setSaveModal] = useState({
    newpassword: "",
    oldpassword: "",
    confirmPassword: "",
  });
  const handleInputField = (e) => {
    const { value, name } = e.target;
    setSaveModal({
      ...saveModal,
      [name]: value,
    });
  };
  const handleUpdatePass = async () => {
      debugger
    if (saveModal.newpassword === saveModal.confirmPassword) {
      delete saveModal.confirmPassword;
      const data = await callApi("/updatepassword", "patch", saveModal);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm password should be same",
      });
    }
  };
  const { open, close } = props;
  return (
    <Modal isOpen={open} size="lg">
      <ModalHeader toggle={close}>Login</ModalHeader>
      <ModalBody>
        <div className="single-page customerpage ">
          <div className="wrapper wrapper2 box-shadow-0">
            <form id="login" className="card-body" tabIndex={500}>
              <div className="mail">
                <input
                  type="password"
                  name="oldpassword"
                  value={saveModal.oldpassword}
                  onChange={handleInputField}
                />
                <label>Old Password</label>
              </div>
              <div className="mail">
                <input
                  type="password"
                  name="newpassword"
                  value={saveModal.newpassword}
                  onChange={handleInputField}
                />
                <label>New Password</label>
              </div>
              <div className="passwd">
                <input
                  type="password"
                  name="confirmPassword"
                  value={saveModal.confirmPassword}
                  onChange={handleInputField}
                />
                <label>Confirm Password</label>
              </div>
            </form>

            <div className="submit">
              <button
                className="btn btn-primary btn-block"
                onClick={handleUpdatePass}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
