document.addEventListener("DOMContentLoaded", function() {
    // set up text to print, each item in array is new line
    var aText = [
        "I am seeking a challenging software developer position where I can apply my foundational knowledge of object-oriented programming, web development, and passion for creating maintainable code. My career goals are focused on securing an internship that will allow me to gain first-hand experience in what it’s like to contribute to a team of experienced developers. As a current student pursuing a bachelor’s degree in computer science and a graduate of a 6-month intensive web design program, I have acquired a range of technical and analytical skills that will enable me to make valuable contributions.",
    ];
    var iSpeed = 28; // time delay of print out
    var iIndex = 0; // start printing array at this position
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines

    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

    function typewriter() {
        sContents = ' ';
        iRow = Math.max(0, iIndex - iScrollAt);
        var destination = document.getElementById("typed-text");

        while (iRow < iIndex) {
            sContents += aText[iRow++] + '<br />';
        }
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
        if (iTextPos++ == iArrLength) {
            iTextPos = 0;
            iIndex++;
            if (iIndex != aText.length) {
                iArrLength = aText[iIndex].length;
                setTimeout(typewriter, 500);
            }
        } else {
            setTimeout(typewriter, iSpeed);
        }
    }

    typewriter();
});