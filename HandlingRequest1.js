function  Pesan(idPesanan) {
    console.log("ID Pesanan " +idPesanan);
    ProsesPesan(idPesanan)
}


function ProsesPesan(idPesanan){
    setTimeout(function() {
            console.log("ID Pesanan "+idPesanan+ " telah diproses.")
        }, 5000)
}

Pesan(10);
Pesan(20);
Pesan(30);