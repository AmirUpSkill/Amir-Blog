interface ResumeSectionProps {
  title: string;
}

export function ResumeSection({ title }: ResumeSectionProps) {
  return (
    <h2 className="text-xl font-bold tracking-tight uppercase text-muted-foreground mt-8 mb-4 border-b pb-2">
      {title}
    </h2>
  );
}