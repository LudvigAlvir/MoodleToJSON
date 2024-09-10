const nameCells = document.querySelectorAll(".c2");

const names = Array.from(nameCells).map((item, i) => {
  if (i) {
    return item.childNodes[0].innerText;
  }
});
const submissionCells = document.querySelectorAll(".c13");

const submissions = Array.from(submissionCells).map((item, i) => {
  if (i) {
    return item.lastChild.innerText;
  }
});
const data = names.map((item, i) => {
  return { name: item, submission: submissions[i] };
});

function downloadJSON(jsonData, filename = "data.json") {
  const jsonString = JSON.stringify(jsonData, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", filename);
  a.click();

  window.URL.revokeObjectURL(url);
}

downloadJSON(data);
