let yourName = prompt("Nhap vao ho ten cua ban:");
let yourYear = prompt(
  "Nhap vao nam sinh cua ban:"
);
let day = new Date();
let year = day.getFullYear();
let birthday = year - yourName;
let result =
  birthday >= 18
    ? `Chào mừng ${yourName} đến với NGÔI NHÀ TEEN`
    : `Bạn ${yourName} chưa đủ tuổi! Hẹn bạn lần sau`;
console.log(result);
