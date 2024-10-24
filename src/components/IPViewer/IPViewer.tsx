interface Section {
  title: string;
  data: string;
}

const IPSection = ({ title, data }: Section) => {
  console.log(title);
  return (
    <div className="w-full h-8 mx-2 my-4">
      <h5 className="text-ashgray text-center text-xs font-bold"> {title}</h5>
      <h3 className="text-black text-center text-2xl font-bold"> {data} </h3>
    </div>
  );
};

const sections = ["IP ADDRESS", "LOCATION", "TIMEZONE", "ISP"];
export default function IPViewer() {
  return (
    <div className="h-fit shadow-xl w-full md:w-56 bg-foreground rounded-xl flex flex-col p-2">
      {sections.map((section) => (
        <IPSection key={section} title={section} data="Mock" />
      ))}
    </div>
  );
}
