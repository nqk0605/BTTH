let selectedFileName = "";
function openFileInput(event) {
  event.preventDefault();
  document.getElementById("fileInput").click();
}

document
  .getElementById("fileInput")
  .addEventListener("change", () => {
    const fileInput = this;
    const fileNameInput =
      document.getElementById("fileNameInput");

    const files = fileInput.files;
    if (files.length > 0) {
      selectedFileName = files[0].name;
      fileNameInput.value = files[0].name;
    }
    document
      .getElementById("fileNameInput")
      .addEventListener("input", () => {
        this.value = selectedFileName;
      });
  });

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const masvInput = document.getElementById("masv").value;
  const nameInput = document.getElementById("name").value;
  const ngaysinhInput =
    document.getElementById("ngaysinh").value;
  const imgInput =
    document.getElementById("fileNameInput").value;

  const existingRows = document.querySelectorAll(
    ".table-list tbody tr"
  );
  let studentExists = false;
  existingRows.forEach((row) => {
    const currentMasv = row.children[1].textContent;
    if (currentMasv === masvInput) {
      row.children[2].textContent = nameInput;
      row.children[3].textContent = ngaysinhInput;
      row.children[4].textContent = imgInput;
      studentExists = true;
    }
  });

  if (!studentExists) {
    const newRow = document.createElement("tr");
    const latestSTT = calculateLatestSTT();

    const sttCell = document.createElement("td");
    const masvCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const ngaysinhCell = document.createElement("td");
    const imgCell = document.createElement("td");

    sttCell.textContent = latestSTT;
    masvCell.textContent = masvInput;
    nameCell.textContent = nameInput;
    ngaysinhCell.textContent = ngaysinhInput;
    imgCell.textContent = imgInput;

    newRow.appendChild(sttCell);
    newRow.appendChild(masvCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(ngaysinhCell);
    newRow.appendChild(imgCell);

    const tableBody = document.querySelector(
      ".table-list tbody"
    );
    tableBody.appendChild(newRow);
  }

  alert("Đăng ký thành công!");
  form.reset();
});

function calculateLatestSTT() {
  const existingRows = document.querySelectorAll(
    ".table-list tbody tr"
  );
  let maxSTT = 0;

  existingRows.forEach((row) => {
    const currentSTT = parseInt(
      row.children[0].textContent,
      10
    );
    if (currentSTT > maxSTT) {
      maxSTT = currentSTT;
    }
  });
  return maxSTT + 1;
}
