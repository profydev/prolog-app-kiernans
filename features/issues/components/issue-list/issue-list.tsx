import { useRouter } from "next/router";
import styled from "styled-components";
import { useIssues } from "@features/issues";
import { ProjectLanguage, useProjects } from "@features/projects";
import { color, space, textFont } from "@styles/theme";
import { IssueRow } from "./issue-row";
import { Select, Button, Checkbox, Input } from "@features/ui";
import { ButtonSize } from "@features/ui/button/button";
import { CheckboxSize } from "@features/ui/checkbox/checkbox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space(6)};
`;

const IssuesContainer = styled.div`
  background: white;
  border: 1px solid ${color("gray", 200)};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const IssueHeader = styled.div`
  display: flex;
`;

const HeaderRow = styled.tr`
  border-bottom: 1px solid ${color("gray", 200)};
`;

const StyledCheckbox = styled(Checkbox)`
  && {
    padding: 0.75rem 1.5rem;
    text-align: left;
    color: ${color("gray", 500)};
    ${textFont("xs", "medium")};
  }
`;

const HeaderCell = styled.th`
  padding: ${space(3, 6)};
  text-align: left;
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space(4, 6)};
  border-top: 1px solid ${color("gray", 200)};
`;

const PaginationButton = styled.button`
  height: 38px;
  padding: ${space(0, 4)};
  background: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;

  &:not(:first-of-type) {
    margin-left: ${space(3)};
  }
`;

const PageInfo = styled.div`
  color: ${color("gray", 700)};
  ${textFont("sm", "regular")}
`;

const PageNumber = styled.span`
  ${textFont("sm", "medium")}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSelect = styled(Select)`
  && {
    width: ${space(32)};
  }
`;

export function IssueList() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: { page: newPage },
    });

  const issuesPage = useIssues(page);
  const projects = useProjects();

  if (projects.isLoading || issuesPage.isLoading) {
    return <div>Loading</div>;
  }

  if (projects.isError) {
    console.error(projects.error);
    return <div>Error loading projects: {projects.error.message}</div>;
  }

  if (issuesPage.isError) {
    console.error(issuesPage.error);
    return <div>Error loading issues: {issuesPage.error.message}</div>;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>
  );
  const { items, meta } = issuesPage.data || {};

  return (
    <Container>
      <FilterContainer>
        <Button image="\icons\select-checkmark.svg" size={ButtonSize.xl}>
          Resolve selected issues
        </Button>
        <InputContainer>
          <StyledSelect placeholder="Status" />
          <StyledSelect placeholder="Level" />
          <Input placeholder="Project Name" icon="/icons/input-search.svg" />
        </InputContainer>
      </FilterContainer>
      <IssuesContainer>
        <Table>
          <thead>
            <HeaderRow>
              <IssueHeader>
                <StyledCheckbox
                  checkboxSize={CheckboxSize.sm}
                  label="Issue"
                  checked={true}
                />
              </IssueHeader>
              <HeaderCell>Level</HeaderCell>
              <HeaderCell>Events</HeaderCell>
              <HeaderCell>Users</HeaderCell>
            </HeaderRow>
          </thead>
          <tbody>
            {(items || []).map((issue) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                projectLanguage={projectIdToLanguage[issue.projectId]}
              />
            ))}
          </tbody>
        </Table>
        <PaginationContainer>
          <div>
            <PaginationButton
              onClick={() => navigateToPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </PaginationButton>
            <PaginationButton
              onClick={() => navigateToPage(page + 1)}
              disabled={page === meta?.totalPages}
            >
              Next
            </PaginationButton>
          </div>
          <PageInfo>
            Page <PageNumber>{meta?.currentPage}</PageNumber> of{" "}
            <PageNumber>{meta?.totalPages}</PageNumber>
          </PageInfo>
        </PaginationContainer>
      </IssuesContainer>
    </Container>
  );
}
