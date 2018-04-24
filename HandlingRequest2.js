function Pesan(idPesanan,timeout) {
    console.log("ID Pesanan: "+idPesanan);
    ProsesPesan(idPesanan,timeout);
}

function ProsesPesan(idPesanan,timeout){
    setTimeout(function () {
        console.log("ID Pesanan: "+idPesanan+" telah di proses.");
    },timeout);
}

Pesan(10,4000);
Pesan(20,2000);
Pesan(30,3000);