import Image from "next/image";
const icons = [
  { src: "/notion.svg", alt: "Notion" },
  { src: "/docs.svg", alt: "Google Docs" },
  { src: "/calendar.png", alt: "Google Calendar" },
    { src: "/calendar.png", alt: "Google Calendar" },
  { src: "/gpt.png", alt: "Slack" },
    { src: "/attract.png", alt: "Slack" },
    { src: "/food.png", alt: "Slack" },
    { src: "/food.png", alt: "Slack" },
    { src: "/food.png", alt: "Slack" },
    { src: "/food.png", alt: "Slack" },
    { src: "/food.png", alt: "Slack" },
    { src: "/food.png", alt: "Slack" },
    { src: "/food.png", alt: "Slack" },
    { src: "/accelerate.png", alt: "Slack" },
    { src: "/age.png", alt: "Slack" },




];

export default function Slider() {

  const loopIcons = [...icons, ...icons];

  return (
    <div className="w-full bg-black py-8">
      <div className="mx-auto flex w-full items-center gap-6 px-4">
        <div className="relative flex-1 w-full overflow-hidden items-center">
          <div className="marquee-track flex gap-20">
            {loopIcons.map((icon, idx) => (
              <div key={idx} className="shrink-0">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
