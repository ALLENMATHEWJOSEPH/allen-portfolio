import BgGlowContainer from "./bg-glow-container";
import { Button } from "./ui/button";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32">
      <div className="flex justify-center">
        <BgGlowContainer className="opacity-75">
          <a href="mailto:allenmathewjoseph.work@gmail.com">
            <Button
              variant={"home"}
              className="relative ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start p-6 text-secondary"
            >
              <div className="flex gap-2">
                <p>Send me a message</p>
              </div>
            </Button>
          </a>
        </BgGlowContainer>
      </div>
    </section>
  );
};