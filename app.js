const courseNames = [
    "Supervised Machine learning and Linear Regression.",
    "Programming for everybody (Getting started with python)",
    "Leading team (Team management course)",
    "Powerful mental tools to help you master though subjects",
    "Python for Data Analysis (Pandas)",
    "Improve your speaking skills (English)",
]

const courseImages = [
    './static/images/laptop.jpg',
    './static/images/python.jpg',
    './static/images/team.jpg',
    './static/images/code.jpg',
    './static/images/python-book.jpg',
    './static/images/english.jpg',
]

const authorNames = [
    'Harry Willington',
    'Bryce Collins',
    "Marshall Mathers",
    "Shabir Khanabali",
    "Aaron Wells",
    "Casey Stanson"
]

const courseParent = document.querySelector(".cardContainer");

for (let i in courseNames) {
    const childToAppend = `<div class="card" style="background-image: url(${courseImages[i]})">
    <div class="details">
        <p>x25 lessons</p>
        <h3>${courseNames[i]}</h3>
        <hr>
            <div class="dev">
                <h5>${authorNames[i]}</h5>
                <h6>Instructor</h6>
            </div>
        </div>
    </div>`
    setTimeout(() => {
        courseParent.insertAdjacentHTML("beforeend", childToAppend)
    }, i * 150)
}