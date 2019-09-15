import React from "react";
import PropTypes from "prop-types";

const RepresentativeItem = ({
  rep: { name, photo_url, url, district_name, party_name }
}) => {
  return (
    <div className="card text-center">
      <img
        src={photo_url}
        alt={name}
        className="round-img"
        style={{ height: "70px", width: "60px" }}
      />
      <h3 className="text-primary">{name}</h3>
      <h4>
        <span className="text-secondary">
          <i class="fas fa-thumbtack" />
        </span>{" "}
        {district_name}
      </h4>
      <h4>
        <span className="text-success">
          <i class="fas fa-landmark" />
        </span>{" "}
        {party_name}
      </h4>
      <div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark btn-sm my-1"
        >
          More
        </a>
      </div>
    </div>
  );
};

RepresentativeItem.propTypes = {
  rep: PropTypes.object.isRequired
};

export default RepresentativeItem;
