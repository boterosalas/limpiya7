export default `<!DOCTYPE html>
<html lang="en" data-beasties-container="">
  <head>
    <meta charset="utf-8">
    <title>Limpiya7</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <style>@font-face{font-family:'Raleway';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Raleway';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Raleway';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Raleway';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Raleway';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Raleway';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Raleway';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Raleway';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Raleway';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Raleway';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Raleway';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Raleway';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Raleway';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Raleway';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Raleway';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Raleway';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Raleway';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Raleway';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Raleway';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Raleway';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Raleway';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Raleway';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Raleway';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Raleway';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Raleway';font-style:normal;font-weight:800;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Raleway';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Raleway';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Raleway';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Raleway';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Raleway';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet">
  <style>*,*:before,*:after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{margin:0;font-family:Raleway,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#4a4a4a;text-align:left;background-color:#fff}@media print{*,*:before,*:after{text-shadow:none!important;box-shadow:none!important}@page{size:a3}body{min-width:992px!important}}:root{--swiper-theme-color:#007aff}:root{--swiper-navigation-size:44px}</style><link rel="stylesheet" href="styles-CHY24Z2D.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-CHY24Z2D.css"></noscript></head>
  <body ngcm="">
    <app-root></app-root>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
  <link rel="modulepreload" href="chunk-O2EIZ43J.js"><script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-VH24FZIZ.js" type="module"></script></body>
</html>
`;