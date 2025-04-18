import { useRef } from "react";

function GlowCard({ card, children, index }) {
  const cardRefs = useRef([]);

  /**
   * Handle mouse enter event for the card at the given index.
   * This function will calculate the angle from the center of the card
   * to the mouse position and set the CSS variable --start to that angle
   * plus 60 degrees so that the glow effect starts at the correct position.
   * @param {number} index - The index of the card to handle mouse enter for.
   * @return {function} - A function that takes a mouse event as an argument.
   */
  const handleMouseEnter = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    //Get the mouse position relative to the  card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //calc the angle from the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360; // Normalize angle to be between 0 and 360 degrees

    card.style.setProperty("--start", angle + 60);
  };
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseEnter(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
}

export default GlowCard;
