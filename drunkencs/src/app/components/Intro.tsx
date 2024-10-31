type Props = {
  header: string;
  summary: string;
};

export default function Intro({ header, summary }: Props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center m-auto">
      <h1 className="text-4xl font-sans">{header}</h1>
      <p>{summary}</p>
    </div>
  );
}
