import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://i.etsystatic.com/11651126/r/il/d76bf6/5753982272/il_600x600.5753982272_41ig.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://i.etsystatic.com/43790300/r/il/15e507/6401998736/il_600x600.6401998736_tv40.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.etsystatic.com/54757727/c/1307/1307/345/381/il/0ec30b/6294906136/il_600x600.6294906136_chtg.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.etsystatic.com/ij/733dca/6586968809/ij_600x600.6586968809_q0zid5sd.jpg?version=0",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.etsystatic.com/25304800/r/il/b9d4bd/6297597679/il_600x600.6297597679_bc6n.jpg",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.etsystatic.com/11118406/c/2048/2048/0/0/il/4e57ad/3571041628/il_600x600.3571041628_d0kp.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
}) => {
  return (
    <figure
      className={cn(
        "relative w-28 md:w-64 cursor-pointer overflow-hidden rounded-xl ",
        
      )}
    >
        <img className="rounded-lg object-cover w-full" alt="" src={img} />
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-fit md:h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:60s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="hidden md:flex [--duration:40s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
