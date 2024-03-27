let number = document.getElementById('faqbox');
number.addEventListener('click', function () {
    faqbox.style.height = "140px";
    faqbox.innerText = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"

});
 number.addEventListener('mouseout', function() {
    faqbox.style.height = "35px"
    faqbox.innerText = "What is Netflix?"
    
     let image = document.createElement('img');
     image.src = 'https://cdn.hugeicons.com/icons/plus-sign-stroke-rounded.svg'; // Replace 'your_image_url.jpg' with the actual image URL
     faqbox.appendChild(image);
});


let number1 = document.getElementById('faqbox1');
number1.addEventListener('click', function () {
    faqbox1.style.height = "130px";
    faqbox1.innerText = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts."

});
number1.addEventListener('mouseout', function () {
    faqbox1.style.height = "35px"
    faqbox1.innerText = "How much does Netflix cost"
});


let number2 = document.getElementById('faqbox2');
number2.addEventListener('click', function () {
    faqbox2.style.height = "200px";
    faqbox2.innerText = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
});
number2.addEventListener('mouseout', function () {
    faqbox2.style.height = "35px"
    faqbox2.innerText = "Where can i watch"

});


let number3 = document.getElementById('faqbox3');
number3.addEventListener('click', function () {
    faqbox3.style.height = "120px";
    faqbox3.innerText = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."

});
number3.addEventListener('mouseout', function () {
    faqbox3.style.height = "35px"
    faqbox3.innerText = "How do i cancel?"
});


let number4 = document.getElementById('faqbox4');
number4.addEventListener('click', function () {
    faqbox4.style.height = "140px";
    faqbox4.innerText = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."

});

number4.addEventListener('mouseout', function () {
    faqbox4.style.height = "35px"
    faqbox4.innerText = "What can i watch on Netflix"
});


let number5 = document.getElementById('faqbox5');
number5.addEventListener('click', function () {
    faqbox5.style.height = "140px";
    faqbox5.innerText = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."

});
number5.addEventListener('mouseout', function () {
    faqbox5.style.height = "35px"
    faqbox5.innerText = "Is Netflix good for Kids"
});