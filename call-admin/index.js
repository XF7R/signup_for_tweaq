
let button = document.getElementById('butten');
button.addEventListener('click', () => {
    Swal.fire({
        title: "تم السماح!",
        text: "تم السماح للطالب بالخروج",
        icon: "success"
      });
})