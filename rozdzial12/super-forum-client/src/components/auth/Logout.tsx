import React, { FC } from "react";
import ReactModal from "react-modal";
import ModalProps from "../types/ModalProps";
import "./Logout.css";

const Logout: FC<ModalProps> = ({ isOpen, onClickToggle }) => {

    const onClickLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClickToggle(e);
    };

    const onClickCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClickToggle(e);
    };

    return (
        <ReactModal
            className="modal-menu"
            isOpen={isOpen}
            onRequestClose={onClickToggle}
            shouldCloseOnOverlayClick={true}
        >
            <form>
                <div className="logout-inputs">
                    Czy jesteś pewny, że chcesz się wylogować?
                </div>
                <div className="form-buttons form-buttons-sm">
                    <div className="form-btn-left">
                        <button
                            style={{ marginLeft: ".5em" }}
                            className="action-btn"
                            onClick={onClickLogin}
                        >
                        Wyloguj
                        </button>
                        <button
                            style={{ marginLeft: ".5em" }}
                            className="cancel-btn"
                            onClick={onClickCancel}
                        >
                        Zamknij
                        </button>
                    </div>
                </div>
            </form>
        </ReactModal>
    )
}

export default Logout;