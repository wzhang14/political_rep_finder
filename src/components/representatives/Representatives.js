import React, { useContext } from "react";
import RepresentativeItem from "./RepresentativeItem";
import Spinner from "../layout/Spinner";
import RepContext from "../../context/rep/repContext";

const Representatives = () => {
  const repContext = useContext(RepContext);

  const { loading, representatives } = repContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="rep_col">
        {representatives.map(rep => (
          <RepresentativeItem key={rep.id} rep={rep} />
        ))}
      </div>
    );
  }
};

// const repStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gridGap: "1rem"
// };

export default Representatives;
