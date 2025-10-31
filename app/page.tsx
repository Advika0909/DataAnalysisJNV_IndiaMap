import IndiaMap from "@/components/IndiaMap";

export default function Home() {
  return (
    <main>
      <h1
  style={{
    textAlign: "center",
    margin: "10px 0",
    fontSize: "20px",
    fontWeight: "600",
    color: "#FFFFF",
    fontFamily: "'Segoe UI', Arial, sans-serif",
  }}
>
  📍 Jawahar Navodaya Vidyalayas Across India
</h1>


      <IndiaMap />
    </main>
  );
}
