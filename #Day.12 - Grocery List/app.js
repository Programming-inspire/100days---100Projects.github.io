var slist = {
    // (A) INITIALIZE SHOPPING LIST
    items : [], // current shopping list
    hlist : null, // HTML shopping list
    hadd : null, // HTML add item form
    hitem : null, // HTML add item input field
    init : function () {
      // (A1) GET HTML ELEMENTS + "ACTIVATE" ADD ITEM
      slist.hlist = document.getElementById("shop-list");
      slist.hadd = document.getElementById("shop-add");
      slist.hitem = document.getElementById("shop-item");
      slist.hadd.addEventListener("submit", slist.add);
  
      // (A2) RESTORE PREVIOUS SHOPPING LIST
      if (localStorage.items == undefined) { localStorage.items = "[]"; }
      slist.items = JSON.parse(localStorage.items);
  
      // (A3) DRAW HTML SHOPPING LIST
      slist.draw();
    },
  
    // (B) ADD NEW ITEM TO THE LIST
    add : function (evt) {
      // (B1) PREVENT FORM SUBMIT
      evt.preventDefault();
  
      // (B2) ADD NEW ITEM TO 
      slist.items.push({
        name : slist.hitem.value, // Item name
        done : false // True for "got it", false for not
      });
      slist.hitem.value = "";
      slist.save();
  
      // (B3) REDRAW HTML SHOPPING LIST
      slist.draw();
    },
  
    // (C) DRAW THE HTML SHOPPING LIST
    draw : function () {
      slist.hlist.innerHTML = "";
      if (slist.items.length > 0) {
        let row, name, delbtn, okbtn;
        for (let i in slist.items) {
          // (C1) ITEM ROW
          row = document.createElement("div");
          row.className = "item-row";
          slist.hlist.appendChild(row);
          
          // (C2) ITEM NAME
          name = document.createElement("div");
          name.className = "item-name";
          name.innerHTML = slist.items[i].name;
          if (slist.items[i].done) {
            name.classList.add("item-got");
          }
          row.appendChild(name);
  
          // (C3) DELETE BUTTON
          delbtn = document.createElement("input");
          delbtn.className = "item-del";
          delbtn.type = "button";
          delbtn.value = "Delete";
          delbtn.dataset.id = i;
          delbtn.addEventListener("click", slist.delete);
          row.appendChild(delbtn);
          
          // (C4) COMPLETED/NOT YET BUTTON
          okbtn = document.createElement("input");
          okbtn.className = "item-ok";
          okbtn.type = "button";
          okbtn.value = slist.items[i].done ? "Not Yet" : "Got It";
          okbtn.dataset.id = i;
          okbtn.addEventListener("click", slist.toggle);
          row.appendChild(okbtn);
        }
      }
    },
  
    // (D) SAVE SHOPPING LIST INTO LOCAL STORAGE
    save : function () {
      if (localStorage.items == undefined) { localStorage.items = "[]"; }
      localStorage.items = JSON.stringify(slist.items);
    },
  
    // (E) DELETE SELECTED ITEM
    delete : function () {
      if (confirm("Remove selected item?")) {
        slist.items.splice(this.dataset.id, 1); 
        slist.save();
        slist.draw();
      }
    },
  
    // (F) TOGGLE ITEM BETWEEN "GOT IT" OR "NOT YET"
    toggle : function () {
      let id = this.dataset.id;
      slist.items[id].done = !slist.items[id].done;
      slist.save();
      slist.draw();
    }
  };
  window.addEventListener("DOMContentLoaded", slist.init);