document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const toggleNewPassword = document.getElementById('toggleNewPassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const currentPassword = document.getElementById('current-password');
    const newPassword = document.getElementById('new-password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');
    const passwordMismatchMessage = document.getElementById('password-mismatch-message');
    const updateProfileBtn = document.getElementById('update-profile');
    const profileForm = document.getElementById('profile-form');
    const passwordForm = document.getElementById('password-form');
    const profileInfo = document.getElementById('profile-info');
    const displayName = document.getElementById('display-name');
    const displayEmail = document.getElementById('display-email');
    const displayUsername = document.getElementById('display-username');
    const profilePic = document.getElementById('profile-pic');
    const displayProfilePic = document.getElementById('display-profile-pic');

    // Show/Hide password toggle
    function togglePasswordVisibility(inputField, toggleIcon) {
        const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
        inputField.setAttribute('type', type);
        toggleIcon.classList.toggle('ri-eye-off-line');
    }

    togglePassword.addEventListener('click', () => togglePasswordVisibility(currentPassword, togglePassword));
    toggleNewPassword.addEventListener('click', () => togglePasswordVisibility(newPassword, toggleNewPassword));
    toggleConfirmPassword.addEventListener('click', () => togglePasswordVisibility(confirmPassword, toggleConfirmPassword));

    // Handle profile form submission
    updateProfileBtn.addEventListener('click', function () {
        const name = document.getElementById('profile-name').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('profile-username').value;
        const photo = document.getElementById('photo').files[0];

        if (photo) {
            const reader = new FileReader();
            reader.onload = function (e) {
                localStorage.setItem('profile-pic', e.target.result);
                profilePic.src = e.target.result;
                displayProfilePic.src = e.target.result;
            };
            reader.readAsDataURL(photo);
        }

        // Save profile information
        localStorage.setItem('profile-name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profile-username', username);

        // Update profile display
        displayName.textContent = name;
        displayEmail.textContent = email;
        displayUsername.textContent = username;

        alert('Your profile has been successfully updated!');
        window.location.href = 'kera.html'; // Redirect to home page
    });

    // Handle password update
    passwordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const currentPasswordValue = currentPassword.value;
        const newPasswordValue = newPassword.value;
        const confirmPasswordValue = confirmPassword.value;
        const storedPassword = localStorage.getItem('password') || '';

        // Validate current password
        if (currentPasswordValue !== storedPassword) {
            errorMessage.style.display = 'block';
            return;
        }
        errorMessage.style.display = 'none';

        // Validate password match
        if (newPasswordValue !== confirmPasswordValue) {
            passwordMismatchMessage.textContent = 'Your passwords are not matching';
            passwordMismatchMessage.style.display = 'block';
            return;
        }
        passwordMismatchMessage.style.display = 'none';

        // Save new password
        localStorage.setItem('password', newPasswordValue);
        alert('Your password has been successfully updated!');
        window.location.href = 'kera.html'; // Redirect to home page
    });

    // Populate profile fields on page load
    const storedName = localStorage.getItem('profile-name') || '';
    const storedEmail = localStorage.getItem('email') || '';
    const storedUsername = localStorage.getItem('profile-username') || '';
    const storedProfilePic = localStorage.getItem('profile-pic') || '';
    const loggedInUsername = localStorage.getItem('username') || '';

    if (loggedInUsername) {
        document.getElementById('profile-username').value = loggedInUsername;
        document.getElementById('profile-name').value = loggedInUsername;
    }

    if (storedName) document.getElementById('profile-name').value = storedName;
    if (storedEmail) document.getElementById('email').value = storedEmail;
    if (storedUsername) document.getElementById('profile-username').value = storedUsername;
    if (storedProfilePic) {
        profilePic.src = storedProfilePic;
        displayProfilePic.src = storedProfilePic;
    }
});
