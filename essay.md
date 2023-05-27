1. Jelaskan perbedaan cookies dan local storage? Kapan menggunakan cookies/local storage?

Cookies:
- Cookies adalah file kecil yang disimpan di sisi klien (misalnya, di browser pengguna) oleh server web.
- Cookies dikirimkan dan diterima bersama setiap permintaan HTTP dan respons antara server dan klien.
- Cookies memiliki kapasitas penyimpanan yang relatif kecil, biasanya beberapa kb.
- Cookies dapat diatur dengan waktu kedaluwarsa, sehingga dapat bertahan selama durasi tertentu atau hingga dihapus secara manual oleh pengguna.
- Cookies dapat digunakan untuk menyimpan informasi seperti preferensi pengguna, riwayat pembelian, atau informasi otentikasi untuk mengenali pengguna.

Local storage:
- Local storage adalah mekanisme penyimpanan data sisi klien yang lebih baru dan lebih kuat yang diperkenalkan oleh HTML5.
- Local storage menyediakan kapasitas penyimpanan yang lebih besar dibandingkan dengan cookies, biasanya beberapa mb.
- Data yang disimpan di local storage tidak dikirimkan ke server bersama setiap permintaan HTTP, mengurangi beban lalu lintas jaringan.
- Data local storage tetap ada bahkan jika pengguna menutup browser dan membuka kembali website.
- Data local storage dapat diakses dan dimanipulasi menggunakan JavaScript.

Kapan menggunakan cookies/local storage:

- Cookies umumnya digunakan ketika data perlu dikirimkan ke server bersama setiap permintaan HTTP, seperti informasi otentikasi atau preferensi yang perlu diakses oleh server.
- Local storage digunakan ketika data hanya diperlukan di sisi klien dan tidak perlu dikirimkan ke server bersama setiap permintaan, seperti data yang digunakan untuk menyimpan preferensi pengguna atau riwayat aktivitas yang tidak perlu diakses oleh server.

2. Jelaskan bagaimana kamu mengamankan GUI dari serangan siber. Hal apa saja yang perlu diperhatikan?

Untuk mengamankan GUI dari serangan siber, perhatikan hal-hal berikut:
- Validasi input: Pastikan semua input yang diterima dari pengguna telah divalidasi untuk mencegah serangan seperti script injection atau karakter yang tidak diizinkan.
- Penggunaan protokol HTTPS: Gunakan protokol HTTPS untuk mengenkripsi komunikasi antara klien dan server, sehingga data yang dikirimkan tidak mudah diintersepsi atau dimanipulasi oleh pihak yang tidak berwenang.
- Pengelolaan sesi: Implementasikan mekanisme otentikasi yang kuat untuk memastikan hanya pengguna yang sah yang dapat mengakses GUI dan melakukan operasi yang diizinkan.
- Pembatasan akses: Berikan akses yang tepat kepada pengguna atau peran pengguna, sehingga hanya fitur atau data yang relevan yang dapat diakses oleh pengguna yang berwenang.
- Pembaruan perangkat lunak: Pastikan sistem operasi, perangkat keras, perangkat lunak GUI, dan dependensi lainnya selalu diperbarui dengan patch keamanan terbaru untuk mengatasi kerentanan yang diketahui.

3. Apakah sebuah aplikasi front-end web dapat dijadikan aplikasi desktop/mobile? Jelaskan.

Ya, sebuah aplikasi front-end web dapat diubah menjadi aplikasi desktop atau mobile dengan menggunakan beberapa pendekatan. Salah satu pendekatan yang umum adalah menggunakan teknologi seperti React Native atau Flutter, yang memungkinkan pengembang menggunakan bahasa pemrograman web (misalnya, JavaScript) untuk mengembangkan aplikasi mobile yang dapat berjalan di berbagai sistem operasi. Selain itu, dengan menggunakan alat seperti Electron, pengembang dapat mengemas aplikasi front-end web ke dalam aplikasi desktop yang dapat dijalankan di platform seperti Windows, macOS, atau Linux. Pendekatan ini memungkinkan pengembang untuk menggunakan kode yang sama untuk mengembangkan aplikasi front-end web dan aplikasi desktop/mobile.

4. Misalkan pada sebuah website, terdapat sebuah div kecil A yang berada dalam div yang lebih besar B. Jelaskan bagaimana cara kamu menempatkan div A berada di tengah-tengah div B sehingga posisinya tepat di tengah secara vertikal. Apa saja yang perlu diperhatikan?

Untuk menempatkan div A di tengah-tengah div B secara vertikal, perhatikan langkah-langkah berikut:
- Pastikan div yang lebih besar (div B) memiliki properti CSS display: flex. Ini akan mengaktifkan flexbox pada div tersebut.
- Properti align-items: center akan memposisikan elemen-elemen di dalam div B secara vertikal tengah.
- Selanjutnya, Properti align-self: center akan memposisikan div A secara vertikal tengah di dalam div B.

Berikut adalah implementasinya:

.divB{
  display: flex;
  align-items: center;
}

.divA{
  align-self: center;
}

5. Sebutkan sebuah framework UI yang kamu sangat sukai, jelaskan mengapa kamu menyukainya.

Salah satu framework UI yang saya sangat sukai adalah ReactJS. Saya menyukainya karena:
- Pendekatan berbasis komponen: ReactJS menggunakan pendekatan berbasis komponen, yang memungkinkan pengembang memecah antarmuka pengguna menjadi komponen-komponen kecil yang dapat dikelola secara terpisah. Ini membuat pengembangan lebih terstruktur, memudahkan pemeliharaan, dan meningkatkan reusabilitas kode.
- Virtual DOM: ReactJS menggunakan Virtual DOM untuk mengoptimalkan pembaruan antarmuka pengguna. Virtual DOM memungkinkan ReactJS untuk melakukan pembaruan hanya pada bagian yang berubah, daripada seluruh halaman. Ini menghasilkan performa yang lebih baik dan pengalaman pengguna yang responsif.
- Ekosistem yang kuat: ReactJS memiliki ekosistem yang luas dan aktif. Terdapat banyak library  yang tersedia untuk mempermudah dan mempercepat pengembangan.
- Komunitas yang besar: ReactJS memiliki komunitas pengembang yang besar dan aktif, yang berarti ada banyak sumber daya, tutorial, dan dukungan yang tersedia. Hal ini memudahkan untuk mencari solusi dan berbagi pengetahuan dengan komunitas.
