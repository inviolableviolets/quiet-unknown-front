import areciboStyle from "./arecibo.message.module.scss";
import { binaryData } from "../arecibo/arecibo.binary.message";
import { useState, useEffect } from "react";

export const AreciboMessage = () => {
  const data = binaryData;
  const [gridData, setGridData] = useState<string[][]>([]);

  useEffect(() => {
    const animateGrid = () => {
      const newData: string[][] = [];
      data.forEach((row, rowIndex) => {
        const rowArray = row.split("");
        const newRowArray: string[] = [];

        rowArray.forEach((value, index) => {
          setTimeout(() => {
            newRowArray[index] = value;
            setGridData((prevData) => {
              const updatedData = [...prevData];
              updatedData[rowIndex] = [...newRowArray];
              return updatedData;
            });
          }, rowIndex * 69 + index * 5);
        });

        newData.push(newRowArray);
      });
    };

    animateGrid();
  }, [data]);

  return (
    <div className={areciboStyle.areciboMessage} data-testid="arecibo-message">
      <h1></h1>
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className={areciboStyle.row} data-testid="row">
          {row.map((value, columnIndex) => (
            <div
              key={columnIndex}
              className={value === "0" ? areciboStyle.zeros : areciboStyle.ones}
              data-testid="cell"
            />
          ))}
        </div>
      ))}
    </div>
  );
};
