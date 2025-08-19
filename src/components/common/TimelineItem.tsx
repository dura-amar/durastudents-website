interface TimelineItemProps {
  year: string;
  title: string;
}

export default function TimelineItem({ year, title }: TimelineItemProps) {
  return (
    <div>
      <div className="text-sm text-gray-500">{year}</div>
      <div className="font-semibold">{title}</div>
    </div>
  );
}
