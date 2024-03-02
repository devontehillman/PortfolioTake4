
    var i = 0;
    var txt = 'I am seeking a challenging software developer position where I can apply my foundational knowledge of object-oriented programming, web development, and passion for creating maintainable code. My career goals are focused on securing an internship that will allow me to gain first-hand experience in what it’s like to contribute to a team of experienced developers. As a current student pursuing a bachelor’s degree in computer science and a graduate of a 6-month intensive web design program, I have acquired a range of technical and analytical skills that will enable me to make valuable contributions.';
    var speed = 20;
    
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typed-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    window.onload = typeWriter;
