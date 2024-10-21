import Hero from "./component/hero";
import RiwayatPekerjaan from "./component/riwayatPekerjaan";
import RiwayatPendidikan from "./component/riwayatPendidikan";
import RowRiwayat from "./component/rowRiwayat";
import FavColor from "./component/favColor";
import Contactme from "./component/contactme";
import "./sinta-styles.css";


export default function CV() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <FavColor/>
      <Contactme/>
    </section>
  );
}
