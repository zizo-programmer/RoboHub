const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach (entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer1.unobserve(entry.target);
        }

            
    
    });

    }, {threshold: 0.5});
    observer1.observe(document.querySelector(".contact-icon"));


const lines = [
  "At RoboHub, we believe that the future belongs to those who understand technology.",
  "Our mission is to empower individuals through Artificial Intelligence and Robotics education.",
  "Whether you're a beginner or an advanced learner, our platform offers rich content,",
  "tutorials, and hands-on projects that bring knowledge to life.",
  "Join our journey to reshape the future.",
  "Smart. Learn fast. Learn with RoboHub.",
];

const container = document.getElementById("typing-section");
let currentLine = 0;
let currentChar = 0;
let typingSpeed = 40;

function typeLine() {
  if (currentLine >= lines.length) return;

  const lineText = lines[currentLine];

  const lineWrapper = document.createElement("p");
  lineWrapper.style.fontFamily = "Poppins";
  lineWrapper.style.fontSize = "17px";
  lineWrapper.style.color = "white";
  lineWrapper.style.fontStyle = "italic";
  lineWrapper.style.display = "block";
  lineWrapper.style.lineHeight="1.5";
  lineWrapper.style.whiteSpace="normal";
  lineWrapper.style.overflowWrap="break-word";
  lineWrapper.style.wordBreak="break-word";
  lineWrapper.style.width="100%";
  lineWrapper.style.maxWidth="100%";
  const textSpan = document.createElement("span");
  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  cursor.textContent = "|";

  lineWrapper.appendChild(textSpan);
  lineWrapper.appendChild(cursor);
  container.appendChild(lineWrapper);

     
  function typeChar() {
    if (currentChar < lineText.length) {
     
      textSpan.textContent += lineText.charAt(currentChar);
      currentChar++;
      if(currentChar ===1 && !cursor.isConnected){
        lineWrapper.appendChild(cursor);
      }
      setTimeout(typeChar, typingSpeed);
    } else {
      if(cursor.isConnected) cursor.remove();
      currentLine++;
      currentChar = 0;
      setTimeout(typeLine, 600);
    }
  }

  typeChar();
} 
const observer2 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    typeLine();
    observer2.disconnect();
  }
}, { threshold: 0.5 });

observer2.observe(container);
   
const style = document.createElement("style");
style.textContent = `
  .cursor {
    display: inline-block;
    width: 1px;
    height: 1em;
    background-color: none;
    margin-left: 2px;
    animation: blink 0.8s infinite;
    vertical-alighn :baseline;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);
 document.getElementById("Login").addEventListener("click", function(){
  window.location.href="login.html";
window.scrollTo(0,0);
 });
document.head.appendChild(style);
 document.getElementById("button1").addEventListener("click", function(){
  window.location.href="Getstarted.html";
window.scrollTo(0,0);
 });


 