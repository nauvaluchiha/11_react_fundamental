const ModalFormSucces = ({
  textContext,
  success,
}: {
  textContext: string;
  success: boolean;
}) => {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static" data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {success ? "Success" : "Failed"}
              </h1>
            </div>
            <div className="modal-body">{textContext}</div>
            <div className="modal-footer">
              {!success && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              )}
              {success && (
                <button type="button" className="btn btn-primary" onClick={() => {
                  window.scrollTo(0, 0);
                  setTimeout(() => {window.location.reload();}, 300)
                }
                }>
                  Save changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFormSucces;
