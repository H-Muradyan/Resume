import React from "react";
import PageContainer from "../shared/pageContainer";
import RepositoriesForm from "./RepositoriesForm";
import { useSelector } from "react-redux";
import RepositoryCard from "./RepositoryCard";
import { selectUser } from "../redux/features/repositoriesSlice";
import Loading from "../shared/Loading";

const RepositoriesPage = () => {
  const repositories = useSelector(selectUser);

  return (
    <PageContainer>
      <div className="px-4">
        <h4 className="text-2xl mb-5 text-center font-bold">Repositories</h4>
        <RepositoriesForm />
        {repositories.loading ? (
          <Loading />
        ) : (
          <div className="grid gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
            {repositories.user.length ? (
              repositories.user.map((repository) => (
                <RepositoryCard key={repository.id} repository={repository} />
              ))
            ) : (
              <div className="col-span-4 md:col-span-8 lg:col-span-12 text-center text-2xl font-bold mt-10">
                There is no repository
              </div>
            )}
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default RepositoriesPage;
