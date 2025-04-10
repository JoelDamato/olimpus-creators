export default function UnblockNow({
  textPart1 = "DESBLOQUEA AHORA (USD 14.99)",
  textPart2,
  textPart3,
  textSize = "text-[3.3cqw] md:text-[40px]",
  padding = "mr-2 md:mr-9",
   scrollToId = ""
}) {
  const finalText = !textPart2 && !textPart3 ? textPart1 : null;

  const handleClick = (e) => {
    if (scrollToId) {
      e.preventDefault();
      const target = document.getElementById(scrollToId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <a
     href={scrollToId ? `#${scrollToId}` : "https://pay.hotmart.com/F98750477I?checkoutMode=10&bid=1744301313767"}
     onClick={handleClick}
     target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-4xl animate-reverse-pulse"
    >
      <div
        className="relative w-full max-w-4xl bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/4ZVTPYyC/CTA-1.png')",
          aspectRatio: "5 / 1", 
        }}
      >
        <div
          className={`absolute inset-0 flex items-center justify-end ${padding} text-white font-bold font-cincel
           ${textSize}`}
        >
          {finalText ? (
            finalText
          ) : (
            <div className="flex flex-col text-right">
              <p className="text-[3.8cqw]">{textPart2}</p>
              <p className="text-[3cqw] font-light">{textPart3}</p>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
