document.getElementById('profile-submission-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const handle = document.getElementById('handle').value;
    const bio = document.getElementById('bio').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const { data, error } = await supabase
        .from('profiles')
        .insert([{ name, handle, bio, category, location, email, phone }]);

    if (error) {
        alert('Submission failed: ' + error.message);
    } else {
        alert('Profile submitted successfully!');
        this.reset();
    }
});
