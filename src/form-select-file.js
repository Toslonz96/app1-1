import React from "react";

export default function FormSelectFile() {
  const inputFile = React.useRef();
  const selectMaxNumFiles = React.useRef();
  const selectMaxSize = React.useRef();

  let maxNumfiles = [1, 2, 3, 4, 5];
  let maxSizefiles = [50, 100, 200, 500, 1000];

  const onClickButton = () => {
    let maxNumFiles = selectMaxNumFiles.current.value;
    let maxSizeFiles = selectMaxSize.current.value;
    if (inputFile.current.files.length > maxNumFiles) {
      alert(`เลือกไฟล์ได้ไม่เกิน ${maxNumFiles} ไฟล์`);
      inputFile.current.value = "";
      return;
    }
    for (let f of inputFile.current.files) {
      if (f.size > maxSizeFiles * 1000) {
        alert(`ไฟล์ ${f.name} มีขนาดเกิน ${maxSizeFiles} KB`);
        inputFile.current.value = "";
        return;
      }
    }
    if (inputFile.current.files.length === 0) {
      alert("กรุณาเลือกไฟล์");
      return;
    }
    alert("เลือกไฟล์เรียบร้อย");
  };

  return (
    <div
      className="mt-4 mx-auto p-3 rounded"
      style={{ width: "400px", backgroundColor: "#cee" }}
    >
      <form>
        <div className="form-group mb-3">
          <label htmlFor="maxNumfiles" className="form-label">
            จำนวนไฟล์สูงสุด
          </label>
          <select
            className="form-select form-select-sm"
            id="maxNumfiles"//ต้องเหมือนกันกับ label htmlFor
            ref={selectMaxNumFiles}
          >
            {maxNumfiles.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="maxSizefiles" className="form-label">
            ขนาดไฟล์สูงสุด (KB)
          </label>
          <select
            className="form-select form-select-sm"
            id="maxSizefiles"//ต้องเหมือนกันกับ label htmlFor
            ref={selectMaxSize}
          >
            {maxSizefiles.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="file" className="form-label">
            เลือกไฟล์
          </label>
          <input
            type="file"
            className="form-control form-control-sm"
            id="file"
            ref={inputFile}
            multiple
          ></input>
        </div>

        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickButton}
          >
            OK
          </button>
        </div>
      </form>
    </div>
  );
}
