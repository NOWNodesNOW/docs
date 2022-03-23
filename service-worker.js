/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2c404c7e9bfd48a972364e33e1dae15e"
  },
  {
    "url": "assets/css/0.styles.3e4faf6e.css",
    "revision": "2b05a5f02b9af194ad3c8c9ceab42707"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.d77cdae1.png",
    "revision": "d77cdae154a592744275a3b510bf722a"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.4c25f804.js",
    "revision": "4d9f139d1b83319865e4dd8b250d5ca1"
  },
  {
    "url": "assets/js/100.50efb659.js",
    "revision": "42e1401c7bfbb2adcda0752d5026bed6"
  },
  {
    "url": "assets/js/101.a2b32351.js",
    "revision": "313af86cad261018ac9bc1e76a2772f9"
  },
  {
    "url": "assets/js/102.c26c0998.js",
    "revision": "6826f63cae75611a37fe0cb914a1a8c6"
  },
  {
    "url": "assets/js/103.99ebc373.js",
    "revision": "b32f0c20be3a924e5d559b78238c7a1d"
  },
  {
    "url": "assets/js/104.b94cd4a8.js",
    "revision": "65a2a06527a4774b48c0cfe7668d40f0"
  },
  {
    "url": "assets/js/105.5180cbc4.js",
    "revision": "b1674ebd19c9397709fa7b43e1821859"
  },
  {
    "url": "assets/js/106.1f481351.js",
    "revision": "46ff7bd4ae92a967e7d39b2109ce6336"
  },
  {
    "url": "assets/js/11.b94bfbf8.js",
    "revision": "acaab4ad78f0a2f94900e156629428d8"
  },
  {
    "url": "assets/js/12.026e2c3d.js",
    "revision": "20f6be26d63766e35c7d9f965a3fa0fb"
  },
  {
    "url": "assets/js/13.eab7bf49.js",
    "revision": "40f32c449433646b9158dd6c604e13df"
  },
  {
    "url": "assets/js/14.e3667f8b.js",
    "revision": "804147f0327fd13226f28b1b408cc165"
  },
  {
    "url": "assets/js/15.f2e09273.js",
    "revision": "0140d041a5d29220577b81991c707f20"
  },
  {
    "url": "assets/js/16.8794f970.js",
    "revision": "03b8fdf3c57edaac95a2bec6f1b912cb"
  },
  {
    "url": "assets/js/17.284c2b52.js",
    "revision": "92bb1fb543bb0588ed2280d994bee61c"
  },
  {
    "url": "assets/js/18.29bbfaa3.js",
    "revision": "13e8b0cbb4af0ee523537431cfe1dcde"
  },
  {
    "url": "assets/js/19.1be738a8.js",
    "revision": "8ba2d64363173b1c52621248b4623d9a"
  },
  {
    "url": "assets/js/20.4ec732ad.js",
    "revision": "1c8b55b291081be2beb7fe88307711ae"
  },
  {
    "url": "assets/js/21.2a84dde3.js",
    "revision": "c1683ce01e0d0d12b25d037fd5ed5521"
  },
  {
    "url": "assets/js/22.61337577.js",
    "revision": "13dc6cb0ed6cdf19e1bdafb061f3d3ee"
  },
  {
    "url": "assets/js/23.5b131fa1.js",
    "revision": "5954274585161aabdb11c7922e2b4300"
  },
  {
    "url": "assets/js/24.a560a5f3.js",
    "revision": "582a21ecc4b0c94a98e3f44a1b818e0f"
  },
  {
    "url": "assets/js/25.2d2b7c20.js",
    "revision": "b55e5a093c82778e6559292a4a4a8268"
  },
  {
    "url": "assets/js/26.3e5d02c5.js",
    "revision": "2ff99f4470330bafb12ded1ee2eeff56"
  },
  {
    "url": "assets/js/27.0714b2d7.js",
    "revision": "f7842e6c4c2dbcfd6387c2137cfd1b1e"
  },
  {
    "url": "assets/js/28.a2331bdb.js",
    "revision": "e90245475c46c0e13c3d25bf7bb0fbbe"
  },
  {
    "url": "assets/js/29.3eeeba85.js",
    "revision": "7a8200c37db8f710506d65d90e97a085"
  },
  {
    "url": "assets/js/3.1edea8f6.js",
    "revision": "82b8294e570e0d6b1a26e9df7bc7789e"
  },
  {
    "url": "assets/js/30.656f5494.js",
    "revision": "79928912ce5d3846154a66ed12f7fbfb"
  },
  {
    "url": "assets/js/31.faaea567.js",
    "revision": "40608be2f2b4a7f46af2da4cfa84322b"
  },
  {
    "url": "assets/js/32.c5fad2fa.js",
    "revision": "20c55ef8acf5532c46e414c71aef9ef9"
  },
  {
    "url": "assets/js/33.3a293a7d.js",
    "revision": "574af388961a9a6a6cb49691c8831756"
  },
  {
    "url": "assets/js/34.fab5c573.js",
    "revision": "b3cd69c6cae1a9c9f0355a38dd748dac"
  },
  {
    "url": "assets/js/35.73764677.js",
    "revision": "db81dc7d4752e488db7231c8647ced66"
  },
  {
    "url": "assets/js/36.bc34dc74.js",
    "revision": "2533b66cbcddf7c5ac03192d012ab035"
  },
  {
    "url": "assets/js/37.ba2d2d15.js",
    "revision": "ce5797095a8783f29f0796b4ac0ec974"
  },
  {
    "url": "assets/js/38.22920a2b.js",
    "revision": "464f4ace9b2a112593c77dad55cb2945"
  },
  {
    "url": "assets/js/39.d891e903.js",
    "revision": "32c340d94bf8c234eb0546da24f16fce"
  },
  {
    "url": "assets/js/4.81f77f6c.js",
    "revision": "ed6c632df6b30c371ff2dc06191bbce1"
  },
  {
    "url": "assets/js/40.74ed6dfd.js",
    "revision": "0a8538a0b883ef46618a539f5a3fbd87"
  },
  {
    "url": "assets/js/41.b498ce60.js",
    "revision": "f374789d5db3a07d9abcfe45ddc39ac6"
  },
  {
    "url": "assets/js/42.0cb371ab.js",
    "revision": "42749458f6fbd89917c7a785ee212fb0"
  },
  {
    "url": "assets/js/43.db5ad3c0.js",
    "revision": "3ba61dd8867e927d7760a43fe457b4ee"
  },
  {
    "url": "assets/js/44.8c002810.js",
    "revision": "fdd295e5ebe148ad84076b537715e249"
  },
  {
    "url": "assets/js/45.60925af0.js",
    "revision": "8d317fc15a066d6c6418cce5e899db36"
  },
  {
    "url": "assets/js/46.9df5e9e5.js",
    "revision": "ce8f7f0cdd05b0e90168e6c6f6f7c144"
  },
  {
    "url": "assets/js/47.6ff73410.js",
    "revision": "28d2cd7846e498457f4cee455094dfbe"
  },
  {
    "url": "assets/js/48.d33b48bf.js",
    "revision": "cda87a4c706b80d68a65e6d88ef53b36"
  },
  {
    "url": "assets/js/49.82ba0144.js",
    "revision": "bb239a5fa170aaaef93d4d38dc456474"
  },
  {
    "url": "assets/js/5.767bfa77.js",
    "revision": "992b4f267c9a938b0201bc22c6601370"
  },
  {
    "url": "assets/js/50.4753bf5a.js",
    "revision": "4fc20b99c0e35fd5d404a4828fd2d928"
  },
  {
    "url": "assets/js/51.c393fe43.js",
    "revision": "205536e19f66b6b8c4f451bf08fe5a7c"
  },
  {
    "url": "assets/js/52.034e3551.js",
    "revision": "a29191b22b682abea177141bc0ed2e7b"
  },
  {
    "url": "assets/js/53.38c1f2a4.js",
    "revision": "e40d62edc2f0378592e569763c96f5d7"
  },
  {
    "url": "assets/js/54.b2884f16.js",
    "revision": "250d81a96a5f85dc4716667499327f4e"
  },
  {
    "url": "assets/js/55.00158c33.js",
    "revision": "d4189e09997eeee314d980169e09fdfa"
  },
  {
    "url": "assets/js/56.f7530b12.js",
    "revision": "dcce251d863b6614c8047979d264d5a5"
  },
  {
    "url": "assets/js/57.5a3ec558.js",
    "revision": "2ac48e37ab1c71264493010f1a538dc8"
  },
  {
    "url": "assets/js/58.01a91a28.js",
    "revision": "f17c3c43fdd3432608121b81727e5bc8"
  },
  {
    "url": "assets/js/59.c3138807.js",
    "revision": "316c6bdc8508a31c39d296605857bf68"
  },
  {
    "url": "assets/js/6.16d6db7f.js",
    "revision": "06d3263a594a5e4ad184dfddac34a6f4"
  },
  {
    "url": "assets/js/60.cbc3bf69.js",
    "revision": "1f583222636f3ae8e8402a0621d93423"
  },
  {
    "url": "assets/js/61.4234f5f4.js",
    "revision": "41c0ffe596102b1e3a0596221364d7f5"
  },
  {
    "url": "assets/js/62.b0a12105.js",
    "revision": "198a6d1fe57f5b87d636c6d3c22b9d29"
  },
  {
    "url": "assets/js/63.018a4bdc.js",
    "revision": "9a7772cecac7962e88947c9ec8591672"
  },
  {
    "url": "assets/js/64.c514b639.js",
    "revision": "07b8ae68541754b1b9a8b01261138484"
  },
  {
    "url": "assets/js/65.e6e9ce74.js",
    "revision": "21aa26336ac04ae2e4dcaae1737f8c79"
  },
  {
    "url": "assets/js/66.4d2e3a76.js",
    "revision": "007c7785a1e3a1752382d03e6a4e361f"
  },
  {
    "url": "assets/js/67.d3e1eabf.js",
    "revision": "7ab91ee9e0e7fb7aa0f94e7475a6fe6d"
  },
  {
    "url": "assets/js/68.d655f59d.js",
    "revision": "435a501b2003de6d5eecc9179f225a29"
  },
  {
    "url": "assets/js/69.edf36709.js",
    "revision": "899e915c067b946e7eed408d58043305"
  },
  {
    "url": "assets/js/7.98617c13.js",
    "revision": "7d9b36532091e038f59e54b98ebf5318"
  },
  {
    "url": "assets/js/70.65f1d53c.js",
    "revision": "d2768c86e098e2384cce043db62108bb"
  },
  {
    "url": "assets/js/71.80c345b3.js",
    "revision": "516b138ff45f9e1a0726dfb7520c5444"
  },
  {
    "url": "assets/js/72.b8da25d1.js",
    "revision": "8335b97fda9523f3c0a280226c0bf7ee"
  },
  {
    "url": "assets/js/73.2cd464f0.js",
    "revision": "b42d699ee90fc3f89a038e8081fed4d4"
  },
  {
    "url": "assets/js/74.7affeaf4.js",
    "revision": "f21770caf55b92e95f41011a7e1c5c18"
  },
  {
    "url": "assets/js/75.61e31688.js",
    "revision": "def25370c84f1dd2080f113c75ebe423"
  },
  {
    "url": "assets/js/76.b83a15cd.js",
    "revision": "e88f92b9afb837a707c4f9671db30efa"
  },
  {
    "url": "assets/js/77.bb6fc790.js",
    "revision": "1686b1833403ef258dcb20f90e96a32e"
  },
  {
    "url": "assets/js/78.d29d0814.js",
    "revision": "1719992dc272651f467c7c54ab00371e"
  },
  {
    "url": "assets/js/79.59e20bfb.js",
    "revision": "277fb2094586000958c5b3897f2602c8"
  },
  {
    "url": "assets/js/8.ed2025a8.js",
    "revision": "9fd372508793c2bfaa2962d065e2a544"
  },
  {
    "url": "assets/js/80.1b1464a7.js",
    "revision": "aecf329bcb641deb1a4aa17bc3ab9dc5"
  },
  {
    "url": "assets/js/81.3ec3cb7f.js",
    "revision": "d9891c16cea045bf7eade32963e579eb"
  },
  {
    "url": "assets/js/82.e6079a93.js",
    "revision": "393642b5c14cca2a211e7bd33836862b"
  },
  {
    "url": "assets/js/83.3c3339b6.js",
    "revision": "8f3e7d6b7bb2c034f7ae5b52498ac05f"
  },
  {
    "url": "assets/js/84.efb9f2ca.js",
    "revision": "f88095bb8e441d51ffec2503e48c1f2b"
  },
  {
    "url": "assets/js/85.cfd8b161.js",
    "revision": "00581f17c5ca47b031db5f86b4af7958"
  },
  {
    "url": "assets/js/86.f70e3ba9.js",
    "revision": "09e9bf8f69d41cd88bcd7bd7921a1ad5"
  },
  {
    "url": "assets/js/87.6657840b.js",
    "revision": "8f950642fcb9479a94d53e89810c1efd"
  },
  {
    "url": "assets/js/88.66eaeac3.js",
    "revision": "84a66bf2966bc8df3d4a6bd56c22bf4e"
  },
  {
    "url": "assets/js/89.c2583a3a.js",
    "revision": "c0d38019ca1a5e0dfa0531b1e069ea05"
  },
  {
    "url": "assets/js/9.a55de85c.js",
    "revision": "4f097f1b96df0a8190643f4dedf68683"
  },
  {
    "url": "assets/js/90.c98b2688.js",
    "revision": "780d66882e1a83db3f8f0dde41bfbe40"
  },
  {
    "url": "assets/js/91.1ff323e6.js",
    "revision": "e311285c4c6e1329b7748d9112e56eb0"
  },
  {
    "url": "assets/js/92.92052608.js",
    "revision": "380b11e3c16899fcddc16ccbb4740e69"
  },
  {
    "url": "assets/js/93.6f1a224d.js",
    "revision": "8ba933b574e40a56e95df19f0951f20d"
  },
  {
    "url": "assets/js/94.dd179f27.js",
    "revision": "b3eebc3f850b8c725e2ecb396ce9f465"
  },
  {
    "url": "assets/js/95.55aadcee.js",
    "revision": "e4950cf29a542a70cdd50a88b33f095f"
  },
  {
    "url": "assets/js/96.6a00c5fa.js",
    "revision": "3115b519b3a6a32f3e50bc4799463406"
  },
  {
    "url": "assets/js/97.73cc1f32.js",
    "revision": "fd703926eb3420ae8a8d3ea02624fdeb"
  },
  {
    "url": "assets/js/98.d266567f.js",
    "revision": "3987ebf845eea45d5e9f615624141b5c"
  },
  {
    "url": "assets/js/99.160a53d3.js",
    "revision": "07343fb854d3c44aec3426c38c62a4eb"
  },
  {
    "url": "assets/js/app.0cc111b0.js",
    "revision": "4af27992e04b878dd2c85162a9738fc4"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "connex/api.html",
    "revision": "95e885ceacf07bc797e65794fc92b240"
  },
  {
    "url": "connex/index.html",
    "revision": "53087a24eebea6d2c0fbc1cb19e41f5a"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "334fb0691c45a17f2c7a698ad6cbd665"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/development-resources.html",
    "revision": "256cf6654994d6d772f602ef9e71424f"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "0e52a09b884867343087f7292f5948c0"
  },
  {
    "url": "pt/connex/api.html",
    "revision": "0abac0b64cac4451cdb473cb1e505e92"
  },
  {
    "url": "pt/connex/index.html",
    "revision": "3ba8828cff5ad521ff069b905742ac2e"
  },
  {
    "url": "pt/index.html",
    "revision": "649bd7e13f5a87bb90411d7a33d55bd7"
  },
  {
    "url": "pt/others/development-resources.html",
    "revision": "40443b7de98122558fa41339679fe113"
  },
  {
    "url": "pt/others/miscellaneous.html",
    "revision": "ecd8c9f59e16bd2cd0cda8a00099a0ad"
  },
  {
    "url": "pt/sync/download-and-install.html",
    "revision": "b6c03b534d2e9421d523ff5a5989914b"
  },
  {
    "url": "pt/sync/faq.html",
    "revision": "1a86badb791ba09588b7c7fc641412c7"
  },
  {
    "url": "pt/sync/user-guide/activities.html",
    "revision": "b67a508bc01dd6f1a6a6bd304adb498a"
  },
  {
    "url": "pt/sync/user-guide/browse-dapp-and-web.html",
    "revision": "ee1b7598cf500628d1eb80e98c4c9863"
  },
  {
    "url": "pt/sync/user-guide/contribute.html",
    "revision": "1db8341be3a3a70c93bb25070ef71874"
  },
  {
    "url": "pt/sync/user-guide/contributing.html",
    "revision": "5d3be239f9e2cfcae4999d8bb2a9dbc3"
  },
  {
    "url": "pt/sync/user-guide/import-ledger.html",
    "revision": "c16c31f05a6c1845f38023e483c20649"
  },
  {
    "url": "pt/sync/user-guide/index.html",
    "revision": "2309b5033f4ff639db6b71659309d2d4"
  },
  {
    "url": "pt/sync/user-guide/interact-with-dapps.html",
    "revision": "c4927c0c7a78ef7eb21f37b402ef1a00"
  },
  {
    "url": "pt/sync/user-guide/report-issue.html",
    "revision": "36541553e3bc18a310405f7cfe5c8aae"
  },
  {
    "url": "pt/sync/user-guide/settings.html",
    "revision": "ed92ddb8d0576a25fa12cbf22656df3a"
  },
  {
    "url": "pt/sync2/faq.html",
    "revision": "6a533e10d7b251b98aaea8bd0c41b610"
  },
  {
    "url": "pt/sync2/get-started.html",
    "revision": "3abfe1dc9f8248a48b558adecd2b7dd2"
  },
  {
    "url": "pt/sync2/user-guide/activities.html",
    "revision": "7cb611b67add4f49789ffc2f73c4f8b3"
  },
  {
    "url": "pt/sync2/user-guide/index.html",
    "revision": "bda0d7a3c747eda5579bf1db11bf049a"
  },
  {
    "url": "pt/sync2/user-guide/settings.html",
    "revision": "7c34aed1e9becff2644a820f467d86c6"
  },
  {
    "url": "pt/sync2/user-guide/signing.html",
    "revision": "93ce5754e7741bfc10f9d923c6978b3c"
  },
  {
    "url": "pt/sync2/user-guide/wallet.html",
    "revision": "0909c78961cd8f220443d4e85e578ca1"
  },
  {
    "url": "pt/thor/get-started/api.html",
    "revision": "5ddaaf984bfeac6b4e52e9751032d2db"
  },
  {
    "url": "pt/thor/get-started/custom-network.html",
    "revision": "cf24e01e2526323c86ef8f75da77f263"
  },
  {
    "url": "pt/thor/get-started/installation.html",
    "revision": "cb541ae917b7d803aad18aa67427a8a5"
  },
  {
    "url": "pt/thor/learn/block.html",
    "revision": "1a82e99483503d1b4c3463bca5fa1fa3"
  },
  {
    "url": "pt/thor/learn/builtin-contracts.html",
    "revision": "174e9596be1dd369087e33233b15a261"
  },
  {
    "url": "pt/thor/learn/faq.html",
    "revision": "c72de5e6b9bab5da87c1cbb948520274"
  },
  {
    "url": "pt/thor/learn/fee-delegation.html",
    "revision": "08d545e952decff44489438ea4493442"
  },
  {
    "url": "pt/thor/learn/index.html",
    "revision": "30c09e55ce4d3d6979cc7d02738e3557"
  },
  {
    "url": "pt/thor/learn/proof-of-authority.html",
    "revision": "14e977742e27f4645cb52add62ce44b2"
  },
  {
    "url": "pt/thor/learn/transaction-calculation.html",
    "revision": "9afdbd062a06b834c5bbeed3c4e7db27"
  },
  {
    "url": "pt/thor/learn/transaction-model.html",
    "revision": "60f9a2a81ad936362e2e08957ccf5f7e"
  },
  {
    "url": "pt/thor/learn/two-token-design.html",
    "revision": "db3e0bfeba8260eb140108954ab8ad4b"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "72dfcf5d21de057e35daad4bfcb9c41e"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2.html",
    "revision": "ac01ed7add706243bf1cd67baad879e0"
  },
  {
    "url": "pt/tutorials/contribute.html",
    "revision": "e7834ee371d5895c18fa264f697498a5"
  },
  {
    "url": "pt/tutorials/designated-fee-delegation.html",
    "revision": "c7b55ab84447c8019c51161af2a847d8"
  },
  {
    "url": "pt/tutorials/forcible-transaction-dependency.html",
    "revision": "7fceeffeb2ccc8f43bdf613476a71d58"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "75afdf9dbf941fd46ad067a6e97d8307"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "262f0268ae5eb53305e014fc69525dad"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "1f72c3e615382e7d94176cda28f3e002"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "e1a3dc097392b7dbd32e1a037e07bd41"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "4ded5447643ae0647bed66c587ab4a70"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "1b870dac3a44e2616d80850442a535e6"
  },
  {
    "url": "pt/tutorials/index.html",
    "revision": "180fa10507a1824ec60adc8f58eec646"
  },
  {
    "url": "pt/tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "6e3c19e9329ee24e8b935f1b4901f30b"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "346f21e827f722d0bb330678660cd94b"
  },
  {
    "url": "sync/faq.html",
    "revision": "6d909a248dc5b4c8b0d5ff5ff855725f"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "4689dd5f009b5dc1fae51114f63d89c4"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "064ca2cdf3cbce80cc80279c1d47f478"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "faf4af6132a29c696b891c3479488c11"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "fd0e4719c649cc39b6e94947a5a2d5c8"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "1364637eeee597837095bc8e6988fb5b"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "a4cc88e238f22bb6ff61e417ea2b5183"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "d958c65b08bf9ebe32c1f564eab5982d"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "3c21db37c2dade25b21897fad5cf6dad"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "98e8ca0e3f2187098fe17f34593a178c"
  },
  {
    "url": "sync2/faq.html",
    "revision": "8ea91f6be1c64afb02dcd27709144e6d"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "a526cd7be52bfda89fc70c42a68ae04d"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "d4b9e9eb75355bf993e5992e3804adad"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "3868994594c2e808650ad42f376ffea1"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "14c899724017121bdfb91f97f2922b70"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "fe17d0ce3813b6fda7ba871a73c8e681"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "553251e15cd66fe9b0bbd2de159c66e3"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "a9361b973b28fcad02516ca0d0ce70da"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "3c8389127f28b0fad0b4b3a1e7db1dce"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "39db45c0afad7028c730cca2a4fc541e"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "60b63a80079013ab7bc045645c3cea0e"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "eb59c5555e323065fa39387ddf3790b1"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "8f0017c9b128710652eb3f0afb4de39d"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "dc4ebe90c24fdb7b687058df52671641"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "9c84b2936db976900fc9de3cd04a067b"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "39ada34852265be0b82706d9b5f48749"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "8d89a10ee280a648f12d41cc8fee5c1e"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "52b0cad94a82c8454c419c22ab21689d"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "da890a2f6667b86b54deb5ad84a57ebd"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "51f6143328c6f095ad28ef2a91ea606e"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2.html",
    "revision": "2ee21fae135f17accd2aa330899e1369"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "81ee58caa44f2cea21035aca828d1280"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "6d7f185d5e6c250c5c755abf50e898cd"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "557d9a9830f4435549051d963e194ecc"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "6f410fcdb07cbdb61dbf62117e0e5ae5"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "8c207b7b3bc948f934f5ecee15e14c20"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "2cc70a5645a1354492d77daed3422af8"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "e6c12f0f82560dfa140a238942ccb4c7"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "eb4d01e5c4af8cf3dd9c829ccf75f72f"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "fa4847ca76d879097fa4ea586447d511"
  },
  {
    "url": "tutorials/index.html",
    "revision": "28ff2692979a38820900465ef8db9d0b"
  },
  {
    "url": "tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "db69b727c5650a5c563d0c5eae776f2b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
