let viewFormData = document.querySelector("#viewFormData");

async function selectData() {
  try {
    const response = await fetch("php/select.php");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const selection = await response.json();
    for (const item of selection) {
      let singleItem = document.createElement("article");
      for (const prop in item) {
        let singleProp = document.createElement("section");
        singleProp.innerHTML = `${prop} : ${item[prop]}`;
        singleItem.appendChild(singleProp);
      }
      viewFormData.appendChild(singleItem);
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// run once on page load
selectData();
