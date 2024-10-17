interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const TimelineEvent = ({
  year,
  title,
  description,
  icon: Icon,
}: TimelineEventProps) => (
  <div className="flex items-start mb-8">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 border-2 border-black flex items-center justify-center mr-4">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-xl font-bold">
        {year}: {title}
      </h3>
      <p>{description}</p>
    </div>
  </div>
);

export default TimelineEvent;
