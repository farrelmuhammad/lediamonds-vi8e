import React from "react";

const Products = () => {
  return (
    <>
     <section class="h-100 w-100 bg-white" style="box-sizing: border-box;">
    
    <div class="content-3-1 container-xxl mx-auto position-relative" style="font-family: 'Poppins', sans-serif">
      <div class="d-flex flex-lg-row flex-column align-items-center">
        {/* <!-- Left Column --> */}
        <div class="img-hero text-center justify-content-center d-flex">
          <img id="hero" class="img-fluid"
            src="./img/img-hero2.png"
            alt="" />
        </div>

        {/* <!-- Right Column --> */}
        <div class="right-column d-flex flex-column align-items-lg-start align-items-center text-lg-start text-center">
          <h2 class="title-text">Panduan Pengisian Mental Health Test</h2>
          <ol class="p-0 m-0">
            <li style="margin-bottom: 1rem" aria-level="1"> 
              <p class="text-caption">
                Pilih jawaban yang menggambarkan kondisi kamu sebenarnya.<br class="d-sm-inline d-none" />
                Tidak ada jawaban yang benar atau salah.
                </p>
            </li>
            <li style="margin-bottom: 1rem" aria-level="1">
              <p class="text-caption">
                Pengerjaan tes tidak dibatasi waktu sehingga kamu dapat<br class="d-sm-inline d-none" />
                menggunakan waktumu semaksimal mungkin.
              </p>
            </li>
            <li style="margin-bottom: 1rem" aria-level="1">
              <p class="text-caption">
                Cari tempat yang nyaman dan kondusif selama mengerjakan tes <br class="d-sm-inline d-none" />
                agar lebih fokus selama menjawab setiap pertanyaannya.
              </p>
            </li>
            <li style="margin-bottom: 1rem" aria-level="1">
              <p class="text-caption">
                Jika keluar, maka seluruh proses tes dan jawaban akan hilang.<br class="d-sm-inline d-none" />
                Silakan mengisi ulang dari awal.
              </p>
            </li>
            <li style="margin-bottom: 1rem" aria-level="1">
              <p class="text-caption">
                Setelah semua pertanyaan diisi dengan lengkap, hasil akan <br class="d-sm-inline d-none" />
                muncul di halaman. Mohon ditunggu, ya!
              </p>
            </li>
        </ol>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Products;
