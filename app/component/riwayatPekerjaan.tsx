import RowRiwayat from "./rowRiwayat";

export default function RiwayatPekerjaan(){
    return(
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
        <h2  className="text2x1">Riwayat Pekerjaan</h2>
        </div>
        <RowRiwayat Instansi="Google" Jabatan="UI/UX Designer" tahun="2025-2028"/>
        <RowRiwayat Instansi="Bandung Insight" Jabatan="Social Media Specialist" tahun="2023-Sekarang"/>
        </div>
    );
};