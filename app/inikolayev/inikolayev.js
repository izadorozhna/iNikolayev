var active = true;
//Content script, image replacer
chrome.storage.sync.get({
  activate: true
}, function(items) {
  active = items.activate;
  if (active) {
    // iNikolayev 
    var self = {
      iNikolayevImgs: [
        'http://star-factory.com.ua/siteimg/star_catalog/0fbe18b104cf2dc87b5ef79acf4917ed.jpg',
        'https://pp.vk.me/c407225/v407225659/4df4/CI3AL8u9Q_Q.jpg',
        'https://cs7059.vk.me/c7008/v7008824/23c43/R0AkX_7ehkc.jpg',
        'https://cs7059.vk.me/c7008/v7008343/18a55/ioVsAsWCM7w.jpg',
        'https://pp.vk.me/c407225/v407225659/4deb/ElwEn4rG5AI.jpg',
        'https://pp.vk.me/c407225/v407225659/4e0f/lB01VgP5nLo.jpg',
        'https://pp.vk.me/c407225/v407225659/4dfd/WExPGOeyVHc.jpg',
        'https://pp.vk.me/c407726/v407726659/4828/WuKbe922txg.jpg',
        'https://pp.vk.me/c407225/v407225659/4e06/Cf-h05VNv4w.jpg',
        'https://pp.vk.me/c323825/v323825953/657e/oowQ4zqOGtI.jpg',
        'https://pp.vk.me/c5053/u3071240/100828711/z_53170c15.jpg',
        'https://pp.vk.me/c5053/u3071240/100828711/z_9d9fee96.jpg',
        'https://pp.vk.me/c9476/u1214830/100828711/x_5e1eb1e1.jpg',
        'https://pp.vk.me/c9233/u86371956/97562090/x_03888dbf.jpg',
        'https://pp.vk.me/c11132/u11945581/97562090/z_27955ea9.jpg',
        'https://pp.vk.me/c9631/u246827/97562090/z_57070f70.jpg',
        'https://pp.vk.me/c5233/u10852912/100828711/y_eae981bf.jpg',
        'https://cs7059.vk.me/c540105/v540105343/17655/qTVOlGh04ho.jpg',
        'https://pp.vk.me/c5233/u10852912/100828711/y_af49e216.jpg',
        'https://pp.vk.me/c5233/u10852912/100828711/y_fed693cf.jpg',
        'https://pp.vk.me/c401/u16365999/71423923/x_ef053110.jpg',
        'https://pp.vk.me/c4119/u5699145/71423923/x_88e465d7.jpg',
        'https://pp.vk.me/c1826/u1414490/71428145/x_8f64d715.jpg',
        'https://pp.vk.me/c716/u3622395/71433913/x_1b6d8f39.jpg',
        'https://pp.vk.me/c1499/u1827145/71436848/x_d78fe913.jpg',
        'https://pp.vk.me/c236/v236798/9c/yuLxdJLqfHs.jpg',
        'https://pp.vk.me/c931/u10852912/71427380/x_d84ca0e3.jpg',
        'https://cs7059.vk.me/c540105/v540105097/15c29/qMb9zCneBrY.jpg',
        'https://pp.vk.me/c242/v242499/540/ayxTMLtDEoE.jpg',
        'https://pp.vk.me/c4464/u18139659/71427380/x_3746daa4.jpg',
        'https://pp.vk.me/c9969/u10852912/97562090/y_e63c6f8b.jpg',
        'https://pp.vk.me/c307715/v307715912/64/K1Ji5cpH6fo.jpg',
        'https://pp.vk.me/c403720/v403720953/5e00/kQd9W5VfiRw.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_22514686.jpg',
        'https://pp.vk.me/c199/v199697/28/66XIVtf9nkk.jpg',
        'https://cs7059.vk.me/c7008/v7008343/1b66c/M8YVxzmKkiI.jpg',
        'https://pp.vk.me/c571/u1495803/71426490/x_f40ca86a.jpg',
        'https://pp.vk.me/c4187/u15303136/71426490/x_99851132.jpg',
        'https://pp.vk.me/c302711/u18139659/71426490/y_ebd36c87.jpg',
        'https://pp.vk.me/c302711/u18139659/71426490/y_1568a913.jpg',
        'https://pp.vk.me/c302711/u18139659/71426490/y_a984ecad.jpg',
        'https://pp.vk.me/c376/v376830/f6/LbfI0lk4snw.jpg',
        'https://pp.vk.me/c464/u1954820/71423923/x_89899a9b.jpg',
        'https://cs7059.vk.me/c7008/v7008343/1b664/ib8-YufOwlA.jpg',
        'https://pp.vk.me/c1689/u11693604/71426490/x_a2da7618.jpg',
        'https://pp.vk.me/c302711/u18139659/71426490/y_00e5ceba.jpg',
        'https://pp.vk.me/c302711/u18139659/71426490/y_7f27b362.jpg',
        'https://pp.vk.me/c464/u1954820/71423923/x_44ccaaa1.jpg',
        'https://pp.vk.me/c376/v376830/81/3EoszK6WTt8.jpg',
        'https://pp.vk.me/c10484/u13097934/97562090/x_ecfbb89a.jpg',
        'https://pp.vk.me/c4116/u1088658/92131219/x_988918b2.jpg',
        'https://pp.vk.me/c931/u10852912/71426490/y_a8a51dc9.jpg',
        'https://pp.vk.me/c1499/u1827145/71436848/x_21127826.jpg',
        'https://pp.vk.me/c1367/u3889520/71433913/x_0c03c01f.jpg',
        'https://pp.vk.me/c401/u16365999/71423923/x_afcf955f.jpg',
        'https://pp.vk.me/c1499/u1827145/71436848/x_35b3dd09.jpg',
        'https://pp.vk.me/c4124/u1824197/71426780/x_c78be53b.jpg',
        'https://pp.vk.me/c1819/u1214830/71426780/x_23c87733.jpg',
        'https://pp.vk.me/c10272/u130732366/97562090/x_2b0883fc.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_df5b7f57.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_38da28f9.jpg',
        'https://pp.vk.me/c242/v242499/3de/aKAR-x-RwLM.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_ff41507a.jpg',
        'https://pp.vk.me/c716/u3622395/71425777/x_a5a2e96d.jpg',
        'https://pp.vk.me/c716/u3622395/71425777/x_7116664f.jpg',
        'https://pp.vk.me/c716/u3622395/71425777/x_770416d5.jpg',
        'https://pp.vk.me/c5835/u10852912/97562090/x_f0b61a4a.jpg',
        'https://pp.vk.me/c4119/u5699145/71423923/x_eb9fa33c.jpg',
        'https://pp.vk.me/c242/v242499/5ac/PTmEEqHEllE.jpg',
        'https://pp.vk.me/c242/v242499/5a9/e_ErSa3mKtQ.jpg',
        'https://pp.vk.me/c1499/u1827145/71436848/x_0be2a0a1.jpg',
        'https://pp.vk.me/c1505/u4481869/72127632/x_91482a95.jpg',
        'https://pp.vk.me/c1504/u11022204/71425444/x_7878f69a.jpg',
        'https://pp.vk.me/c9410/u1214830/97562090/x_7ae35801.jpg',
        'https://pp.vk.me/c9865/u37449873/97562090/x_6ad352b1.jpg',
        'https://pp.vk.me/c5039/u79160717/97562090/x_695646d0.jpg',
        'https://pp.vk.me/c4564/u13553193/97562090/x_215d3e76.jpg',
        'https://pp.vk.me/c10801/u10852912/71426312/x_38bef5c6.jpg',
        'https://pp.vk.me/c10659/u10852912/97562090/x_7a5724bc.jpg',
        'https://pp.vk.me/c315627/v315627003/58c1/HcoUHQWX5WE.jpg',
        'https://pp.vk.me/c1505/u4481869/71423923/x_8bab7f58.jpg',
        'https://pp.vk.me/c401/u16365999/71423923/x_3ea5eb99.jpg',
        'https://pp.vk.me/c1505/u4481869/71423923/x_e34c7847.jpg',
        'https://pp.vk.me/c4119/u5699145/71423923/x_af40b80c.jpg',
        'https://pp.vk.me/c1505/u4481869/71423923/x_44145808.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_b49032e6.jpg',
        'https://pp.vk.me/c1505/u4481869/71423923/x_1024f927.jpg',
        'https://pp.vk.me/c1671/u11408787/71425457/x_b7a1b60c.jpg',
        'https://pp.vk.me/c400/u11408787/71425777/x_735cd5e3.jpg',
        'https://pp.vk.me/c717/u13236350/71425777/x_6d5c69a8.jpg',
        'https://pp.vk.me/c157/v157787/ba/V1NYiEKosuw.jpg',
        'https://cs7059.vk.me/c7008/v7008249/a299/nZE5fr-zFDY.jpg',
        'https://pp.vk.me/c412120/v412120157/53a1/Sr8ZThtEEYk.jpg',
        'https://cs7059.vk.me/c7005/v7005097/1cd5f/bkKadln22vY.jpg',
        'https://pp.vk.me/c10989/u17385985/97562090/x_0ced0861.jpg',
        'https://pp.vk.me/c10222/u132141347/97562090/x_4b5958fc.jpg',
        'https://pp.vk.me/c464/u1954820/71423923/x_4140e0ca.jpg',
        'https://pp.vk.me/c1505/u4481869/71423923/x_4f337859.jpg',
        'https://pp.vk.me/c717/u13236350/71425777/x_14d8b952.jpg',
        'https://pp.vk.me/c400/u11408787/71425467/x_bffb2410.jpg',
        'https://pp.vk.me/c1367/u3889520/71433913/x_9a8b4bfe.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_f39de78f.jpg',
        'https://pp.vk.me/c643/u16296233/92131219/x_035ab732.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_2519f9c6.jpg',
        'https://pp.vk.me/c273/v273830/2c/lkp2g2tp3UI.jpg',
        'https://pp.vk.me/c1831/u4487438/71433913/x_49241148.jpg',
        'https://pp.vk.me/c1671/u11408787/71425467/x_32e63b25.jpg',
        'https://pp.vk.me/c1671/u11408787/71425467/x_bee3a0d6.jpg',
        'https://pp.vk.me/c4174/u20378710/71425467/x_8e2a1015.jpg',
        'https://pp.vk.me/c462/u20446022/71425457/x_5d6f6ae0.jpg',
        'https://pp.vk.me/c1936/u11408787/92131219/x_c64cbd48.jpg',
        'https://pp.vk.me/c643/u16296233/92131219/x_dab8a13a.jpg',
        'https://pp.vk.me/c4302/u1746726/92131219/x_06d70656.jpg',
        'https://pp.vk.me/c1871/u3791272/97562090/x_99325031.jpg',
        'https://pp.vk.me/c1872/u3791272/97562090/x_a8918ee8.jpg',
        'https://pp.vk.me/c400/u11408787/71425467/x_fd85dfb8.jpg',
        'https://pp.vk.me/c4174/u20378710/71425467/x_d6f677a2.jpg',
        'https://pp.vk.me/c9932/u8371067/97562090/x_987255a4.jpg',
        'https://pp.vk.me/c9932/u8371067/97562090/x_d07ab506.jpg',
        'https://pp.vk.me/c10501/u12926385/97562090/x_3b943ff8.jpg',
        'https://pp.vk.me/c10648/u1085318/97562090/x_76c6569e.jpg',
        'https://cs7059.vk.me/c540106/v540106953/11f3/U7ZwNrti_Nc.jpg',
        'https://pp.vk.me/c4437/u12926385/97562090/y_26785868.jpg',
        'https://pp.vk.me/c10963/u1588508/97562090/y_0f378204.jpg',
        'https://pp.vk.me/c157/v157787/87/WUT2q8Uewxc.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_35f03865.jpg',
        'https://pp.vk.me/c421729/v421729659/18e3/fkJSex3TNHM.jpg',
        'https://pp.vk.me/c4119/u5699145/71423923/x_6572df81.jpg',
        'https://pp.vk.me/c242/v242736/57/02z62v29WCg.jpg',
        'https://pp.vk.me/c1619/u5807588/71433913/x_60b53e1d.jpg',
        'https://pp.vk.me/c717/u13236350/71425777/x_44172c92.jpg',
        'https://pp.vk.me/c421729/v421729659/1903/McXcde_uiEg.jpg',
        'https://pp.vk.me/c421729/v421729659/18e3/fkJSex3TNHM.jpg',
        'https://pp.vk.me/c717/u13236350/71425777/x_73c1b244.jpg',
        'https://pp.vk.me/c1505/u4481869/71423923/x_ce446181.jpg',
        'https://pp.vk.me/c4119/u5699145/71423923/x_17897b33.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_bc8abf55.jpg',
        'https://pp.vk.me/c1505/u4481869/71425777/x_c077928e.jpg',
        'https://pp.vk.me/c242/v242736/51/FvtgGK331gQ.jpg',
        'https://pp.vk.me/c584/u7782321/71433913/x_a03404b7.jpg',
        'https://pp.vk.me/c4119/u5699145/71423923/x_024e10a4.jpg',
        'https://pp.vk.me/c5524/u18139659/71428145/x_9e906067.jpg',
        'https://pp.vk.me/c400/u11408787/71428145/x_5b488f90.jpg',
        'https://pp.vk.me/c5524/u18139659/71428145/y_300b80d6.jpg',
        'https://pp.vk.me/c5957/u18139659/71428145/z_451765e0.jpg',
        'https://pp.vk.me/c717/u13236350/71425777/x_e86d4101.jpg',
        'https://pp.vk.me/c1671/u11408787/71428145/x_d960ea03.jpg',
        'https://pp.vk.me/c464/u1954820/71423923/x_91a19067.jpg',
        'https://pp.vk.me/c1505/u4481869/71423923/x_fdb9464f.jpg',
        'https://pp.vk.me/c5524/u18139659/71428145/x_b790948f.jpg',
        'https://pp.vk.me/c1671/u11408787/71425467/x_27debce2.jpg',
        'https://pp.vk.me/c9870/u6458006/97562090/x_1b277d5a.jpg',
        'https://pp.vk.me/c9928/u72452893/97562090/y_40dfcc92.jpg',
        'https://pp.vk.me/c9261/u44254674/97562090/y_c8b3e2bd.jpg',
        'https://pp.vk.me/c10963/u1588508/97562090/z_98a17ce2.jpg',
        'https://cs7059.vk.me/c7008/v7008249/a2ab/by5kmdmaCJk.jpg',
        'https://pp.vk.me/c9928/u72452893/97562090/y_ce08d311.jpg',
        'https://pp.vk.me/c1367/u3889520/71433913/x_e18ad6e6.jpg',
        'https://pp.vk.me/c4124/u4336138/71425457/x_556bf70b.jpg',
        'https://pp.vk.me/c5723/u172003/97562090/x_d5082c4f.jpg'
      ],
      //iNikolayevImgs: ['http://www.livestory.com.ua/images/igor_nikolaev_2.jpg', 'http://kto-zhena.ru/wp-content/uploads/2014/07/RIA-684655-Originalc.jpg', 'http://www.golos.md/wp-content/uploads/2014/11/maxresdefault3.jpg', 'http://www.newsmusic.ru/uploads/i/n/inikolaev.jpg', 'http://myslo.ru/Content/OldNews/art_images/874/dg_005.jpg', 'http://img.zaycev.fm/photos/000/318/707/original/igor-nikolaev.jpg', 'http://www.mega-stars.ru/img/starsnews/pictures/2013.11.08-belij_royal_i_bassejn_na_chetvyortom_etazhe..jpg', 'http://www.kleo.ru/items/planetarium/img/img_7466_23171325.jpg', 'http://donbass.ua/multimedia/images/news/original/2012/10/05/nikolaev_dtp.jpg', 'http://mp3lemon.net/image/img_artist/17131_bYJZR8kz8E.jpg', 'http://minusovochka.com/css/site/images/nikolaev.jpg', 'http://s019.radikal.ru/i622/1302/00/9c40bac9dea9.jpg', 'http://www.telesem.ru/images/stories/784/hope.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/55/RIAN_archive_876389_%22Flowers_from_a_Star%22_holiday_event.jpg', 'http://s5.pikabu.ru/images/big_size_comm/2014-12_2/14178893096531.jpg', 'http://hochu.ua/images/articles/46526_89067.jpg', 'http://newsofstars.ru/wp-content/uploads/2012/10/niqolaev.jpg', 'http://infinitiv.ru/assets/images/artists/nikolaev/artist/nikolaev-artist_b.jpg', 'http://www.kleo.ru/img/items/nikolaev_igor.jpg', 'http://img.ntv.ru/home/news/20131121/nikolaev.jpg', 'http://fan-club-alla.ru/wp-content/uploads/2010/10/8c94853892f7.jpg', 'http://cv01.twirpx.net/0693/0693083.jpg', 'http://t1.moskva.fm/uimg/artists/source/b5/b59a7678469b73a6ad85204e730d123f.jpeg', 'http://debonton.ru/images/stories/m34/z99.jpg', 'http://www.dni.ru/binaries/v2_articlepic/187075.jpg', 'http://www.buro247.ru/local/images/buro/img_8259_jpg_1319406637.jpg', 'http://i.ytimg.com/vi/uVnxHRalzvE/maxresdefault.jpg', 'http://i.ytimg.com/vi/oM5J4v0wFUI/maxresdefault.jpg', 'http://0.avatars.yandex.net/get-music-content/3eee6aa1.p.167031/m1000x1000', 'http://2.avatars.yandex.net/get-music-content/09e5b468.a.62959-1/m1000x1000', 'http://president-hotel.by/guests_book/book/Nikolaev.jpg', 'http://i.imgur.com/gBReaAT.jpg', 'http://i.imgur.com/3drDnRt.jpg', 'http://i.imgur.com/xQ3UC5q.jpg'],
      //Handles all images on page with an interval of time
      handleImages: function(lstImgs, time) {
        var siteImages = document.getElementsByTagName('img');
        var siteImagesCount = siteImages.length;
        for (var i = 0; i < siteImagesCount; i++) {
          var currentImg = siteImages[i];
          var currentSrc = currentImg.src;
          self.replaceImages(lstImgs, currentImg, currentSrc);
        }
        // Keep replacing
        if (time > 0) {
          setTimeout(function() {
            self.handleImages(lstImgs, time);
          }, time);
        }
      },
      replaceImages: function(lstImgs, currentImg, currentSrc) {
        // Skip if image is already replaced
        if (lstImgs.indexOf(currentSrc) == -1) {
          var imageHeight = currentImg.clientHeight;
          var imageWidth = currentImg.clientWidth;
          // If image loaded
          if (imageHeight > 0 && imageWidth > 0) {
            self.handleImg(currentImg, lstImgs);
          }
        } else {
          // Replace image when loaded
          currentImg.onload = function() {
            if (lstImgs.indexOf(currentSrc) == -1) {
              self.handleImg(currentImg, lstImgs);
            }
          };
        }
      },
      //Replace one image
      handleImg: function(item, lstImgs) {
        item.onerror = function() {
          self.handleBrokenImg(item, lstImgs);
        };
        self.setRandomImg(item, lstImgs);
      },
      //Set a random image from lstImgs to item 
      setRandomImg: function(item, lstImgs) {
        var imageWidth = item.clientWidth;
        var imageHeight = item.clientHeight;
        item.style.width = imageWidth + 'px';
        item.style.height = imageHeight + 'px';
        item.src = lstImgs[Math.floor(Math.random() * lstImgs.length)];
      },
      //Removed broken image from lstImgs, run handleImg on item
      handleBrokenImg: function(item, lstImgs) {
        var brokenImage = item.src;
        var index = lstImgs.indexOf(brokenImage);
        if (index > -1) {
          lstImgs.splice(index, 1);
        }
        _gaq.push(['_trackEvent', brokenImage, 'broken-image']);
        self.setRandomImg(item, lstImgs);
      }
    };
    // Start when page is load
    document.addEventListener('DOMContentLoaded', self.handleImages(self.iNikolayevImgs, 3000));
    // end iNikolayev
  }
});
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-15665299-28']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();