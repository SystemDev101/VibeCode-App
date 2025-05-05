const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        document.getElementById("splash").style.display = 'none';
        document.location.href = 'Welcome.html';
    }, 10000);
})

/* Grade Selector */

function selectGrade(grade) {
    alert(`Grade ${grade} selected! Redirecting to appropriate resources...`);
}

