import React from "react";
import ContributorCard from "./ContributorCard";
import contributors from "../data/contributors.json";

export default function ContributorsGrid() {
  return (
    <div className="grid">
      {contributors.map((c, index) => (
        <ContributorCard key={index} contributor={c} />
      ))}
    </div>
  );
}
