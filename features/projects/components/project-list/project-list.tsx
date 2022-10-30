import styled from "styled-components";
import { ProjectCard } from "../project-card";
import { useProjects } from "../../api/use-projects";
import { breakpoint, space } from "@styles/theme";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

const Error = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  gap: 12px;
  height: 28px;
  width: 1310px;
  background: #fffbfa;
  border: 1px solid #fda29b;
  border-radius: 8px;

  @media (max-width: ${breakpoint("desktop")}) {
    width: 351px;
  }
`;

const ErrorIcon = styled.img``;

const ErrorContent = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
  justify-content: space-between;
`;

const ErrorText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #b42318;
`;

const ErrorButton = styled.button`
  background: #fffbfa;
  display: flex;
  align-items: center;
  border-style: none;

  @media (max-width: ${breakpoint("desktop")}) {
    height: 36px;
  }
`;

const ErrorArrow = styled.img`
  transform: rotate(180deg);
  filter: invert(14%) sepia(94%) saturate(3176%) hue-rotate(354deg)
    brightness(94%) contrast(90%);
`;

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return (
      <Error>
        <ErrorIcon src={`/icons/alert-circle.svg`} />
        <ErrorContent>
          <ErrorText>
            There was a problem while loading the project data
          </ErrorText>
          <ErrorButton onClick={() => refetch()}>
            <ErrorText>Try Again</ErrorText>
            <ErrorArrow src={"/icons/arrow-left.svg"} />
          </ErrorButton>
        </ErrorContent>
      </Error>
    );
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
