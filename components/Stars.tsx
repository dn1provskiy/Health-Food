import { IconStar } from "./icons";

export const Stars = ({ star }: { star: number }) => {
  const starItems = new Array(5).fill(false);
  return (
    <div className="flex pt-[3px] gap-0.5">
      {starItems.map((_, i) => (
        <IconStar key={i} style={i + 1 <= star ? "#DC780B" : "#EDEDED"} />
      ))}
    </div>
  );
};
