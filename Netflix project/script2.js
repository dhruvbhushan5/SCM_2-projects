let box = document.createElement("div");
box.id = "box"; // Set id for styling
box.innerText = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week.";

let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.after(box);
});