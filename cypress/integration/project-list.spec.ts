import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import {
  Status,
  ProjectStatus,
  StatusColors,
} from "../../features/projects/types/project.types";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusNames: Status = {
        error: "critical",
        warning: "warning",
        info: "stable",
      };

      const statusColors = {
        [ProjectStatus.stable]: "success",
        [ProjectStatus.warning]: "warning",
        [ProjectStatus.critical]: "error",
      };

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          const statusName =
            statusNames[mockProjects[index].status as keyof Status];
          const statusColor = statusColors[statusName as keyof StatusColors];
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el)
            .contains(capitalize(statusName))
            .should("have.attr", "color")
            .and("eq", statusColor);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});

describe("Project List not loaded", () => {
  beforeEach(() => {
    cy.intercept(
      "https://prolog-api.profy.dev/project",
      { times: 10 },
      {
        forceNetworkError: true,
      }
    ).as("projectsFail");
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders error alert", () => {
      //Give error alert time to load
      cy.wait(5000);
      cy.get("main").find("button").contains("Try Again").click();
      cy.wait(5000);
      cy.get("main").find("div").children().should("have.length.at.least", 3);
    });
  });
});
