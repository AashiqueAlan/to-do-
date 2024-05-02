"use-strict";

let addbtn = function () {
  let lists = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("duedate").value;
  console.log(lists, description, date);

  // collapseOne
  let outeraccordian = document.createElement("div");
  outeraccordian.setAttribute("id", lists);
  outeraccordian.setAttribute("class", "accordion-collapse collapse show");
  outeraccordian.setAttribute("data-bs-parent", "#accordionExample");

  // strong

  let accordionbodyparent = document.createElement("div");
  accordionbodyparent.setAttribute("class", "accordion-body");
  accordionbodyparent.innerHTML = `<strong>${description}</strong>`;
  outeraccordian.appendChild(accordionbodyparent);

  let accordionbodydate = document.createElement("div");
  accordionbodydate.setAttribute("class", "accordion-body");
  accordionbodydate.innerHTML = `<strong>${date}</strong>`;
  outeraccordian.appendChild(accordionbodyparent);
  outeraccordian.appendChild(accordionbodydate);

  // parentdiv1

  let parentdiv1 = document.createElement("div");
  parentdiv1.setAttribute("class", "accordion-item");

  // btnh2
  let btnh2 = document.createElement("h2");
  btnh2.setAttribute("class", "accordion-header");
  // innerbtn
  let innerbtn = document.createElement("button");
  innerbtn.setAttribute("class", "accordion-button");
  innerbtn.setAttribute("type", "button");
  innerbtn.setAttribute("data-bs-toggle", "collapse");
  innerbtn.setAttribute("data-bs-target", `#${lists}`);
  innerbtn.setAttribute("aria-expanded", "true");
  innerbtn.setAttribute("aria-controls", lists);
  innerbtn.setAttribute("id", "mybtn");
  innerbtn.innerText = lists;
  btnh2.appendChild(innerbtn);
  parentdiv1.appendChild(btnh2);
  parentdiv1.appendChild(outeraccordian);
  if (lists != 0) {
    document.getElementById("accordionExample").appendChild(parentdiv1);
  }
};
