const particleContainer = document.querySelector(".particle-container");
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particleContainer.appendChild(particle);
  const size = Math.random() * 10 + 2; // 随机大小
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.backgroundColor = "rgba(255, 192, 203, 0.5)"; // 粉色粒子
  particle.style.position = "absolute";
  particle.style.borderRadius = "50%"; // 圆形
  particle.style.opacity = Math.random(); // 随机透明度
  particle.style.top = `${Math.random() * 100}vh`; // 随机位置
  particle.style.left = `${Math.random() * 100}vw`; // 随机位置
  animateParticle(particle);
}

function animateParticle(particle) {
  const animationDuration = Math.random() * 3 + 2; // 随机动画时长
  const translateX = Math.random() * 100 - 50; // 随机横向移动
  const translateY = Math.random() * 100 - 50; // 随机纵向移动

  particle.animate(
    [
      { transform: `translate(0, 0)` }, // 起始位置
      { transform: `translate(${translateX}px, ${translateY}px)` }, // 结束位置
    ],
    {
      duration: animationDuration * 1000,
      iterations: Infinity, // 无限循环
      direction: "alternate", // 交替方向
      easing: "ease-in-out", // 动画缓动效果
    }
  );
}
