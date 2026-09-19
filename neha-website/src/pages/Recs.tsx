import PagePanel from "@/components/PagePanel";

const bodyClass = "text-[0.88rem] leading-snug md:text-[0.95rem]";
const sectionClass = `${bodyClass} mt-3 mb-0.5`;
const listClass =
  "list-disc ml-2.5 pl-5 md:ml-3.5 md:pl-6 mt-0.5 space-y-0.5 text-[0.88rem] leading-snug md:text-[0.95rem]";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={listClass}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Recs() {
  return (
    <PagePanel>
      <div className="mt-6 text-left md:mt-8">
        <p className={bodyClass}>
          Media that has meaningfully impacted the way I view the world.
        </p>

        <h2 className={sectionClass}>Literature</h2>
        <BulletList
          items={[
            "Simulacra and Simulation",
            "The Origin of the Family, Private Property, and the State",
            "Society of the Spectacle",
            "The Emotion Machine: Commonsense Thinking, Artificial Intelligence, and the Future of the Human Mind",
            "Atemwende (Breathturn)",
            "The Rigor of Angels: Borges, Heisenberg, Kant, and the Ultimate Nature of Reality",
            "Geometry of Grief: Reflections on Mathematics, Loss, and Life",
            "The Little Book of String Theory",
            "The Trial",
            "E Unibus Pluram: Television and U.S. Fiction",
            "Politics and the English Language",
            "Metamorphosis",
            "Frankenstein",
            "Flatland: A Romance of Many Dimensions",
            "The Fault in Our Stars",
          ]}
        />

        <h2 className={sectionClass}>Film</h2>
        <BulletList
          items={[
            "Good Will Hunting",
            "The Theory of Everything",
            "Eternal Sunshine of the Spotless Mind",
            "Forrest Gump",
            "The Trial of the Chicago 7",
            "Once Upon a Time in Hollywood",
            "The Perks of Being a Wallflower",
            "Manchester by the Sea",
            "Dead Poets Society",
          ]}
        />
      </div>
    </PagePanel>
  );
}
