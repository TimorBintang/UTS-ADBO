// --- 1. KELAS DASAR CUTI (INHERITANCE BASE) ---
class Cuti {
    constructor(nama, maxPerPengajuan) {
        this.nama = nama;
        this.maxPerPengajuan = maxPerPengajuan; 
    }

    validasi(hariDiajukan, sisaKuota) {
        if (sisaKuota < hariDiajukan) {
            console.log(`Gagal: Kuota ${this.nama} tidak cukup. (Sisa: ${sisaKuota})`);
            return false;
        }

        if (hariDiajukan > this.maxPerPengajuan) {
            console.log(`Gagal: Max ${this.nama} per pengajuan adalah ${this.maxPerPengajuan} hari.`);
            return false;
        }

        return true;
    }
}

// --- 2. KELAS TURUNAN (INHERITANCE) ---
class CutiTahunan extends Cuti {
    constructor() { super("Cuti Tahunan", 12); } // Kuota max per pengajuan: 12 hari
}

class CutiSakit extends Cuti {
    constructor() { super("Cuti Sakit", 2); } // Kuota max per pengajuan: 2 hari
}

class CutiMelahirkan extends Cuti {
    constructor() { super("Cuti Melahirkan", 90); } // Kuota max per pengajuan: 90 hari
}

// --- 3. KELAS KARYAWAN (POLIMORFISME) ---
class Karyawan {
    constructor(nama) {
        this.nama = nama;
        this.kuota = {
            "Cuti Tahunan": 12,
            "Cuti Sakit": 2,
            "Cuti Melahirkan": 90,
        };
    }

    ajukanCuti(jenisCuti, hari) {
        const namaCuti = jenisCuti.nama;
        const sisa = this.kuota[namaCuti];

        console.log(`\n--- Pengajuan ${namaCuti} oleh ${this.nama} (${hari} hari) ---`);
        if (jenisCuti.validasi(hari, sisa)) {
            this.kuota[namaCuti] -= hari;
            console.log(`Disetujui! Sisa Kuota: ${this.kuota[namaCuti]} hari.`);
        } else {
            console.log(`Sistem menolak pengajuan: "Kuota anda tidak cukup untuk mengajukan cuti ini"`);
        }
    }
}

// =========================================================
//                  DEMO PENGGUNAAN
// =========================================================

const budi = new Karyawan("Budi");
const tahunan = new CutiTahunan();
const sakit = new CutiSakit();

// Skenario 1: Cuti Tahunan Berhasil
budi.ajukanCuti(tahunan, 5); // Kuota Tahunan sisa 7 (12-5)

// Skenario 2: Cuti Sakit Gagal (Melebihi max per pengajuan)
budi.ajukanCuti(sakit, 3); // Gagal, max 2 hari

// Skenario 3: Cuti Tahunan Gagal (Kuota tidak cukup)
budi.ajukanCuti(tahunan, 8); // Gagal, sisa kuota hanya 7

console.log("\nKuota akhir Budi:", budi.kuota);