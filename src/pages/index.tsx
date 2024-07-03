import React, { useState } from "react";

const WaferMount = () => {
  const [diex, setDiex] = useState<any>(0);
  const [diey, setDiey] = useState<any>(0);
  const [dimeter, setDimeter] = useState<any>(0);
  const [sumdie, setSumDie] = useState<number | string>(0);
  const [sumarea, setSumArea] = useState<number | string>(0);
  const [error, setError] = useState<string>();

  function calculate() {
    setSumDie((diex * diey) / 10);
    setSumArea(((dimeter / 2) * 22 * (dimeter / 2)) / 7);

    if (sumdie >= sumarea) {
      setError("PASS");
    } else {
      setError("FAIL");
    }
  }
  function handleReset() {
    setDiex(""),
      setDiey(""),
      setDimeter(""),
      setSumDie(""),
      setSumDie(""),
      setSumArea(""),
      setError("");
  }
  return (
    <div className="header">
      <h1>Calculator 10% Die Size</h1>

      <div>
        <div className="inpuda">
          <h2>
            Die size X
            :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <input
            className="inputBox"
            placeholder="ใส่ค่า Die X"
            type="number"
            value={diex}
            onChange={(e) => setDiex(+e.target.value)}
          />
          <h3>&nbsp;&nbsp;ml</h3>
        </div>
        <div className="inpuda">
          <h2>
            Die size Y
            :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <input
            className="inputBox"
            placeholder="ใส่ค่า Die y"
            type="number"
            value={diey}
            onChange={(e) => setDiey(+e.target.value)}
          />
          <h3>&nbsp;&nbsp;ml</h3>
        </div>
        <div className="inpuda">
          <h2>Bubble Dimeter :&nbsp;&nbsp;</h2>
          <input
            className="inputBox"
            placeholder="ใส่ค่า Dimeter"
            type="number"
            value={dimeter}
            onChange={(e) => setDimeter(+e.target.value)}
          />
          <h3>&nbsp;&nbsp;ml</h3>
          </div>
          <div className="sum">10% Die Size : &nbsp;&nbsp;{sumdie || ""}&nbsp;&nbsp;sqmm</div>
          <div className="sum">Bubble Area :&nbsp;&nbsp;{sumarea || ""}&nbsp;&nbsp;sqmm</div>
        <div>
          <button className="btnCal" onMouseMove={calculate}>
            คำนวน
          </button>
          <button className="btnClear" onClick={handleReset}>
            Reset{" "}
          </button>
        </div>
        <div>
          <h1 className={error === "PASS" ? "fontGreen" : "fontRed"}>
            {error}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WaferMount;
