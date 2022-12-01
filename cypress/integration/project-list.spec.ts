import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { ProjectStatus } from "../../features/projects/types/project.types";

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

      const statusNames = {
        [ProjectStatus.warning]: "warning",
        [ProjectStatus.critical]: "critical",
        [ProjectStatus.stable]: "stable",
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
            statusNames[mockProjects[index].status as keyof typeof statusNames];
          const statusColor =
            statusColors[
              mockProjects[index].status as keyof typeof statusColors
            ];
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

    it("loads the footer", () => {
      cy.get("main>div:nth-child(2)").should("exist");
      cy.get("main>div:nth-child(2)>div>div")
        .should("exist")
        .children()
        .should("have.length", 3);

      context("mobile view", () => {
        cy.viewport(300, 500);
      });
      //Check css changes with mobile viewport
      cy.get("main>div:nth-child(2)").invoke("height").should("equal", 177);
    });
  });
});

describe("Project List loading", () => {
  beforeEach(() => {
    cy.intercept(
      "https://prolog-api.profy.dev/project",
      { times: 1 },
      (req) => {
        req.on("response", (res) => {
          res.setDelay(10000);
        });
      }
    ).as("projectsLoading");
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders loading icon with animation", () => {
      cy.get("main")
        .find("img")
        .should("be.visible")
        .should("have.css", "animation");
    });
  });
});

describe("Project List not loaded", () => {
  let requestCounter = 0;
  beforeEach(() => {
    cy.intercept(
      "https://prolog-api.profy.dev/project",
      { times: 10 },
      (req) => {
        req.destroy();
        requestCounter += 1;
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
      cy.wait(5000).then(() => expect(requestCounter).to.be.within(6, 7));
      cy.get("main").find("button").contains("Try Again").click();
      cy.wait(0).then(() => expect(requestCounter).to.be.within(8, 9));
    });
  });
});
