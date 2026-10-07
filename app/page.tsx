import Navbar from "@/components/navbar";
import ProgressBar from "@/components/progress_bar";
import Formulario from "@/components/formulario";
import Timer from "@/components/timer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <ProgressBar />
      
      <Formulario />

      <Timer />
    </div>
  );
}
