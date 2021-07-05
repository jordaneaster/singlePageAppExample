import MyProjects from "/static/js/views/MyProjects.js";
import MyResume from "/static/js/views/MyResume.js";
import HomeView from "/static/js/views/HomeView.js";
import GitView from "/static/js/views/GitView.js";
import InspirationView from "/static/js/views/InspirationView.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

//asynch bc loading content for each of our views(buttons) inside this.function

//whenever user goes to root path.. view xyz
const router = async () => {
  const routes = [
    { path: "/", view: HomeView },
    { path: "/myProjects", view: MyProjects },
    { path: "/myGitRepo", view: GitView },
    { path: "/myResume", view: MyResume },
    { path: "/myInspiration", view: InspirationView},
  ];

  //test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
