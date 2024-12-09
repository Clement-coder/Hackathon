const logoutButton = document.getElementById('logout');
let creatInfo = document.getElementById('userInfo');


logoutButton.onclick = function () {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        alert("You have logged out.");
        window.location.href = "index.html";
    } else {
        alert("Logout canceled.");
    }
};


function previewImage(event) {
    const fileInput = event.target;
    const preview = document.getElementById('profileImagePreview');

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  
  document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile updated successfully!');
  });