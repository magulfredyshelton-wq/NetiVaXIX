/* Shared NETIVAXIS header and footer. Every page uses the same shell. */
(() => {
  const page = document.body.dataset.page || "home";

  const header = `
    <header class="site-header" id="siteHeader">
      <a class="brand-lockup" href="index.html" aria-label="NETIVAXIS — início">
        <img class="brand-symbol" src="assets/logo-symbol.svg" alt="" />
        <img class="brand-wordmark" src="assets/logo-wordmark.svg" alt="NETIVAXIS" />
      </a>
      <nav class="site-nav" aria-label="Navegação principal">
        <a data-page-link="about" href="sobre-nos.html" data-i18n="nav.about">Sobre Nós</a>
        <a data-page-link="services" href="servicos.html" data-i18n="nav.services">Nossos Serviços</a>
        <a data-page-link="contact" href="contacto.html" data-i18n="nav.contact">Contacto</a>
      </nav>
      <div class="header-tools">
        <div class="language-picker">
          <button class="language-trigger" id="languageTrigger" type="button" aria-expanded="false" aria-controls="languageMenu">
            <span id="languageLabel">PT</span><i data-lucide="chevron-down" aria-hidden="true"></i>
          </button>
          <div class="language-menu" id="languageMenu" hidden>
            <button type="button" data-language="pt">Português <span>PT</span></button>
            <button type="button" data-language="en">English <span>EN</span></button>
          </div>
        </div>
        <button class="mobile-menu" id="mobileMenu" type="button" aria-expanded="false" aria-controls="mobileNav">
          <i data-lucide="menu" aria-hidden="true"></i><span class="sr-only">Abrir menu</span>
        </button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobileNav" hidden aria-label="Navegação móvel">
      <a href="sobre-nos.html" data-i18n="nav.about">Sobre Nós</a>
      <a href="servicos.html" data-i18n="nav.services">Nossos Serviços</a>
      <a href="contacto.html" data-i18n="nav.contact">Contacto</a>
      <div class="mobile-lang" role="group" aria-label="Idioma / Language">
        <button type="button" data-language="pt">PT</button>
        <button type="button" data-language="en">EN</button>
      </div>
    </nav>`;

  const footer = `
    <footer class="site-footer">
      <div class="footer-frame">
        <div class="footer-top">
          <div class="footer-address">
            <a class="brand-lockup brand-lockup-footer" href="index.html" aria-label="NETIVAXIS — início">
              <img class="brand-symbol" src="assets/logo-symbol.svg" alt="" />
              <img class="brand-wordmark" src="assets/logo-wordmark.svg" alt="NETIVAXIS" />
            </a>
            <p>(+258) 88 888 8888<br />Av. Joaquim Chissano, nº 1234 R/c<br />Maputo, Moçambique</p>
          </div>
          <div class="footer-column"><h3 data-i18n="footer.about">Quem somos?</h3><a href="sobre-nos.html" data-i18n="footer.values">Visão, missão e valores</a><a href="sobre-nos.html#trabalhos" data-i18n="footer.work">Trabalhos realizados</a></div>
          <div class="footer-column"><h3 data-i18n="footer.services">Nossos serviços</h3><a href="desenvolvimento-negocio.html" data-i18n="services.business.titlePlain">Desenvolvimento de negócio</a><a href="house-management.html" data-i18n="services.house.titlePlain">House Management</a><a href="turismo.html" data-i18n="services.tourism.title">Turismo</a></div>
          <div class="footer-column"><h3 data-i18n="footer.contact">Contacto</h3><a href="contacto.html" data-i18n="footer.talk">Entre em contacto</a><a href="mailto:geral@netivaxis.co.mz">geral@netivaxis.co.mz</a></div>
          <div class="southern-network" id="southernNetwork"></div>
        </div>
        <div class="footer-bottom"><span>© 2026 NETIVAXIS</span><a href="index.html" data-i18n="footer.back">Voltar ao início</a></div>
      </div>
    </footer>`;


  /* ------------------------------------------------------------------
     Rede do Sul de África — mapa real (Natural Earth, domínio público),
     com cidades ligadas a partir de Maputo. Para mudar as ligações edite
     só LINKS (e CITY_COUNTRY/LABELS se acrescentar cidades).
     ------------------------------------------------------------------ */
  const SA = {"w":1000,"h":796,"countries":[{"id":"ZWE","hl":1,"k":"c.zw","d":"M524.4 455.8L515.7 453L504.9 453.9L486.2 449.4L479.2 450.6L471.6 446.2L471.2 440.6L447.4 434.5L439.3 422.3L440 408.9L430.1 407.6L427.7 398.2L416 392.9L404 384.1L398.6 369L382.2 344.8L382.6 340.4L391.5 341.1L399.9 344.8L407.8 343.8L418.4 346.6L424 344.5L445.5 317.9L465 308.8L468.5 295.2L477.4 289.9L487.8 286.6L503.4 286.5L504.4 295.3L523.2 296.1L529.2 300L533.8 300.8L539.8 306.2L546.9 306.7L563.5 313.3L561.8 317.6L564 326.8L564.5 354.5L562 363.8L558.2 366.3L557.6 369.1L561.2 373.2L559.5 380.3L564.9 392.5L564.5 395.2L557 408.5L552.8 412.1L552.4 419.4L549.5 424.1L551.3 428.1L527.8 453.2L524.4 455.8Z","lx":492,"ly":370},{"id":"ZMB","hl":1,"k":"c.zm","d":"M503.4 286.5L482.1 287.9L468.5 295.2L466.7 306.1L465 308.8L445.5 317.9L424 344.5L418.4 346.6L407.8 343.8L396.8 344.3L391.5 341.1L382.6 340.4L376.5 334.7L370.2 333.5L359.4 332.6L338.4 336.5L309.4 310.4L306.8 302L305.4 294.4L305.4 220.4L352.1 220.1L350.2 215.3L352.7 205.9L352.3 186.2L354 180.4L352.2 167.1L361.5 173.5L361.8 180.7L365.1 181.2L383.3 175.6L384.7 185.9L388.5 189.1L400.6 192.6L419.4 194.4L422.3 192.8L424.6 185.7L427.3 184.8L437 201L456.8 208.3L460 216.2L464.2 218.5L470.9 229.6L475.3 230.3L483.6 226.6L485.9 230.7L488.8 231.3L489.3 199.2L482.5 201L482 205.8L472.1 204L458.4 190.6L456.1 184.5L455.5 182.4L462.2 159L461.3 137.2L456.5 125.8L467.5 114.8L469 109.9L468.2 107.3L511.8 100L518.4 110.1L528.2 111.5L533.5 117.9L538.5 118.2L539.8 121.5L551.4 124.1L562.8 130.4L564.6 135.8L569.3 135.9L573 141.8L572 146.2L577.2 151.1L580.2 160L570.9 167.6L573.6 174.2L570.2 180.7L571.9 187.6L570.6 198.1L572.7 203L576.8 204L574.1 207.6L565.2 211.1L563.4 215.4L564.7 217.8L563.9 226L561.2 231.8L557 235.1L564.5 245.9L568.2 243.9L569.5 245.7L499.6 270.2L503.4 286.5Z","lx":405,"ly":263},{"id":"TZA","hl":0,"k":"","d":"M585.6 137L539.8 121.5L528.2 111.5L515.1 107L499.1 71.1L487.3 60.5L483.3 52.9L481.9 45.7L484.9 38.1L478.2 17.5L480.1 6.2L487.5 6.4L495.2 0L694.8 0L711.1 12.3L701.3 46.8L702.9 53.4L718.7 70.7L712.7 83.1L712.6 89.8L716 90.5L716.3 95.4L713 106.3L721 125L722.9 145.2L740.3 156.9L729.1 165.8L693.9 180.6L680.5 177.6L675.9 184.8L667.6 188.1L658.3 184.5L642.5 188L633.2 181.7L625 185.4L610.8 184.7L602.5 172.3L601.6 151.3L595.8 138.5L588.1 132.6L585.6 137Z","lx":635,"ly":76},{"id":"SWZ","hl":1,"k":"c.sz","d":"M526.6 539.4L542.6 546.3L543.8 566.9L541.1 566.3L540.2 578.6L528.7 578.3L519.1 573.7L514.9 565.7L512.8 565L512.7 557.3L519.7 545.4L526.6 539.4Z","lx":528,"ly":559},{"id":"ZAF","hl":1,"k":"c.za","d":"M473.6 451L486.2 449.4L498.6 453L515.7 453L524.4 455.8L530.5 482.8L536.5 493.1L540.4 505.2L540 544.8L538.2 545.4L527.4 539.5L522.5 541.9L513 556.2L513.1 565.5L514.9 565.7L519.1 573.7L524.1 576.9L535.1 578.7L540.2 578.6L541.1 566.3L562 567.1L553.8 600.9L550 608.4L541.8 617L536 619.4L525.5 630.4L500.9 670.3L467.2 703.5L443.8 722.5L425.4 734.2L414.4 738.9L410.1 740.2L395.4 739.6L391.8 742.4L391.5 746.5L390 747.1L376.5 745.5L372.4 750.4L367 750.5L345.8 746L335.7 748.2L318.9 746.4L311.7 747.9L300.9 755.5L282.1 755.4L271.3 757.8L259.3 765.9L250.2 765L242.3 761.6L243.1 758.5L237.6 754.9L231.3 755.3L230.8 748.9L229.5 748.2L223.5 748.9L222.6 754.9L219.6 748L220.1 744.7L222.7 743.4L222 739.1L217.9 731.7L211.6 725L208.3 716.8L210.9 713.8L212.6 715.5L214.7 714.9L219.4 708.7L216.7 689.6L196.4 657.2L187.1 631.1L175.2 611.4L182.5 607.3L185.3 599.1L189.6 596.7L196.7 602.7L196.4 608.5L198.8 613.4L214.2 617.8L241.1 618.5L241.7 615.4L248 610.3L258.4 607.2L258.4 515.2L269 524.5L277.5 543.7L278 550L273.6 557L274.9 566.5L298.7 566.9L300.9 563.6L308 560.4L311 555.6L319.9 549.2L326.6 532.3L330.8 528.6L338.6 528.1L350.4 535.9L370.5 541.3L386.9 538.7L390.2 536L397.9 514.5L409.3 511.1L419.6 501.8L423.2 488.4L425.5 485.2L441.4 475.7L452 463.1L466.8 457.7L473.6 451ZM468.3 647L472.9 644L473.9 638.5L477.5 635.2L479.8 627.7L477.7 623.2L461.8 610.5L440.8 619.5L430.5 634L424.9 636.6L432.7 653.9L441.2 661L448.4 661.8L456.3 649.7L468.3 647Z","lx":338,"ly":653},{"id":"NAM","hl":1,"k":"c.na","d":"M292.2 345.6L359.4 332.6L370.2 333.5L376.5 334.7L382.6 340.4L374.3 341.1L365.4 346.9L361.4 345L358.7 346.1L343.5 357.1L334.6 345.5L281.7 353.5L281.7 445.7L258.3 445.7L258.4 607.2L248 610.3L239.1 619.4L231.5 617.7L214.2 617.8L198.8 613.4L196.4 608.5L196.7 602.7L189.6 596.7L185.3 599.1L182.5 607.3L175.2 611.4L158.1 595.1L147.9 577.8L144.3 565.6L144.4 558.6L140.4 553.8L137.5 539L137.3 521.7L129.4 500.8L128.8 477.8L127.1 469.9L128 467.8L129.3 468.8L129.9 465.9L128.5 456.9L104.7 418.6L98.1 400.2L81.4 368.8L71.6 357.3L65.3 345.6L64.5 326.7L70.9 324.7L83.5 325.8L96.5 319.7L105.3 321.5L118.1 330.7L221.1 330.5L228.7 338.1L234.2 340.6L268.1 342.7L276.4 346L285 344.4L292.2 345.6Z","lx":190,"ly":410},{"id":"MOZ","hl":1,"k":"c.mz","d":"M524.4 455.8L551.3 428.1L549.5 424.1L552.4 419.4L552.8 412.1L557 408.5L564.5 395.2L564.9 392.5L559.5 380.3L561.2 373.2L557.6 369.1L558.2 366.3L562 363.8L564.5 354.5L564 326.8L561.8 317.6L563.5 313.3L546.9 306.7L539.8 306.2L533.8 300.8L529.2 300L523.2 296.1L503.8 294.9L503.1 283.1L499.6 270.2L569.5 245.7L579.7 259.6L597.1 256L600.1 260.4L601.3 274L601 277.9L594.1 292.6L597.7 297.5L598 301.6L613.6 316.3L613.3 322.5L618.2 323.5L618.4 315.7L615.7 309.5L620.2 299.5L629.5 296.9L632.8 267.7L631.7 262.2L617.6 242.8L609.6 234.2L603.8 232.5L601.5 229.4L596.7 199.4L602.8 185.8L625 185.4L630.2 181.6L633.2 181.7L642.5 188L651.1 187.4L658.3 184.5L667.6 188.1L675.9 184.8L680.5 177.6L686.5 177.2L693.9 180.6L701.1 176L713.4 173.3L729.1 165.8L740.3 156.9L743.8 161.8L740.9 164.4L743.5 166L738.9 178.6L741.9 195.4L740.9 207.6L743.1 211.2L742.4 216L739.7 219.9L742.8 220L743.4 248.5L746.2 250.8L744.6 258.9L747.6 255.9L749.3 263.4L743.9 273.3L744.7 277L742.6 282.3L732 294.9L729 301.1L724.5 302.8L725.8 306.4L711.6 315.3L707.9 319.8L685.8 326.6L670.9 334.8L657.4 345.4L644.8 364.8L643 365.4L641.5 363.6L640.8 367.1L638.2 366.6L631.9 370.4L610.5 390.9L603.5 388.1L606 391.2L604.8 407.5L611.3 415.8L614.8 430.6L618.1 437L619.2 455.6L620.8 457.1L622.5 448.6L624.2 451.9L623.3 462.2L625.3 469.8L620.5 490.7L624.5 491.4L623.3 497.4L617.8 506.6L611.6 512.1L572.9 527.4L559.8 537L555.1 546L561.1 552.6L563.6 548L562 567.1L543.8 566.9L542.6 546.3L540 544.8L539.3 540.2L540.8 536.6L540.8 507.3L536.5 493.1L530.1 481.4L524.4 455.8Z","lx":686,"ly":245},{"id":"MWI","hl":1,"k":"c.mw","d":"M568.2 243.9L564.5 245.9L557 235.1L561.2 231.8L563.9 226L564.7 217.8L563.4 215.4L565.2 211.1L574.1 207.6L576.8 204L572.7 203L570.6 198.1L571.9 187.6L570.2 180.7L573.6 174.2L570.9 167.6L575.6 164.8L580.3 159.1L577.2 151.1L572 146.2L573 141.8L569.3 135.9L564.6 135.8L562.8 130.4L564.1 130.1L574.6 135.4L581.1 135.2L585.6 137L587.1 136.7L588.1 132.6L595.8 138.5L600.6 146L603.8 163L602.5 172.3L606.4 178.8L609.2 180.1L610.8 184.7L602.8 185.8L596.7 199.4L601.5 229.4L603.8 232.5L609.6 234.2L617.6 242.8L631.7 262.2L632.8 267.7L629.5 296.9L620.2 299.5L615.7 309.5L618.4 315.7L618.2 323.5L613.3 322.5L613.6 316.3L598 301.6L597.7 297.5L594.1 292.6L601 277.9L600.1 260.4L596.1 255.6L579.7 259.6L568.2 243.9Z","lx":582,"ly":228},{"id":"MDG","hl":0,"k":"","d":"M946 197.3L963.2 222.2L966.4 234.8L970.2 263.7L976.1 280.1L974.2 286.2L969.1 294.4L962.2 281.9L956.8 283.5L960.9 307.6L959.2 315.9L951.7 326.5L952.4 343L949.7 354L898.3 515.5L887.7 524.6L874.3 526.6L859 534.9L849.8 534.4L824.4 520.7L815.8 503.3L817 484L806.2 455.3L811.8 429.6L818.8 425.2L833.1 393.7L834.1 381.3L824.5 352.8L823 330.3L833.4 313.1L834.7 300.9L844.9 299.8L852.3 294.2L861.1 295.3L863.5 290.8L874.3 288.9L880 293.6L878.4 288.3L881.8 283.3L892.8 275.9L896.5 281.3L896.3 274.2L902.4 264.6L905.1 263.2L905.4 270.7L912.3 261.3L916.8 262.2L912.3 254.6L917.5 244.4L915.2 238.6L918.6 235.3L923.7 238.4L936.4 227L939.3 216.3L936.1 207.1L946 197.3Z","lx":887,"ly":357},{"id":"LSO","hl":1,"k":"c.ls","d":"M462.3 649.2L456.3 649.7L448.4 661.8L441.2 661L432.7 653.9L424.9 636.6L430.5 634L440.8 619.5L461.8 610.5L477.7 623.2L479.8 627.7L477.5 635.2L473.9 638.5L472.9 644L462.3 649.2Z","lx":456,"ly":633},{"id":"COD","hl":0,"k":"","d":"M511.8 100L468.2 107.3L467.5 114.8L456.5 125.8L461.9 141L462.1 162L455.5 182.4L458.4 190.6L472.1 204L482 205.8L482.5 201L489.3 199.2L488.8 231.3L483.6 226.6L473.2 230.2L460 216.2L456.8 208.3L436.1 200.2L427.3 184.8L419.4 194.4L400.6 192.6L384.7 185.9L383.3 175.6L361.8 180.7L361.5 173.5L352.2 167.1L349 170.6L319.1 171.7L312.4 175.1L310.1 167.6L313.1 162.5L312.3 151.7L301.5 131.9L303.7 112.5L300.7 78L273.1 77.1L272.7 68.1L255.9 69.8L247.7 73.7L243.3 94.3L225 93.5L201.9 97.6L187.9 76.6L181.1 49.2L174.9 42.6L94.2 41L82.7 45.2L75.6 39L82.4 37.5L81.2 21.8L96.2 10.1L103.9 16L109.6 13.1L111 6.4L116.3 7.1L126.1 2.5L127.3 15.8L134.3 17.1L151.7 0L479 0L478.2 17.5L484.9 38.1L481.9 45.7L483.3 52.9L501.5 75.2L511.8 100Z","lx":383,"ly":88},{"id":"COG","hl":0,"k":"","d":"M150.5 1.1L134.3 17.1L127.3 15.8L126.1 2.5L116.3 7.1L111 6.4L109.6 13.1L103.9 16L89.4 5.8L79.6 10.5L71 20.1L56.3 0L150.5 1.1Z","lx":73,"ly":9},{"id":"BWA","hl":1,"k":"c.bw","d":"M381.6 340.2L383.1 346.6L398.6 369L404 384.1L416 392.9L427.7 398.2L430.1 407.6L439.5 408.2L439.3 422.3L447.4 434.5L471.2 440.6L471.6 446.2L479.2 450.6L473.6 451L466.8 457.7L452 463.1L441.4 475.7L425.5 485.2L423.2 488.4L419.6 501.8L409.3 511.1L397.9 514.5L390.2 536L386.9 538.7L370.5 541.3L360.7 539.4L357.5 536.7L350.4 535.9L338.6 528.1L332.9 528L326.6 532.3L319.9 549.2L311 555.6L308 560.4L300.9 563.6L298.7 566.9L274.9 566.5L273.6 557L278 550L277.5 543.7L269 524.5L258.4 515.2L258.3 445.7L281.7 445.7L281.7 353.5L334.6 345.5L343.5 357.1L361.4 345L365.4 346.9L374.3 341.1L381.6 340.2Z","lx":358,"ly":447},{"id":"AGO","hl":1,"k":"c.ao","d":"M95.5 11.3L90.1 13.4L81.2 21.8L82.9 23.8L82.4 37.5L75.6 39L74.2 35.9L74.8 28.2L71 20.1L75.4 14.5L77.8 14.2L79.6 10.5L89.4 5.8L95.5 11.3ZM352.2 167.1L354 180.4L352.3 186.2L352.9 204.1L350.2 215.3L352.1 220.1L305.4 220.4L305.4 294.4L306.8 302L309.4 310.4L338.4 336.5L292.2 345.6L285 344.4L276.4 346L268.1 342.7L234.2 340.6L228.7 338.1L221.1 330.5L118.1 330.7L105.3 321.5L96.5 319.7L83.5 325.8L70.9 324.7L64.5 326.7L66.3 313.1L64.7 291.3L71 283.3L83.5 231.3L91.7 221L93.7 214.7L103.9 208.3L108.2 202.5L112.6 190.6L114.1 171.6L111.1 161.1L101.9 145.2L94.1 121.4L95.2 118.2L96.3 117.7L95.4 120.4L102.6 112.4L103 104.4L90.9 75.9L90 69L82.9 59.9L77.7 47.4L98.5 41.5L174.9 42.6L181.1 49.2L182.2 60.6L186.3 68.5L187.9 76.6L201.9 97.6L212 97.8L225 93.5L234 95.2L243.3 94.3L247.7 73.7L255.9 69.8L272.7 68.1L271.4 74.7L273.1 77.1L300.7 78L302.2 80.7L301.2 98L303.4 103.7L303.7 112.5L301.5 131.9L312.3 151.7L313.1 162.5L310.1 167.6L311.2 173.3L313.3 175.2L319.1 171.7L331.2 172.5L340.3 169.5L349 170.6L352.2 167.1Z","lx":206,"ly":224}],"cities":[{"id":"maputo","n":"Maputo","x":554.7,"y":545.0},{"id":"mbabane","n":"Mbabane","x":520.8,"y":553.8},{"id":"joburg","n":"Joanesburgo","x":448.2,"y":551.0},{"id":"maseru","n":"Maseru","x":434.8,"y":628.7},{"id":"gaborone","n":"Gaborone","x":397.9,"y":512.2},{"id":"windhoek","n":"Windhoek","x":190.2,"y":459.7},{"id":"luanda","n":"Luanda","x":99.6,"y":116.2},{"id":"harare","n":"Harare","x":518.9,"y":341.3},{"id":"lusaka","n":"Lusaka","x":453.8,"y":280.1},{"id":"lilongwe","n":"Lilongwe","x":583.2,"y":244.5}]};

  const HUB = "maputo";
  // [origem, destino, lado do arco (opcional: -1 inverte)]
  const LINKS = [
    ["maputo", "mbabane"], ["maputo", "joburg"], ["maputo", "harare"],
    ["maputo", "lilongwe", -1], ["joburg", "maseru"], ["joburg", "gaborone"],
    ["gaborone", "windhoek"], ["windhoek", "luanda"], ["harare", "lusaka"],
    ["lusaka", "luanda"], ["lilongwe", "lusaka"],
  ];
  const CITY_COUNTRY = {
    maputo: "MOZ", mbabane: "SWZ", joburg: "ZAF", maseru: "LSO", gaborone: "BWA",
    windhoek: "NAM", luanda: "AGO", harare: "ZWE", lusaka: "ZMB", lilongwe: "MWI",
  };
  // posição do nome: [dx, dy, âncora]
  const LABELS = {
    maputo: [14, 5, "start"], mbabane: [0, 26, "middle"], joburg: [-12, -10, "end"],
    maseru: [12, 5, "start"], gaborone: [12, -8, "start"], windhoek: [12, 5, "start"],
    luanda: [12, 5, "start"], harare: [12, 5, "start"], lusaka: [-12, 5, "end"],
    lilongwe: [12, -6, "start"],
  };
  const CITY_I18N = { joburg: "city.joburg" };
  const LABELLED_COUNTRIES = ["AGO", "NAM", "BWA", "ZWE", "MOZ", "ZAF"];
  // posição manual do nome do país quando o centro geométrico colide com cidades/ligações
  const COUNTRY_LABEL_POS = { MOZ: [662, 335], ZWE: [492, 392] };

  function buildSouthernNetwork() {
    const host = document.getElementById("southernNetwork");
    if (!host) return;
    const city = Object.fromEntries(SA.cities.map((c) => [c.id, c]));

    // profundidade a partir do hub -> ordem em que as ligações "acendem"
    const depth = { [HUB]: 0 };
    for (let changed = true; changed; ) {
      changed = false;
      LINKS.forEach(([a, b]) => {
        if (depth[a] !== undefined && depth[b] === undefined) { depth[b] = depth[a] + 1; changed = true; }
        if (depth[b] !== undefined && depth[a] === undefined) { depth[a] = depth[b] + 1; changed = true; }
      });
    }

    const edges = LINKS.map(([a, b, sign = 1], i) => {
      const A = city[a], B = city[b];
      const dx = B.x - A.x, dy = B.y - A.y, len = Math.hypot(dx, dy);
      let nx = -dy / len, ny = dx / len;
      if (ny > 0) { nx = -nx; ny = -ny; }
      const k = Math.min(len * 0.22, 60) * sign;
      const cx = (A.x + B.x) / 2 + nx * k, cy = (A.y + B.y) / 2 + ny * k;
      const delay = Math.min(depth[a], depth[b]) * 1.15 + 0.3 + i * 0.07;
      return { id: "net-edge-" + i, a, b, d: `M${A.x} ${A.y}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${B.x} ${B.y}`,
               len, delay, alt: i % 4 === 3 };
    });

    // quando é que cada cidade/país é "alcançado"
    const reached = { [HUB]: 0 };
    edges.forEach((e) => {
      [e.a, e.b].forEach((id) => {
        const t = e.delay + 1.0;
        if (reached[id] === undefined || t < reached[id]) reached[id] = t;
      });
    });
    reached[HUB] = 0;
    const countryDelay = {};
    Object.entries(CITY_COUNTRY).forEach(([id, iso]) => (countryDelay[iso] = reached[id] ?? 0));

    const countries = SA.countries.map((c) => {
      const style = c.hl ? ` style="--d:${(countryDelay[c.id] ?? 0).toFixed(2)}s"` : "";
      return `<path class="sa-country${c.hl ? " hl" : ""}"${style} d="${c.d}"/>`;
    }).join("");

    const countryLabels = SA.countries
      .filter((c) => LABELLED_COUNTRIES.includes(c.id))
      .map((c) => {
        const [x, y] = COUNTRY_LABEL_POS[c.id] || [c.lx, c.ly];
        return `<text class="sa-country-label" x="${x}" y="${y}" data-i18n="${c.k}">${c.id}</text>`;
      })
      .join("");

    const edgePaths = edges.map((e) =>
      `<path id="${e.id}" class="net-edge${e.alt ? " alt" : ""}" pathLength="1" style="--d:${e.delay.toFixed(2)}s" d="${e.d}"/>`).join("");
    const flowPaths = edges.map((e) =>
      `<path class="net-flow" style="--d:${e.delay.toFixed(2)}s" d="${e.d}"/>`).join("");
    const pulses = edges.map((e, i) => {
      const dur = Math.max(2.4, e.len / 105).toFixed(2);
      const begin = (e.delay + 1.2 + (i % 4) * 0.45).toFixed(2);
      const kp = i % 2 ? ' keyPoints="1;0" keyTimes="0;1" calcMode="linear"' : "";
      return `<g class="net-pulse" style="--d:${e.delay.toFixed(2)}s"><circle cx="0" cy="0"/><circle cx="0" cy="0"/>` +
        `<animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite"${kp}><mpath href="#${e.id}"/></animateMotion></g>`;
    }).join("");

    const nodes = SA.cities.map((c) => {
      const [dx, dy, anchor] = LABELS[c.id] || [12, 5, "start"];
      const i18n = CITY_I18N[c.id] ? ` data-i18n="${CITY_I18N[c.id]}"` : "";
      return `<g class="net-node${c.id === HUB ? " hub" : ""}" style="--d:${(reached[c.id] ?? 0).toFixed(2)}s" transform="translate(${c.x} ${c.y})">` +
        `<circle class="ring" r="9"/><circle class="core" r="4.8"/>` +
        `<text class="net-label" x="${dx}" y="${dy}" text-anchor="${anchor}"${i18n}>${c.n}</text></g>`;
    }).join("");

    const list = SA.cities.map((c) =>
      `<li${c.id === HUB ? ' class="hub"' : ""}><span${CITY_I18N[c.id] ? ` data-i18n="${CITY_I18N[c.id]}"` : ""}>${c.n}</span></li>`).join("");
    const countryCount = new Set(Object.values(CITY_COUNTRY)).size;

    host.innerHTML = `
      <svg class="southern-map" viewBox="0 0 ${SA.w} ${SA.h}" role="img" aria-labelledby="mapTitle mapDesc">
        <title id="mapTitle">Mapa animado do Sul de África</title>
        <desc id="mapDesc">Ligações a partir de Maputo para cidades de Moçambique, África do Sul, Eswatini, Lesoto, Botswana, Namíbia, Angola, Zimbabwe, Zâmbia e Malawi.</desc>
        <g class="sa-countries">${countries}</g>
        <g class="net-edges">${edgePaths}</g>
        <g class="net-flows">${flowPaths}</g>
        <g class="net-pulses">${pulses}</g>
        <g class="net-nodes">${nodes}</g>
      </svg>`;

    // só arranca (e só gasta CPU) quando o rodapé aparece no ecrã
    const svg = host.querySelector("svg");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const goLive = () => { host.classList.add("is-live"); if (!reduce) svg.unpauseAnimations?.(); };
    svg.pauseAnimations?.();
    if (reduce || !("IntersectionObserver" in window)) {
      goLive();
    } else {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { goLive(); io.disconnect(); }
      }, { threshold: 0.2 });
      io.observe(host);
    }
  }

  document.getElementById("siteHeaderMount").innerHTML = header;
  document.getElementById("siteFooterMount").innerHTML = footer;
  document
    .querySelectorAll("[data-page-link]")
    .forEach((link) =>
      link.classList.toggle("active", link.dataset.pageLink === page),
    );
  buildSouthernNetwork();
})();
