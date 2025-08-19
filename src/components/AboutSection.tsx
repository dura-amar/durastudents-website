import TimelineItem from "./common/TimelineItem";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="fade-in">
          <h2 className="text-3xl font-bold mb-4">About DSS</h2>
          <p className="mb-4">
            Dura Students Society (DSS) is a registered NGO based in Lamjung,
            Nepal. We work with elders, youth, and partners to revitalize the
            Dura language and celebrate our cultural heritage through classes,
            documentation, publications, and events.
          </p>
          <ul className="space-y-2 list-disc pl-6">
            <li>Registered NGO; community-led and youth-driven</li>
            <li>Language education & orthography support</li>
            <li>Cultural documentation and publications</li>
            <li>Community events and advocacy</li>
          </ul>
        </div>

        <div className="fade-in">
          <img
            src="images/about-dss.JPG"
            alt="About DSS"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
        <div className="relative border-s-2 border-gray-200 pl-6 space-y-8">
          <TimelineItem
            year="2018"
            title="Community gatherings and first youth group"
          />
          <TimelineItem year="2021" title="DSS formally registered as an NGO" />
          <TimelineItem
            year="2023"
            title="Launched language classes & oral history project"
          />
          <TimelineItem
            year="2025"
            title="Publishing beginner resources & mobile learning pilot"
          />
        </div>
      </div>
    </section>
  );
}
