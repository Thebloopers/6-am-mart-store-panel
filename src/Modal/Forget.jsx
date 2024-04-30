import React from "react";

function Forget() {
  return (
    <div>
      <dialog id="my_modal_1" className="modal  ">
        <div className="modal-box flex flex-col justify-center items-center">
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/send-mail.svg"
            alt=""
          />
          <h3 className="font-bold text-lg my-2">Send Mail to Your Email ?!</h3>
          <input
            type="text"
            placeholder="Please enter your registerd email"
            className="input input-bordered w-full max-w-[400px]"
          />
          <button className="btn btn-success w-full max-w-[400px] mt-4">
            Send Mail
          </button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Forget;
