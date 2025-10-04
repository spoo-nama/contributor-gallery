import React from "react";

export default function ContributorCard({ contributor }) {
  const { name, github, role, location, bio, avatar } = contributor;

  return (
    <div className="card">
      <img
        src={avatar || `https://unavatar.io/github/${github}`}
        alt={name}
        className="avatar"
      />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{location}</p>
      <p className="bio">{bio}</p>
      <a
        href={`https://github.com/${github}`}
        target="_blank"
        rel="noreferrer"
        className="github-link"
      >
        Visit GitHub →
      </a>
    </div>
  );
}
