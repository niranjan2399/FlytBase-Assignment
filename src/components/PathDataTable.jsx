import React from "react";

const PathDataTable = ({ data }) => {
  return (
    <div className="path-data">
      <div className="path-data-table">
        {!!data.length && (
          <table className="path-table">
            <tbody>
              <tr>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Time</th>
              </tr>
              {data?.map((coordinate, i) => {
                return (
                  <tr key={i}>
                    <td>{coordinate?.lat}</td>
                    <td>{coordinate?.lng}</td>
                    <td>{coordinate?.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {!data?.length && "Please add path data!"}
    </div>
  );
};

export default PathDataTable;
