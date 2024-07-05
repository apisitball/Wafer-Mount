import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


const WaferMount = () => {
  const [diex, setDiex] = useState<any>(0);
  const [diey, setDiey] = useState<any>(0);
  const [dimeter, setDimeter] = useState<any>(0);
  const [sumdie, setSumDie] = useState<number | string>(0);
  const [sumarea, setSumArea] = useState<number | string>(0);
  const [error, setError] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    setSumDie((diey * diex) / 10);
    setSumArea(((dimeter / 2) * 22 * (dimeter / 2)) / 7);
    if ((diey * diex) / 10 > ((dimeter / 2) * 22 * (dimeter / 2)) / 7) {
      setError("PASS");
    } else {
      setError("FAIL");
    }
    setTimeout(() => {
      router.reload();
    }, 300000);
    
  }, [diex, diey, dimeter]);

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
            placeholder=" Die X"
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
            placeholder=" Die y"
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
            placeholder="Dimeter"
            type="number"
            value={dimeter}
            onChange={(e) => setDimeter(+e.target.value)}
          />
          <h3>&nbsp;&nbsp;ml</h3>
        </div>
        <div className="sum">
          10% Die Size : &nbsp;&nbsp;{sumdie || ""}&nbsp;&nbsp;sqmm
        </div>
        <div className="sum">
          Bubble Area :&nbsp;&nbsp;{sumarea || ""}&nbsp;&nbsp;sqmm
        </div><br/>
        <div >
          <button className="button-73"
            type="button"
            onClick={() => {
              router.reload();
              alert ("Confirm Reset");
            }}
          >
            Click here to Reset
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
