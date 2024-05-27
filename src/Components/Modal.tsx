import { modalProps } from "../helpers/types";

export default function Modal({ title, body }: modalProps) {
  return (
    <dialog id="modal" className="modal" itemID="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{body}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-secondary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
