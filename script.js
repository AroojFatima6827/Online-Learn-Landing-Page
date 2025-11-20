

const Boxes = document.querySelectorAll(".Box1");
Boxes.forEach((box) => {
  const Img = box.querySelector(".avater");

  // Hover in
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "hsl(34, 100%, 50%)";
    Img.src = "AvaterTwo.png";
    box.style.border = "none";
    box.style.color = "white";
  });

  // Hover out
  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
    Img.src = "AvaterOne.png";
    box.style.border = "";
    box.style.color = "";
  });
});


const Dots = document.querySelectorAll(".dot1");
const TestimonialImage = document.querySelector(".Testimonial-img");
const Name = document.querySelector(".Name");

// Images aur names list
const images = [
  "Testimonial-Img1.png",
  "Testimonial-Img2.png",
  "Testimonial-Img3.png"
];

const names = [
  "Haya Fatima",
  "Zara Khan",
  "Hina Malik"
];

Dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    TestimonialImage.src = images[index];
    Name.textContent = names[index];

    // Remove bg from all
    Dots.forEach(d => {
      d.classList.remove("bg-cyan-400");
      d.classList.add("border-2", "border-cyan-400");
    });

    // Add bg to active
    dot.classList.remove("border-2", "border-cyan-400");
    dot.classList.add("bg-cyan-400");
  });
});
