import React from "react";

export default function FormText() {
  const textPswd = React.useRef();
  const textPswd2 = React.useRef();

  const onBlurPassWord = () => {
    let pswd = textPswd.current.value;
    if (pswd !== "" && !pswd.match(/^[0-9a-zA-Z]+$/)) {
      textPswd.current.value = "";
      alert("ต้องเป็น 0-9 หรือ A-Z เท่านั้น");
    }     
    }

    const onBlurPassWord2 = () => {
      if (textPswd.current.value !== textPswd2.current.value) {
        textPswd2.current.value = "";
        alert("รหัสผ่านไม่ตรงกัน");
      }
    }

    return (
      <div
        className="mt-4 mx-auto p-3 rounded"
        style={{ width: "400px", backgroundColor: "#cee" }}
      >
        <form>
          <div className="form-group mb-2">
            <label htmlFor="login">NameUser</label>
            <input
              type="text"
              id="login"
              maxLength="20"
              className="form-control form-control-sm"
            ></input>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="pswd">Password</label>
            <input
              type="password"
              id="pswd"
              maxLength="10"
              name="pswd"
              className="form-control form-control-sm"
              ref={textPswd}
              onBlur={onBlurPassWord}
            ></input>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="pswd2">Confirm Password</label>
            <input
              type="password"
              id="pswd2"
              maxLength="20"
              className="form-control form-control-sm"
              onBlur={onBlurPassWord2}
            ></input>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="memo">Memo</label>
            <textarea
              id="memo"
              className="form-control form-control-sm"
              rows="2"
              maxLength="200"
              name="memo"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-sm px-4">
              OK
            </button>
          </div>
        </form>
      </div>
    )
}
