const topicsDropdown = document.querySelector(".topics-dropdown");
const moreDropdown = document.querySelector(".more-dropdown");
topicsDropdown.style.display = "none";
moreDropdown.style.display = "none";

const toggleTopics = () => {
  if (moreDropdown.classList.contains("open")) {
    toggleMore();
    if (!topicsDropdown.classList.contains("open")) {
      console.log("Hi");
      topicsDropdown.style.display = "block";
      setTimeout(() => {
        topicsDropdown.classList.toggle("open");
      }, 100);
    } else {
      console.log("HELLLO");

      setTimeout(() => {
        topicsDropdown.classList.toggle("open");
        setTimeout(() => {
          topicsDropdown.style.display = "none";
        }, 200);
      }, 100);
    }
  } else {
    if (!topicsDropdown.classList.contains("open")) {
      console.log("Hi");
      topicsDropdown.style.display = "block";
      setTimeout(() => {
        topicsDropdown.classList.toggle("open");
      }, 100);
    } else {
      console.log("HELLLO");

      setTimeout(() => {
        topicsDropdown.classList.toggle("open");
        setTimeout(() => {
          topicsDropdown.style.display = "none";
        }, 200);
      }, 100);
    }
  }
};

const toggleMore = () => {
  if (topicsDropdown.classList.contains("open")) {
    toggleTopics();
    if (!moreDropdown.classList.contains("open")) {
      console.log("Hi");
      moreDropdown.style.display = "block";
      setTimeout(() => {
        moreDropdown.classList.toggle("open");
      }, 100);
    } else {
      console.log("HELLLO");

      setTimeout(() => {
        moreDropdown.classList.toggle("open");
        setTimeout(() => {
          moreDropdown.style.display = "none";
        }, 200);
      }, 100);
    }
  } else {
    if (!moreDropdown.classList.contains("open")) {
      console.log("Hi");
      moreDropdown.style.display = "block";
      setTimeout(() => {
        moreDropdown.classList.toggle("open");
        document.documentElement;
      }, 100);
    } else {
      console.log("HELLLO");

      setTimeout(() => {
        moreDropdown.classList.toggle("open");
        setTimeout(() => {
          moreDropdown.style.display = "none";
        }, 200);
      }, 100);
    }
  }
};
