interface ResumeEntryProps {
  title: string;
  subtitle?: string;
  location?: string;
  date: string;
  descriptionPoints: string[];
  techStack?: string[];
}

export function ResumeEntry({
  title,
  subtitle,
  location,
  date,
  descriptionPoints,
  techStack,
}: ResumeEntryProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      {subtitle && (
        <div className="flex justify-between items-baseline">
            <p className="font-medium text-muted-foreground">{subtitle}</p>
            {location && <p className="text-sm text-muted-foreground">{location}</p>}
        </div>
      )}
      <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
        {descriptionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {techStack && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="font-semibold text-sm mr-2">Tech Stack:</span>
          {techStack.map((tech, index) => (
            <span key={index} className="rounded-md bg-secondary px-2 py-1 text-xs">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}