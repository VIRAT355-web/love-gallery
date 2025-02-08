
let highestZ = 1;

class Paper {
  constructor(paper) {
    this.paper = paper;
    this.holdingPaper = false;
    this.startX = 0;
    this.startY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.rotation = Math.random() * 30 - 15;
    this.init();
  }

  init() {
    this.paper.style.transform = `rotate(${this.rotation}deg)`;
    this.paper.style.zIndex = highestZ++;

    // Mouse Events
    this.paper.addEventListener("mousedown", (e) => this.startDrag(e));
    document.addEventListener("mousemove", (e) => this.drag(e));
    document.addEventListener("mouseup", () => this.endDrag());

    // Touch Events
    this.paper.addEventListener("touchstart", (e) => this.startDrag(e.touches[0]));
    document.addEventListener("touchmove", (e) => this.drag(e.touches[0]));
    document.addEventListener("touchend", () => this.endDrag());
  }

  startDrag(e) {
    e.preventDefault();
    this.holdingPaper = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.offsetX = this.currentX;
    this.offsetY = this.currentY;
    this.paper.style.zIndex = highestZ++;
  }

  drag(e) {
    if (!this.holdingPaper) return;
    e.preventDefault();
    this.currentX = this.offsetX + (e.clientX - this.startX);
    this.currentY = this.offsetY + (e.clientY - this.startY);
    this.paper.style.transform = `translate(${this.currentX}px, ${this.currentY}px) rotate(${this.rotation}deg)`;
  }

  endDrag() {
    this.holdingPaper = false;
  }
}

// Initialize all paper elements
const papers = document.querySelectorAll(".paper");
papers.forEach((paper) => new Paper(paper));
