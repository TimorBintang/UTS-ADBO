class Cuti{
    constructor(nama,pengajuan){
        this.nama = nama;
        this.pengajuan = pengajuan;
    }
    max(){
        return 0;
    }
    validasipengajuan(){
        return "";
    }
    info(){
        console.log(`\n==========${this.jenis}=========`)
        console.log(`Nama Karyawan      = ${this.nama}`)
        console.log(`jumlah pengajuan   = ${this.pengajuan}`)
        console.log(`Maksimal pengajuan = ${this.max()}`)
        console.log(`Validasi pengajuan = ${this.validasipengajuan()}\n`)
    }

}


class CutiTahunan extends Cuti{
    constructor(nama,pengajuan){
        super(nama,pengajuan)
        this.jenis = "Cuti Tahunan";
    }

    max(){
        return 12;
    }

    validasipengajuan(){
        if(this.pengajuan <= this.max()){
            return "pengajuan diterima"
        }
        else{
            return "Kuota anda tidak cukup untuk mengajukan cuti ini"
        }
    }
    
}


class CutiSakit extends Cuti{
    constructor(nama,pengajuan){
        super(nama,pengajuan)
        this.jenis = "Cuti Sakit";
    }

    max(){
        return 2;
    }

   validasipengajuan(){
        if(this.pengajuan <= this.max()){
            return "pengajuan diterima"
        }
        else{
            return "Kuota anda tidak cukup untuk mengajukan cuti ini"
        }
    }
}


class CutiMelahirkan extends Cuti{
    constructor(nama,pengajuan){
        super(nama,pengajuan)
        this.jenis = "Cuti Melahirkan";
    }

    max(){
        return 90;
    }

    validasipengajuan(){
        if(this.pengajuan <= this.max()){
            return "pengajuan diterima"
        }
        else{
            return "Kuota anda tidak cukup untuk mengajukan cuti ini"
        }
    }
}



//Cuti Tahunan Diterima
const ct1 = new CutiTahunan("Timor Bintang",11)
ct1.info();

//Cuti Tahunan Ditolak
const ct2 =  new CutiTahunan("Timor Bintang",24)
ct2.info();

//Cuti Sakit Diterima
const cs1 = new CutiSakit("Andi surandi",2)
cs1.info();

//Cuti Sakit Ditolak
const cs2 = new CutiSakit("Andi Surandi",4)
cs2.info();

//Cuti Melahirkan Diterima
const cm1 = new CutiMelahirkan("Siti Suriti",78)
cm1.info();

//Cuti Melahirkan Ditolak
const cm2 = new CutiMelahirkan("Siti Suriti",100)
cm2.info();