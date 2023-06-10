import Header from "@/components/Header";
import Container from "@/components/Container";
import useLocalStorageState from "use-local-storage-state";
import Entries from "@/components/Entries";
import Form from "@/components/Form";
import { uid } from "uid";

export default function Home() {
  const [entries, setEntries] = useLocalStorageState("personalEntries", {
    defaultValue: [
      {
        id: "00000000",
        title: "Beispiel-Titel",
        text: "Hier könnte dein Beitrag stehen. Trage schnell etwas ins Formular ein um zu starten!",
        date: "09.06.2023",
        isFavorite: false,
      },
    ],
  });

  function handleNewEntry(dataNewEntry) {
    const NewEntry = {
      id: uid(),
      title: dataNewEntry.formInput,
      text: dataNewEntry.formTextarea,
      date: new Date().toLocaleDateString("de-DE"),
      isFavorite: false,
    };
    setEntries([NewEntry, ...entries]);
  }

  function handleBookmark(id) {
    const newEntries = entries.map((entry) => {
      if (entry.id != id) return entry;
      return { ...entry, isFavorite: !entry.isFavorite };
    });
    setEntries(newEntries);
  }

  return (
    <>
      <Header title="JOURNAL in Next.js" />
      <Container direction="column" align="center">
        <Form handleNewEntry={handleNewEntry} />
        <Container direction="column" align="center">
          <p>tabBar</p>
          <Container direction="column" align="center">
            <Entries entries={entries} handleBookmark={handleBookmark} />
          </Container>
        </Container>
      </Container>
    </>
  );
}
