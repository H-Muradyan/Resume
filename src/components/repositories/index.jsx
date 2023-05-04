import React from "react";
import PageContainer from "../shared/pageContainer";
import RepositoriesForm from "./RepositoriesForm";
import { useSelector } from "react-redux";
import RepositoryCard from "./RepositoryCard";

const RepositoriesPage = () => {
  const repositories = useSelector((data) => data.repositories);
  return (
    <PageContainer>
      <div className="px-4">
        <h4 className="text-2xl mb-5 text-center font-bold">Repositories</h4>
        <RepositoriesForm />
        <div className="grid gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
          {repositories.length &&
            repositories.map((repository) => <RepositoryCard key={repository.id} repository={repository} />)}
        </div>
      </div>
    </PageContainer>
  );
};

export default RepositoriesPage;
