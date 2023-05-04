import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const RepositoryCard = ({ repository }) => {

  return (
    <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-4 bg-gray-800 rounded-xl p-4 text-white">
      <div className="flex justify-between items-center">
        <img
          className="rounded-full"
          width={50}
          height={50}
          src={repository.owner.avatar_url}
          alt="as"
        />
        <h6 className="text-xl font-semibold">{repository.owner.login}</h6>
      </div>
      <p className="text-lg text-center font-medium my-5">{repository.name}</p>
      <div className="space-y-4 text-sm mb-4">
        <div>
          <i>Created :</i> <span>{moment(repository.created_at).format("MMMM Do YYYY")}</span>
        </div>
        <div>
          <i>Updated :</i> <span>{moment(repository.updated_at).format("MMMM Do YYYY")}</span>
        </div>
        <div>
          <i>Language :</i> <span>{repository.language}</span>
        </div>
      </div>
      <p className="text-end">
        <span> {repository.stargazers_count}</span> <StarIcon fontSize="medium" color="warning" />
      </p>
      <small className="flex items-center justify-between mt-5">
        <i>
          <Link aria-label={repository.name} target="_blank" to={repository.html_url}>
            View repo
          </Link>
        </i>
        <p className="px-2 py-1 text-end rounded-xl bg-green-600">{repository.visibility}</p>
      </small>
    </div>
  );
};

export default RepositoryCard;
