interface ImpactCardProps {
  number: string;
  label: string;
  bgColor: string;
}

export default function ImpactCard({
  number,
  label,
  bgColor,
}: ImpactCardProps) {
  return (
    <div className={`p-6 rounded-xl ${bgColor}`}>
      <div className="text-4xl font-bold">{number}</div>
      <div className="text-sm mt-1">{label}</div>
    </div>
  );
}
