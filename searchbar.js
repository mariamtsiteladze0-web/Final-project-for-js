const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const status = document.getElementById("searchStatus");

searchForm.addEventListener("submit", function (event) {
  // გვერდის გადატვირთვის შეჩერება
  event.preventDefault();

  const query = searchInput.value.trim();

  // 1. ვამოწმებთ არის თუ არა ველი ცარიელი
  if (query === "") {
    status.innerText = "გთხოვთ, ჩაწეროთ საძიებო სიტყვა.";
    status.style.color = "red";
    searchInput.style.outline = "2px solid red";
  }
  // 2. ვამოწმებთ სიგრძეს (მაგალითად, 2 სიმბოლოზე ნაკლები არ იყოს)
  else if (query.length < 2) {
    status.innerText = "საძიებო სიტყვა ძალიან მოკლეა.";
    status.style.color = "orange";
  }
  // 3. წარმატებული ვალიდაცია
  else {
    status.innerText = "მიმდინარეობს ძებნა: " + query + "...";
    status.style.color = "blue";
    searchInput.style.outline = "2px solid green";

    // აქ შეგიძლიათ დაამატოთ რეალური ძებნის ფუნქცია
    console.log("Searching for:", query);

    // სურვილისამებრ: ველის გასუფთავება ძებნის შემდეგ
    // searchInput.value = "";
  }
});
