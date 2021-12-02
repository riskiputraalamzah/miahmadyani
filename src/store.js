import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vp = new VuexPersist({
  storage: window.sessionStorage,
  key: "my-app",
});

const store = new Vuex.Store({
  strict: true,

  state: {
    activeMenu: null,
    titlePage: "MI. AHMAD YANI",
    titleOri: "MI. AHMAD YANI",
    isAdmin: false,
    dataArtikel: [
      {
        image:
          "https://ilfiwomen.org/wp-content/uploads/2020/10/artikel-pendidikan.jpg",
        category: ["pendidikan"],
        title: "Pendidikan Karakter Untuk Membangun Peradaban Bangsa",
        slug: "pendidikan-karakter-untuk-membangun-peradaban-bangsa",
        time: "20/08/2021 21:45",
        author: "admin",
        views: 153,
        text: `
        <div style="text-align: justify;">
   Peringatan Hari Pendidikan Nasional (Hardiknas) tahun 2010 mengangkat tema ‘Pendidikan Karakter untuk Membangun Keberadaban Bangsa’. Tema tersebut menunjukkan komitmen kementerian pendidikan nasional yang bertekad untuk melaksanakan revitalisasi pendidikan karakter.<br>
   <br>
   <span class="fullpost"> Pendidikan karakter sangat penting, hal ini sebagaimana disampaikan Mendiknas Mohammad Nuh, pendidikan karakter sebagai bagian dari upaya membangun karakter bangsa, karakter yang dijiwai nilai-nilai luhur bangsa.<br>
   <br>
   Mengapa pendidikan karakter menjadi demikian usrgen? Menurut beberapa pengamat menyatakan bahwa hal ini tak lepas dari kondisi karakter bangsa Indonesia makin lemah; makin banyak gejala penyalahgunaan kewenangan, kekuasaan, kecurangan, kebohongan, ketidakjujuran, ketidakadilan, ketidakpercayaan, mudah ditipu dan diprovokasi, kenakalan remaja, broken home dan sebagainya.<br>
   Dalam kontek regulasi pendidikan karakter adalah amanat dari UU No. 20 Tahun 2003 tentang sisdiknas. Pada pasal 3 disebutkan: Pendidikan nasional berfungsi mengembangkan kemampuan dan membentuk watak serta peradaban bangsa yang bermartabat dalam rangka mencerdaskan kehidupan bangsa, bertujuan untuk berkembangnya potensi peserta didik agar menjadi manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa, berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri, dan menjadi warga negara yang demokratis serta bertanggung jawab. Pada pasal ini 5 dari 8 potensi peserta didik yg ingin dikembangkan lebih dekat dengan karakter.<br>
   <br>
   Apa yang dimaksud dengan karakter itu? Menurut Prof Dr Herminarto Sofyan,&nbsp; Pembantu Rektor III UNY. ‘Karakter’ mempunyai banyak arti, di antaranya, kemampuan untuk mengatasi secara efektif situasi sulit, tak enak/tidak nyaman, atau berbahaya. Dengan pengertian tersebut karakter menuntut kecerdasan otak, kepekaan nurani, kepekaan diri dan lingkungan, kecerdasan merespons, dan kesehatan, kekuatan, dan kebugaran jasmani. Indikator kecerdasan otak antara lain, berilmu, berfikir logis dan kritis. Kepekaan nurani ditandai dengan adil, jujur, kasih sayang, empatik, ikhlas, berintegritas, santun, terpercaya, hormat, suka menolong dan dapat mengendalikan diri. Kepekaan diri dan lingkungan berarti peduli pada diri dan lingkungannya. Sedangkan kecerdasan merespons ditandai dengan sifat-sifat berani, rajin, disiplin, inisiatif, waspada dan motivasi. Sedangkan kesehatan, kekuatan dan kebugaran jasmani diperlukan pola hidup.<br>
   <br>
   Bagaimana cara mengimplementasikan pendidikan karakter? Menurut Lickona dkk (2007) terdapat 11 prinsip agar pendidikan karakter dapat berjalan efektif: (1) kembangkan nilai-nilai etika inti dan nilai-nilai kinerja pendukungnya sebagai fondasi karakter yang baik, (2) definisikan 'karakter' secara komprehensif yang mencakup pikiran, perasaan, dan perilaku, (3) gunakan pendekatan yang komprehensif, disengaja, dan proaktif dalam pengembangan karakter, (4) ciptakan komunitas sekolah yang penuh perhatian, (5) beri siswa kesempatan untuk melakukan tindakan moral, (6) buat kurikulum akademik yang bermakna dan menantang yang menghormati semua peserta didik, mengembangkan karakter, dan membantu siswa untuk berhasil, (7) usahakan mendorong motivasi diri siswa, (8) libatkan staf sekolah sebagai komunitas pembelajaran dan moral yang berbagi tanggung jawab dalam pendidikan karakter dan upaya untuk mematuhi nilai-nilai inti yang sama yang membimbing pendidikan siswa, (9) tumbuhkan kebersamaan dalam kepemimpinan moral dan dukungan jangka panjang bagi inisiatif pendidikan karakter, (10) libatkan keluarga dan anggota masyarakat sebagai mitra dalam upaya pembangunan karakter, (11) evaluasi karakter sekolah, fungsi staf sekolah sebagai pendidik karakter, dan sejauh mana siswa memanifestasikan karakter yang baik.<br>
   <br>
   Pendidikan karakter dilakukan dengan pendekatan yang komprehensif menggunakan semua aspek persekolahan sebagai peluang untuk pengembangan karakter. Ini mencakup apa yang sering disebut dengan istilah kurikulum tersembunyi, hidden curriculum (upacara dan prosedur sekolah; keteladanan guru; hubungan siswa dengan guru, staf sekolah lainnya, dan sesama mereka sendiri; proses pengajaran; keanekaragaman siswa; penilaian pembelajaran; pengelolaan lingkungan sekolah; kebijakan disiplin); kurikulum akademik, academic curriculum (mata pelajaran inti, termasuk kurikulum kesehatan jasmani), dan program-program ekstrakurikuler, extracurricular programs (tim olahraga, klub, proyek pelayanan, dan kegiatan-kegiatan setelah jam sekolah).<br>
   <br>
   <strong>Mungkinkah pendidikan karakter menjadi solusi permasalahan Bangsa?</strong><br>
   <br>
   Jawabnya sulit, atau bahkan tidak mungkin . paling tidak karena beberapa alasan berikut:<br>
   <br>
   1.Kesalahan menetapkan akar persoalan bangsa<br>
   <br>
   Dicetusknya program pendidikan karakter tidak terlepas dari paradigma akar masalah bangsa. Menurut pada pencetus ide ini masalah pundamental negeri ini adalah masalah moral. Untuk itulah maka perlu dilakukan perbaikan moral. Dalam Rencana Induk Pengembangan Pendidikan Karakter Bangsa yang dikeluarkan Kementerian Pendikan Nasional Republik Indonesia bahkan dikutip hadist nabi innama bu’itstu li utammima makaarima al akhlaq (sesungguhnya aku diutus untuk menyempurnakan akhlak) berangkat dari asumsi inilah maka dicetuskanlah program pendidikan karakter.<br>
   <br>
   Sesungguhnya asumsi ini adalah asumsi yang keliru. Memang benar persoalan moral adalah satu persoalan bangsa. Tapi bukan satu-satunya masalah dan bukan pula satu-satunya solusi bagi persoalan bangsa ini. Persoalan bangsa ini sedemikian komplek. Sudah menjadi pesoalan sistemik, dimana satu aspek saling kait mengkait dengan aspek kehidupan yang lain. Tapi yang menjadi inti dari sumber masalah di negeri ini adalah sekulerisme yang berasaskan fashlu ad din ‘an al hayah atau pemisahan agama (din al Islam) dari persoalan kehidupan. Hal ini Nampak baik dalam aspek perundang-undangan maupun dalam hal impelentasinya.<br>
   <br>
   Hal ini dapat dibuktikan antara lain pada UU Sisdiknas No. 20 tahun 2003 Bab VI tentang jalur, jenjang dan jenis pendidikan bagian kesatu (umum) pasal 15 yang berbunyi: Jenis pendidikan mencakup pendidikan umum, kejuruan, akademik, profesi, advokasi, keagaman, dan khusus. Dari pasal ini tampak jelas adanya dikotomi pendidikan, yaitu pendidikan agama dan pendidikan umum. Sistem pendidikan dikotomis semacam ini terbukti telah gagal melahirkan manusia salih yang berkepribadian Islam sekaligus mampu menjawab tantangan perkembangan melalui penguasaan sains dan teknologi.<br>
   <br>
   Secara kelembagaan, sekularisasi pendidikan tampak pada pendidikan agama melalui madrasah, institut agama, dan pesantren yang dikelola oleh Departemen Agama; sementara pendidikan umum melalui sekolah dasar, sekolah menengah, kejuruan serta perguruan tinggi umum dikelola oleh Departemen Pendidikan Nasional. Terdapat kesan yang sangat kuat bahwa pengembangan ilmu-ilmu kehidupan (iptek) dilakukan oleh Depdiknas dan dipandang sebagai tidak berhubungan dengan agama. Pembentukan karakter siswa yang merupakan bagian terpenting dari proses pendidikan justru kurang tergarap secara serius. Agama ditempatkan sekadar sebagai salah satu aspek yang perannya sangat minimal, bukan menjadi landasan dari seluruh aspek kehidupan.<br>
   <br>
   Hal ini juga tampak pada BAB X pasal 37 UU Sisdiknas tentang ketentuan kurikulum pendidikan dasar dan menengah yang mewajibkan memuat sepuluh bidang mata pelajaran dengan pendidikan agama yang tidak proposional dan tidak dijadikan landasan bagi bidang pelajaran yang lainnya.<br>
   <br>
   Ini jelas tidak akan mampu mewujudkan anak didik yang sesuai dengan tujuan dari pendidikan nasional sendiri, yaitu mewujudkan suasana belajar dan proses pembelajaran agar peserta didik secara aktif mengembangkan potensi dirinya untuk memiliki kekuatan spiritual keagamaan, pengendalian diri, kepribadian, kecerdasan, akhlak mulia, serta keterampilan yang diperlukan dirinya, masyarakat, bangsa dan negara. Kacaunya kurikulum ini tentu saja berawal dari asasnya yang sekular, yang kemudian mempengaruhi penyusunan struktur kurikulum yang tidak memberikan ruang semestinya bagi proses penguasaan tsaqafah Islam dan pembentukan kepribadian Islam.<br>
   <br>
   Pendidikan yang sekular-materialistik ini memang bisa melahirkan orang pandai yang menguasai sains-teknologi melalui pendidikan umum yang diikutinya. Akan tetapi, pendidikan semacam itu terbukti gagal membentuk kepribadian peserta didik dan penguasaan tsaqafah Islam. Berapa banyak lulusan pendidikan umum yang tetap saja buta agama dan rapuh kepribadiannya? Sebaliknya, mereka yang belajar di lingkungan pendidikan agama memang menguasai tsaqafah Islam dan secara relatif sisi kepribadiannya tergarap baik. Akan tetapi, di sisi lain, ia buta terhadap perkembangan sains dan teknologi.<br>
   <br>
   Akhirnya, sektor-sektor modern (industri manufaktur, perdagangan, dan jasa) diisi oleh orang-orang yang relatif awam terhadap agama karena orang-orang yang mengerti agama terkumpul di dunianya sendiri (madrasah, dosen/guru agama, Depag), tidak mampu terjun di sektor modern.<br>
   <br>
   Memang benar dalam UU Sisdiknas No. 20 tahun 2003 pasal 4 ayat 1 yang berbunyi, "Pendidikan nasional bertujuan membentuk manusia yang beriman dan bertakwa kepada Tuhan Yang Maha Esa, berakhlak dan berbudi mulia, sehat, berilmu, cakap, serta menjadi warga negara yang demokratis dan bertanggungjawab terhadap kesejahteraan masyarakat dan tanah air."<br>
   <br>
   Tapi perlu diingat, sekularisme itu tidak otomatis selalu anti agama. Tidak selalu anti "iman" dan anti "taqwa". Sekularisme itu hanya menolak peran agama untuk mengatur kehidupan publik, termasuk aspek pendidikan. Jadi, selama agama hanya menjadi masalah privat dan tidak dijadikan asas untuk menata kehidupan publik seperti sebuah sistem pendidikan, maka sistem pendidikan itu tetap sistem pendidikan sekular, walaupun para individu pelaksana sistem itu beriman dan bertaqwa (sebagai perilaku individu).<br>
   <br>
   2.Kaburnya definisi dan patokan karakter yang baik<br>
   <br>
   Hingga saat ini apa definisi karakter, apa saja yang menjadi aspek karakter dan tolak ukur karakter masih kabur. Dalam Rencana Induk (Grand design) Pengembangan Pendidikan Karakter Bangsa kementrian Pendidikan RI disebutkan bahwa 3 aspek pembentuk karakter luhur adalah:<br>
   a.Agama, pancasila, UUD 1945 dan UU Sisdiknas<br>
   b.Teori pendidikan, Psikologi, nilai dan social budaya<br>
   c.Pengalaman terbaik dan praktik nyata<br>
   <br>
   Kenyataannya ketiga aspek atau patokan karekter luhur ini sangat bias. Misalnya dalam UU Sisdiknas menjadi warga negara yang demokratis dimasukan sebagai karakter yang baik. Padahal kenyataan demokrasi adalah system kufur yang mengebiri hak Allah SWT sebagai al hakim (penetap hukum).<br>
   <br>
   Demikian pula teori psikologi dan pendidikan, maka yang dipakai teori yang mana? Karena kenyataannya satu teori kadang bertentangan dengan teori yang lain. Hal ini diperparah dengan landasan epistimologi teori-teori dalam ilmu pendidikan yang rancu. Sebagai contoh teori klasik Ivan Paplov yang dibangun berdasarkan penelitiannya terhadap anjing. Padahal fakta anjing dengan manusia tidaklah sama. Sebagain peniliti lain menjadikan kelinci dan tikus sebagai obyek penelitian, kemudian hasil penelitian tersebut diterapkan pada manusia.<br>
   Mengenai nilai social dan budaya ini juga sangatlah kabur dan tidak sedikit terjadi pertentangan antara satu tempat dengan tempat yang lain. Dan seterusnya.<br>
   <br>
   3.Distorsi materi ajar<br>
   <br>
   Hal ini terutama terjadi pada mata pelajaran/mata kuliah social. Sepert ekonomi, sejarah, pendidikan, sosiologi, antropologi dan sebagainya. mata pelajaran sejarah misalkan menurut seoarang pakar sejarah Ahmad Mansur Surya Negara dalam buku Api Sejarah I telah terjadi pegakaburan dan distorsi sejarah Indonesia khususnya dalam bentuk deIslamisasi atau mengaburan/menghilangkan peran umat Islam dalam sejarah Indonesia. Sebagai contoh Bapak pendidikan disematkan pada Ki Hadjar Dewantara yang telah mendirikan Taman Siswa pada 31 Desember. Padahal Muhammadiyah yang juga concern pada pendidikan dengan jaringan yang kuat telah didirikan KH. Ahmad Dahlan pada 18 Nopember 1912. Artinya 10 tahun lebih awal dari Taman Siswa. Demikian pula penetapan Harkitnas pada tanggal 20 Mei dengan patokan berdirinya Boedi Oetomo. Bukan syarikat Islam yang berdiri lebih awal yaitu 16 Oktober 1905. Padahal SI pada saat itu telah memiliki jaringan yang luas dengan anggota lebih dari 1 juta orang dari beragam etnis, dan yang terpenting memiliki cita-cita persatuan dan kemerdekaan dan pembebasan dari penjajahan. Sementara boedi Utomo saat itu hanya memiliki anggota sekitar 10ribu orang, Budi Oetomo juga menjadi sebuah organisasi elitis yang membatasi keanggotaannya hanya dari kalangan priyayi jawa, dan yang lebih ironis lagi oragnisasi ini tidak memimiliki visi kemerdekaan dari penjajahan Belanda karena sebagian anggotanya adalah para bangsawan yang diangkat dan digaji Belanda. Dalam aspek keagamaan organisasi ini juga menganut faham kejawen yang penuh dengan ritual syirik dan menganjurkan untuk tidak shalat.<br>
   <br>
   DeIslamisasi yang lain adalah pengkaburan fakta sejarah kesultanan-kesultanan Islam di nusantara yang sejatinya menjadi bagian dari Khilafah Islam. Wajar jika perjuangan penegakan syariah dan khilafah dianggap terorisme dan dianggap bertentangan dengan realitas keindonesiaan baik dalam aspek historis maupun realitas kekinian. Padahal syariah dan khilafah sangat relevan bagi solusi bangsa Indonesia baik dari aspek idiologis, historis dan empiris.<br>
   <br>
   4.Kontradiksi satu kebijakan dengan kebijakan lain<br>
   <br>
   Sebagai contoh pelaksanaan ujian nasional yang hanya menfokuskan pada mata pelajaran tertentu. Ironisnya hanya pelajaran yang kental aspek kognitifnya. Di jenjang SMP, mata pelajaran yang diujikan adalah mata ujian dasar (matematika, bahasa Indonesia, bahasa Inggris) dan mata pelajaran IPA. Untuk jenjang pendidikan SMA, mata pelajaran yang diujikan di bidang IPA adalah mata pelajaran dasar ditambah dengan kimia, fisika, dan biologi. Untuk bidang IPS, mata ujiannya adalah mata pelajaran dasar ditambah pelajaran geografi, ekonomi, dan sosiologi. Akibatnya siswa, guru, sekolah dan masyarakat secara umum hanya memprioritaskan mata pelajarn yang diujikan dan cenderung menyepelekan mata pelajaran lain. Termasuk pelajaran agama.<br>
   <br>
   Belum lagi kecurangan UN yang telah menjadi rahasia umum. Bahkan, pihak yang melakukan kecurangan bukan hanya peserta didik semata, namun pihak guru/pendidik seringkali justru ikut terlibat. Kepala sekolah dan parahnya adalah pegawai dinas turut menjadi agen kecurangan dalam UN. Hal ini diperparah dengan hasil lulusan. Banyak peserta didik yang protes karena yang biasa berprestasi dan berusaha jujur malah tidak lulus UN sedangkan yang biasa-biasa saja justru lulus. Hal ini seakanmenguatkan anggapan bahwa “jujur hancur, curang mujur”. Pendidikan karakter macam apa yang sedang diajarkan di negeri ini?<br>
   <br>
   5.Tidak terintegrasinya pendidikan di sekolah dengan pendidikan diluar sekolah.<br>
   <br>
   Pendidikan sejatinya adalah upaya simultan dan terus menerus yang melibatkan semua pihak. Dengan system yang bobrok disegala bidang seperti saat ini rasanya sulit mencetak anak bangsa yang memiliki kepibadian Islam. Pedidikan yang seharusnya dimulai dari keluarga sangat sulit untuk diharapkan sebagai madrasatul ulaa (lembaga pendidikan pertama). Kemiskinan structural yang menyebabkan 100 jt lebih penduduk Indonesia miskin menyebabkan orang tua sibuk untuk mecari uang, ibu yang seharus menjadi ummun warabbatul bait (ibu dan manajer rumah tangga) sibuk membantu suaminya. Ditambah lagi ide liberal keseteraan gender, semakin membuat para ibu mengadaikan kemuliaannya dalam persaingan dengan laki-laki di sector public.<br>
   <br>
   Demikian pula saat siswa masuk pada lingkungan masyarakat. Mereka mendapati kenyataan pergaulan bebas, kehidupan malam, hedonisme, siaran telivisi yang tidak mendidik dengan siaran yang penuh mesum, kekerasan dan sebagainya.<br>
   Padahal kenyataannya. Apa yang dilihat, dirasakan dan dilakukan sejatinya adalah pendidikan yang paling efektif untuk membentuk perilaku. Akhirnya jadilah proses pendidikan di negeri ini bagaikan memintal benang di siang hari, tapi malam harinya dikusutkan kembali.<br>
   <br>
   <strong>Pendidikan Islam sebagai Solusi</strong><br>
   <br>
   Perlu penulis tegaskan lagi bahwa persoalan negeri ini adalah akibat diterapkannya idiologi sekuler-kapitalisme. Idiologi ini telah terbukti gagal mensejahterakan manusia (1,5 M miskin), gagal memberikan rasa aman (penjajahan dibelahan negeri Islam), gagal menjadikan manusia menjadi makhluk yang bermartabat (kerusakan moral, 40 % bayi AS lahir by accident , miras menjadi konsumsi yang wajar bahkan dilegalkan dsb). Maka solusi bagi persoalan ini tidak lain adalah dengan mendongkel system ini dan mengantikannya dengan system yang adil, system yang datang dari yang Maha adil yaitu Islam. Islam adalah idiologi yang sempurna yang mengatur segala aspek termasuk pendidikan.<br>
   <br>
   Pendidikan Islam bertujuan untuk membentuk karakter atau kepribadian Islam (syakhshiyyah Islamiyah. Kepribadian ini dibentuk oleh dua factor, yaitu pola fikir (fikriyah) dan pola sikap (nafsiyah) yang Islami. Selain dalam system pendidikan Islam berlandaskan pada aqidah Islam, sehingga seluruh materi pelajaran, kurikulum, metode dan pendekatan pengajaran, kebijakan perundang-undangan, interaksi di sekolah, dan interaksi di mayarakat akan disetting sesuai dengan syariat Islam. Dengan aqidah Islam ini pula akan dikaji setiap materi ajar yang shahih. Materi ajar yang sesat dan menyesatkan seperti nasionalisme, demokrasi, dsb tidak akan diajarkan kecuali jika siswa telah memiliki kematangan aqidah (yaitu saat perguruan tinggi).<br>
   <br>
   Lebih dari itu Islam adalah dien yang jelas dan tidak kabur. Sesutu yang baik adalah yang dipandang baik oleh syariat, sebaliknya yang buruk adalah apa saja yang dipandang buruk oleh syariat. Sumber hokum Islam juga jelas yaitu al qur’an, as sunnah, Qiyas dan Ijma shabat. Metodologi pengalian hokum hokum Islam juga jelas yaitu dengan ijtihad. Sehinga tidak terjadi kekaburan patokan kebenaran atau sesuatu yang dipandang terpuji maupun tercela.<br>
   <br>
   Dalam Islam, pengajaran juga akan disetting agar yang terjadi bukan hanya transfer of knowledge semata, yang hanya memprioritaskan aspek kognitif. Akan tetapi benar-benar disetting agar terjadi transfer of personality sehingga terbentuklah pribadi-pribadi yang tangguh yang tafaqquh fiddin sekaligus pakar dibidang saintek. Hal ini dicapai dengan metode mengajaran talaqqi (perjumpaan langsung)dan siswa ditempatkan pada asrama (boarding school) agar kepribadian mereka terkontrol. Hal ini hanya akan terjadi apabila guru memiliki dedikasi yang tinggi dalam dunia pendidikan bukan sekedar profesi, apalagi karena tidak ada pilihan lain. Oleh karena itu selain di dorong oleh quwwah ruhiyyah (motivasi spiritual) untuk mencetak pribadi-pribadi yang bersyakshiyyah maka negara juga akan menggaji dengan gaji yang diatas layak.<br>
   <br>
   Demikianlah beberapa hal yang dapat saya sampaikan. Karena keterbatasan ilmu, waktu, dan halaman maka tidak semua hal dapat dipaparkan disini. Semoga bermanfaat. <em>Wallahu ‘alam bishawab</em><br>
   <br>
 
   
   </span></div>`,
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJKKHFypNTfzQXE-dTFDMNEPxf9Ipwt21NQ&usqp=CAU",
        category: ["religi"],
        title: "Bulan Ramadhan yang Penuh Berkah",
        slug: "bulan-ramadhan-yang-penuh-berkah",
        time: "18/08/2021 19:25",
        author: "Yusuf S.pd",
        views: 200,
        text: `<div class="post-content">
        





       <div style="text-align: justify;"><strong>RAMADHAN</strong> merupakan suatu moment super khusus disediakan Allah Swt kepada kaum muslimin. Dikatakan demikian karena bulan Ramadhan memiliki banyak keutamaan yang tidak dimiliki bulan lainnya. Allah Swt menyediakan berbagai keutamaan ini kepada orang-orang yang memperbanyak ibadah di bulan Ramadhan. Inilah rahmat dan nikmat Allah swt yang diberikan kepada hamba-hamba-Nya yang memanfaatkan moment ini dengan memperbanyak ibadah. Maka bersyukurlah kepada Allah dengan dipertemukan dengan bulan Ramadhan ini.<br><br></div><div style="text-align: justify;">Ada banyak keutamaan yang hanya ada pada bulan Suci Ramadhan. Oleh karena itu ibadah di bulan Ramadhan harus lebih ditingkatkan lagi.<br><br></div><div style="text-align: justify;">Keutamaan-keutaman bulan Ramadhan begitu banyak. Jika kita bertemu dengan Ramadhan betapa beruntungnya kita, karena di bulan itu segala amalan akan dilipatkan ganjarannya.<br><br></div><div style="text-align: justify;">Menurut beberapa keterangan, ada banyak keutamaan bulan Ramadhan. Keutamaan tersebut sudah dijelaskan dalam beberapa hadis.</div><div style="text-align: justify;">Ramadhan yang merupakan bulan penuh keberkahan ini tentunya menjadi salah satu bulan yang ditungggu-tunggu umat Islam. Apalagi terdapat banyak keutamaannya.<br><br></div><div style="text-align: justify;">Berikut ini 10 keutamaan bulan Ramadhan berdasarkan hadits-hadits shahih:<br><br></div><div style="text-align: justify;"><strong>1. Bulan yang penuh barakah<br><br></strong></div><div style="text-align: justify;">Ini keutamaan Ramadhan yang pertama. Rasulullah shallallahu ‘alaihi wasallam mensabdakan bahwa bulan Ramadhan adalah bulan yang penuh barakah.<br><br></div><div style="text-align: justify;">قَدْ جَاءَكُمْ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ</div><div style="text-align: justify;"><br>“Telah datang kepada kalian bulan yang penuh berkah…” (HR. Ahmad)<br><br></div><div style="text-align: justify;">Barakah artinya adalah ziyadatul khair; bertambahnya kebaikan. Di bulan Ramadhan, banyak kebaikan yang bertambah. Banyak kebaikan yang meningkat.<br><br></div><div style="text-align: justify;">Kita lihat, Ramadhan memang penuh dengan keberkahan. Meningkatnya omset para pedagang dan pengusaha serta THR bagi karyawan dan pegawai mungkin adalah bagian dari keberkahan bulan Ramadhan.<br><br></div><div style="text-align: justify;">Sedangkan meningkatnya ibadah, puasa Ramadhan, shalat tarawih, semakin banyak tilawah dan sedekah adalah bagian dari keberkahan Ramadhan yang lebih besar lagi.<br><br></div><div style="text-align: justify;"><strong>2. Diwajibkannya puasa<br><br></strong></div><div style="text-align: justify;">Salah satu keutamaan Ramadhan, di bulan ini umat Islam diwajibkan berpuasa. Sehingga Ramadhan juga disebut sebagai syahrush shiyam. Puasa menjadikan Ramadhan istimewa karena ia adalah rukun Islam yang tidak ada di bulan-bulan lainnya.</div><div style="text-align: justify;">Lanjutan hadits di atas berbunyi:<br><br></div><div style="text-align: justify;">قَدْ جَاءَكُمْ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ افْتَرَضَ اللَّهُ عَلَيْكُمْ صِيَامَهُ</div><div style="text-align: justify;"><br>“Telah datang kepada kalian bulan yang penuh berkah, diwajibkan kepada kalian ibadah puasa…” (HR. Ahmad)</div><div style="text-align: justify;">Allah Subhanahu wa Ta’ala berfirman:<br><br></div><div style="text-align: justify;">يَا أَيُّهَا الَّذِينَ آَمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ</div><div style="text-align: justify;"><br>“Wahai orang-orang yang beriman, diwajibkan atas kalian berpuasa sebagaimana telah diwajibkan atas orang-orang sebelum kalian agar kalian menjadi orang yang bertaqwa” (QS. Al Baqarah: 183)<br><br></div><div style="text-align: justify;">شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآَنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَى وَالْفُرْقَانِ فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ</div><div style="text-align: justify;"><br>“Bulan Ramadhan, bulan yang di dalamnya diturunkan Al Quran sebagai petunjuk bagi manusia dan penjelasan-penjelasan mengenai petunjuk itu serta pembeda (antara yang haq dan yang bathil). Karena itu, barangsiapa di antara kalian hadir di bulan itu, maka hendaklah ia berpuasa…” (QS. Al Baqarah: 185)<br><br></div><div style="text-align: justify;"><strong>3. Pintu surga dibuka</strong><br><br></div><div style="text-align: justify;">Pada bulan Ramadhan, pintu-pintu surga dibuka. Sebagaimana sabda Rasulullah shallallahu ‘alaihi wasallam, lanjutan hadits di atas:<br><br></div><div style="text-align: justify;">قَدْ جَاءَكُمْ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ افْتَرَضَ اللَّهُ عَلَيْكُمْ صِيَامَهُ يُفْتَحُ فِيهِ أَبْوَابُ الْجَنَّةِ</div><div style="text-align: justify;"><br>“Telah datang kepada kalian bulan yang penuh berkah, diwajibkan kepada kalian ibadah puasa, dibukakan pintu-pintu surga…” (HR. Ahmad)<br><br></div><div style="text-align: justify;"><strong>4. Pintu neraka ditutup</strong><br><br></div><div style="text-align: justify;">Di samping pintu-pintu surga dibuka, pada bulan Ramadhan, pintu-pintu neraka ditutup. Sebagaimana sabda Rasulullah shallallahu ‘alaihi wasallam, lanjutan hadits di atas:<br><br></div><div style="text-align: justify;">قَدْ جَاءَكُمْ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ افْتَرَضَ اللَّهُ عَلَيْكُمْ صِيَامَهُ يُفْتَحُ فِيهِ أَبْوَابُ الْجَنَّةِ</div><div style="text-align: justify;"><br>“Telah datang kepada kalian bulan yang penuh berkah, diwajibkan kepada kalian ibadah puasa, dibukakan pintu-pintu surga dan ditutuplah pintu-pintu neraka…” (HR. Ahmad)<br><br></div><div style="text-align: justify;"><strong>5. Syetan dibelenggu<br><br></strong></div><div style="text-align: justify;">Di antara keutamaan Ramadhan, syetan-syetan dibelenggu pada bulan ini sebagaimana Sabda Nabi shallallahu ‘alaihi wasallam:<br><br></div><div style="text-align: justify;">إِذَا جَاءَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ النَّارِ وَصُفِّدَتِ الشَّيَاطِينُ</div><div style="text-align: justify;"><br>”Apabila Ramadhan tiba, pintu surga dibuka, pintu neraka ditutup, dan setan pun dibelenggu.” (HR. Bukhari dan Muslim)</div><div style="text-align: justify;">Juga lanjutan hadits riwayat Imam Ahmad sebelumnya:<br><br></div><div style="text-align: justify;">قَدْ جَاءَكُمْ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ افْتَرَضَ اللَّهُ عَلَيْكُمْ صِيَامَهُ يُفْتَحُ فِيهِ أَبْوَابُ الْجَنَّةِ وَتُغَلُّ فِيهِ الشَّيَاطِينُ</div><div style="text-align: justify;"><br>“Telah datang kepada kalian bulan yang penuh berkah, diwajibkan kepada kalian ibadah puasa, dibukakan pintu-pintu surga dan ditutuplah pintu-pintu neraka serta syetan-syetan dibelenggu” (HR. Ahmad)<br><br></div><div style="text-align: justify;"><strong>6. Lailatul Qadar<br><br></strong></div><div style="text-align: justify;">Keutamaan Ramadhan yang tidak kalah luar biasa adalah lailatul qadar. Yakni malam yang nilainya lebih baik daripada seribu bulan. Lailatul qadar hanya ada di salah satu malam bulan Ramadhan, tidak dijumpai di bulan-bulan lainnya.<br><br></div><div style="text-align: justify;">قَدْ جَاءَكُمْ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ افْتَرَضَ اللَّهُ عَلَيْكُمْ صِيَامَهُ يُفْتَحُ فِيهِ أَبْوَابُ الْجَنَّةِ وَتُغَلُّ فِيهِ الشَّيَاطِينُ فِيهِ لَيْلَةٌ خَيْرٌ مِنْ أَلْفِ شَهْرٍ مَنْ حُرِمَ خَيْرَهَا فَقَدْ حُرِمَ</div><div style="text-align: justify;"><br>“Telah datang kepada kalian bulan yang penuh berkah, diwajibkan kepada kalian ibadah puasa, dibukakan pintu-pintu surga dan ditutuplah pintu-pintu neraka serta syetan-syetan dibelenggu. di dalamnya terdapat malam yang lebih baik dari seribu bulan. Barangsiapa yang tidak mendapatkan kebaikannya berarti ia telah benar-benar terhalang/terjauhkan (dari kebaikan)” (HR. Ahmad)</div><div style="text-align: justify;">Dengan adanya lailatul qadar ini, umat Nabi Muhammad bisa mengejar ketertinggalan waktu beramal dari umat-umat sebelumnya. Seperti diketahui, umat terdahulu usianya relatif lebih panjang. Bisa ratusan hingga seribu tahun. Dengan mendapatkan lailatul qadar, amal mereka bisa terkejar karena satu kali lailatul qadar setara dengan 83 tahun. Sepuluh kali mendapatkan lailatul qadar, bisa mengejar 833 tahun amal umat terdahulu.<br><br></div><div style="text-align: justify;"><strong>7. Penghapus dosa</strong><br><br></div><div style="text-align: justify;">Ibadah dan amal-amal shalih yang dilakukan di bulan Ramadhan merupakan penghapus dosa dari Ramadhan sebelumnya hingga Ramadhan saat ini. Ini salah satu keutamaan Ramadhan, sebagaimana sabda Rasulullah:<br><br></div><div style="text-align: justify;">الصَّلَوَاتُ الْخَمْسُ وَالْجُمُعَةُ إِلَى الْجُمُعَةِ وَرَمَضَانُ إِلَى رَمَضَانَ مُكَفِّرَاتٌ مَا بَيْنَهُنَّ إِذَا اجْتَنَبَ الْكَبَائِرَ</div><div style="text-align: justify;"><br>“Sholat lima waktu, antara shalat Jum’at ke Shalat Jum’at dan Ramadhan ke Ramadhan penghapus dosa diantara kesuanya, jika dijauhi dosa-dosa besar” (HR. Muslim)<br><br></div><div style="text-align: justify;"><strong>8. Penghapus dosa yang telah lalu</strong><br><br></div><div style="text-align: justify;">Bukan hanya penghapus dosa antara Ramadhan satu ke Ramadhan berikutnya, bahkan salah satu keutamaan Ramadhan adalah menghapus dosa-dosa yang telah lalu. Ini diperoleh jika melakukan puasa Ramadhan dengan dilandasi iman dan mengharap perhitungan pahala dari Allah semata.<br><br></div><div style="text-align: justify;">مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ</div><div style="text-align: justify;"><br>“Barangsiapa yang berpuasa karena iman dan mengharap perhitungan (pahala) akan diampuni dosa-dosanya yang telah lalu” (Muttafaq ‘Alaih)<br><br></div><div style="text-align: justify;"><strong>9. Waktu dikabulkannya doa</strong></div><div style="text-align: justify;"><br>Berbeda dengan bulan lainnya, pada bulan Ramadhan banyak waktu mustajabah untuk berdoa. Di antaranya adalah waktu menjelang berbuka. Bahkan sepanjang waktu puasa mulai terbitnya fajar hingga terbenamnya matahari adalah waktu yang mustajabah untuk berdoa. Berdoa di waktu puasa Ramadhan ini lebih dikabulkan Allah.<br><br></div><div style="text-align: justify;">Rasulullah shallallahu ‘alaihi wasallam bersabda:<br><br></div><div style="text-align: justify;">ثَلاَثَةٌ لاَ تُرَدُّ دَعْوَتُهُمُ الصَّائِمُ حَتَّى يُفْطِرَ وَالإِمَامُ الْعَادِلُ وَدَعْوَةُ الْمَظْلُومِ</div><div style="text-align: justify;"><br>“Tiga orang yang doanya tidak tertolak: orang yang berpuasa sampai ia berbuka, pemimpin yang adil, dan doa orang yang dizholimi” (HR. Tirmidzi; HR. Hasan)<br><br></div><div style="text-align: justify;"><strong>10. Pembebasan dari neraka<br><br></strong></div><div style="text-align: justify;">Salah satu keutamaan Ramadhan adalah setiap harinya Allah membebaskan hambaNya dari neraka. Mereka yang hampir saja masuk neraka, dengan kemurahan Allah di bulan Ramadhan, mereka diampuni oleh Allah dan dibebaskan dari neraka. Sebagaimana sabda <br><br>Rasulullah shallallahu ‘alaihi wasallam:<br><br></div><div style="text-align: justify;">إِنَّ لِلّهِ فِى كُلِّ يَوْمٍ عِتْقَاءَ مِنَ النَّارِ فِى شَهْرِ رَمَضَانَ ,وَإِنَّ لِكُلِّ مُسْلِمٍ دَعْوَةً يَدْعُوْ بِهَا فَيَسْتَجِيْبُ لَهُ</div><div style="text-align: justify;"><br>”Sesungguhnya Allah membebaskan beberapa orang dari api neraka pada setiap hari di bulan Ramadhan,dan setiap muslim apabila dia memanjatkan do’a maka pasti dikabulkan.” (HR. Al Bazaar dengan para perawi yang tsiqah)<br><br></div><div style="text-align: justify;">Demikian 10 Keutamaan Ramadhan yang luar biasa dan semestinya kita syukuri. Sebab umat sebelum Nabi Muhammad tidak mendapatkan keutamaan-keutamaan ini.<br><br></div><div style="text-align: justify;">Dan semoga keutamaan-keutamaan ini memacu kita untuk lebih giat beribadah dan melakukan amal shalih di bulan Ramadhan ini</div>
       </div>`,
      },
    ],
    dataLiputanEvent: [
      {
        title: "SCREENING DAN BIAS MR",
        time: "1/12/2021 21:54",
        author: "admin",
        slug: "screening-dan-bias-mr",
        images: [
          "/images/liputan-event/(1).jpeg",
          "/images/liputan-event/(2).jpeg",
          "/images/liputan-event/(3).jpeg",
          "/images/liputan-event/(4).jpeg",
          "/images/liputan-event/(5).jpeg",
        ],
        text: `
        <p>
        MI. Ahmad Yani Pagerngumbuk selalu men-upgrade kegiatan baik kegiatan mingguan, bulanan dan tahunan. Bulan November kali ini, ada 2 kegiatan yang bekerjasama dengan Puskesmas Wonoayu yang dikepalai dr. B. Irawatyratna K., MM. Dua kegiatan tersebut yakni BIAS jenis MR untuk kelas 1 pada hari rabu, tanggal 10 November 2021 dan SCREENING kesehatan untuk kelas 1.
        </p>
        <p>
        BIAS (Bulan Imunisasi Anak Sekolah), BIAS MR Ini di berikan di laksanakan setiap Agustus hingga september. Imunisasi MR ( Measles an Rubela). Vaksin ini di berikan kepada anak kelas 1 . Untuk mencegah terjadinya penyakit yang di sebabkan oleh virus measles( campak) dan rubella. Dan imunisasi DT bagi anak kelas 1 yg akan dilaksanakan tanggal 3 Desember ini sebagai kelanjutan dari imunisasi MR.  
        </p>
        <p>
        Screening disini untuk mengetahui kesehatan anak mulai dari mengecek gigi, hidung, mata, dan telinga. Alhamdulillah acara sudah berjalan dengan lancar, setelah adanya screening siswa ada siswa yang diberi rujukan untuk Tindak Lanjut ke puskesmas sesuai keluhan siswa. Dalam kegiatan ini pelayanan kesehatan di puskesmas dilayani dengan bagus karena telah terjadwalkan ke puskesmas.
        </p>
        <p>
        Kepala UKS MI. Ahmad Yani menjelaskan kelebihan adanya screening untuk mengetahui kesehatan anak dari dini. Seperti sikap anak-anak dirumah yang tidak terdeteksi menjadi teratasi, contoh konkritnya dipanggil anak tidak segera menjawab dan memenuhi maka hal itu ada yang bermasalah di telinga. Kelebihan berat badan anak menjadi terdeteksi, karena dirumah makanannya tidak terjaga, dll.
        </p>
        `,
      },
    ],

    albums: [
      {
        img: "/images/galeri/1.jpg",
        text: "JUARA TAHFIDZIL QUR’AN JUZ 30 LOMBA TINGKAT KABUPATEN DI CANDI",
      },

      {
        img: "/images/galeri/gambar-2.jpg",
        text: "PEMBINAAN ORIENTASI KESEHATAN OLEH PUSKESMAS",
      },
      {
        img: "/images/galeri/gambar-1.jpg",
        text: "PEMBINAAN ORIENTASI KESEHATAN OLEH PUSKESMAS",
      },
      {
        img: "/images/galeri/gambar-3.jpg",
        text: "LOMBA KANTIN SEHAT KABUPATEN SIDOARJO",
      },
      {
        img: "/images/galeri/gambar-4.jpg",
        text: "LOMBA KANTIN SEHAT KABUPATEN SIDOARJO",
      },
      {
        img: "/images/galeri/2.jpg",
        text: "LOMBA KANTIN SEHAT KABUPATEN SIDOARJO",
      },
      {
        img: "/images/galeri/gambar-5.jpg",
        text: "LITERASI BERSAMA PPM. AL AMANAH JUNWAANGI SIDOARJO",
      },
      {
        img: "/images/galeri/3.jpg",
        text: "LITERASI BERSAMA PPM. AL AMANAH JUNWAANGI SIDOARJO",
      },
      {
        img: "/images/galeri/4.jpg",
        text: "LITERASI BERSAMA PPM. AL AMANAH JUNWAANGI SIDOARJO",
      },
      {
        img: "/images/galeri/5.jpg",
        text: "TANGGAP COVID PROTOKOL KESEHATAN BERSAMA LAZIZNU KEC. WONOAYU",
      },
      {
        img: "/images/galeri/6.jpg",
        text: "RIHLAH MUHIBBAH DI UNISMA MALANGt",
      },
      {
        img: "/images/galeri/7.jpg",
        text: "RIHLAH MUHIBBAH DI UNISMA MALANG",
      },
      {
        img: "/images/galeri/8.jpg",
        text: "PEMBELAJARAN BERBASIS PROJECT",
      },
      {
        img: "/images/galeri/9.jpg",
        text: "PELATIHAN SOSIALISASI CBT ONLINE DI SAIGON PASURUAN",
      },
      {
        img: "/images/galeri/10.jpg",
        text: "PELATIHAN DESIMINASI DI TRAWAS",
      },
      {
        img: "/images/galeri/11.jpg",
        text: "STUDY TOUR DAN ZIARAH",
      },
      {
        img: "/images/galeri/12.jpg",
        text: "RAPAT DEWAN GURU PERISAPAN WISUDA DRIVE THRU",
      },
      {
        img: "/images/galeri/13.jpg",
        text: "UPACARA OLEH FORPIMKA WONOAYU",
      },
      {
        img: "/images/galeri/14.jpg",
        text: "BIAS (BULAN IMUNISASI ANAK SEKOLAH) OLEH PUSKESMAS WONOAYU",
      },
      {
        img: "/images/galeri/15.jpg",
        text: "HSN BESERTA BANOM DI KABUPATEN SIDOARJO",
      },
      {
        img: "/images/galeri/16.jpg",
        text: "SAMROH",
      },
      {
        img: "/images/galeri/17.jpg",
        text: "KBM TAHFIDZ DILUAR MADRASAH",
      },
      {
        img: "/images/galeri/18.jpg",
        text: "MAULID NABI",
      },
      {
        img: "/images/galeri/19.jpg",
        text: "BAKTI SOSIAL DI MAKAM/PESAREAN",
      },
      {
        img: "/images/galeri/20.jpg",
        text: "HAFLAH AKHIR SANAH DAN WISUDA TAHFIDZ",
      },
      {
        img: "/images/galeri/21.jpg",
        text: "BELA DIRI/PAGAR NUSA",
      },
      {
        img: "/images/galeri/22.jpg",
        text: "SHOLAT BERJAMA’AH",
      },
      {
        img: "/images/galeri/23.jpg",
        text: "MANASIK HAJI DAN MAKAN BERSAMA",
      },
      {
        img: "/images/galeri/24.jpg",
        text: "RAPAT PEMBELAJARAN MASA PANDEMI",
      },
      {
        img: "/images/galeri/25.jpg",
        text: "JUARA 3 MTQ PEMKAB",
      },
      {
        img: "/images/galeri/26.jpg",
        text: "PENERIMAAN ZAKAT FITRAH",
      },
      {
        img: "/images/galeri/27.jpg",
        text: "PELATIHAN PEMBELAJARAN DARING OLEH STKIP SIDOARJO",
      },
      {
        img: "/images/galeri/28.jpg",
        text: "PONDOK RAMADLAN ",
      },
      {
        img: "/images/galeri/29.jpg",
        text: "LOMBA VIRTUAL PHBN DAN PHBI",
      },
      {
        img: "/images/galeri/30.jpg",
        text: "TAHSINUL QUR’AN",
      },
      {
        img: "/images/galeri/31.jpg",
        text:
          "LOMBA VIRTUAL DALAM RANGKA TAHUN BARU ISLAM 1443 H dan HUT RI 76 TAHUN",
      },
      {
        img: "/images/galeri/32.jpg",
        text:
          "LOMBA VIRTUAL DALAM RANGKA TAHUN BARU ISLAM 1443 H dan HUT RI 76 TAHUN",
      },
      {
        img: "/images/galeri/33.jpg",
        text: "LOMBA GELAR PRODUK  KELAS 6 2021",
      },
      {
        img: "/images/galeri/34.jpg",
        text: "LOMBA GELAR PRODUK  KELAS 6 2021",
      },
      {
        img: "/images/galeri/35.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/36.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/37.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/38.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/39.jpg",
        text: "PEMENANG LOMBA GELAR PR0DUK",
      },
      {
        img: "/images/galeri/40.jpg",
        text: "PEMENANG LOMBA PIDATO KELAS 6",
      },
    ],
  },
  mutations: {
    commitTitlePage(state, payload) {
      state.titlePage = payload
        ? payload + " &mdash; " + state.titleOri
        : state.titleOri;

      document.querySelector("title").innerHTML = state.titlePage;
    },
    commitActiveMenu(state, payload) {
      state.activeMenu = payload;
    },
    commitAddViews(state, payload) {
      const get = state.dataArtikel.filter((e) => e.slug == payload)[0];
      get.views++;
    },
    commitIsAdmin(state, payload) {
      state.isAdmin = payload;
    },
  },
  actions: {
    setTitlePage({ commit }, payload) {
      commit("commitTitlePage", payload);
    },
    setActiveMenu({ commit }, payload) {
      commit("commitActiveMenu", payload);
    },
    addViews({ commit }, payload) {
      commit("commitAddViews", payload);
    },
    setIsAdmin({ commit }, payload) {
      commit("commitIsAdmin", payload);
    },
  },
  getters: {
    titlePage: (state) => state.titlePage,
    dataArtikel: (state) => state.dataArtikel,
    dataLiputanEvent: (state) => state.dataLiputanEvent,
    dataBerita: (state) => state.dataBerita,
    albums: (state) => state.albums,
    activeMenu: (state) => state.activeMenu,
    isAdmin: (state) => state.isAdmin,
  },
  plugins: [vp.plugin],
});
export default store;
